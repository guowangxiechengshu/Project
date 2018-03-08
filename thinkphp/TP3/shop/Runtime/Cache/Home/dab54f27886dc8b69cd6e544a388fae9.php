<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">-->
    <!--禁用缩放-->
    <title>Title</title>
    <link href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="<?php echo CSS_URL ?>header.css"/>
    <script src="https://cdn.bootcss.com/jquery/2.1.1/jquery.min.js"></script>
    <script src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>
    <div class="container">
        <h1>Twitter bootstrap tutorial</h1>
        <nav class="navbar navbar-inverse">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-menu" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Brand</a>
            </div>
            <div id="navbar-menu" class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li class="active"><a href="#">Home</a></li>
                    <li><a href="#">Page One</a></li>
                    <li><a href="#">Page Two</a></li>
                </ul>
            </div>
        </nav>
        <div id="content" class="row-fluid">
            <div class="col-md-9">
                <h2>Main Content Section</h2>

                464848

            </div>
            <div class="col-md-3">
                <h2>Sidebar</h2>
                <ul class="nav nav-tabs nav-stacked">
                    <li><a href='#'>Another Link 1</a></li>
                    <li><a href='#'>Another Link 2</a></li>
                    <li><a href='#'>Another Link 3</a></li>
                </ul>
            </div>
        </div>
    </div>
</body>

</html>