
//city
var city = document.querySelector(".city");
var city_list = document.querySelector(".city_list");
var jiantou = document.querySelectorAll(".city span")[1];
var underline = document.querySelector(".underline");
var flag;
city.onclick = function(){
    if(!flag){
        city_list.style.display = "block";
        // jiantou.className="jiantou glyphicon-menu-up glyphicon";
        jiantou.setAttribute("class","jiantou glyphicon-menu-up glyphicon");
        underline.style.display = "block";
    }else{
        city_list.style.display = "none";
        // jiantou.className="jiantou glyphicon-menu-down glyphicon";
        jiantou.setAttribute("class","jiantou glyphicon-menu-down glyphicon");
        underline.style.display = "none";

    }
    flag = !flag;
}