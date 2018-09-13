import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Avatar} from 'react-native-elements';

import Colors from '../../res/Colors';
import Styles from '../../res/Styles';

import settingIcon from '../../data/images/setting_w.png';
import shareIcon from '../../data/images/ic_nav_share.png';
import upIcon from '../../data/images/ic_up.png';
import funnyIcon from '../../data/images/ic_funny.png';
import Comment from "./commnet/Comment";
import Post from "./post/Post";



export default class Mine extends React.Component{

    static navigationOptions = {
        header:
            <View style={{height: 80, backgroundColor: Colors.primary, justifyContent: 'flex-end',alignItems:'flex-end', flexDirection:'row'}}>
                <Text style={{fontSize:20, color:'white', width:20, marginBottom: 10, marginRight: ((Styles.ScreenWidth / 2) -10-28-28-30-16)}}>我</Text>
                <Image source={shareIcon} style={{width: 28, height: 28, marginRight: 30, marginBottom: 10}}/>
                <Image source={settingIcon} style={{width: 28, height: 28, marginRight: 16, marginBottom: 10}}/>
            </View>
    };

    constructor(props){
        super(props);
        this.state = {
            loaded: false,
            data : ''
        }
    }

    render(){
        let ScrollableTabView = require('react-native-scrollable-tab-view');
        return(
            <View style={styles.container}>

                <View style={styles.headerView}>
                    <View style={styles.avatar}>
                        <Avatar
                            width={80}
                            height={80}
                            borderWidth={2}
                            borderColor={Colors.primary}
                            rounded
                            source={{uri: this.state.data.userIcon}}/>
                    </View>
                    <View style={styles.infoView}>
                        <View style={styles.userInfoView}>
                            <Text style={styles.userName}>
                                {this.state.data.userName}
                            </Text>
                            <Text style={styles.userId}>
                                ID:{this.state.data.userId}
                            </Text>
                        </View>
                        <View style={styles.userFansView}>
                            <View style={styles.fansTextView}>
                                <Text style={styles.fansNum}>
                                    {this.state.data.careNum}
                                </Text>
                                <Text style={styles.fansText}>
                                    关注
                                </Text>
                            </View>
                            <View style={{width: 1, height: 40, backgroundColor:Colors.gray}}/>
                            <View style={styles.fansTextView}>
                                <Text style={styles.fansNum}>
                                    {this.state.data.funNum}
                                </Text>
                                <Text style={styles.fansText}>
                                    粉丝
                                </Text>
                            </View>
                            <View style={{width: 1, height: 40, backgroundColor:Colors.gray}}/>
                            <View style={styles.fansTextView}>
                                <Text style={styles.fansNum}>
                                    {this.state.data.collectionNum}
                                </Text>
                                <Text style={styles.fansText}>
                                    收藏
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                {
                    _divider()
                }
                {
                    _edit(this.state.data)
                }
                {
                    _divider2()
                }
                <ScrollableTabView
                    tabBarUnderlineStyle={tabStyle.line}
                    tabBarActiveTextColor="#33cccc"
                    tabBarTextStyle={styles.tabBarText}>
                    <Comment tabLabel="评论" navigation = {this.props.navigation}/>
                    <Post tabLabel="帖子" navigation = {this.props.navigation}/>
                </ScrollableTabView>
            </View>
        );
    }

    /**
     * 组件加载完成后再去获取数据，避免加载组件的时候卡顿
     * */
    componentDidMount(){
        if (this.state.loaded === false){
            this.getHotData()
        }
    }

    /**
     * 通过网络请求去获取数据，并且更新数据
     * */
    getHotData(){
        let url = 'http://192.168.50.74:80/json/UserInfo.json';
        fetch(url)
            .then((response) => (response.json()))
            .then((responseData) => {
                this.setState({
                    loaded : true,
                    data : responseData.data,
                });
            })
            .catch((err) => {
                this.setState({
                    loaded : true,
                    data : err,
                });
            });
    }
}

const _divider = () =>{
    return <View style={{margin: 16, height: 1, backgroundColor: Colors.gray}}/>
};

const _divider2 = () =>{
    return <View style={{height: 10, backgroundColor: "#eeeeef", marginTop: 10}}/>
};

const _edit = (data) => {
    return (
        <View style={editStyle.container}>
            <View style={editStyle.upView}>
                <Image source={upIcon}/>
                <Text style={editStyle.upNum}>{data.upNum}</Text>
                <Image source={funnyIcon} style={editStyle.upIcon}/>
                <Text style={editStyle.upNum}>{data.funNum}</Text>
            </View>
            <Text style={editStyle.editView}>编辑资料</Text>
        </View>
    );
};

const tabStyle = StyleSheet.create({
    line: {
        height: 2,
        backgroundColor: '#33cccc',
    },
    tabBarText:{
        fontSize: 18,
    }
});

const editStyle = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center'
    },
    upView:{
        flexDirection:'row',
        marginLeft: 16,
        alignItems: 'center'
    },
    editView:{
        backgroundColor: Colors.primary,
        color:'white',
        marginRight:14,
        padding: 3,
        fontSize: 14
    },
    upNum:{
        color: "#99999a",
        marginLeft: 5
    },
    upIcon:{
        marginLeft: 10
    }
});

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'white',
    },
    headerView:{
        flexDirection:'row',
        height:112
    },
    avatar:{
        margin: 16,
    },
    infoView:{
        justifyContent:'space-between',
        flex:1
    },
    userInfoView:{
        flex: 1,
        marginTop: 16
    },
    userName:{
        color:"#797979",
        fontSize:18
    },
    userId:{
        color:"#99999a",
        fontSize:12,
        marginTop: 8
    },
    userFansView:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginLeft: 16,
        marginRight: 32,
    },
    fansTextView:{
        justifyContent:'center',
        alignItems:'center',
    },

    fansText:{
        alignItems:'center',
        color: "#99999a",
        fontSize: 13
    },
    fansNum:{
        color:"#646464",
    }
});
