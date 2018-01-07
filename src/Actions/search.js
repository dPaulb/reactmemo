import {
    SEARCH,
    SEARCH_SUCCESS,
    SEARCH_FAILURE
} from './ActionTypes';

import axios from 'axios';

export function searchRequest(keyword){
    return (dispatch) =>{
        dispatch(search());

        return axios.get(`/api/accounts/search/${keyword}`, {})
        .then((res) => {
            dispatch(searchSuccess(res.data));
        })
        .catch((err) => {
            dispatch(searchFailure());
        })
    }
}

export function search(){
    return {
        type : SEARCH
    }
}

export function searchSuccess(usernames){
    return {
        type : SEARCH_SUCCESS,
        usernames
    }
}

export function searchFailure(){
    return {
        type : SEARCH_FAILURE
    }
}