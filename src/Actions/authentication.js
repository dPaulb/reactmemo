import {
    AUTH_LOGIN,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAILURE,
    AUTH_REGISTER,
    AUTH_REGISTER_SUCCESS,
    AUTH_REGISTER_FAILURE,
    AUTH_GET_STATUS,
    AUTH_GET_STATUS_SUCCESS,
    AUTH_GET_STATUS_FAILURE,
    AUTH_LOGOUT
} from './ActionTypes';
import axios from 'axios';

export function loginRequest(username, password) {
    return (dispatch) => {
        dispatch(login());

        return axios.post('/api/accounts/signin', {
            username, password
        })
        .then((res) => {
            dispatch(loginSuccess());
        })
        .catch((err) => {
            dispatch(loginFailure());
        })
    }
}

export function login(){
    return {
        type : AUTH_LOGIN
    }
}

export function loginSuccess(){
    return {
        type : AUTH_LOGIN_SUCCESS
    }
}

export function loginFailure() {
    return {
        type : AUTH_LOGIN_FAILURE
    }
}


export function registerRequest(username, password){
    return (dispatch) => {
        dispatch(register());

        return axios.post('/api/accounts/signup', {
            username, password
        })
        .then((res) => {
            dispatch(registerSuccess());
        })
        .catch((err) => {
            dispatch(registerFailure(err.response.data.code));
        })
    }
}

export function register(){
    return {
        type : AUTH_REGISTER
    }
}

export function registerSuccess(){
    return {
        type : AUTH_REGISTER_SUCCESS
    }
}

export function registerFailure(error){
    return {
        type : AUTH_REGISTER_FAILURE,
        error
    }
}

export function getStatusRequest(){
    return (dispatch) => {
        dispatch(getStatus());

        return axios.get('/api/accounts/getinfo', {})
        .then((res) => {
            dispatch(getStatusSuccess(res.data.info.username));
        })
        .catch((err) => {
            dispatch(getStatusFailure());
        });
    }
}

export function getStatus(){
    return {
        type : AUTH_GET_STATUS
    }
}
export function getStatusSuccess(username){
    return  {
        type : AUTH_GET_STATUS_SUCCESS,
        username
    }
}
export function getStatusFailure(){
    return {
        type : AUTH_GET_STATUS_FAILURE
    }
}

export function logoutRequest(){
    return (dispatch) => {

        return axios.post('/api/accounts/logout')
        .then((res) => {
            dispatch(logout());
        });
    }
}

export function logout(){
    return {
        type : AUTH_LOGOUT
    };
}

