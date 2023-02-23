import CryptoJS from 'crypto-js';
import {PASSCODE_SECRET_KEY} from '../configs/strings';

export default class CryptoJsHelpers {
  static encryptASE = (passCode: string): string => {
    const key = CryptoJS.enc.Utf8.parse(PASSCODE_SECRET_KEY);
    const iv = CryptoJS.enc.Utf8.parse(PASSCODE_SECRET_KEY);

    const passcodeEncrypt = CryptoJS.AES.encrypt(
      CryptoJS.enc.Utf8.parse(passCode),
      key,
      {
        keySize: 128 / 8,
        iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      },
    );
    const base64 = passcodeEncrypt.toString();
    return base64;
  };

  static decryptASE = (base64Encrypt: string): string => {
    const key = CryptoJS.enc.Utf8.parse(PASSCODE_SECRET_KEY);
    const iv = CryptoJS.enc.Utf8.parse(PASSCODE_SECRET_KEY);
    const decr = CryptoJS.AES.decrypt(base64Encrypt, key, {
      keySize: 128 / 8,
      iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    return decr.toString(CryptoJS.enc.Utf8);
  };
}
