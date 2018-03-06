import {call,takeLatest,put} from "redux-saga/effects";
import {USER_LOGIN, USER_LOGOUT, RESET_PASS_REQUEST, VALIDATE_TOKEN, CHANGE_PASS_REQUEST} from "../types";
import api from "../api";
import {
    changePassFailed,
    loginFailed, loginSuccess, resetPassReqFailed, resetPassReqSuccess, validateTokenFailed,
    validateTokenSuccess
} from "../actions/auth";
import customHistory from "../history";
import setAuthorizationHeader from "../utils/setAuthorizationHeader";


export function* watchChangePassword() {
    yield takeLatest(CHANGE_PASS_REQUEST,changePasswordSaga);
}

export function* changePasswordSaga(action) {
    try {
        yield call(api.user.changePassword,action.data);
        customHistory.push("/login");
    } catch (e){
        yield put(changePassFailed({errors: e}));
    }
}

export function* watchValidateToken() {
    yield takeLatest(VALIDATE_TOKEN,validateTokenSaga);
}

export function* validateTokenSaga(action) {
    try{
        const result = yield call(api.user.validateToken,action.token);
        yield put(validateTokenSuccess(result));
    } catch (e){
        yield put(validateTokenFailed({errors: e}));
    }
}

export function* watchResetPassReq() {
    yield takeLatest(RESET_PASS_REQUEST,resetPassReqSaga);
}

export function* resetPassReqSaga(action) {
    try {
       // yield console.log(action.email);
        const result = yield call(api.user.resetPasswordRequest,action.email);
        yield put(resetPassReqSuccess(result));
    } catch (e){
        //yield console.log(e);
        yield put(resetPassReqFailed(e.response.data))
    }
}

export function* watchLogin() {
    yield takeLatest(USER_LOGIN,loginSaga);
}

export function* loginSaga(action) {
    try {
        /*yield console.log(JSON.stringify(action.data));*/
        const user = yield call(api.user.login,action.data);
        yield localStorage.setItem('rhinoJWT',JSON.stringify(user));
        yield setAuthorizationHeader(user.access_token);
        yield put(loginSuccess(user));
        customHistory.push("/clients");
    } catch (e){
        yield put(loginFailed(e.response.data));
    }
}

export function* watchLogout() {
    yield takeLatest(USER_LOGOUT,logoutSaga);
}

export function* logoutSaga() {
    yield localStorage.removeItem("rhinoJWT");
    yield setAuthorizationHeader();
    customHistory.push("/login");
}