import {all, fork} from 'redux-saga/effects';
import globalSaga from './global/global.saga';

export default function* rootSaga() {
    yield all ([
        fork(globalSaga),
    ]);
}