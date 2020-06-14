<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>

<html class="pixel-ratio-3 retina android android-5 android-5-0 watch-active-state"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta http-equiv="pragma" content="no-cache">
    <meta http-equiv="cache-control" content="no-cache">
    <meta http-equiv="expires" content="0">

    <title>直接推荐</title>

    <link rel="stylesheet" href="/Public/dianyun/css/framework7.ios.min.css">
    <link rel="stylesheet" href="/Public/dianyun/css/app.css">
    <link rel="stylesheet" href="/Public/dianyun/css/iconfont.css">


</head>
<body onload="onload()" class="framework7-root">
<div class="panel-overlay"></div>
<div class="panel panel-left panel-reveal layout-dark">
</div>

<div class="views">
    <div class="view view-main" data-page="withdrawalshistory">
        <div class="pages">
            &lt;<div data-page="withdrawalshistory" class="page navbar-fixed" isinited="true">
            <div class="navbar theme-white">
                <div class="navbar-inner">
                    <div class="left">
                        <a href="javascript:history.go(-1);" class="external link"> <i class="icon iconfont icon-angleleft" style="transform: translate3d(0px, 0px, 0px);"></i>返回</a>
                    </div>
                    <div class="center" data-i18n="member.myinfo" style="left: -24px;">直接推荐</div>
                    <div class="right"></div>
                </div>
            </div>

            <div class="page-content defaultbg">
                <div class="list-block">
                    <ul id="myPurseList">
                        <li class="item-content">
                            <div class="item-inner">
                                <div class="item-title center" style="padding:5px 25px;">姓名</div>
                                <div class="item-title center" style="padding:5px 50px;">电话</div>
                                <div class="item-title center" style="padding:5px 0px;">金额</div>
                                <div class="item-title center" style="padding:5px 0px;">直推</div>
                            </div>
                        </li>
                        <?php if(is_array($list)): foreach($list as $key=>$v): ?><li class="item-content">
                                <div class="item-inner">
                                    <div class="item-title center" style="padding:5px 0px;"><?php echo ($v["truename"]); ?></div>
                                    <div class="item-title center" style="padding:5px 0px;"><?php echo ($v["username"]); ?></div>
                                    <div class="item-title center" style="padding:5px 0px;"><?php echo ($v["money"]); ?></div>
                                    <div class="item-title center" style="padding:0px 0px;"><?php echo ($v["zhitui"]); ?></div>
                                </div>
                            </li><?php endforeach; endif; ?>
                    </ul>
                </div>

            </div>

        </div>

        </div>
    </div>
</div>


</body></html>