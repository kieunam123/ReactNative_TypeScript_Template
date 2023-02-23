import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

import {ActionLog, Feature, ILog} from '../apis/types.service';
import {DateFormat} from '../configs';
import {getCurrentUnixTimestamp} from './DatetimeHelpers';

const LOG_APP = 'LOG_APP';

export const getLogs = async (): Promise<ILog[]> => {
  try {
    const strJson = await AsyncStorage.getItem(LOG_APP);
    if (strJson) {
      const logs: ILog[] = JSON.parse(strJson);
      return logs;
    }
    console.log('no log_app content');
    // eslint-disable-next-line no-empty
  } catch (ex) {}
  return [];
};

export const addLog = async (
  userName: string,
  action: ActionLog,
  feature: Feature,
  contentLog: object | string,
): Promise<void> => {
  const logs: ILog[] = await getLogs();
  const content: string = JSON.stringify(contentLog);
  const currentDate = moment().format(
    `${DateFormat.DD_MM_YYYY} ${DateFormat.HH_MM_SS}`,
  );
  logs.push({
    userName,
    action,
    feature,
    content,
    createdOn: getCurrentUnixTimestamp(),
    createdOnLocal: currentDate,
  });
  const strJson = JSON.stringify(logs);
  await AsyncStorage.setItem(LOG_APP, strJson);
};

export const deleteLogApp = async () => {
  try {
    await AsyncStorage.removeItem(LOG_APP);
  } catch (ex) {
    console.log({ex});
  }
};
