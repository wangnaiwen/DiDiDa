import React from 'react';
import {View, Text, FlatList, StyleSheet, ScrollView, Image} from 'react-native';

export default class ArticleDetail extends React.Component{
    render(){
        let {item} = this.props.navigation.state.params;

        return(
            <View style={styles.container}>
                <ScrollView style={styles.container}>
                    <View>
                        <Text>你好</Text>
                        <Text>你好</Text>
                        <Text>你好</Text>
                        <Text>你好</Text>
                        <Text>你好</Text>
                        <Text>你好</Text>
                        <Text>你好</Text>
                        <Text>你好</Text>
                        <Text>你好</Text>
                        <Text>你好</Text>
                        <Text>你好</Text>
                        <Text>你好</Text>
                        <Text>你好</Text>
                        <Text>你好</Text>
                        <Text>你好</Text>
                        <Text>你好</Text>
                        <Text>你好</Text>
                        <Text>你好</Text>
                        <Text>你好</Text>
                        <Text>你好</Text>
                        <Text>你好</Text>
                        <Text>你好</Text>
                        <Text>你好</Text>
                        <Text>你好</Text>
                        <Text>你好</Text>
                        <Text>你好</Text>
                        <Text>你好</Text>
                        <Text>你好</Text>
                        <Text>你好</Text>
                        <Text>你好</Text>
                        <Text>你好</Text>
                        <Text>你好</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
});
