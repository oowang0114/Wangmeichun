nodejs
### 1.命令行窗口
    -cmd
    -常用指令：
        dir 列出当前目录下的所有文件
        cd  目录名  进入到指定的目录
        md  目录名  创建一个文件夹
        rd  目录名  删除一个文件夹

    -目录
        .表示当前目录
        ..表示上一级目录

    -环境变量（windows系统中变量）
        path

    -当我们在命令行窗口打开一个文件，或调用一个程序时，系统会首先在当前目录下寻找文件程序，如果找到了则直接打开；如果没有找到则会依次到环境变量path的路径中寻找，直到找到为止，如果没有则报错

    -所以我们可以将一些经常需要访问的程序和文件的路径添加到path中，这样我们就可以在任意位置来访问这些文件和程序了

### 2.进程和线程
    进程
        - 进程事一个一个的工作计划(工厂中的车间)
        
    线程
        -线程是计算机中的最小的计算单位(工厂中的工人)，线程负责执行进程中的程序,干活的
        
    单线程
        -JS是单线程
    多线程
### node.js简介
    能够在 服务器 端运行JavaScript的开放源代码、跨平台JavaScript运行环境
    -node事一款对ES标准实现的JS引擎
    -通过node可以使js在服务器中运行
    -node就是一款使用js编写的web服务器
    -node底层是使用c++编写的
    -node的中js引擎使用的chrome的v8引擎
    -node特点：
        1.非阻塞、异步的I/O
        2.事件和回调函数
        3.单线程（主线程单线程，后台I/O线程池）
        4.跨平台
    -模块化
        -ES5中没有原生支持模块化，我们只能通过script标签引入js文件来实现模块化
        -在node中为了对模块管理，引入了commonJS规范

            -模块的引用
                -使用require()函数来引入一个模块
                -例子
                    var 变量 = require("模块的标识");
                
            -模块的定义
                -在node中一个js文件就是一个模块
                -默认情况下在js文件中编写的内容，都是运行在一个独立的函数中，外部的模块无法访问
                -导出变量和函数
                    -用exports
                        -例子：
                            exports.属性 = 属性值;
                            exports.方法 = 函数;
                            module.exports = {};
            -模块的标识
                -模块的标识就是模块的名字或路径
                    我们node通过模块的标识来寻找模块的
                    对于核心模块(npm中下载的模块)，直接使用模块的名字对其进行引入
                    var fs = require("fs");
                    var express = require("express");

                    对于自定义的文件模块，需要通过文件的路径来对模块进行引入
                        路径可以使绝对路径，如果是相对路径必须以./  ../开头
                        var router = require("./router");
### 包
package                     
    -将多个模块组合为一个完整的功能，就是一个包
    -包结构
        bin
            -二进制的可执行文件，一般都是一些工具包中才有
        lib
            -js文件
        doc
            -文档
        test
            -测试代码
        package.json
            -包的描述文件

    -package.json
    >命令：npm init初始化，创建package.json
    !!:package.json里面不能写注释
    >先有一个package.jason,才能装npm install math
        -他是一个json格式的文件，在他里面保存了报的各种相关信息
            name 包名
            version 版本
            dependencies 依赖
            main 包的主要文件
            bin 可执行文件

### npm
    -通过npm可以对node中的包进行上传、下载、搜索等操作
    -npm会在安装完成node以后，自动安装
    -npm常用指令
        -npm - v 查看npm版本
        -npm version 查看所有模块的版本
        -npm search 报名 搜索包
        -npm install / i 包名 安装包    //install可以用i简写
        -npm remove / r 包名 删除包     //remove用r简写
#       -npm install 包名 --save安装包并添加到依赖中****
#       -npm install 下载当前项目所依赖的包
        -npm install 包名 -g 全局安装包（全局安装的包一般都是一些工具

### npm
    淘宝镜像
    npm install -g cnpm --registry=https://registry.npm.taobao.org

    cnpm init 创建package.json
    cnom i math --save
### Buffer(缓冲区)
    - Buffer的结构和数组很想，操作的方法也和数组类似
    -数组中 不能存储二进制的文件（图片，mp3等），而baffer就是专门用来存储二进制数据
    -使用buffer不需要引入模块，直接使用即可
    -在buffer中存储的都是二进制数据，但是在显示时都是以16进制的形式显示
        buffer中每一个元素的范围是从00-ff   0-255
        00000000 - 11111111
        计算机 一个0 或一个1 称为1位（bit）
        8bit = 1byte
        1024byte = 1KB

        buffer中的一个元素，占用内存的一个字节

### 文件系统(fileSystem)
>通过node来操作系统中的文件
    >使用文件系统给，需要先引入fs模块，fs是核心模块，直接引入不需要下载
#   文件写入
-同步文件写入
        1.打开文件
            fs.openSync(path,flags)
            返回值：该方法会返回一个文件的描述符作为结果，我们可以通过该描述符来对文件进行各种操作
             		- path 要打开文件的路径
 					- flags 打开文件要做的操作的类型
 						r 只读的
 						w 可写的
 					- mode 设置文件的操作权限，一般不传
				 返回值：
				 - 该方法会返回一个文件的描述符作为结果，我们可以通过该描述符来对文件进行各种操作
        2.向文件中写入内容
            fs.writeSync(fd,string)
            - fd 文件的描述符，需要传递要写入的文件的描述符
 			- string 要写入的内容
            <!-- - position 写入的起始位置
 			- encoding 写入的编码，默认utf-8 -->
        3.保存并关闭文件
        fs.closeSync(fd)
            -fd  要关闭的文件的描述符

-异步文件写入
        1.open
            fs.open(path,flags,callback)
        2.write
            fs.write(fd,string,callback)
        3.close
            fs.close(fd,callback)

-简单文件写入
        -异步文件写入：
        fs.writeFile(file, data[, options], callback)
        -同步：
        fs.writeFileSync(file, data[, options])
            -file 要操作的文件的路径
            -data 要写入的数据
            -options 选项，可以对写入进行一些设置
            -callback 当写入完成以后执行的函数

            -flag
                r   制度
                w   可写
                a   追加
-流式文件写入
>写大文件用流式文件写入方法
    var fs = require("fs");

    //创建一个可写流
    fs.createWriteStream(path)
        - 可以用来创建一个可写流
		- path，文件路径
		- options 配置的参数
    var ws = fs.createWriteStream("hello3.txt");
    //监听流的open和close事件来监听流的打开和关闭
    ws.once("open",function(){
        console.log("流打开了~~~");
    })；
    ws.once("close",function(){
        console.log("流关闭了~~~");
    });
    //写入
    ws.write("内容");
    //关闭
    ws.end();
#   文件读取
    1.同步文件读取
    2.异步文件读取
    3.简单文件读取
    fs.readFile(path[, options], callback)
	 fs.readFileSync(path[, options])
	 	- path 要读取的文件的路径
	 	- options 读取的选项
	 	- callback回调函数，通过回调函数将读取到内容返回function(err , data)
	 		err 错误对象
	 		data 读取到的数据，会返回一个Buffer