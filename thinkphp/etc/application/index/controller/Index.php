<?php
namespace app\index\controller;
use  app\index\controller\Base;
class Index extends  Base
{
    public function index()
    {
        $this ->islogin();//判断用户是否登陆
        return  $this -> view ->fetch();
    }
}
