<?php
namespace app\index\controller;
use app\index\controller\Base;
use think\Request;
use app\index\model\User as UserModel;
use think\Session;
class User extends  Base
{
    //用户登陆
    public function login()
    {
        $this ->alerdyLogin();//防止用户重复登陆
        return  $this -> view ->fetch();
    }

    //验证用户登陆
    public function checklogin(Request $request)
    {
        //初始返回参数
        $status = 0;//当前状态
        $result = '';//提示信息
        $data = $request -> param();//返回信息

        //创建验证规则
        $rule = [
            'username|用户名' =>'require',
            'password|密码' =>'require',
            'verify|验证码' =>'require|captcha',
        ];

        //自定义验证规则
        //captcha 框架验证码方法
        $msg = [
            'username' => ['require'=>'请检查用户名是否为空'],
            'password' => ['require'=>'请检查密码是否为空'],
            'verify' => ['require'=>'请检查验证码是否为空','captcha'=>'验证码错误'],
        ];
        //进行验证
        $result = $this -> validate($data,$rule,$msg);

        //构造数据库验证方法
        if ($result === true){
            $map = [
                'username' =>$data['username'],
                'password' =>md5($data['password'])
            ];

            //查询用户
          $user =  UserModel::get($map);
          if ($user == null){
              $result ='用户名或密码错误';
          }else{
              $status = 1;
              Session::set('user_id',$user ->id);
              Session::set('user_info',$user ->getData());
          }
        }

        return ['status'=>$status, 'message'=>$result, 'data'=>$data];
    }

    //用户退出
    public function loginout()
    {
        Session::delete('user_id');
        Session::delete('user_info');
        $this -> success('注销成功','user/login');
    }

    //用户注册
    public  function  reg(){

    }

    //管理员列表
    public  function  addList(){
        $this -> view ->assign('title','管理员列表');
        $this -> view ->assign('$keywords','管理员列表');
        $this -> view ->assign('$desc','管理员列表');

        //统计变量
        $this ->view -> count =UserModel::count();
        //role
//        $role = User::get('role');
//        if ($role=='0'){
//            $this -> view ->assign('data','superAdmin');
//        }else {
//            $this ->view ->assign('data','Admin');
//        }
        $username = Session::get('user_info.username');
        if($username == 'admin'){
            $List = UserModel::all();
        }else{
            $List = UserModel::all(['username'=>$username]);
        }

        $this ->view ->assign('List',$List);
        return  $this -> view ->fetch();
    }

    //管理员状态修改
    public function  setStatus(Request $request){
        $user_id = $request -> param('id');
        $result =UserModel::get($user_id);
        if ($result ->getData('status') == 1){
            UserModel::update(['status'=>0],['id'=>$user_id]);
        }else {
            UserModel::update(['status'=>1],['id'=>$user_id]);
        }

        return $user_id;
    }

    //管理员删除
    public  function  deletUser(Request $request){
        $user_id = $request -> param('id');
        UserModel::destroy(['id' => $user_id]);
    }

}

