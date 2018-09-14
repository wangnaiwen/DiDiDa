import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-elements'
import Colors from "../../res/Colors";

export default class ItemTitle extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.leftView}>
                    <TouchableOpacity onPress={() => {this.onUserClick()}}>
                        <Avatar
                            rounded
                            source={{uri:this.props.item.userIcon}}
                            style={styles.userIcon}/>
                    </TouchableOpacity>
                    <View style={styles.userInfo}>
                        <Text style={styles.userName} numberOfLines={1}>{this.props.item.userName}</Text>
                        <View style={styles.timeAndGameView}>
                            <Text style={styles.timeText}>
                                {this.props.item.playNum}次播放
                            </Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={styles.rightView} onPress={() => {this.onCareClick()}}>
                    <Text style={{backgroundColor: Colors.primary, padding: 3, color:'white'}}>
                        关注
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

    onCareClick(){
        alert('onCareClick')
    }

    onUserClick(){
        alert('onUserClick')
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
