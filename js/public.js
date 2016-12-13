var user = document.querySelector(".user");
var input = document.querySelectorAll(".kuang");
var err = document.querySelectorAll(".err");
var btns = document.querySelector(".btns");
var password = document.querySelector(".passw");
var remember = document.querySelector("[type=checkbox]");

//验证 是否为空
for(var j = 0; j < err.length; j++){
    input[j].index = j;
    input[j].onblur = function () {
        if(input[this.index].value == ""){
            err[this.index].style.display = "block";
        }else{
            err[this.index].style.display = "none";
        }
    }
}

//用户名登录
btns.onclick = function(){
  if(user.value && password.value){
      if(remember.checked){
          AJax("GET","http://10.80.13.54/wendy/精英吧/html/login.php?user="+user.value+"&password="+password.value+"&remember="+remember.checked,"",function(data){
              var data = JSON.parse(data);
              if(data.msg){
                  location.href = "http://10.80.13.54/wendy/精英吧/html/index.html";
              }else{
                  alert("您输入的账号或密码错误！");
              }
          });
      }else{
          AJax("GET","http://10.80.13.54/wendy/精英吧/html/login.php?username="+user.value+"&password="+password.value,"",function(data){});
      }
  }
  validateCode();
}


// 验证码校对
var code;
function createCode(){
  code = "";
  var codeLength = 4; //验证码的长度
  var checkCode = document.getElementById("checkCode");
  var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
      'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 
      'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); 
      //所有候选组成验证码的字符
  for(var i = 0; i < codeLength; i++) {
    var charNum = Math.floor(Math.random() * 52);
    code += codeChars[charNum];
  }
  if(checkCode){
    checkCode.className = "ma";
    checkCode.innerHTML = code;
  }
}
function validateCode() {
  var inputCode=document.getElementById("inputCode").value;
  if(inputCode.toUpperCase() != code.toUpperCase()){
    alert("验证码输入有误！");
    createCode();
  }   
}