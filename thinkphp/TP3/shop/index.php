<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/2/12/012
 * Time: 18:40
 */

        header("content-type:text/html:charset=utf-8");
        define('APP_DEBUG',true);

        define('CSS_URL','/shop/Public/css/');
        define('IMGS_URL','/shop/Public/imgs/');
        define('JS_URL','/shop/Public/js/');
        define('LIB_URL','Library/aliyun-dysms-php-sdk/api_demo/');

        define('ADMIN_CSS_URL','/shop/Admin/Public/css/');
        define('ADMIN_JS_URL','/shop/Admin/Public/js/');
        define('ADMIN_IMGS_URL','/shop/Admin/Public/imgs/');

        include  '../ThinkPHP/ThinkPHP.php';

