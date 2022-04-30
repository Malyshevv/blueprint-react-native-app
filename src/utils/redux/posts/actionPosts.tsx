import { ActionCreator, AnyAction } from 'redux';
import { actionType } from '../actionType';

// START REQUEST
export type postsRequestAction = {
    type: typeof actionType.POSTS_REQUEST
}
export const postsRequest:ActionCreator<postsRequestAction> = () => ({
    type: actionType.POSTS_REQUEST,
});

// SUCCESS REQUEST
export type postsRequestSuccessAction = {
    type: typeof actionType.POSTS_REQUEST_SUCCESS
    data: any
}
export const postsRequestSuccess:ActionCreator<postsRequestSuccessAction> = (data: any) => ({
    type: actionType.POSTS_REQUEST_SUCCESS,
    data,
});

// ERROR REQUEST
export type postsRequestErrorAction = {
    type: typeof actionType.POSTS_REQUEST_ERROR
    error: Error
}
export const postsRequestError:ActionCreator<postsRequestErrorAction> = (error: Error) => ({
    type: actionType.POSTS_REQUEST_ERROR,
    error,
});
