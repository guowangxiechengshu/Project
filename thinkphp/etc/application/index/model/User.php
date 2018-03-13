<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/3/7/007
 * Time: 9:45
 */
namespace app\index\model;
use think\Model;
class User extends Model
{

    //判断role
    public  function  getRoleAttr($value){
        $role =[
          0=> '管理员',
          1=> '超级管理员'
        ];
        return $role[$value];
    }


    //判断status
    public  function  getStatusAttr($value){
        $status =[
          0=> '已启用',
          1=> '已停用'
        ];
        return $status[$value];
    }
}