<?php
    date_default_timezone_set('PRC');
    header("Content-Type: application/json;charset=utf-8");
    header('Access-Control-Allow-Origin:*'); 
    header('Access-Control-Allow-Methods:POST,GET');
    $user = $_GET['user'];
    $password = $_GET['password'];
    $remember = $_GET['remember'];
    $resulte = "";
    if(empty($user) || empty($password)){
        echo "您输入的参数有误,请输入正确的参数!";
    }
    $data = array(
        array('user'=>'wendy','password'=>'0922'),
        array('user'=>'wyt','password'=>'0608')
    );
    foreach ($data as $key => $value) {
        if($value['user'] == $user && $value['password'] == $password){
            $resulte = '{"msg":true}';
            break;
        }else{
            $resulte = '{"msg":false}';
        }
    }
    if($remember == true){
        setcookie('user',$user,time()+7*24*3600);
        setcookie('password',$password,time()+7*24*3600);
    }
    echo $resulte;
?>