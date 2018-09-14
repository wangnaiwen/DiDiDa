import React from 'react';
import {View, Text, StyleSheet, Image, FlatList, TouchableOpacity} from 'react-native';
import Colors from "../../res/Colors";
import {Avatar, Header} from "react-native-elements";
import ForumItem from "../community/forum/ForumItem";
import VideoItem from "./VideoItem";
let searchIcon = require('../../data/images/icon_search.png');
let times = 0;
import AndroidToastUtil from '../../android/AndroidToastUtil'
var Platform = require('Platform');

export default class Video extends React.Component{

    static navigationOptions = {
        header: <Header
            outerContainerStyles={{
                borderBottomWidth: 0,
            }}
            leftComponent={
                <Avatar
                    small
                    rounded
                    source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg" }}
                    activeOpacity={0.7}
                    avatarStyle={{
                        borderWidth: 1,
                        borderColor: Colors.white,
                    }}
                />
            }
            centerComponent={{
                text: 'UGame',
                style: { color: Colors.white, fontSize: 25 },
            }}
            rightComponent={
                <Image source={searchIcon} style={{width:30, height:30}}/>
            }
            backgroundColor={Colors.primary}/>
    };

    constructor(props) {
        super(props);
        this.state={
            data: '',
            page: 0,
            loaded: false,
        };
        this.viewabilityConfig = {
            waitForInteraction: true,
            viewAreaCoveragePercentThreshold: 50,
            //minimumViewTime:300
        }
    }


    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    viewabilityConfig={this.viewabilityConfig}
                    onViewableItemsChanged={this.itemChange}  //滑动时调用
                    style={styles.list}
                    refreshing={false}
                    onRefresh={_refreshing}
                    onEndReachedThreshold={0.2}
                    onEndReached={this.onLoad()}
                    ItemSeparatorComponent={_separator}
                    showsVerticalScrollIndicator={false}
                    data={this.state.data}
                    renderItem = {({item}) =>(
                        <TouchableOpacity>
                            <VideoItem item={item}/>
                        </TouchableOpacity>
                    )}>
                </FlatList>
            </View>
        );
    }


    itemChange({viewableItems, changed}){

        if (Platform.OS === 'android') {
            AndroidToastUtil.show("Awesome" + times, AndroidToastUtil.SHORT);
        }else{
            alert('change = ' + viewableItems[0].item.id + " " + times);
        }
        times = times + 1;
    }

    /**
     * 组件加载完成后再去获取数据，避免加载组件的时候卡顿
     * */
    componentDidMount(){
        if (this.state.loaded === false){
            this.getData()
        }
    }

    /**
     * 通过网络请求去获取数据，并且更新数据
     * */
    getData(){
        let url = 'http://192.168.50.74:80/json/VideoData.json';
        fetch(url)
            .then((response) => (response.json()))
            .then((responseData) => {
                this.setState({
                    loaded : true,
                    data : responseData.data,
                    page: this.state.page + 1
                });
            })
            .catch((err) => {
                this.setState({
                    loaded : true,
                    data : err,
                });
            });
    }

    onLoad = () =>{
        const timer = setTimeout(() => {
            clearTimeout(timer);
        }, 3000);
    };
}

const _refreshing = () => {
    const timer = setTimeout(() => {
        clearTimeout(timer);
    }, 3000)
};

const _separator = () =>{
    return <View style={{height:1, backgroundColor:Colors.gray, marginLeft: 16, marginRight: 16}}/>
};

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    list:{
        backgroundColor: 'white'
    }
});
