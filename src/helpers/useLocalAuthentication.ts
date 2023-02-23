import * as LocalAuthentication from 'expo-local-authentication';

export interface IBiometric {
  image: string;
  text: string;
}

const useLocalAuthentication = () => {
  const checkDeviceSupportBiometric = async (): Promise<
    IBiometric | undefined
  > => {
    const isEnrolled = await LocalAuthentication.isEnrolledAsync();
    const enrolledLevel = await LocalAuthentication.getEnrolledLevelAsync();
    const supportType =
      await LocalAuthentication.supportedAuthenticationTypesAsync();

    if (enrolledLevel === LocalAuthentication.SecurityLevel.NONE)
      return undefined;

    let text = 'Chứng thực theo thiết bị.';
    let image = 'pinId';

    if (
      enrolledLevel === LocalAuthentication.SecurityLevel.SECRET ||
      !isEnrolled
    )
      return {text, image};

    const item = supportType[0];

    if (item === LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION) {
      text = 'Đăng nhập bằng FaceID.';
      image = 'faceId';
    } else if (item === LocalAuthentication.AuthenticationType.FINGERPRINT) {
      text = 'Đăng nhập bằng vân tay.';
      image = 'fingerId';
    }
    return {text, image};
  };

  const authenticate = async (): Promise<boolean> => {
    const securityLevel = await LocalAuthentication.getEnrolledLevelAsync();
    if (securityLevel === LocalAuthentication.SecurityLevel.NONE) return false;
    const option: LocalAuthentication.LocalAuthenticationOptions = {
      promptMessage: ' ',
      cancelLabel: 'Đóng',
      // true: thì cancel label mới hiển thị.
      // Sau khi hệ thống cố đăng nhập mà không được thì lib sẽ dùng mật mã của hệ thống (trường hợp test thì sẽ mở MSA lên).
      // true để tắt chế độ tự động đi.
      disableDeviceFallback:
        securityLevel !== LocalAuthentication.SecurityLevel.SECRET,
      fallbackLabel: 'thay đổi', // IOS
    };
    const result = await LocalAuthentication.authenticateAsync(option);
    return result.success;
  };

  return {
    checkDeviceSupportBiometric,
    authenticate,
  };
};

export default useLocalAuthentication;
