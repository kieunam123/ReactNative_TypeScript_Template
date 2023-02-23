import {Platform, Dimensions} from 'react-native';
import { ISearchCommon } from '../apis/types.service';
import numeral from 'numeral';

const {width, height} = Dimensions.get('window');

const guidelineBaseWidth = 414;
const guidelineBaseHeight = 896;

const scale = (size: number) => (width / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
const scaleFactor = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export {verticalScale, scaleFactor, scale};

export const isInvalidString = (input?: string): boolean => {
  if (input === null) return true;
  if (input === undefined) return true;
  if (`${input}`.trim() === '') return true;
  return false;
};

export const isInvalidEmail = (input? : string): boolean => {
  if (
    input === 'nam.kieuvuhoai@japfa.com'
    
  ) return true;
  return false;
}

/**
 * Kiểm tra chuổi có hợp lệ không
 * @param input
 * True: hợp lệ, False: không hợp lệ
 */
export const isValidString = (input?: string): boolean => {
  if (input === undefined) return false;
  return !isInvalidString(input);
};

export const numberFormat = (input?: string | number, prefix = 'VNĐ'): string => {
  if (!input) {
    if (!prefix) return `0${prefix}`;
    return `0 ${prefix}`;
  }
  if (prefix) return `${numeral(input).format('0,0')} ${prefix}`;
  return `${numeral(input).format('0,0')}`;
};

export const doubleFormat = (
  input?: number,
  prefix? : string,
  degit?: string,
): string => {
  if (!input) return `0 ${prefix ?? 'VND'}`;
  const strDegit = degit ?? '0,0.0';
  if (isValidString(prefix ?? 'VND'))
    return `${numeral(input).format(strDegit)} ${prefix ?? 'VND'}`;
  return `${numeral(input).format(strDegit)}`;
};

export const formatDouble = (value: number | null | undefined): number => {
  if (!value) return 0;
  return Math.round(value * 100) / 100;
};

export const convertStringToNumber = (input: string): number => {
  return numeral(input).value();
};

export const removeUnicode = (input?: string): string => {
  if (!input) return '';
  const r = input
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace('đ', 'd');
  return r;
};

export const moreThanZero = (number: number | undefined): boolean => {
  if (number === undefined) return false;
  if (number <= 0) return false;
  return true;
};

export const isAndroid = (): boolean => {
  return Platform.OS === 'android';
};

export const isIos = (): boolean => {
  return Platform.OS === 'ios';
};

export const isWeb = (): boolean => {
  return Platform.OS === 'web';
}

export const nameOf = <T>(name: keyof T) => name;

export function convertToLocalObject<T extends ISearchCommon>(
  datasource: Array<T>,
  accessorLabel: string | string[],
  accessorValue: string | string[],
  accessorKeySearch?: string[],
): Array<T> {
  let arrAccessorLabel: string[] = [];
  let arrAccessorKey: string[] = [];

  // Label
  if (typeof accessorLabel === 'string') arrAccessorLabel.push(accessorLabel);
  else {
    arrAccessorLabel = [...accessorLabel];
  }

  // key
  if (typeof accessorValue === 'string') arrAccessorKey.push(accessorValue);
  else arrAccessorKey = [...accessorValue];

  datasource.forEach((item) => {
    const newItem = item;
    let label = '';
    let value = '';

    arrAccessorLabel.forEach((a) => {
      label += newItem[a] ;
    });

    arrAccessorKey.forEach((b) => {
      value += newItem[b];
    });

    newItem.label = label;
    newItem.value = value;
    let keySearch = '';
    if (!accessorKeySearch || accessorKeySearch.length < 1) {
      keySearch = `${value} ${label}`;
    } else {
      for (let i = 0; i < accessorKeySearch.length; i += 1) {
        keySearch += newItem[accessorKeySearch[i]];
      }
    }
    newItem.keySearch = removeUnicode(keySearch);
    return newItem;
  });
  return datasource;
}

export const checkNameOfInterface = <T extends object>(
  p: any,
  name: string,
): p is T => Object.prototype.hasOwnProperty.call(p, name);


export const getDistanceFromUserToFarm = (latUser:number, longUser:number, latFarm:number, longFarm:number):number => {
  const R = 6371 //Radius of the earth in km
  const dLat = deg2rad(latFarm - latUser);
  const dLon = deg2rad(longFarm - longUser);
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) + 
    Math.cos(deg2rad(latUser)) * 
      Math.cos(deg2rad(latFarm)) * 
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  
  return d;
} 

function deg2rad(deg:number) {
  return deg * (Math.PI / 180);
}

// export async function callApiPostWithTokenApiOfKim(endpoint, form_data) {
//   const _token = await userToken();
//   const URL = `${FILE_CONTROL_API}/${endpoint}`;
//   return fetch(URL, {
//     method: 'POST',
//     headers: {
//       // Accept: 'application/json',
//       Authorization: 'Bearer ' + JSON.parse(_token),
//       // 'Content-Type': 'application/json',
//       'Content-Type': 'multipart/form-data',
//     },
//     body: form_data,
//   })
//     .then((res) => res.json())
//     .catch((err) => {});
// }