import { call,put, takeLatest } from "redux-saga/effects";
//import {normalize} from "normalizr";
import api from "../api";
import {addClientFailed, addClientSuccess, clientSearchFailed, clientSearchSuccess} from "../actions/client";
import {ADD_CLIENT, CLIENT_SEARCH} from "../types";
//import {clientSchema} from "../schemas";


export function* watchAddClient() {
    /*coming from our form*/
    yield takeLatest(ADD_CLIENT, addClientSaga);
}

export function* addClientSaga(action) {
    try {
        yield console.log(action.client);
        const client = yield call(api.client.add, action.client);
        yield put(addClientSuccess(client));
        //yield put("ADD_CLIENT_SUCCESS", action);
    } catch (e){
        //yield put({type: "ADD_CLIENT_FAILED", message:(e)});
        yield put(addClientFailed(e.response.data.errors));
    }
}

export function* watchSearchClient() {
    yield takeLatest(CLIENT_SEARCH, searchClientSaga);
}

export function* searchClientSaga(action) {
    try{
        const clients = yield call(api.client.search, action.query);
        yield put(clientSearchSuccess(clients));
    } catch (e){
        yield put(clientSearchFailed(e.response.data.errors));
    }
}