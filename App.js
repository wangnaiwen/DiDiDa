/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Image, StatusBar} from 'react-native';
import {createStackNavigator,NavigationActions, StackActions} from 'react-navigation';
import {Header, Avatar} from 'react-native-elements';

import Main from "./src/Main";
import Colors from "./src/res/Colors";
import ArticleDetail from "./src/pages/detail/ArticleDetail";

//把图片加载出来
let loadingImg = require("./src/data/pictures/loading.jpg");
let searchIcon = require('./src/data/images/icon_search.png');

 class App extends Component<Props> {

    /**
     * 利用StatusBar实现隐藏导航栏，最终实现沉浸式体验
     * */
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#ff0000"
                    translucent={true}
                    hidden={true}
                    animated={true}/>
                <Image
                    style={styles.image}
                    source={loadingImg}/>
            </View>
        );
    }

    /**
     * 组件渲染完成,跳转到Main界面, 并且通过reset函数来将当前页面给finish掉
     * */
    componentDidMount(){
        this.timer = setTimeout(() => {
            let resetAction = StackActions.reset({
                index: 0,//默认打开actions中的第几个页面
                actions: [
                    //actions是页面集合，这里有几个就保留几个，点击完成后就会重构导航器
                    //NavigationActions.navigate({ routeName: 'App' }),
                    NavigationActions.navigate({ routeName: 'Main', navigation:this.props.navigation})
                ]
            });
            this.props.navigation.dispatch(resetAction)

            //这个只是跳转到某一个页面，但是不会关掉当前页面
            //this.props.navigation.navigate('Main', { name: 'Jane' });
        }, 3000);
    }

    /**
     * 组件被移除之前，要清除定时器
     * */
    componentWillUnmount(){
      this.timer && clearTimeout(this.timer);
    }
}

/**
 * 这个是为导航栏添加的header
 * */
const renderHeader = () => {
    return (
        <Header
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
                text: 'TapTap',
                style: { color: Colors.white, fontSize: 25 },
            }}
            rightComponent={
                <Image source={searchIcon} style={{width:30, height:30}}/>
            }
            backgroundColor={Colors.primary}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    image:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: null,
        height: null,
    },
});

/**
 * 通过设置header为null来隐藏导航栏
 * */
const myApp = createStackNavigator({
    App: {
        screen: App,
        navigationOptions: {
            header: null
        }
    },

    Main: {
        screen: Main,
        navigationOptions: {
            header: renderHeader()
        }
    },

    DetailPage: {
        screen: ArticleDetail,
    }
});

export default myApp;

