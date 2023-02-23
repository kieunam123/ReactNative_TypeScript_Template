/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-empty */

import {LogBox, Platform} from 'react-native';
import {IHttpResponseError} from '../commons/types';
import {API_URL} from '../configs/strings';
import {numberFormat} from '../helpers/UtilitiesHelper';

LogBox.ignoreLogs(['Require cycle:']);

interface IHttpResponse<T> extends Response {
  parsedBody?: T;
}

export async function http<T>(request: RequestInfo): Promise<T> {
  const rq: Request = request;
  console.log(`[${rq.method}] ${rq.url}`);
  const timeout = 30000; // 8s;
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  // const response: IHttpResponse<T> = await fetch(request, {
  //   signal: controller.signal,
  // });
  const response: IHttpResponse<T> = await fetch(request);
  clearTimeout(id);
  if (!response.ok) {
    // Handle response not ok here: ex: 400, 401, 500.
    const text = await response.text();
    // const objectError: IHttpResponseError = {
    //   status: response.status,
    //   message: `số tiền :${text}`,
    // };
    if (response.status == 406 && !text.includes("không") && !text.includes("Vui")) {
      const objectError: IHttpResponseError = {
        status: response.status,
        message: `Bạn đồng ý chốt đơn với số tiền : ${numberFormat(text.split('"')[1], 'VNĐ')} hay không ?`,
      };
      throw objectError;
    }
    else {
      const objectError: IHttpResponseError = {
        status: response.status,
        message: text,
      };
      throw objectError
    };
  }
  response.parsedBody = await response.json(); 
  return response.parsedBody!; // note the exclamation mark here
}

const getAccessToken = (): string => {
  const accessToken = '';
  // Get from Async Stored.
  return `Bearer ${accessToken}`;
};

const isWeb = Platform.OS === 'web';
// Set content type or authorization here.
const headers: HeadersInit_ = isWeb ? {
  Accept: 'application/x-www-form-urlencoded',
  'content-type': 'application/x-www-form-urlencoded',
} : {
  Accept: 'application/json',
  'content-type': 'application/json',
  // Authorization: getAccessToken(),
};

const headerFix: HeadersInit_ = {
  'Content-Type': 'multipart/form-data',
}

/**
 * convert object to query string
 * ignore params is null
 * @param params
 */
const objectToQuerystring = (params?: object): string => {
  if (!params) return '';
  const keyValueParis: string[] = [];
  const keys = Object.entries(params);
  keys.forEach((item) => {
    if (item[1] !== null && item[1] !== undefined) {
      keyValueParis.push(
        `${encodeURIComponent(item[0])}=${encodeURIComponent(item[1])}`,
      );
    }
  });
  return `?${keyValueParis.join('&')}`;
};

/**
 * @param path end point.
 * @param args parameters
 */
export async function get<T>(
  path: string,
  params?: object,
  args: RequestInit = {method: 'get', headers},
): Promise<T> {
  const url = `${API_URL}${path}${objectToQuerystring(params)}`;
  return http<T>(new Request(url, args));
}

export async function httpPoultry<T>(request: RequestInfo): Promise<T> {
  const rq: Request = request;
  console.log(`[${rq.method}] ${rq.url}`);
  const timeout = 30000; // 8s;
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  // const response: IHttpResponse<T> = await fetch(request, {
  //   signal: controller.signal,
  // });
  const response: IHttpResponse<T> = await fetch(request);
  const text = await response.text();
  clearTimeout(id);
  if (!response.ok) {
    // Handle response not ok here: ex: 400, 401, 500.
    
    // const objectError: IHttpResponseError = {
    //   status: response.status,
    //   message: `số tiền :${text}`,
    // };
    if (response.status == 406 && !text.includes("không") && !text.includes("Vui")) {
      const objectError: IHttpResponseError = {
        status: response.status,
        message: `Bạn đồng ý chốt đơn với số tiền : ${numberFormat(text.split('"')[1], 'VNĐ')} hay không ?`,
      };
      throw objectError;
    }
    else {
      const objectError: IHttpResponseError = {
        status: response.status,
        message: `${text.split('"')[1]}`,
      };
      throw objectError;
    };
  }
  const result = await JSON.parse(text).Result;
  // response.parsedBody = await result;
  console.log({result});
  return result  // note the exclamation mark here
}

export async function post<T>(
  path: string,
  body: any,
  urlParams?: object,
  args: RequestInit = {
    method: 'post',
    headers,
    body: JSON.stringify(body),
  },
): Promise<T> {
  const url = `${API_URL}${path}${objectToQuerystring(urlParams)}`;
  return http<T>(new Request(url, args));
}


export async function putHttp<T>(
  path: string,
  body: any,
  urlParams?: object,
  args: RequestInit = {
    method: 'put',
    headers,
    body: JSON.stringify(body),
  },
): Promise<T> {
  const url = `${API_URL}${path}${objectToQuerystring(urlParams)}`;
  return http<T>(new Request(url, args));
}

export async function deleteHttp<T>(
  path: string,
  params?: object,
  args: RequestInit = {method: 'delete', headers},
): Promise<T> {
  const url = `${API_URL}${path}${objectToQuerystring(params)}`;
  return http<T>(new Request(url, args));
}

export async function getWithUrl<T>(
  api: string,
  path: string,
  params?: object,
  accessToken?: string,
): Promise<T> {
  if (!api) throw new Error('api is empty');
  const headers1: HeadersInit_ = !accessToken
    ? headers
    : {...headers, Authorization: accessToken};
  const args: RequestInit = {method: 'get', headers: headers1};
  const url = `${api}${path}${objectToQuerystring(params)}`;
  return http<T>(new Request(url, args));
}

export async function postWithUrl<T>(
  api: string,
  path: string,
  body: any,
  urlParams?: object,
  accessToken?: string,
): Promise<T> {
  if (!api) throw new Error('api is empty');
  const headers1: HeadersInit_ = !accessToken
    ? headers
    : {...headers, Authorization: accessToken};
  const args: RequestInit = {
    method: 'post',
    headers: headers1,
    body: JSON.stringify(body),
  };
  const url = `${api}${path}${objectToQuerystring(urlParams)}`;
  return http<T>(new Request(url, args));
}

export async function postWithUrlFix<T>(
  api: string,
  path: string,
  body: any,
  urlParams?: object,
  accessToken?: string,
): Promise<T> {
  if (!api) throw new Error('api is empty');
  const headers1: HeadersInit_ = !accessToken
    ? headerFix
    : {...headerFix, Authorization: accessToken};
  const args: RequestInit = {
    method: 'post',
    headers: headers1,
    body: body,
  };
  const url = `${api}${path}${objectToQuerystring(urlParams)}`;
  return http<T>(new Request(url, args));
}

export async function putWithUrl<T>(
  api: string,
  path: string,
  body: any,
  urlParams?: object,
  accessToken?: string,
): Promise<T> {
  if (!api) throw new Error('api is empty');
  const headers1: HeadersInit_ = !accessToken
    ? headers
    : {...headers, Authorization: accessToken};
  const args: RequestInit = {
    method: 'put',
    headers: headers1,
    body: JSON.stringify(body),
  };
  const url = `${api}${path}${objectToQuerystring(urlParams)}`;
  return http<T>(new Request(url, args));
}
