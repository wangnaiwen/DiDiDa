import React from 'react';
import {View, StyleSheet} from 'react-native';

import VideoPlayer from 'react-native-video-controls';
import Styles from '../../../res/Styles'

export default class VideoView extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <VideoPlayer
                    source={{ uri: this.props.item.src}}
                    disableVolume
                    disableBack
                    disableSeekbar
                    disableFullscreen
                    paused
                    resizeMode="cover"
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        height: 200,
        width: Styles.ScreenWidth - 32
    },
});
