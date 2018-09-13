import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Forum from "./forum/Forum";
import Column from "./column/Column";
import {Avatar, Header} from "react-native-elements";
import Colors from "../../res/Colors";

let searchIcon = require('../../data/images/icon_search.png');

export default class Community extends React.Component{

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
                <ScrollableTabView
                    tabBarUnderlineStyle={styles.line}
                    tabBarActiveTextColor="#33cccc"
                    tabBarTextStyle={styles.tabBarText}>
                    <Forum tabLabel="论坛" navigation = {this.props.navigation}/>
                    <Column tabLabel="栏目" navigation = {this.props.navigation}/>
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
