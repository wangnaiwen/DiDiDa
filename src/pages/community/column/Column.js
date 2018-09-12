import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Column extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>
                    数据为空
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
});
