import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Result } from 'antd-mobile';
import PubSub from 'pubsub-js';
class Main extends Component {


    state = { 
        initView: true,
        loading: false,
        users: null,
        errorMsg: null
    }

    componentDidMount(){
        // 订阅消息(search)
        PubSub.subscribe('search',(msg,searchName) =>{
            //指定了新的searchName，需要请求
            
        this.setState({
            initView:false,
            loading:true
        })
        const url = `https://api.github.com/search/users?q=${searchName}`
        axios({
            url:'https://api.github.com/search/users',
            method:'get',
            params:{
                q:searchName
            }
        })
        .then(response =>{
            // 得到响应数据
            const result = response.data
            console.log(result);
            const users = result.items.map(item =>({name:item.login,url:item.html_url,avatarUrl:item.avatar_url}))
            // 更新数据succ
            this.setState({loading:false,users})
        })
        .catch(response =>{
            // 更新数据error
            this.setState({loading:false})
        })
        })
    }

    render() {
        const {initView,loading,users,errorMsg} = this.state;
        const {searchName} = this.props;
        if(initView){
            return <h2>Please Input:</h2>
        }else if(loading){
            return <h2>loading...</h2>
        }else if(errorMsg){
            return <h2>error</h2>
        }else{
            return ( 
            <div className="row" >
                {
                    users.map((user,index) =>(
                    <div className="card" key = {index}>
                    <a href={user.url} target="_blank">
                    <img src={user.avatarUrl} style={{width: 100}}/>
                    <p className="card-text">{user.name}</p>
                    </a>
                    </div>
            
                ))
                }
            </div>
         )
        }

    }
}
 
export default Main;