import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Result } from 'antd-mobile';
class Main extends Component {
    static propTypes ={
        searchName:PropTypes.string.isRequired
    }

    state = { 
        initView: true,
        loading: false,
        users: null,
        errorMsg: null
    }
    componentWillReceiveProps(newProps){
    
        const {searchName} = newProps

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