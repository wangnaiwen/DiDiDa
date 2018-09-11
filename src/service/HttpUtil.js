'use strict'
import React, {Component} from 'react'

class HttpUtil extends Component{

    /**
     *
     * @param {request url} url
     * @param {response callback} callback
     */
    static get(url, callback){
        fetch(url)
        .then((response) => (response.json()))
        .then((responseData) => {
            callback(JSON.stringify(responseData))
        })
        .catch((err) => callback( err));
    }

    /**
     *
     * @param {*} url
     * @param {*} data
     * @param {*} callback
     */
    static postForm(url,data, callback){
        var fetchOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body:'data='+data+''//这里我参数只有一个data,大家可以还有更多的参数
        };
        fetch(url, fetchOptions)
        .then((response) => response.json())
        .then((responseData) => {
            callback(0, JSON.stringify(responseData))
        })
        .catch((err) => {
            callback(1,err)
        });
    }

    /**
     *
     * @param {http url} url
     * @param {post json} data
     * @param {response callback} callback
     */
    static postJson(url, data, callback){
        var fetchOptions = {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              //json形式
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          };

        fetch(url, fetchOptions)
          .then((response) => response.text())
          .then((responseText) => {
            callback(JSON.parse(responseText));
          })
          .catch((err) =>{
              callback(err)
          });
    }
}

module.exports = HttpUtil
