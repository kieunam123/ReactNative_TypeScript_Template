// import { Alert } from 'react-native';
// // import RNFetchBlob from 'rn-fetch-blob';
// import {isIos} from './UtilitiesHelper';

export default class IoHelper {

  /**
   * Download data từ server,
   * Tạo pdf file từ base64
   * return: path stored in local.
   * @param url
  
   */
  static getBase64FromServerFile = async (url: string): Promise<string> => {
    if (url === null || url === undefined || url === '')
      throw new Error('url invalid');

    const response = await fetch(url).then((data)=>data.toString().split('"')[1])
    .catch((err)=>{throw new Error(`download file error. status :${err}`)})
    
    console.log(`${response}`);
    
    // if (response.info().status !== 200) {
    //   throw new Error(`download file error. status : ${response.info().status}`)
    // }
    // const base64Data = response.data.split('"')[1];
  
    // return base64Data;
    return response;
  };

  static getUpdateCust2Inv = async (url: string): Promise<string> => {
    if (url === null || url === undefined || url === '')
    throw new Error('url invalid');

    const response = await fetch(url).then((data)=>data.toString().split('"')[1])
    .catch((err)=>{throw new Error(`${err}`)});

    return response;
  }

  /**
   * Download data từ server,
   * Tạo pdf file từ base64
   * return: path stored in local.
   * @param url
   * @param fileName
   */
//   static createPdfFileFromBase64 = async (
//     url: string,
//     fileName: string,
//   ): Promise<string> => {
//     if (url === null || url === undefined || url === '')
//       throw new Error('url invalid');
//     if (fileName === null || fileName === undefined || fileName === '')
//       throw new Error('fileName invalid');
//     const response = await RNFetchBlob.fetch('GET', url);
//     if (response.info().status !== 200) {
//       throw new Error('download file error');
//     }

//     const base64Data = response.data;
//     const {fs} = RNFetchBlob;
//     const date = new Date();
//     const uniqueName = Math.floor(date.getTime() + date.getSeconds() / 2);
//     const filePath = `${
//       isIos() ? fs.dirs.DocumentDir : fs.dirs.DownloadDir
//     }/${uniqueName}-${fileName}`;
//     await fs.createFile(filePath, base64Data, 'base64');
//     return filePath;
//   };

//   static openFdfFile = (filePath: string): void => {
//     if (isIos()) {
//       RNFetchBlob.ios.openDocument(filePath);
//     } else {
//       RNFetchBlob.android.actionViewIntent(filePath, 'application/pdf');
//     }
//   };

//   static fileIsExist = async (filePath: string): Promise<boolean> => {
//     return RNFetchBlob.fs.exists(filePath);
//   };
}
