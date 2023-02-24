import {all, fork, put, takeEvery} from 'redux-saga/effects';
import {
  removeAccessToken,
  removeAllBluetoothAsyncStore,
  removeUserInfoAsyncStorage,
} from '../../helpers/AsyncStorageHelpers';
import {removePassCodeKeychain} from '../../helpers/KeychainHelpers';
import ScreenType from '../../navigations/screen.constant';
import {onSagaNavigate, safe} from '../saga.helpers';
import GlobalActions from './global.actions';
import {ILogOut, Types} from './global.types';

// WORKER
function* handleLogout({payload}: ILogOut) {
  yield removeAccessToken();
  yield removeUserInfoAsyncStorage();
  yield removeAllBluetoothAsyncStore();
  yield removePassCodeKeychain();
  yield put(GlobalActions.resetAppState());
  onSagaNavigate({isNavigate: true, screen: ScreenType.Main.Start});
}

// WATCHER
function* watcherLogOut() {
  yield takeEvery(Types.GLOBAL_LOG_OUT, safe(handleLogout));
}

export default function* globalSaga() {
  yield all([fork(watcherLogOut)]);
}
