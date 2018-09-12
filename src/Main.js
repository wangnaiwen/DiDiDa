import React from 'react';
import {Image, StatusBar, StyleSheet,View, Text} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

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
import {Avatar, Header} from "react-native-elements";

let searchIcon = require('../src/data/images/icon_search.png');


export default class Main extends React.Component{

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

    state = {
        selectedTab: 'home'
    };

     render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#33cccc"
                    translucent={true}
                    hidden={false}
                    animated={true}/>
                <TabNavigator style={styles.tab}>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="首页"
                        selectedTitleStyle={{color: Colors.primary}}
                        renderIcon={() => <Image source={homeImg} alt='' style={styles.icon}/>}
                        renderSelectedIcon={() => <Image source={homeActiveImg} alt='' style={styles.icon}/>}
                        //badgeText="1"
                        onPress={() => this.onClick('home')}>
                        <Home navigation = {this.props.navigation}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'forum'}
                        title='社区'
                        selectedTitleStyle={{color: Colors.primary}}
                        renderIcon={() => <Image source={forumImg} alt='' style={styles.icon}/>}
                        renderSelectedIcon={() => <Image source={forumActiveImg} alt='' style={styles.icon}/>}
                        onPress={() => this.onClick('forum')}>
                        <Community navigation = {this.props.navigation}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'mine'}
                        title='我的'
                        selectedTitleStyle={{color: Colors.primary}}
                        renderIcon={() => <Image source={mineImg} alt='' style={styles.icon}/>}
                        renderSelectedIcon={() => <Image source={mineActiveImg} alt='' style={styles.icon}/>}
                        onPress={() =>  this.onClick('mine')}>
                        <Mine navigation = {this.props.navigation}/>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>

        );
    }

    onClick(tabName){
        this.setState({selectedTab:tabName});
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tab:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    icon: {
        width: 24,
        height: 24,
        resizeMode: 'stretch',
        marginTop: 10
    }
});
