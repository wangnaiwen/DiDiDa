import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {Avatar} from 'react-native-elements'

import moreIcon from '../../../data/images/ic_more_little.png'

export default class ItemTitle extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.leftView}>
                    <Avatar
                        rounded
                        source={{uri:this.props.item.userIcon}}
                        style={styles.userIcon}/>
                    <View style={styles.userInfo}>
                        <Text style={styles.userName} numberOfLines={1}>{this.props.item.userName}</Text>
                        <View style={styles.timeAndGameView}>
                            <Text style={styles.timeText}>
                                {this.props.item.time}
                            </Text>
                            <Text style={styles.tipText}>
                                {this.props.item.tip}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.rightView}>
                    <Image source={moreIcon} style={styles.moreIcon}/>
                    <Text style={styles.topicText}>
                        {this.props.item.topic}
                    </Text>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'row',
        height: 40,
        justifyContent:'space-between',
        alignItems:'center'
    },
    leftView: {
        flexDirection:'row'
    },
    userIcon:{
        width: 40,
        height: 40,
        marginLeft: 10,
    },
    userInfo:{
        marginLeft:10,
        justifyContent:'space-between',
    },
    rightView:{
        flexDirection: 'row-reverse',
    },
    userName:{
        fontSize:16,
    },
    timeAndGameView:{
        flexDirection:'row'
    },
    timeText:{
        fontSize: 10,
        color:"#bbbbbb",
        marginRight: 10
    },
    tipText:{
        fontSize: 10,
        color:"#bbbbbb",
        marginRight: 5,
    },
    topicText:{
        fontSize: 10,
        color:"#bbbbbb",
        marginRight: 5,
        marginTop: 5
    },
    moreIcon:{
        fontSize: 10,
        color:"#bbbbbb"
    }
});
