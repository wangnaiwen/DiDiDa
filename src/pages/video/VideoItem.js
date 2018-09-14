import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import VideoView from "./VideoView";
import UserView from "./UserView";
import UpView from "./UpView";

export default class VideoItem extends React.Component{

    render(){
        return(
            <View style={styles.container}>
                <Text numberOfLines={2} style={styles.titleText}>
                    {this.props.item.title}
                </Text>
                <VideoView item={this.props.item}/>
                <UserView item={this.props.item}/>
                <UpView item={this.props.item}/>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        margin:16,
    },

    titleText:{
        color:"#282828",
        fontSize:16,
        lineHeight: 25
    }
});
