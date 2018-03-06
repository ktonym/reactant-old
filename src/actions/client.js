import {
    ADD_CLIENT_SUCCESS, ADD_CLIENT_FAILED, ADD_CLIENT, CLIENT_SEARCH, CLIENT_SEARCH_SUCCESS,
    CLIENT_SEARCH_FAILED
} from "../types";

export const addClientSuccess = (data) => ({
    type: ADD_CLIENT_SUCCESS,
    data
});

export const addClientFailed = errors => ({
    type: ADD_CLIENT_FAILED,
    errors
});

/*To be used in the form to request addClient*/
export const addClientRequest = (data) => ({
    type: ADD_CLIENT,
    data
});

export const clientSearchRequest = (query) => ({
    type: CLIENT_SEARCH,
    query
});

export const clientSearchSuccess = (data) =>({
    type: CLIENT_SEARCH_SUCCESS,
    data
});

export const clientSearchFailed = errors => ({
    type: CLIENT_SEARCH_FAILED,
    errors
});
