import {request, RESULTS, PERMISSIONS} from 'react-native-permissions';
import {isIos} from './UtilitiesHelper';

const checkPermission = async (result: string): Promise<boolean> => {
  // const result = await check(PERMISSIONS.IOS.LOCATION_ALWAYS);
  switch (result) {
    case RESULTS.UNAVAILABLE:
      // 'This feature is not available (on this device / in this context)',
      return false;
    case RESULTS.DENIED:
      // 'The permission has not been requested / is denied but requestable'
      return false;
    case RESULTS.LIMITED:
      // 'The permission is limited: some actions are possible'
      return true;
    case RESULTS.GRANTED:
      // 'The permission is granted';
      return true;
    case RESULTS.BLOCKED:
      // 'The permission is denied and not requestable anymore';
      return false;
    default:
      return false;
  }
};

export default class PermissionHelper {
  /**
   * Quyền ghi file
   */
  static requestWriteExternalStorage = async (): Promise<boolean> => {
    try {
      if (isIos()) {
        let result = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
        const isPhotoLib = await checkPermission(result);
        result = await request(PERMISSIONS.IOS.PHOTO_LIBRARY_ADD_ONLY);
        const isAddOnly = await checkPermission(result);
        return isPhotoLib && isAddOnly;
      }
      return checkPermission(
        await request(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE),
      );
    } catch (er) {
      console.error(er);
      return false;
    }
  };

  static requestLocation = async (): Promise<boolean> => {
    const permission = isIos()
      ? PERMISSIONS.IOS.LOCATION_ALWAYS
      : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
    const result = await request(permission);
    return checkPermission(result);
  };
}
