import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

import HotItem3 from '../hot/HotItem3'
import HotItem2 from "./HotItem2";
import HotItem1 from "./HotItem1";

export default class Hot extends React.Component{

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
                            {this.getItemView(item)}
                        </TouchableOpacity>
                    )}>
                </FlatList>
            );
        }
    }

    /**
     * 根据type获取不同的item的View
     * */
    getItemView(item){
        console.log("get Item View ");
        if (item.type === 3){
            return <HotItem3 item = {item}/>
        } else if(item.type === 2){
            return <HotItem2 item = {item}/>
        }else {
            return <HotItem1 item = {item}/>
        }
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
        let url = 'http://192.168.50.74:80/json/HotData.json';
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
    return <View style={{height:0.5, backgroundColor:"#c2c2c2", marginTop: 12,marginBottom: 12}}/>
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
        margin: 16
    },
    overAll: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 6,
        position: 'relative',
    }
});

