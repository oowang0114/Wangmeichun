## 实现静态页面
## 动态组件
### 实现初始化效果(state)
    init: Enter name to search
    loading:loading result
    succ=>users
    false=>errorMsg
### 发请求
    在当前组件发请求更新方便=>main
    点击search的按钮触发，main接收input中的关键字条件，
>两个兄弟组件search、main之间传递数据：
    search=>app=>main
## 接收的属性是否发生变化 ===> 组件生命周期
                父组件render
                    |
        componentWillReceiveProps(newProps)

 
