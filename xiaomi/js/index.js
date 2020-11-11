window.onload = function(){

    var prev = document.getElementsByClassName("swipwe-button-prev")[0];
    var next = document.getElementsByClassName("swipwe-button-next")[0];
    console.log(next);
    var img = document.getElementById("picture").getElementsByTagName("img")[0];
    // 创建一个数组，用来保存图片的路径
    var imgArr = ["img/banner1.png","img/banner2.png","img/banner3.png","img/banner4.png"];

    // 创建一个变量，来保存当前正在显示的图片的索引
    var index = 0;



    prev.onclick = function(){
        
        index--;

        if(index < 0 ){
            index = imgArr.length-1;
        }

        img.src = imgArr[index];
    }

    next.onclick = function(){
        index++;
        
        if(index > imgArr.length-1){
            index = 0;
        }
        img.src = imgArr[index];
    }
}