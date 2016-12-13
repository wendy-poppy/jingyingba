/**
 * Created by wendy on 16/9/14.
 */

//banner
var banner_li = document.querySelectorAll(".banner ul li");
var banner_list = document.querySelectorAll(".banner ol li");
var index = 0;
var Timer = null;
Timer = setInterval(banner,2000);
function banner() {
    index++;
    if(index > banner_list.length-1){
        index = 0;
    }
    for(var i = 0; i < banner_list.length; i++){
        banner_li[i].className = "";
        banner_list[i].className = "";
    }
    banner_li[this.index].className = "active";
    banner_list[this.index].className = "active";
}
for(var i = 0; i < banner_list.length; i++){
    banner_list[i].index = i;
    banner_list[i].onmouseover = function(){
        clearInterval(Timer);
        for(var i = 0; i < banner_list.length; i++){
            banner_list[i].className = "";
            banner_li[i].className = "";
        }
        banner_list[this.index].className = "active";
        banner_li[this.index].className = "active";
    }
    banner_list[i].onmouseout = function () {
        Timer = setInterval(banner,2000);
    }
}


//用户登录状态
var text = document.querySelector(".text");
    if(document.cookie){
        var arr = document.cookie.split(";");
        var user = arr[0].split('=');
        if(arr[0]){
            text.innerHTML = user[1];
        }
    }


//合作机构
var agency_left = document.querySelector(".agency_left");
var agency_right = document.querySelector(".agency_right");
var ul = document.querySelectorAll(".box_ul ul")[0];

agency_right.onclick = function(){
    ul.insertBefore(ul.lastElementChild,ul.firstChild);
}
agency_left.onclick = function () {
    ul.appendChild(ul.firstElementChild);
}


//返回顶部
var returnto_top = document.querySelector(".returnto_top");

var isTop = true;
var timer = null;
var iHeigth = window.innerHeight;
window.onscroll = function(){
    var top = document.body.scrollTop;
    if(!isTop){
        clearInterval(timer);
    }
    isTop = false;
}
returnto_top.onclick = function(){
    timer = setInterval(fn,30);
    function fn(){
        var top = document.body.scrollTop;
        var sudu = Math.ceil(top/8);
        document.body.scrollTop = top - sudu;
        isTop = true;
        if(top == 0){
            clearInterval(timer);
        }
    }
}




