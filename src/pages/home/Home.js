import React from 'react';
import {StyleSheet, View, Image, StatusBar} from 'react-native';
import {ScrollableTabBar} from "react-native-scrollable-tab-view";
import Hot from "./hot/Hot";
import Care from "./care/Care";
import {Avatar, Header} from "react-native-elements";
let searchIcon = require('../../data/images/icon_search.png');

import Colors from '../../res/Colors';
export default class Home extends React.Component{

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
            backgroundColor={Colors.primary}
        />
    };


    render(){

        let ScrollableTabView = require('react-native-scrollable-tab-view');

        return(
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={Colors.primary}
                    translucent={true}
                    hidden={false}
                    animated={true}/>
                <ScrollableTabView
                    tabBarUnderlineStyle={styles.line}
                    renderTabBar={() => <ScrollableTabBar/>}
                    tabBarActiveTextColor="#33cccc"
                    tabBarTextStyle={styles.tabBarText}>
                    <Hot tabLabel="热门" navigation = {this.props.navigation}/>
                    <Care tabLabel="关注" navigation = {this.props.navigation}/>
                    <Hot tabLabel="角色扮演" />
                    <Hot tabLabel="吃鸡" />
                    <Hot tabLabel="单机" />
                    <Hot tabLabel="日系" />
                    <Hot tabLabel="卡牌" />
                    <Hot tabLabel="MOBA" />
                </ScrollableTabView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'white'
    },
    line: {
        height: 2,
        backgroundColor: '#33cccc',
    },
    tabBarText:{
        fontSize: 18,
    }
});
