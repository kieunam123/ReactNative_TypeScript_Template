import {
  getGenericPassword,
  resetGenericPassword,
  setGenericPassword,
} from 'react-native-keychain';

export const storePassCode = async (username: string, passCode: string) => {
  try {
    await setGenericPassword(username, passCode);
  } catch (er) {
    console.log({er});
  }
};

export const getPassCode = async (): Promise<string> => {
  try {
    const rs = await getGenericPassword();
    if (typeof rs !== 'boolean') {
      return rs.password;
    }
    return '';
  } catch (er) {
    console.log(er);
    return '';
  }
};

export const removePassCodeKeychain = async (): Promise<boolean> => {
  try {
    await resetGenericPassword();
    return true;
  } catch (ex) {
    return false;
  }
};
