import React from 'react';
import {View, StyleSheet, ImageBackground, Text, TouchableOpacity} from 'react-native';

import Styles from '../../../res/Styles'

export default class HotItem3 extends React.Component{
    render(){
        return(
            <View style={styles.container} key={this.props.item.id}>
                <ImageBackground
                    style={styles.image}
                    imageStyle={{borderRadius:8}}
                    source={{uri: this.props.item.src}}>
                    <Text style={styles.text} numberOfLines={2}>
                        {this.props.item.title}
                    </Text>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    image:{
        width : Styles.ScreenWidth - 32,
        height : 200,
        justifyContent:"flex-end",
        alignItems: 'center',
        borderRadius: 5
    },
    text: {
        fontSize: 18,
        color: "#FFF",
        fontWeight : "bold",
        marginBottom: 10,
    }
});
