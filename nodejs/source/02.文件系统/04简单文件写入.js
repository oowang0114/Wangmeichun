/* 
    简单文件写入
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
*/
// 引入fs模块
var fs = require("fs");

/*fs.writeFile("hello3.txt","这是通过writeFile写入的内容",{flag:"r+"} , function (err) {
	if(!err){
		console.log("写入成功~~~");
	}else{
		console.log(err);
	}
});*/

// C:\Users\86156\Desktop

fs.writeFile("C:/Users/86156/Desktop/vpn.txt","这是通过writeFile 简单文件写入_异步文件写入的内容",{flag:"w"},function(err){
    //flag:w    意思是删掉重新写
    // 如果想在文件中追加内容，用a
    if(!err){
        console.log("写入成功");
    }else{
        console.log("err");
    }
});