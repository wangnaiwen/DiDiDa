import React from 'react';
import {Image, StyleSheet} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import Colors from '../src/res/Colors';

import Home from '../src/pages/home/Home';
import Forum from '../src/pages/forum/Forum';
import Mine from '../src/pages/mine/Mine';

import homeImg from '../src/data/images/home.png';
import homeActiveImg from '../src/data/images/home_active.png';
import forumImg from '../src/data/images/board.png';
import forumActiveImg from '../src/data/images/board_active.png';
import mineImg from '../src/data/images/user.png';
import mineActiveImg from '../src/data/images/user_active.png';

export default class Main extends React.Component{

    state = {
        selectedTab: 'home'
    };

    render() {
        return (
            <TabNavigator style={styles.container}>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="首页"
                    selectedTitleStyle={{color: Colors.primary}}
                    renderIcon={() => <Image source={homeImg} alt='' style={styles.icon}/>}
                    renderSelectedIcon={() => <Image source={homeActiveImg} alt='' style={styles.icon}/>}
                    //badgeText="1"
                    onPress={() => this.setState({selectedTab: 'home'})}>
                    <Home navigation = {this.props.navigation}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'forum'}
                    title='社区'
                    selectedTitleStyle={{color: Colors.primary}}
                    renderIcon={() => <Image source={forumImg} alt='' style={styles.icon}/>}
                    renderSelectedIcon={() => <Image source={forumActiveImg} alt='' style={styles.icon}/>}
                    onPress={() => this.setState({selectedTab:'forum'})}>
                    <Forum/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'mine'}
                    title='我的'
                    selectedTitleStyle={{color: Colors.primary}}
                    renderIcon={() => <Image source={mineImg} alt='' style={styles.icon}/>}
                    renderSelectedIcon={() => <Image source={mineActiveImg} alt='' style={styles.icon}/>}
                    onPress={() => this.setState({selectedTab:'mine'})}>
                    <Mine/>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
