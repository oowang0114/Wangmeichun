/*
 * @Author: 王美纯
 * @Date: 2020-12-03 10:17:09 
 * @Last Modified by:  王美纯
 * @Last Modified time: 2020-12-03 10:17:09 
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './commentItem.css';
import PubSub from 'pubsub-js';


class CommentItem extends Component {
    
    static propTypes = {
        comment : PropTypes.object.isRequired,
        index : PropTypes.number.isRequired

    }
    handdel = ()=>{
      const {comment,index} = this.props
      // 提示
      if(window.confirm(`确定删除${comment.username}的评论吗`)){
        // 确定后删除(发生事件即需要发布publish消息)
        PubSub.publish('deleteComment',index)
      }
    }
      
    render() { 
        const {comment} = this.props;
        return ( 
            <li className="list-group-item">
              <div className="handle">
                <a href="javascript:;" onClick={this.handdel}>删除</a>
              </div>
              <p className="user"><span >{comment.username}</span><span>说:</span></p>
              <p className="centence">{comment.content}</p>
            </li>
            
         );
    }
}
 
export default CommentItem;