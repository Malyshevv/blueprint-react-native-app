import React, {useEffect, useRef, useState} from 'react';
import {View, TouchableOpacity , Text, FlatList, Image, RefreshControl} from "react-native";

import axios from 'axios';

import {styles} from "./Style";
import {usePostsLoad} from "../../../utils/hooks/useLoadPosts";
import {useDispatch} from "react-redux";
import {postsRequestAsync} from "../../../utils/redux/posts/reducerPosts";
import {useStateIfMounted} from "use-state-if-mounted";

export function Home({navigation}:any) {
    const dispatch = useDispatch();

    const [refreshing, setRefreshing] = useStateIfMounted(false);

    const [perPage,setPerPage] = useStateIfMounted(3);

    const {loading, posts} = usePostsLoad(perPage);
    const [listData, setListData] = useStateIfMounted<any[]>([]);
    const bottomOfList = useRef(null)

    useEffect(() => {
        if (!listData || posts && posts.data && posts.data !== listData) {
            setListData(posts.data)
        }
    }, [loading]);

    const getData = (type:string,after:number) => {
        if(type === 'refreshLoad') {
            // @ts-ignore
            dispatch(postsRequestAsync(perPage));
            setRefreshing(false)
        } else {
            // @ts-ignore
            dispatch(postsRequestAsync(after));
        }
        bottomOfList.current.scrollToEnd({animated: true})
    }

    const onRefreshFlatList = () => {
        setRefreshing(true)
        getData('refreshLoad',null)
    }
    const onPressLoadMore = () => {
        let after = perPage + 3;
        let before = perPage;
        setPerPage(after)
        getData('loadMore',after);
    }
    return (
        <View style={styles.container}>
            {loading && (
                <Text>Загрузка...</Text>
            )}
            {!loading && listData && (
                <FlatList
                    ref={bottomOfList}
                    extraData={listData}
                    data={listData}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefreshFlatList}
                        />
                    }
                    renderItem={({item}) =>
                    <View style={styles.item}>
                        <Image
                            style={styles.tinyLogo}
                            source={{uri: item.avatar}}
                        />
                        <Text style={styles.title}>{item.first_name} {item.last_name}</Text>
                        <Text style={styles.description}>{item.email}</Text>
                        <TouchableOpacity  style={styles.btnReed} onPress={() => navigation.navigate('Details',{
                            itemId: item.id,
                            title: item.first_name
                        })}>
                            <Text style={styles.textBtn}>Читать далее</Text>
                        </TouchableOpacity>
                    </View>
                } />
            )}
            <TouchableOpacity onPress={onPressLoadMore} style={styles.btnMore}>
                <Text style={styles.textBtn}>Показать еще</Text>
            </TouchableOpacity>
        </View>
    );
}
