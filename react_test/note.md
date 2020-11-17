React

## react 入门
-react特点
    声明式编码
    组件化编码
    支持客户端与服务器渲染
    高效
        -虚拟DOM，不总是直接操作DOM
        -DOM Diff算法，最小化页面重绘
    单向数据流
-react基本使用
    1.导入相关js库
        -react.js:React的核心库
        -react-dom.js:提供操作DOM的react扩展库
        -babel.min.js:解析JSX语法代码转为纯JS语法代码的库
    2.在页面中导入js
        <script type="text/javascript" src="../js/react.development.js"></script>
        <script type="text/javascript" src="../js/react-dom.development.js"></script>
        <script type="text/javascript" src="../js/babel.min.js"></script>
    3.编码
        <script type="text/babel"> //必须声明babel
        // 创建虚拟DOM元素
        const vDom = <h1>Hello React</h1> //千万不要加引号
        // 渲染虚拟DOM到页面真实DOM容器中
        ReactDOM.render(vDom, document.getElementById('test'))
        </script>

-虚拟DOM
>我们编码时基本只需要操作react的虚拟DOM相关数据，react会转换为真实DOM变化而更新界面

-JSX（JavaScriptXML）
>react定义的一种类似于XML的js扩展语法：XML+JS
    -作用：用来创建react虚拟DOM（元素）对象
        var ele = <h1>Hello HSX!</h1>
        ！！:它不是字符串，也不是HTML或xml标签
        ！！：它最终产生的就是一个JS对象
    -基本语法规则
        遇到 < 开头的代码，以标签的语法解析：html同名标签转换为html同名元素，其它标签需要特别解析
        遇到 { 开头的代码，以JS语法解析：标签中的js代码必须用{}包含
    -babel作用
        浏览器不能直接解析jsx代码，需要babel转译为纯JS的代码才能运行
        ！：只要用来JSX，都要加上type = "text/babel"，声明需要babel来处理

-渲染虚拟DOM
    ReactDOM.render(virtualDOM,containerDOM)
    >将虚拟DOM元素渲染到页面中的真是容器DOM中显示
        -virtualDOM:纯js或jsx创建的虚拟dom对象
        -containerDOM：用来包含虚拟DOM元素的真是dom元素对象(一般是一个div)

## 创建虚拟DOM的方式
    jsx方式较为常用：
        <h1 id = 'myTitle'>{title}</h1>
## 模块与组件，模块化与组件化
    1.模块化：
        当应用的js都以模块来编写的，这个应用就是一个模块化的应用
    2.组件化：
        当应用是以多个组件的方式实现功能，这个应用就是一个组件化的应用
# 2.react组件化开发
## 2.1基本理解和使用 
    -自定义标签
        组件类（函数）/标签
    -//1.创建组件类
        //方式一：无状态函数（简单组件，推荐使用）
        function MyComponent1(props){
            return <h1>自定义组件标题</h1>
        }
        //方式二：ES6类语法（复杂组件，推荐使用）
        class MyComponent2 extends React.Component{
            render() {
                return <h1>自定义组件标题2</h1>
            }
        }
    -//2.渲染组件标签
        ReactDOM.render(<MyComponent />,containerEle)

## 2.2组件的3大属性：state
>组件被称为"状态机"，页面的显示是根据组件的state属性的数据来显示
    -初始化：
        construct() {
            super()
            this.state = {
                stateName1 : stateValue1,
                stateName2 : stateValue2
            }
        }

    

    


