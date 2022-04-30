import {Reducer} from "react";
import {actionType} from "./actionType";
import {postsReducer} from "./posts/reducerPosts"
export type RootState = {
    posts: {
        loading: boolean,
        error?: '',
        data?: any
    },
}
const initialState:RootState = {
    posts: {
        loading: false,
        error: '',
        data: null
    },
}


export const rootReducer: Reducer<any,any> = (state = initialState ,action) => {
    switch (action.type) {
        case actionType.POSTS_REQUEST:
        case actionType.POSTS_REQUEST_SUCCESS:
        case actionType.POSTS_REQUEST_ERROR:
            return {
                ...state,
                posts: postsReducer(state.posts,action)
            }
        default:
            return state;
    }
}
