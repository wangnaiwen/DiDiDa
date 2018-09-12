import React from 'react';
import {StyleSheet,View} from 'react-native';
import Forum from "./forum/Forum";
import Column from "./column/Column";

export default class Community extends React.Component{
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
