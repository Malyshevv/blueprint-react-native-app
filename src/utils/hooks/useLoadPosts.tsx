import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/reducer';
import { postsRequestAsync } from '../redux/posts/reducerPosts';

export function usePostsLoad(perPage:any) {
    const loading = useSelector<RootState, any>((state) => state.posts.loading);
    const posts = useSelector<RootState, any>((state) => state.posts.data);

    const dispatch = useDispatch();

    useEffect(() => {
        // @ts-ignore
        dispatch(postsRequestAsync(perPage));
    }, []);

    return {
        loading,
        posts,
    };
}
