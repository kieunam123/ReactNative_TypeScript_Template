/* eslint-disable func-names */
import {call, delay, put} from 'redux-saga/effects';
import {

  IHttpResponseError,
  INavigateScreen,
  IUserParams,
} from '../commons/types';
import GlobalActions from './global/global.actions';
import {RootState} from './reducers';
import {navigate} from '../navigations';


function isResponseError(object: any): object is IHttpResponseError {
  return object && object.status && typeof object.status === 'number';
}

export const safe = (saga: any, ...args: any) =>
  function* (action: any) {
    const {type, payload} = action;
    try {
      yield put(GlobalActions.openLoadingModal(type));
      yield call(saga, ...args, action);
      yield put(GlobalActions.closeLoadingModal(type));
    } catch (err) {
      yield put(GlobalActions.closeLoadingModal(type));
      console.log({sagaError: err});
      if (isResponseError(err)) {
        if (err.status === 406) {
          yield put(GlobalActions.setConfirmData(type, err.message, payload));
        } else if (err.status === 417 && !err.message.includes("không") && !err.message.includes("Vui")) {
          // eslint-disable-next-line prettier/prettier
          yield put(GlobalActions.openErrorInfoModal(`${err.message}`.substring(0, 200), 'INFO'));
        } else {
          // eslint-disable-next-line prettier/prettier
          yield put(GlobalActions.openErrorInfoModal(`${err.message}`.substring(0, 200), 'ERROR'));
        }
      } else {
        // eslint-disable-next-line prettier/prettier
        yield put(GlobalActions.openErrorInfoModal(`${err}`.substring(0, 200), 'ERROR'));
      }
    }
  };

export const onError = (err: any) => {
  console.log({err});
};

export const getUserParams = (state: RootState): IUserParams =>
  state.global.userParams;

export const onSagaNavigate = (nav?: INavigateScreen): void => {
  if (nav && nav.isNavigate) {
    delay(300);
    navigate(nav.screen, nav.param);
  }
};

// // print
// export const getRongtaPrinterServices = (
//   state: RootState,
// ): RongtaPrinterServices | undefined => state.setting.rongtaPrinterServices;

// export const getCurrentPrinterConnected = (
//   state: RootState,
// ): IStarDevice | undefined => state.setting.starPrinter;

// export const getGroupByMonitoring = (state: RootState): IGroupType[] =>
//   state.monitoring.groupBys;
export const getGroupByMonitoring = (): any =>{}
export const getCurrentPrinterConnected = (): any =>{}
export const getRongtaPrinterServices = (): any =>{}
export const getMonitoringType = (): any =>{}
