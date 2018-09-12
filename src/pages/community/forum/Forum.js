import React from 'react';
import {View, Text, StyleSheet, FlatList, ScrollView, ActivityIndicator} from 'react-native';
import Styles from '../../../res/Styles';
import ForumItem from "./ForumItem";
import UsuallyList from "./UsuallyList";

export default class Forum extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            loaded: false,
            refreshing : false,
            data : null,
            code : -1,
            loadMore:0,  //0为不加载状态，1为正在加载状态，2为无更多
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
        }else {
            return(
                <FlatList
                    style={styles.list}
                    refreshing={false}
                    onRefresh={_refreshing}
                    onEndReachedThreshold={0.2}
                    onEndReached={this.onLoad()}
                    ItemSeparatorComponent={_separator}
                    showsVerticalScrollIndicator={false}
                    data={this.state.data}
                    ListHeaderComponent={_header}
                    ListFooterComponent={_footer(this.state.loadMore)}
                    renderItem = {({item}) =>(
                        <View >
                            <ForumItem item={item} navigation={this.props.navigation}/>
                        </View>
                    )}>
                </FlatList>
            );
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
        let url = 'http://192.168.50.74/json/ForumData.json';
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

    onLoad = () =>{
        const timer = setTimeout(() => {
            /*this.setState({
                loadMore: 1
            });*/
            clearTimeout(timer);
            /*this.setState({
                loadMore: 2
            });*/
        }, 3000);
    };
}

const _header = () =>{
    return(
        <View>
            <View style={styles.divideLine}/>
            <UsuallyList/>
        </View>
    );
};

const _footer = (loadMore) =>{
    if (loadMore === 0){
        return null
    } else if (loadMore === 1){
        return(
            <View style={styles.footerView}>
                <ActivityIndicator />
                <Text>正在加载更多数据...</Text>
            </View>
        );
    } else {
        return(
            <View style={styles.footerView}>
                <Text>---------我是有底线的---------</Text>
            </View>
        );
    }

};

const _separator = () =>{
    return <View style={{height:0.5, backgroundColor:"#c2c2c2", marginTop: 10,marginBottom: 10, marginLeft: 16, marginRight: 16}}/>
};

const _refreshing = () => {
    const timer = setTimeout(() => {
        clearTimeout(timer);
    }, 3000)
};

const styles = StyleSheet.create({
    container :{
        flex: 1,
    },
    list: {
        flex:1,
    },
    divideLine:{
        backgroundColor: "#e9e9e9",
        height:10,
    },
    overAll: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 6,
        position: 'relative',
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
        fontWeight: 'bold'
    },
    headerArrow:{
        alignItems: 'center',
    },
    footerView:{
        width:Styles.ScreenWidth - 32,
        justifyContent: 'center',
        alignItems:'center',
        marginTop: 20
    },
    footerText:{
        color:"#b8b8b8",
        alignItems:'center'
    }
});

