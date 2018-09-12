import React from 'react';
import {View, Text, FlatList, StyleSheet,Image, TouchableOpacity} from 'react-native';
import VideoView from "./VideoView";
import ItemTitle from "./ItemTitle";
import ItemBottom from "./ItemBottom";
import Styles from "../../../res/Styles";


export default class Care extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            loaded: false,
            refreshing : false,
            data : null,
            code : -1
        }
    }

    render(){
        if (this.state.loaded === false){
            return(
                <View style={styles.container}>
                    <Text>
                        数据为空  {this.state.data}
                    </Text>
                </View>
            );
        } else {
            return (
                <FlatList
                    style={styles.container}
                    ItemSeparatorComponent={_separator}
                    showsVerticalScrollIndicator={false}
                    data={this.state.data}
                    refreshing={false}
                    onRefresh={_refreshing}
                    onEndReachedThreshold={0}
                    onEndReached={_onLoad}
                    renderItem = {({item}) =>(
                        <TouchableOpacity onPress={() => {this.onClick(item)}}>
                            <View style={styles.item}>
                                <ItemTitle item = {item}/>
                                {this.getTextView(item)}
                                {this.getResourceView(item)}
                                <ItemBottom item = {item}/>
                            </View>
                        </TouchableOpacity>
                    )}>
                </FlatList>
            );
        }
    }

    getTextView(item){
        return(
            <View style={styles.gameInfo}>
                <Text style={styles.titleText} numberOfLines={2}>
                    {item.title}
                </Text>
                <Text style={styles.descText} numberOfLines={2}>
                    {item.desc}
                </Text>
            </View>
        );
    }

    /**
     * 根据type获取不同的item的View
     * */
    getResourceView(item){
        console.log("get Item View ");
        if (item.type === 1){
            return <VideoView item = {item}/>
        } else if(item.type === 2){
            return this.getImageView(item)
        }else {
            return <View/>
        }
    }

    getImageView(item) {
        return (
            <View>
                <Image source={{uri:item.src}} style={styles.image}/>
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
        let url = 'http://192.168.50.74:80/json/CareData.json';
        fetch(url)
            .then((response) => (response.json()))
            .then((responseData) => {
                this.setState({
                    loaded : true,
                    data : responseData.data,
                    code : 0
                });
            })
            .catch((err) => {
                this.setState({
                    loaded : true,
                    data : err,
                    code : 0
                });
            });
    }
}

const _separator = () =>{
    return <View style={{height:0.5, backgroundColor:"#c2c2c2",marginLeft: 16, marginRight: 16}}/>
};

const _refreshing = () => {
    const timer = setTimeout(() => {
        clearTimeout(timer);
    }, 3000)
};

const _onLoad = () =>{
    const timer = setTimeout(() => {
        clearTimeout(timer);
    }, 3000);
};

const styles = StyleSheet.create({
    container :{
        flex: 1,
    },
    item:{
        margin: 16
    },
    overAll: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 6,
        position: 'relative',
    },
    gameInfo:{
        justifyContent:'space-between',
        marginTop: 10
    },
    titleText:{
        fontSize: 16,
        fontWeight: 'bold',
        color: "#2d2b2f",
        letterSpacing: 1,
        lineHeight:25,
    },
    descText:{
        marginTop:8,
        marginBottom:10,
        fontSize: 14,
        color: "#b3b3b3"
    },
    image:{
        flex: 1,
        height: 200,
        width: Styles.ScreenWidth - 32
    }
});

