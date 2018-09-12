import React from 'react';
import {View, Image, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

import arrowIcon from '../../../data/images/ic_arrow_right.png';
import Styles from '../../../res/Styles';


export default class ForumItem extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={styles.container}>
                {this.getHeaderView(this.props.item.title, this.props.item.forum.length)}
                <FlatList
                    ItemSeparatorComponent={_separator}
                    showsVerticalScrollIndicator={false}
                    data={this.props.item.forum}
                    refreshing={false}
                    onEndReachedThreshold={0}
                    numColumns={2}
                    renderItem = {({item}) =>(
                        <TouchableOpacity onPress={() => {this.onClick(item)}}>
                            <View >
                                {this.getItemView(item)}
                            </View>
                        </TouchableOpacity>
                    )}>
                </FlatList>
            </View>
        );
    }


    getItemView(item){
        return(
            <View style={styles.item}>
                <Image style={styles.topicIcon} source={{uri:item.forumIcon}}/>
                <View style={styles.topicInfo}>
                    <Text style={styles.forumTile} numberOfLines={1}>
                        {item.forumName}
                    </Text>
                    <Text style={styles.postNum} numberOfLines={1}>
                        帖子：{item.postNum}
                    </Text>
                </View>
            </View>
        );
    }

    /**
     * 单击事件
     * */
    onClick(item){
        console.log("onclick ");
        this.props.navigation.navigate('DetailPage', {item : item});
    }

    getHeaderView(title, length){
        return (
            <View style={styles.headerView}>
                <Text style={styles.headerText}>
                    {title}
                </Text>
                {this.getArrowView(length)}
            </View>
        );
    }

    getArrowView(length){
        if (length >= 10){
            return(
                <Image style={styles.headerArrow} source={arrowIcon}/>
            );
        }
        else {
            return null
        }
    }
}

const _separator = () =>{
    return <View style={{height:0.5, backgroundColor:"#c2c2c2", marginTop: 12,marginBottom: 12}}/>
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:16
    },
    headerView:{
        width:Styles.ScreenWidth - 32,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems:'center',
        marginBottom:16
    },
    headerText:{
        fontSize:18,
        color:"#444444"
    },
    headerArrow:{
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
