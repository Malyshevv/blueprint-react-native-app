import { Reducer } from 'react';
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import axios from 'axios';
import { actionType } from '../actionType';
import { RootState } from '../reducer';

import { postsRequest, postsRequestError, postsRequestSuccess } from './actionPosts';
import {apiUrl, headers} from '../../../../config/configApi';


export const postsReducer: Reducer<any, any> = (state, action) => {
    switch (action.type) {
        case actionType.POSTS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case actionType.POSTS_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.data,
            };
        case actionType.POSTS_REQUEST_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
};

export const postsRequestAsync = (perPage:number): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
    const url = `${apiUrl}/users?per_page=${perPage}`;

    dispatch(postsRequest());
    axios.get(url)
        .then((resp) => {
            const postsData = resp.data;
            dispatch(postsRequestSuccess(postsData));
        })
        .catch((error) => {
            console.log(error);
            dispatch(postsRequestError(String(error)));
        });
};

