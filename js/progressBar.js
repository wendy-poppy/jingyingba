var progressbar_color = document.querySelector(".progressbar_color");
var proWidth = 0;
var Timer2 = setInterval(function(){
    if(proWidth > 1158){
        clearInterval(Timer2);
    }
    proWidth++;
    progressbar_color.style.width = proWidth + "px";
},8000);
