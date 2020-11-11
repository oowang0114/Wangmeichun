兼容性
编译、转换
1.在线转换
2.提前编译

babel == browser.js

================================

ES6:
1.变量
2.函数
3.数组
4.字符串
5.面向对象
6.Promise
7.generator
8.模块化

### ES6 变量

var
1.可以重复声明
2.无法限制修改
3.没有块级作用域

let     
不能重复声明，变量-可以修改，块级作用域,
防止循环变量变成全局变量
不存在变量提升（必须先声明，在使用）
暂时性死区（块级作用域）
        // var是全局变量，能重复声明；let是块级作用域，不能重复声明

        // for循环计数器很适合用let
    /*     for(var i = 0; i < 10;i++){
            setTimeout(function(){
                console.log(i);
            })
        } */

    /*     if(true){
            let b;
            console.log(b);
            if(true){
                let c = 30;
            }
            console.log(c);
        }
        console.log(b); */
        //let定义的 b是局部变量，外部无法访问

        // 防止循环变量变成全局变量
    /* 
        for(let j = 0; j < 10;j++){
            setTimeout(function(){
                console.log(j);
            })
        } */

const   
不能重复声明，常量-不能修改，块级作用域
具有块级作用域
声明常量时必须赋值
        // const:具有块级作用域
        if (true) {
            const a = 10;
            if (true) {
                const a = 20;
                console.log(a);
            }
            console.log(a);
        }
        console.log(a);
        // 20,10,undefined
    */
        // const声明常量时必须赋值
    /*     const PI = 3.14;//正常 */
    /*     const PI; */     //报错

    // 常量-不能修改....内存地址不能修改
    /*     const PI = 3.14;
        PI = 3.14; */
        // Assignment to constant variable.
    /*     const ary = [100,200];
        ary[0] = 'a';
        ary[1] = 'b';
        console.log(ary);   //['a'.'b']
        ary = ['a','b'];    //Assignment to constant variable.
        */
### 5.解构赋值
>分解数据结构，为变量赋值
-数组解构
      //  解构赋值:数组解构允许我们按照一一对应的关系从数组中提取值，然后将值赋值给变量
        let ary = [1,2,3]
        let [a,b,c,d,e] = ary;  
        //等号左边：解构数组的意思,从数组中提取值，然后赋值给变量，如果变量没有对应 的值，那么undefined
        console.log(a);
        console.log(b);
        console.log(c);
        console.log(d);
        console.log(e);
-对象解构
        // 对象解构允许我们使用变量的名字匹配对象的属性，匹配成功将对象属性的值赋给变量

        let person = {name:'zhangsan',age:30,sex:'男'};
        let{ name,age,sex} = person;//变量匹配，然后赋值
        // console.log(name);
        // console.log(age);
        // console.log(sex);

        let{name:myName} = person;  //冒号左边，属性匹配；冒号右边才是真正的变量
        console.log(myName);

====================11.4==============================================
### 箭头函数
>箭头函数是用来简化函数定义语法的
/*         const fn = () => {
            console.log(123);
        }
        fn(); */
    /*   (形参) ={
            函数体
        } */

        //在箭头函数中，如果函数体中只有一句代码  并且代码的执行结果就是函数的返回值  函数体大括号可以省略
/*         const sum = (n1,n2) => n1 + n2;
        const result = sum(10,20);

        console.log(result); */

        // 在箭头函数中 如果形参只有一个，形参外侧的小括号也是可以省略的
        // const fn = v =>{
        //     alert(v);
        // }
        // fn(20);

        // 箭头函数不绑定this  箭头函数没有自己的this关键字  如果在箭头函数中使用this，this关键字将指向箭头函数定义位置中的this
        function fn(){
            console.log(this)
        }
        
        const obj ={name:'zhangsan'};

        fn.call(obj);

         /* JavaScript call() 方法
        call() 方法是预定义的 JavaScript 方法。
        它可以用来调用所有者对象作为参数的方法。
        通过 call()，您能够使用属于另一个对象的方法。
        本例调用 person 的 fullName 方法，并用于 person1.
        var person = {
        fullName: function() {
            return this.firstName + " " + this.lastName;
            }
        }
        var person1 = {
            firstName:"Bill",
            lastName: "Gates",
        }
        var person2 = {
            firstName:"Steve",
            lastName: "Jobs",
        }
        person.fullName.call(person1);  // 将返回 "Bill Gates" */
    
### 剩余参数(...)
>剩余参数语法允许我们将一个不定数量的参数表示为一个数组
            const sum = (...args)=>{
            let total = 0;
            args.forEach(item => total += item);
            return total;
            };

            console.log(sum(10,20));
            console.log(sum(10,20,30));

            /* JavaScript forEach()方法 
                forEach()方法用于调用数组的每个元素，并将元素传递给回调函数。
                注意：forEach()对于空数组时不会执行回调函数的。
            */
>剩余参数和解构赋值一起使用
        let ary1 = ['zhangsan','lisi','wangwu'];
        let [s1,...s2] = ary1;
        console.log(s1);
        console.log(s2);

### Array的扩展方法
-扩展运算符
>扩展运算符可以将数组或者对象转为用逗号分隔的参数序列
        let ary = ["a","b","c"];
        // ...ary;    //"a","b","c"
        console.log(...ary);
        console.log("a","b","c");

>扩展运算符应用于数组合并
    
    >方法一
    /*         let ary1 = [1,2,3];
            let ary2 = [4,5,6];
            
            let ary3 = [...ary1,...ary2];
            console.log(ary3); */

    >合并数组的第二种方法
    /*         let ary1 = [1,2,3];
            let ary2 = [4,5,6];

            ary1.push(...ary2);
            console.log(ary1);
    */
            //push()方法可向数组的末尾添加一个或多个元素，并返回新的长度
            // 注意：新元素将添加在数组的末尾，此方法改变数组的长度
            // 提示：在数组起始位置添加元素，使用unshift()方法

    > 利用扩展运算符将伪数组转换为真正的数组
            var oDivs = document.getElementsByTagName('div');
            console.log(oDivs); //此时输出的时伪数组
            var ary = [...oDivs];
            console.log(ary);   //此时输出的时真实的数组
            ary.push('a');  //只有真正的数组，才能使用数组的一些方法
            console.log(ary);
        
-Array.from()方法

>一：将类数组或可遍历对象转换为真正的数组
            var arrayLike ={
            "0":"zhangsan",
            "1":"lisi",
            "2":"wangwu",
            "length":3
        }
        //此时arrayLike是一个伪数组
        
       var ary = Array.from(arrayLike);
       console.log(ary);

>二：此方法还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组。

    // map()方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
    // map()方法按照原始数组元素进行处理元素。
    // 注意：1.map()不对空数组进行检测  2.map()不会改变原始数组
        var arrayLike ={
            "0" : "1",
            "1" : "2",
            "length" : 2
        }

        var ary = Array.from(arrayLike,item => item * 2);
        console.log(ary);
   
-find()方法：
>用于找出第一个符合条件的数组成员，如果没有找到返回undefined
        var ary = [{
            id : 1,
            name:'zhangsan'
        },{
            id:2,
            name:'lisi'
        }];
        let target = ary.find(item => item.id == 2);
        console.log(target);
-findIndex()方法：
>用于找出第一个符合条件的数组成员，如果没有找到返回-1
        let ary = [1,5,10,15];
        let index = ary.findIndex(value=> value >1);
        console.log(index);
-includes()方法
>表示某个数组是否包含给定的值，返回布尔值
        <scrip>
        let ary = ["s","f","a"];
        let result = ary.indexOf("a");
        console.log(result);
        /* indexOf()返回位置 ，没找到返回-1*/        
        let r = ary.includes("a");
        console.log(r);
        /* includes返回true、false，表示在数组中是否包含a */
        </scrip>


### String的扩展方法
-模板字符串
     //`反引号定义的模板字符串`
        let name = `要用反引号定义模板字符串`;

        //模板字符串中可以解析变量
        let SayHello = `Hello,my name is ${name}`
        console.log(SayHello);

        // 模板字符串可以换行
        let result ={
            name : "lisi",
            age:20
        };
        let html = `
            <div>
                <span>${result.name}</span>
                <span>${result.age}</span>
            </div>
        `;
        console.log(html);

        // 模板字符串可以调用函数
        const fn = () => '就只这么强大'
        let txt = `
                    追不上
                    我吧${fn()}
        `;
        console.log(txt);
-startsWith(),endsWith()
    +startsWith()表示参数字符串是否在原字符串的头部，返回布尔值
    +endsWith()表示参数字符串是否在原字符串的尾部，返回布尔值
    let str = 'Hello 2020';
        let r1  =str.startsWith('Hello');
        console.log(r1);
        let re = str.endsWith('20');
        console.log(re);
-repeat()方法
>repeat方法表示将原字符串重复n次，返回一个新字符串
        let s= "y";
        console.log(s.repeat(5));

### Set数据结构
//es6提供了新的数据结构Set。它类似于数组，但是成员的值都是唯一的，没有重复的值
            const s1 = new Set();
            console.log(s1.size);

            const s2 = new Set(["a","b"]);
            console.log(s2.size);

            const s3 = new Set(["a","a","b","b"]);
            console.log(s3.size);
            //过滤掉重复的值，只输出2

            const ary = [...s3];//数组去重
            console.log(ary);
    +add(value):添加某个值，返回set结构本身
    +delete(value):删除某个值，返回一个布尔值，表示删除是否成功
    +has(value):返回一个布尔值，表示该值是否为Set成员
    +clear()：清除所有成员，没有返回值
>如何用set取值
遍历
//set结构的实例与数组一样，也拥有forEach方法，用于对每个成员执行某种操作，没有返回值

    //遍历set数据结构，从中取值
    const s5 = new Set(["o","p","q"]);
    s5.forEach(value => {
        console.log(value);
    })
            /* forEach()方法用于调用数组的每个元素，并将元素传递给回调函数 */

### Promise对象
    Promise 是 ES6 引入的封装异步操作的统一接口。它返回一个对象，包含了异步操作的信息。
    Promise 本身是一个构造函数，提供了resolve和reject两个方法。一旦异步操作成功结束，就调用resolve方法，将 Promise 实例对象的状态改为resolved，一旦异步操作失败，就调用reject方法，将 Promise 实例的状态改成rejected。

    function timeout(duration = 0) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration);
    })
    }

    上面代码中，timeout函数返回一个 Promise 实例，在指定时间以后，将状态改为resolved。

    var p = timeout(1000).then(() => {
    return timeout(2000);
    }).then(() => {
    throw new Error("hmm");
    }).catch(err => {
    return Promise.all([timeout(100), timeout(200)]);
    })

    一旦 Promise 实例的状态改变以后，就可以使用then()方法指定下面将要执行的函数，catch()方法用来处理rejected状态的情况。

### module
>ES6 意义最重大的语法变化，就是引入了模块（module）。
一个模块内部，使用export命令输出对外的接口。
import命令用于引入该模块。