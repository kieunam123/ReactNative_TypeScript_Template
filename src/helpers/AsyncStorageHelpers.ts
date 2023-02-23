import AsyncStorage from '@react-native-async-storage/async-storage';
import {IBleDevice} from '../apis/types.service';
import {IUserParams} from '../commons/types';

const BLUETOOTH_DEVICES = 'BLUETOOTH_DEVICES';
const USER_INFO = 'USER_INFO';
const ACCESS_TOKEN = 'ACCESS_TOKEN';

const FCM_TOKEN = 'FCM_TOKEN';

export const getBluetoothDevices = async (): Promise<IBleDevice[]> => {
  const strJson = await AsyncStorage.getItem(BLUETOOTH_DEVICES);
  if (strJson) {
    const devices: IBleDevice[] = JSON.parse(strJson);
    return devices;
  }
  return [];
};

export const storeBluetoothDevice = async (
  device: IBleDevice,
): Promise<void> => {
  const devices: IBleDevice[] = await getBluetoothDevices();
  const index = devices.findIndex((p) => p.deviceId === device.deviceId);
  if (index > -1) {
    devices[index] = device;
  } else {
    devices.push(device);
  }
  const strJson = JSON.stringify(devices);
  await AsyncStorage.setItem(BLUETOOTH_DEVICES, strJson);
};

/**
 *
 * @param deviceId
 * @returns list of devices after remove
 */
export const remoteBluetoothDevice = async (
  deviceId: string,
): Promise<IBleDevice[]> => {
  const devices = await getBluetoothDevices();
  const index = devices.findIndex((p) => p.deviceId === deviceId);
  if (index > -1) {
    devices.splice(index, 1);
  }
  await AsyncStorage.setItem(BLUETOOTH_DEVICES, JSON.stringify(devices));
  return devices;
};

export const storeUserInfoAsyncStorage = async (
  email: string,
  fullName: string,
): Promise<boolean> => {
  try {
    const userId = email.replace('@japfa.com', '');
    const strJson = JSON.stringify({email, fullName, userId});
    await AsyncStorage.setItem(USER_INFO, strJson);
    return true;
  } catch (er) {
    return false;
  }
};

export const removeAllBluetoothAsyncStore = async (): Promise<boolean> => {
  try {
    AsyncStorage.removeItem(BLUETOOTH_DEVICES).then(() => true);
    return true;
  } catch (ex) {
    console.log({ex});
    return false;
  }
};

export const getUserInfoAsyncStorage = async (): Promise<
  IUserParams | undefined
> => {
  try {
    const strJson = await AsyncStorage.getItem(USER_INFO);
    if (strJson) {
      const user: IUserParams = JSON.parse(strJson);
      return user;
    }
    return undefined;
  } catch (ex) {
    return undefined;
  }
};

export const removeUserInfoAsyncStorage = async (): Promise<boolean> => {
  try {
    AsyncStorage.removeItem(USER_INFO).then(() => true);
    return true;
  } catch (ex) {
    console.log({ex});
    return false;
  }
};

export const storeAccessToken = async (accessToken: string) => {
  try {
    await AsyncStorage.setItem(ACCESS_TOKEN, accessToken);
  } catch (ex) {}
};

export const getAccessToken = async (): Promise<string | undefined> => {
  try {
    const result = await AsyncStorage.getItem(ACCESS_TOKEN);
    return result ?? undefined;
  } catch (ex) {
    return undefined;
  }
};

export const removeAccessToken = async (): Promise<boolean> => {
  try {
    AsyncStorage.removeItem(ACCESS_TOKEN).then(() => {
      return true;
    });
    return true;
  } catch (ex) {
    return false;
  }
};

/*= ==== BEGIN FCM FIREBase====== */

export const storeFcmToken = async (fcmToken: string): Promise<void> => {
  await AsyncStorage.setItem(FCM_TOKEN, fcmToken);
};

export const getFcmToken = async (): Promise<string | null> => {
  const fcmToken = await AsyncStorage.getItem(FCM_TOKEN);
  return fcmToken;
};

export const deleteFcmToken = async (): Promise<void> => {
  await AsyncStorage.removeItem(ACCESS_TOKEN);
};

/*= ======END FCM ========= */
