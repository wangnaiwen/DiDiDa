import React from 'react';
import {Image, StyleSheet} from 'react-native';

import Colors from '../src/res/Colors';

import Home from '../src/pages/home/Home';
import Community from './pages/community/Community';
import Mine from '../src/pages/mine/Mine';

import homeImg from '../src/data/images/home.png';
import homeActiveImg from '../src/data/images/home_active.png';
import forumImg from '../src/data/images/board.png';
import forumActiveImg from '../src/data/images/board_active.png';
import mineImg from '../src/data/images/user.png';
import mineActiveImg from '../src/data/images/user_active.png';
import {createBottomTabNavigator, createStackNavigator} from "react-navigation";
import ArticleDetail from "./pages/detail/ArticleDetail";

const HomeStack = createStackNavigator({
    Home: {screen: Home},
    DetailPage: { screen: ArticleDetail }
});

const CommunityStack = createStackNavigator({
    Community: {screen: Community},
    DetailPage: { screen: ArticleDetail },
});
const MineStack = createStackNavigator({
    Mine: {screen:Mine},
    DetailPage:{screen:ArticleDetail}
});

export default createBottomTabNavigator(
    {
        Home:{
            screen:HomeStack,
            navigationOptions: {
                tabBarLabel: '首页',
            }
        },
        Community:{
            screen:CommunityStack,
            navigationOptions: {
                tabBarLabel: '社区'
            }
        },
        Mine :{
            screen: MineStack,
            navigationOptions: {
                tabBarLabel: '我的'
            }
        }
    },
    {
        //设置TabNavigator的位置
        tabBarPosition: 'bottom',
        //是否在更改标签时显示动画
        animationEnabled: true,
        //是否允许在标签之间进行滑动
        swipeEnabled: true,
        //按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
        backBehavior: "none",
        //设置Tab标签的属性
        tabBarOptions: {
            //Android属性
            upperCaseLabel: false,//是否使标签大写，默认为true
            //共有属性
            showIcon: true,//是否显示图标，默认关闭
            showLabel: true,//是否显示label，默认开启
            activeTintColor: Colors.primary,//label和icon的前景色 活跃状态下（选中）
            inactiveTintColor: Colors.normal,//label和icon的前景色 活跃状态下（未选中）
            style: { //TabNavigator 的背景颜色
                height: 55,
            },
            indicatorStyle: {//标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题
                height: 0,
            },
            labelStyle: {//文字的样式
                fontSize: 13,
                marginTop: -5,
                marginBottom: 5,
            },
            iconStyle: {//图标的样式
                marginBottom: 5,
            }
        },

        initialRouteName:'Home',
        navigationOptions: ({navigation}) =>({
            tabBarIcon: ({focused, tintColor}) => {
                const {routeName} = navigation.state;
                let icon;
                if (routeName === 'Home'){
                    icon = focused ? homeActiveImg : homeImg
                } else if (routeName === 'Community'){
                    icon = focused ? forumActiveImg : forumImg
                } else if (routeName === 'Mine'){
                    icon = focused ? mineActiveImg : mineImg
                }
                return <Image source={icon}  style={{width: 25, height: 25, tintColor: tintColor}}/>
            }
        })
    }
);
