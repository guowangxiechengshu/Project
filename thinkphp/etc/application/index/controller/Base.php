<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/3/6/006
 * Time: 10:23
 */

namespace app\index\controller;
use think\Controller;
use think\Session;
class Base extends  Controller
{
    protected  function  _initialize(){
        parent::_initialize();//继承父类初始化操作
        define('USER_ID',Session::get('user_id'));
    }

    //判断用户是否登陆
    protected  function islogin(){
        if (empty(USER_ID)){
            $this ->error('请登录',url('user/login'));
        }
    }

    //防治用户重复登陆
    protected  function alerdyLogin(){
        if (!empty(USER_ID)){
            $this ->error('用户已登陆',url('index/index'));
        }
    }
}