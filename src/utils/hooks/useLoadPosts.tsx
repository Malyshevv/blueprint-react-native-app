import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/reducer';
import { postsRequestAsync } from '../redux/posts/reducerPosts';

export function usePostsLoad(perPage:any) {

    const [mounted, setMounted] = useState(false);
    const loading = useSelector<RootState, any>((state) => state.posts.loading);
    const posts = useSelector<RootState, any>((state) => state.posts.data);

    const dispatch = useDispatch();

    useEffect(() => {
        // @ts-ignore
        setMounted(true)
    }, []);

    useEffect(() => {
        if (mounted) {
            dispatch<any>(postsRequestAsync(perPage));
        }
    }, [mounted]);


    return {
        loading,
        posts,
    };
}
