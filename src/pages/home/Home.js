import React from 'react';
import {StyleSheet,View} from 'react-native';
import {ScrollableTabBar} from "react-native-scrollable-tab-view";
import Hot from "./hot/Hot";
import Care from "./care/Care";

export default class Home extends React.Component{
    render(){

        let ScrollableTabView = require('react-native-scrollable-tab-view');

        return(
            <View style={styles.container}>
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
      flex: 1
    },
    line: {
        height: 2,
        backgroundColor: '#33cccc',
    },
    tabBarText:{
        fontSize: 18,
    }
});
