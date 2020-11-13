var fs = require("fs");

/* 
    fs.existSync(path)
        - 检查一个文件是否存在
*/
// var isExists = fs.existsSync("a123.mp3");
// console.log(isExists);

/* 
fs.stat(path,callback)
fs.statSync(path)
    -获取文件的状态
    -它会给我们返回一个对象，这个对象中保存了当前对象状态的相关信息
*/

// fs.stat("a.mp3",function(err,stat){
//     /* 
//     size 文件的大小 
//     isFile 是否是一个文件
//     isDirectory 是否是一个文件夹(目录)
//     */
//     console.log(stat.size);
//     console.log(stat.isFile());
// })

/* 
fs.unlink(path,callback)
fs.unlinkSync(path)
    -删除文件
*/

// fs.unlinkSync("hello.txt");

/* 
fs.readdir(path,callback)
fs.readdirSync(path)
    -读取一个目录结构
*/

// fs.readdir(".",function(err,files){
//     console.log(files);
// });

/* 
fs.truncate(path,len,callback)
fs.truncateSync(path,len)
    -截断文件,将文件修改为指定的大小
*/
// fs.truncateSync("hello2.txt",2);

/* 
fs.mkdir(path,callback)
fs.mkdirSync(path)
    -make dir 创建一个目录
*/
// fs.mkdirSync("he");

/* 
fs.rmdir(path,callback)
fs.rmdirsSync(path)
    -删除一个目录
*/

/* 
fs.rename(oldPath,newPath,callback)
fs.renameSync(oldPath,newPath)
*/

/* 
fs.watchFile(filename)
    -  监视文件的修改
    -参数：
        filename要监视文件的名字
        options 配置选项
        listener 回调函数，当文件发生变化时，回调函数会执行
*/
fs.watchFile("hello2.txt",function(curr,prev){
    console.log("修改前文件大小："+prev.size);
    console.log("修改后文件大小："+curr.size);
})