### js语法
>JavaScript是一个脚本语言，轻量级，功能强大的编程语言
-JavaScript字面量（固定值成为字面量，如3.14）
    +数字字面量Number（3.14，1001，123e5）
    +字符串String（'单引号',"双引号"）
    +表达式字面量（5+3，8*6）
    +数组字面量Array    [199,288,388]
    +对象字面量Object   {firstName:"Jhon",LastName:"Leo",age:"22"}
    +函数字面量Function     function myFunction(a,b){return a*b;}
-变量
    +var x
    +let y
-操作符
    +算术运算符
-语句
    +每条语句之间分号间隔
-关键字
-注释
-数据类型
-js函数
-js字母大小写敏感
-字符集 
 ============================================================
 =============================================================
 ### JavaScript变量
    // 基于VAR创建一个叫n的变量，让其具体的值是10
        var n = 10;    
        // 创建一个叫m的变量，但此时没有让其指向任何的值
        var m ;
        // 在控制台输出n m变量所代表的值
        console.log(n,m)    //=>10 undefined

        //2.基于ES6中的LET创建一个变量，让其指向100；但后期让其重新指向了200；   
        let a = 100;
        a = 200;    
        console.log(a); //=>200

        // 3.基于es6中的const创建一个变量，让其指向1000，从此b就不能在指向其它的值了，
        // 一旦修改指向，就会报错；所以基于const定义的变量一般也被称为常量
        // const b = 1000;
        // b = 2000;
        // console.log(b); //出现错误，const常量，赋值后，如果再次赋值会出错、

        // 4.创建一个函数：也可以理解为创建一个变量func,让其指向这个函数
        function func(){

        }
        console.log(func);

        // 5.创建一个类：也可以理解为创建一个变量Parent，让其指向这个类
        class Parent{

        }
        console.log(Parent);

        // 6.基于模块规范来导入具体的某个模块：定义一个叫做axios的变量，用来指向导入的这个模块
        // import axios from './axios';
        // let axios = require('./axious');
        


### 2.变量命名规范
-严格遵循大小写
       
        //=>编写代码是一定要区分大小写问题
        let Test = 100;
        console.log(test);  //=>报错，test is not defined
    

-使用驼峰命名法
>由有意义英文组成一个名字，第一个单词首字母小写，其余每一个有意义的单词首字母大写
    '''
       let studentInformation{
            name:'罗文姬女士'
        };
        
        let studentInfo = {};
    '''

//=>项目中常见的有特殊含义的端词组
add / insert / create 新增/插入/创建
del / remove 删除/移除
update 修改
select / query / get 查询/获取
info 信息

'''

-命名规则：使用"$、_、英文字母、数字"命名
>数字不能做开头


        //基于$开头：一般代表使用JQ或者骑他使用$的类库获取的内容
        let $box = $('.box');
        // 基于_开头：一般代表是全局或者公共的变量
        let _box = {};
        // 基于数字区分相似名称的变量
        let box1 = 10;
        let box2 = 20;
        // 想要分割单词，有_隔开，或者用驼峰单词


-不能使用关键字和保留字
>关键字：在js中有特殊含义的
>保留字：未来可能会成为关键字的

### js中常用的输出类型
-console 控制在浏览器控制台输出的
    +console.log()控制台输出日志
    +console.dir()控制台详细输出
    +console.table() 把数据以表格形式输出在控制台
    +console.time()/timeEnd() 计算某一个程序消耗的实践
    +console.warn() 输出警告信息
    +...
-windows提示框框
    +alert()提示框
    +confirm()确认取消提示框
    +prompt()在confirm的基础上多加一个原因
-向页面指定容器中插入内容
    +document.write 向页面输入内容
    +innerHTML / innerText 向页面指定容器中输入内容
    +value 向页面表单元素输入内容
    +......

### JS语句标识符
js语句通常以一个语句标识符为开始，并执行该语句
语句标识符是保留关键字不能作为变量名使用
    break 跳出循环
    catch 语句块，在try语句执行出错时执行catch语句块
    continue 跳过循环中的一个迭代
    do……while 语句条件为真时执行，否则跳出循环
    for 语句条件为真时执行，可以将代码块执行指定的次数
    for……in 用于遍历数组或者对象的属性
    function    定义一个函数
    if……else    用于基于不同的条件来执行不同的动作
    return  退出函数
    switch  用于基于不同的条件来执行不同的动作
    throw   抛出错误
    try 实现错误处理，与catch一同使用
    var 声明一个变量
    while   当条件语句为true时，执行语句块
    
 ### JavaScript对象
 
-关于对象
    +单个（对象）变量定义   var car = "Fiat";
    +对象也是一个变量，但对象可以包含多个值（多个变量） var car = {type:"Fiat", model:500, color:"white"};
-对象属性
    +js对象是键值对的容器
    +写法  name : value
-访问对象属性
    +person.lastName;
    +person["lastName"];
-对象方法
    +在对象中定义一个函数，通过添加()调用
            name = person.fullName();

        '''
            <p id="demo1"></p>
            <p id="demo2"></p>
            <script>
            var person = {
                firstName: "John",
                lastName : "Doe",
                id : 5566,
                fullName : function() 
                {
                return this.firstName + " " + this.lastName;
                }
            };
            document.getElementById("demo1").innerHTML = "不加括号输出函数表达式："  + person.fullName;
            document.getElementById("demo2").innerHTML = "加括号输出函数执行结果："  +  person.fullName(); 
        '''   
    +创建对象的方法
        methodName ： function(){//代码} 

### JavaScript函数
    function functionname(){
        //执行代码
    }
-调用带参数的函数
'''
    <p>点击按钮，调用带参数的函数</p>
    <button onclick="myFunction('Lily','rider')">点击</button>
        <script>
            function myFunction(name,job){
                alert("Welcome " + name + ",the " + job );
            }
        </script>
'''
-带返回值的函数
>通过return语句，函数将值返回到调用他的地方，在使用return时，函数会停止执行，并返回指定的值

    function myFunction(a,b)
    {
        if (a>b)
        {
            return;
        }
        x=a+b
    }
    //如果a>b，则退出函数，并不会计算a+b的值

-向未声明的JavaScript变量分配值
    var var1 = 1; // 不可配置全局属性
    var2 = 2; // 没有使用 var 声明，可配置全局属性

    console.log(this.var1); // 1
    console.log(window.var1); // 1
    console.log(window.var2); // 2

    delete var1; // false 无法删除
    console.log(var1); //1

    delete var2; 
    console.log(delete var2); // true
    console.log(var2); // 已经删除 报错变量未定义
### JavaScript作用域
>作用域为可访问变量，对象，函数的集合
>JavaScript函数作用域：作用域在函数内修改

### 事件
>在事件触发时JavaScript可以执行。HTML元素中可以添加事件属性，使用JavaScript代码来添加HTML元素
    
    <button onclick="getElementById('demo').innerHTML=Date()">现在的时间是?</button>
>常见的HTML事件
    onchange	HTML 元素改变
    onclick	用户点击 HTML 元素
    onmouseover	用户在一个HTML元素上移动鼠标
    onmouseout	用户从一个HTML元素上移开鼠标
    onkeydown	用户按下键盘按键
    onload	浏览器已完成页面的加载

### 字符串
>字符串可以是对象
    +原始值 var firstName = "John"
    +定义对象

>通常， JavaScript 字符串是原始值，可以使用字符创建： var firstName = "John"

>但我们也可以使用 new 关键字将字符串定义为一个对象： var firstName = new String("John")
======================================================================
### JavaScript switch语句
>请使用switch语句来选择要执行的多个代码块之一。
    switch(n){
        case 1:
            //执行代码块1
            break;
        case 2:
            //执行代码块2
            break;
        default:
            与case1和case2不同时执行的代码块
    }
>原理：首先设置表达式n(通常是一个变量)。随后表达式的值会与结构中的每一个case的值作比较。如果匹配，则于该case关联的代码块会被执行。请使用break来阻止代码自动地向下一个case运行
      <!--   <p>点击下面的按钮来显示今天是周几：</p>
    <button onclick="f()">check</button>
    <p id="demo"></p> -->
    <script>
        /* function f(){
            var x;
            var d = new Date().getDay();
            switch(d){
                case 0 : x = "星期日";
                break;
                case 1 : x = "星期一";
                break;
                case 2 : x = "星期er";
                break;
                case 3 : x = "星期s";
                break;
                case 4 : x = "星期si";
                break;
                case 5: x = "星期wu";
                break;
                case 6: x = "星期liu";
                break;
            }
            document.getElementById("demo").innerHTML = x;
        } */
        /* function f(){
            var x;
            var d = new Date().getDay();
            switch(d){
                case 6:x = "今天是星期六";
                break;
                case 0:x = "今天是周日";
                break;
                default:
                x = "期待周末";
            }
            document.getElementById("demo").innerHTML=x;
        } 
        </script>

### javaScript循环
-不同类型的循环
    +for循环_循环代码块一定的次数
            for (语句 1; 语句 2; 语句 3)
            {
                被执行的代码块
            }
            <!-- 语句 1 （代码块）开始前执行
            语句 2 定义运行循环（代码块）的条件
            语句 3 在循环（代码块）已被执行之后执行 -->
            //点击循环代码五次：
            function f3(){
            var x="";
            for(var i = 0;i < 5; i++){
                x = x +"该数字为" + i +"<br>";
            }
            document.getElementById("demo").innerHTML = x;
    +for/in_循环遍历对象的属性
            function f4(){
            var x;
            var txt ="";
            var person = {fname:"Bill",lname:"Gates",age:33};
            for(x in person){
                txt = txt + person[x];
            }
            document.getElementById("demo").innerHTML = txt;
            }
    +while_当指定的条件为true时循环指定的代码块
            function f5(){
            var x = "",i = 0;
            while(i<5){
                x = x + "该数字为" + i +"<br>";
                i++;
            }
            document.getElementById("demo").innerHTML = x;
            }
    +do/while_同样当指定的条件为true时循环指定的代码块
        >do/while循环时while循环的变体。该循环会在检查条件是否为真之前执行一次代码块，然后如果条件为真的话，就会重复这个循环
            function f5(){
                var x = "",i = 0;
                do{
                    x = x + "该数字为" + "<br>";
                    i++；
                }
                while(i<5>)
                document.getElementById("demo").innerHTML = x;
            }

### break和continue语句
>break语句用于跳出循环，continue用于跳过循环中的一个迭代
>之前章节里用于跳出switch()语句
    +break用于跳出循环，会继续执行该循环之后的代码（如果有的话）
            function f6(){
                var x ="",i = 0;
                for(i = 0;i < 10;i++){
                if(i == 3) break;        
                x = x+"This number is " + i +"<br>";
            }
            document.getElementById("demo").innerHTML = x;
            }
    +continue语句终端循环中的迭代，如果出现了指定的条件，然后继续循环中的下一个迭代
            function f7(){
            var x ="",i = 0;
            for(i = 0;i < 10;i++){
                if(i == 3) continue;
                x = x + "this number is " + i + "<br>";
                
            }
            document.getElementById("demo").innerHTML = x;
            }

### typeof,null,undefined
    +typeof操作符
        >可使用typeof操作符来检测变量的数据类型
            document.getElementById("demo").innerHTML = 
            typeof "Hello" +"<br>"+     //string
            typeof 3.14+"<br>"+         //number
            typeof false+"<br>"+        //boolean
            typeof [1,2,3]+"<br>"+      //object
            typeof{name:'Jhon',age:34}; //object
            <!-- 在JavaScript中，数组是一种特殊的对象类型。 因此 typeof [1,2,3,4] 返回 object。 -->
    +null是一个只有一个值的特殊类型。表示一个空对象引用
        >用typeof检测null，返回object。
        >你可以设置为null来清空对象             
        >你可以设置undefined来清空对象
            var person = {fname:"Bill",lname:"Gates",age:33};
             var person = null; //var person = undefined;
             document.getElementById("demo").innerHTML = typeof person;
    +undefined是一个没有设置值的变量，typeof一个没有值的变量返回undefined
        var person; //值为undefined（空），类型时undefined

>//测试null和undefined的区别
        document.getElementById("demo").innerHTML = typeof undefined +"<br>"+           //undefined
        typeof null +"<br>"+        // object
        (null === undefined) + "<br>" +     //flase,类型不同
        (null == undefined);            //true，值相等

### JS中的数据类型
-基本数据类型（值类型/原始值）
    +数字 number
    +字符串 string
    +布尔 Boolean
    +空对象指针 null
    +未定义 undefined
    +ES6新增的唯一值类型 symbol
-引用数据类型
    +对象数据类型 object
        +普通对象{}
        +数组对象[]
        +正则对象 /^&/
        +数学函数对象 Math
        +日期对象 new Date
        +...
    +函数数据类型 function

### typeof操作符,constructor属性
>注意！！：
        NaN 的数据类型是 number
        数组(Array)的数据类型是 object
        日期(Date)的数据类型为 object
        null 的数据类型是 object
        未定义变量的数据类型为 undefined
        如果对象是 JavaScript Array 或 JavaScript Date ，我们就无法通过 typeof 来判断他们的类型，因为都是 返回 object。
>constructor属性返回所有JavaScript变量的构造函数
        //constructor属性返回所有JavaScript变量的构造函数
        document.getElementById("demo").innerHTML= 
        "John".constructor + "<br>" +       //function String() { [native code] }
        (3.14).constructor+ "<br>" +        //function Number() { [native code] }
        false.constructor+ "<br>" +         //function Boolean() { [native code] }
        [1,2,34].constructor+ "<br>" +      //function Array() { [native code] }
        {name:'Jhon',age:33}.constructor+ "<br>" +  //function Object() { [native code] }
        new Date().constructor+ "<br>" +        //function Date() { [native code] }
        function(){}.constructor;           //function Function() { [native code] }

### JavaScript类型转换
-数字转换字符串
    +全局方法String()，该方法可用于任何类型的数字，字母，变量，表达式：
        String(x)      //将变量x转换为字符串并返回
        String(123)    //将数字123转换为字符串并返回
        String(100+23) //将数字表达式转换为字符串并返回
    +Number方法toString()也是同样的效果
        x.toString()
        (123).toString
        (100+23).toString
-布尔值转换为字符串
    +String(false)  //返回"false"
    +String(true)   //返回"true"
    或者false.toString(),true.toString()
-日期转换为字符串
    +Date()  //返回现在的日期
    +String(new Date())
    实例：
    obj = new Date()
    obj.toString()
-字符串转换为数字
    Number()
        >全局方法 Number() 可以将字符串转换为数字。
        >字符串包含数字(如 "3.14") 转换为数字 (如 3.14).
        >空字符串转换为 0。
        >其他的字符串会转换为 NaN (不是个数字)。
            Number("3.14")    // 返回 3.14
            Number(" ")       // 返回 0
            Number("")        // 返回 0
            Number("99 88")   // 返回 NaN
-加号+ 可用于将变量转换为数字
            function f8(){
            var y = "5";    //String
            var x = + y;    //Number
            document.getElementById("demo").innerHTML = typeof y + "<br>" +typeof x;
            }
-布尔转换为数字
    Number(false)   //返回0
    Number(true)    //返回1
-日期转换为数字
    d = new Date();
    Number(d);
    或者    d = new Date(); d.getTime();

================================================================

### JavaScript正则表达式
>正则表达式使用单个字符串来描述、匹配一系列符合某个语句规则的字符串搜索模式。搜索模式可用于文本搜索和文本替换
-什么是正则表达式？
    >正则表达式是由一个字符序列形成的搜索模式。
    >当你在文本中搜索数据时，你可以用搜索模式来描述你要查询的内容
    >正则表达式是一个简单的字符，或一个更复杂的模式
    >正则表达式可用于所有文本搜索和文本替换的操作
-语法：
    -/正则表达式主题/修饰符（可选）
        var patt = /runoob/i
    <!-- /runoob/i是一个正则表达式。runoob是一个正则表达式主体，i是一个修饰符（搜索不区分大小写） -->
        -修饰符
            +i：执行对大小写不敏感的匹配
            +g：执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）
            +m：执行多行匹配
    -正则表达式模式：
        +方括号用于查找某个范围内的字符
            >[abc],[0-9]查找方括号之间的任何字符，查找任何0至9的数字 
        +元字符是拥有特殊含义的字符
            > \d查找数字
            > \s查找空白字符
            > \b匹配单词边界
        +量词
            >n+ 匹配任何包含至少一个n的字符串
            >n* 匹配任何包含零个或多个n的字符串
            >n? 匹配任何包含零个或一个n的字符串
-使用字符串方法
>在js中，正则表达式通常用于两个字符串方法：
    +search()
    >用于检索字符串中指定的子字符串，或检索于正则表达式相匹配的子字符串，并返回子串的其实位置
        var str = "Visit Runoob";
        var n = str.search("Runoob");
    +replace()
    >用于在字符串中用一些字符替换另一些字符，或者替换一个于正则表达式匹配的子串
        >使用正则表达式且不区分大小写将字符串中的 Microsoft 替换为 Runoob :
        var str = document.getElementById("demo10).innerHTML;
        var txt = str.replace(/microsoft/i,"Runoob");
    +实例：使用正则表达式搜索"Runoob"字符串，且不区分大小写
        function f9(){
            var str = "Visit Runoob!";
            var n = str.search(/Runoob/i);
            document.getElementById("demo9").innerHTML = n;
        }
-使用RegExp对象（查参考手册）
-使用test()
>test()方法是一个正则表达式方法，用于检测一个字符串是否匹配某个模式，如果字符串中含有匹配的文本，则返回true，否则返回false。
        var patt1 = new RegExp("e");
        document.write(patt1.test("The best things in life are free"));
-exec()
>exec()方法是一个正则表达式方法，用于检测字符串中的正则表达式的匹配。该函数返回一个数组，其中存放匹配的结果。如果未找到匹配，则返回值为null。
        var patt = new RegExp("e");
        var x = patt.exec("The best things in life are free");
        document.getElementById("demo12").innerHTML = x;
        

