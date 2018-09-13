import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

export default class Comment extends React.Component{
    render(){
        return(
            <FlatList style={styles.container}>

            </FlatList>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    }

});
