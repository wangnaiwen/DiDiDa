import React from 'react';
import {View, Text, FlatList, StyleSheet, Image} from 'react-native';

export default class ArticleDetail extends React.Component{
    render(){
        let {item} = this.props.navigation.state.params;

        return(
            <View>
                <Text>this is article detail {item.title}</Text>
            </View>
        );
    }
}
