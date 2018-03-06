import {
    RESET_PASS_REQUEST, RESET_PASS_REQ_SUCCESS, RESET_PASS_REQ_FAILED, USER_LOGIN, USER_LOGIN_FAILED,
    USER_LOGIN_SUCCESS, USER_LOGOUT, VALIDATE_TOKEN, VALIDATE_TOKEN_SUCCESS, VALIDATE_TOKEN_FAILED, CHANGE_PASS_REQUEST,
    CHANGE_PASS_FAILED, CHANGE_PASS_SUCCESS
} from "../types";

export const loginRequest = (data) => ({
    type: USER_LOGIN,
    data
});

export const loginSuccess = (data) => ({
    type: USER_LOGIN_SUCCESS,
    data
});

export const loginFailed = (errors) => ({
    type: USER_LOGIN_FAILED,
    errors
});

export const logoutRequest = () => ({
    type: USER_LOGOUT
});

export const resetPassRequest = email => ({
    type: RESET_PASS_REQUEST,
    email
});

export const resetPassReqSuccess = result => ({
    type: RESET_PASS_REQ_SUCCESS,
    resetSent: result.success
});

export const resetPassReqFailed = (errors) => ({
    type: RESET_PASS_REQ_FAILED,
    errors
});

export const validateTokenRequest = token => ({
    type: VALIDATE_TOKEN,
    token
});

export const validateTokenSuccess = result =>({
    type: VALIDATE_TOKEN_SUCCESS,
    validation: result
});

export const validateTokenFailed = (errors) =>({
    type: VALIDATE_TOKEN_FAILED,
    errors
});

export const changePassRequest = (data) => ({
    type: CHANGE_PASS_REQUEST,
    data
});

export const changePassSuccess = () => ({
    type: CHANGE_PASS_SUCCESS
});

export const changePassFailed = (errors) => ({
    type: CHANGE_PASS_FAILED,
    errors
});
