import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView, SectionList, Image} from 'react-native';
import ForumItem3 from "./ForumItem3";
import arrowIcon from "../../../data/images/ic_arrow_right.png";
import Styles from '../../../res/Styles';

export default class Forum3 extends React.Component{

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
        }else {
            return(
                <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                    <View style={styles.divideLine}/>
                    <SectionList
                        renderSectionHeader={_header}
                        renderSectionFooter={_footer}
                        contentContainerStyle={styles.list}//设置cell的样式
                        showsVerticalScrollIndicator={false}
                        ItemSeparatorComponent={_separator}
                        sections={[
                            {key: 1, data: '这是第1栏'},
                            {key: 2, data: '这是第2栏'},
                            {key: 3, data: '这是第3栏'},
                            {key: 4, data: '这是第4栏'},
                            {key: 5, data: '这是第5栏'},
                            {key: 6, data: '这是第5栏'},
                            {key: 7, data: '这是第6栏'},
                        ]}
                        renderItem = {({item}) =>(
                            <TouchableOpacity onPress={() => {this.onClick(item)}}>
                                <ForumItem3/>
                            </TouchableOpacity>
                        )}>
                    </SectionList>
                </ScrollView>
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

const _header = () =>{
    return (
        <View style={styles.headerView}>
            <Text style={styles.headerText}>
                官方论坛
            </Text>
            <Image style={styles.headerArrow} source={arrowIcon}/>
        </View>
    );
};
const _footer = () =>{
  return(
      <View style={styles.footerView}>
      </View>
  );
};


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
    },
    list: {
        //justifyContent: 'space-around',
        flexDirection: 'row',//设置横向布局
        flexWrap: 'wrap',  //设置换行显示
        alignItems: 'flex-start',
        margin:16
    },
    divideLine:{
        backgroundColor: "#e9e9e9",
        height:10
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
        height:0.5,
        marginTop:20,
        marginBottom:20,
        backgroundColor:"#afafaf"
    }
});

