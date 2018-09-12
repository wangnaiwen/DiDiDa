import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

import Styles from '../../../res/Styles';

export default class ForumItem3 extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            data: [{"id":"1"},{"id":"1"},{"id":"1"},{"id":"1"},{"id":"1"},{"id":"1"}]
        }
    }

    render(){
        return(
            <View style={styles.item}>
                <Image style={styles.topicIcon} source={{uri:"https://img.tapimg.com/market/images/da89fa48a741d3e3561ef4ba01640c73.jpg?imageView2/0/w/1080/q/40/format/jpg/interlace/1/ignore-error/1"}}/>
                <View style={styles.topicInfo}>
                    <Text style={styles.forumTile} numberOfLines={1}>
                        游戏杂谈
                    </Text>
                    <Text style={styles.postNum} numberOfLines={1}>
                        帖子：5000
                    </Text>
                </View>
            </View>
        );
    }


    getItemView(item){

    }
}
const _separator = () =>{
    return <View style={{height:0.5, backgroundColor:"#c2c2c2", marginTop: 12,marginBottom: 12}}/>
};
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    topView:{
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    topicText:{
        fontSize:18,
        fontWeight: 'bold'
    },
    arrowIcon:{
        alignItems: 'center',
    },
    flatList:{
        justifyContent:'space-between',
    },
    item:{
        flexDirection: 'row',
        width: (Styles.ScreenWidth / 2) - 16,
    },
    topicIcon:{
        width:50,
        height:50,
        borderRadius:3
    },
    topicInfo:{
        justifyContent:'center',
        marginLeft: 5
    },
    forumTile:{
        fontSize: 14,
        fontWeight: 'bold',
        color:"#6e6e6e",
    },
    postNum:{
        fontSize: 12,
        color:"#979797",
        marginTop: 5
    }
});
