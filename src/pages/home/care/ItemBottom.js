import React from 'react';
import {View, StyleSheet,Text, Image} from 'react-native';

import commentIcon from '../../../data/images/ic_comment_20.png'
import likeIcon from '../../../data/images/ic_up_20.png'

export default class ItemBottom extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.leftView}>
                    <Image source={likeIcon} style={styles.likeIcon}/>
                    <Text style={styles.likeNum}>
                        {this.props.item.likeNum}
                    </Text>
                </View>
                <View style={styles.rightView}>
                    <Image source={commentIcon} style={styles.commentIcon}/>
                    <Text style={styles.commentNum}>
                        {this.props.item.commentNum}
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
        height: 50,
        justifyContent:'space-between',
        alignItems:'center',
    },
    leftView: {
        flex:1,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'flex-end',
    },
    rightView:{
        flex:1,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'flex-end',
    },
    likeNum:{
        fontSize:16,
        color:"#afafaf",
        marginLeft: 3
    },
    commentNum:{
        fontSize:16,
        color:"#afafaf",
        marginLeft: 3
    },
    likeIcon:{
        width: 20,
        height: 20
    },
    commentIcon:{
        width: 20,
        height: 20
    }
});
