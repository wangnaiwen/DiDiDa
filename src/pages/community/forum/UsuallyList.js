import React from 'react';
import {View, Text, Image, FlatList, StyleSheet} from 'react-native';


export default class UsuallyList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            data:[1,2,3,4,5,6]
        }
    }

    render(){
        return(
            <View>
                <Text style={styles.headerText}>
                    最近浏览
                </Text>
                <FlatList
                    style={styles.container}
                    refreshing={false}
                    onEndReachedThreshold={0}
                    showsHorizontalScrollIndicator={false}
                    data={this.state.data}
                    horizontal={true}
                    renderItem = {({item}) =>(
                        <View style={styles.item}>
                            <Image style={styles.image} source={{uri: "https://img.tapimg.com/market/images/da89fa48a741d3e3561ef4ba01640c73.jpg?imageView2/0/w/1080/q/40/format/jpg/interlace/1/ignore-error/1"}}/>
                            <Text style={styles.gameName} numberOfLines={1}>
                                王者荣耀
                            </Text>
                        </View>
                    )}>
                </FlatList>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row'
    },
    headerText:{
        fontSize:18,
        color:"#444444",
        marginLeft: 16,
        marginTop: 16
    },
    item:{
        justifyContent: 'center',
        alignItems: "center",
        marginLeft: 16,
        marginTop:16,
        marginBottom: 16
    },
    image:{
        width: 80,
        height: 80,
        borderRadius:5
    },
    gameName:{
        alignItems:'center',
        marginTop: 5,
        color:"#444444",
    }
});
