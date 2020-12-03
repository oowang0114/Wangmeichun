
## 1.静态页面
## 2.初始化数据动态显示：comments[]
### 公用的属性放于父组件中
    app： 
        1.给组件指定state属性
        2.在render()中先取出来
        3.将comments传递<List />
    =>list：
        1.声明接收什么类型的属性
        2.在render()中先去出来
    =>item：
        1.item将list中<li></li>写入组件
        2.接收comment对象，声明接收什么类型的属性
        3.在render()中取出来
        4.改写username，content为动态。
        {comment.username}和{comment.content}
    =>list:
        <ul></ul>标签中，引入item组件，实现动态数据
        {comment.map((comment,index) => <Item comment = {comment} key = {index}/>)}
## 3.交互:添加，删除 
  ### 添加：
        add：
            1.绑定事件监听，onClick、onChange 
                提交onClick={this.handSubmit}
                handSubmit = () =>{
                    <!-- 1.收集数据，并封装成comment对象 
                        受控组件：1.定义state//初始化state
                            state{
                                username:'',content:''
                            }
                        =>在render中取出来
                            const {username,content} = this.state,
                            input中定义value={username} -->
                    const comment = this.state
                    <!-- 2.更新状态 =>app中定义addComment()-->

                    <!-- 3.清除输入数据 -->
                    this.setState({
                        username : '',
                        content : ''
                    })
              
                }
            
                handleNameChange = (event) = >{
                    const username = event.target.value
                    this.setState({username})
                }
                handleContentChange = (event) =>{
                    const content = event.target.value
                    this.setState({content})
                }
        =>app:
            addComment = (comment) =>{
                const {comments} = this.state
                comments.unshift(comment)
                this.setState({comments})
            }
            <Add addComment = {addComment}/>
        =>add:
            接收方法属性
            static propTypes = {
                addComment : PropTypes.func.isRequired
            }
            =>handSubmit = () =>{
                const comment = this.state
                this.props.addComment(comment)
                this.setState({
                    username:'',
                    content:''
                })
            }
### 删除：
        app:
            1.删除评论的方法
            deleteComment = (index) =>{
                const {comments} = this.state
                comments.splice(index,1)
                this.setState({comments})
            }
            render()取出：const{deleteComment} = this.state
            <List deleteComment = {this.deleteComment}/>
        =>list:
            static propTypes = {
                deleteComment : PropTypes.func.isRequired
            }
            render()中取出
            <ul>标签内，获取deleteComment = {deleteComment},index = {index}
        =>item:
            1.接收声明
                static propTypes = {
                    deleteComment : PropTypes.func.isRequired,
                    index : PropTypes.number.isRequired
                }
            2.添加事件handleDel
                handleDel = ()=>{
                    const {comment,deleteComment,index} = this.props
                    if(window.confrim(`确定删除&{comment.username}的评论吗？`)){
                        deleteComment(index)
                    }
                }
            3.判断删除为空：
                const display = commen ts.length == 0 ? 'block' : 'none'
### 测试提交