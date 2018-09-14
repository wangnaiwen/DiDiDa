import React from 'react';
import {View, StyleSheet,Text, Image,TouchableOpacity} from 'react-native';

import commentIcon from '../../data/images/ic_comment_24.png'
import upIcon from '../../data/images/ic_up_24.png'
import shareIcon from '../../data/images/ic_share_24.png'

export default class ItemBottom extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity style={styles.leftView} onPress={() => this.onUpClick()}>
                    <Image source={upIcon} style={styles.upIcon}/>
                    <Text style={styles.upNum}>
                        {this.props.item.upNum}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.centerView} onPress={() => this.onCommentClick()} >
                    <Image source={commentIcon} style={styles.commentIcon}/>
                    <Text style={styles.commentNum}>
                        {this.props.item.commentNum}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.rightView} onPress={() => this.onShareClick()}>
                    <Image source={shareIcon} style={styles.commentIcon}/>
                </TouchableOpacity>
            </View>
        );
    }

    onUpClick(){
        alert('onUpClick')
    }

    onCommentClick(){
        alert('onCommentClick')
    }

    onShareClick(){
        alert('onShareClick')
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
    },
    centerView:{
        flex:1,
        flexDirection: 'row',
        justifyContent:'center',
    },
    rightView:{
        flex:1,
        flexDirection: 'row',
        justifyContent:'center',
    },
    upNum:{
        fontSize:16,
        color:"#afafaf",
        marginLeft: 3
    },
    commentNum:{
        fontSize:16,
        color:"#afafaf",
        marginLeft: 3
    },
    upIcon:{
        width: 20,
        height: 20
    },
    commentIcon:{
        width: 20,
        height: 20
    }
});
