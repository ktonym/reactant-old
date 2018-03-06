import { fork } from "redux-saga/effects";
import {watchAddClient, watchSearchClient} from "./sagas/clientSagas";
import {watchLogout, watchResetPassReq, watchValidateToken, watchChangePassword} from "./sagas/userSagas";
import {watchLogin} from "./sagas/userSagas";

export default function* rootSaga () {
    yield fork(watchAddClient);
    yield fork(watchResetPassReq);
    yield fork(watchLogin);
    yield fork(watchLogout);
    yield fork(watchValidateToken);
    yield fork(watchChangePassword);
    yield fork(watchSearchClient);
}