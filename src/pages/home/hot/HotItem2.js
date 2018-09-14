import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

import commentFeed from '../../../data/images/ic_reply.png';
import eyeFeed from '../../../data/images/ic_eye.png';


export default class HotItem2 extends React.Component{
    render(){
        return(
            <View style={styles.container} key={this.props.item.id}>
                <View style={styles.left}>
                    <Text style={styles.topText} numberOfLines={2}>
                        {this.props.item.title}
                    </Text>
                    <View style={styles.bottomView}>
                        <Text style={styles.gameNameText} numberOfLines={1}>
                            {this.props.item.gameName}
                        </Text>

                        {this.getReadView(this.props.item)}

                    </View>
                </View>
                {this.getRightImageView(this.props.item)}
            </View>
        );
    }

    getReadView(item){
        return(
            <View style={styles.readView}>
                <Text style={styles.commentText}> {item.commentNum} </Text>
                <Image style={styles.commentImage} source={commentFeed}/>
                <Text style={styles.eyeText}> {item.readNum} </Text>
                <Image style={styles.eyeImage} source={eyeFeed} />
            </View>
        );
    }

    getRightImageView(item){
        return(
            <View style={styles.right}>
                <Image source={{uri: item.src}} style={styles.image}>

                </Image>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'row',
        height: 85,
        margin: 16
    },
    left :{
        flex: 9,
        flexDirection: "column",
        marginRight: 10
    },
    right :{
        flex:5,
    },
    topText:{
        fontSize: 16,
        color: "#2d2b2f",
        letterSpacing: 1,
        lineHeight:25,
        flex: 5,
    },
    bottomView :{
        flex:2,
        fontSize:10,
        color : "#c6c6c6",
        flexDirection : 'row',
        alignItems:'center',
    },
    gameNameText:{
        flex : 1,
        color:'#a5a5a5'
    },
    readView: {
        flex : 1,
        flexDirection:'row-reverse',
        justifyContent:'flex-start',
        alignItems:'center',
    },
    eyeText:{
        marginRight:10,
        color:'#a5a5a5'
    },
    eyeImage :{
        width: 16,
        height:16
    },
    commentText:{
        color:'#a5a5a5'
    },
    commentImage:{
        width: 16,
        height:16
    },
    image:{
        flex:1,
        borderRadius:3,
    }
});
