<?php
//echo '微信关注：聚合建站  | 全开源卡盟系统 免费下载：www.juheshe.cn  2018年9月14日 Se7en QQ:94170844';
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>welcome</title>
<link href="../images/index.css" rel="stylesheet" type="text/css" />
<link href="/Public/images/page.css" rel="stylesheet" type="text/css" />
</head>
<body>
<?php
include_once('../../jhs_config/function.php');
include_once('../../jhs_config/admin_check.php');
include_once('../../jhs_config/page_class.php');
$StartYear=strip_tags($_GET['StartYear']);
$StartMonth=strip_tags($_GET['StartMonth']);
$StartDay=strip_tags($_GET['StartDay']);
$StartHour=strip_tags($_GET['StartHour']);
$StartMinute=strip_tags($_GET['StartMinute']);
$EndYear=strip_tags($_GET['EndYear']);
$EndMonth=strip_tags($_GET['EndMonth']);
$EndDay=strip_tags($_GET['EndDay']);
$EndHour=strip_tags($_GET['EndHour']);
$EndMinute=strip_tags($_GET['EndMinute']);
$Action=strip_tags($_GET['Action']);
$muyou1=strtotime($StartYear."-".$StartMonth."-".$StartDay." ".$StartHour.":".$StartMinute);
$muyou2=strtotime($EndYear."-".$EndMonth."-".$EndDay." ".$EndHour.":".$EndMinute);
?>

<div class="Menubox" >
<ul>
<li class="hover"><a href="tuikuan.php">订单维权 (<?php echo mysql_num_rows(mysql_query("select refund from `product_order`  where refund='1' and docking<>0 ",$conn1));?>)</a></li>

</ul>
</div>


<div style="padding:10px 0px;">


<form action="tuikuan.php" method="get">
<table cellspacing="1" cellpadding="0" class="page_table2">
<tr>
<td height="32" class="td_left">
搜索关键词：</td>
<td class="left">
<input name="keywords" type="text" maxlength="20" id="keywords" /> <select name="seey" id="seey">
<option value="number" selected="selected">客户编号</option>
<option value="orderid">订单编号</option>
</select>
</td>
</tr>
<tr>
<td height="32" class="td_left">
查询条件：</td>
<td class="left">
<select name="state" id="state">
<option selected="selected" value="">全部</option>
<option value="0">等待处理</option>
<option value="1">充值成功</option>
<option value="2">取消充值</option>
<option value="3">已经退单</option>
</select>
</td>
</tr>
<tr>
<td height="32" class="td_left">
查询时间段：</td>
<td class="left"><?php include_once('../../jhs_config/time.php');?></td>
</tr>
<tr>
<td class="td_left">
</td>
<td class="left">
<input type="submit" name="btnQuery" value="确认查询" id="btnQuery" class="chaxun_input" />
</td>
</tr>
</table>
</form>
<form name="form1" method="post" action="?Action=mylove">

<table cellspacing="1" cellpadding="0" class="page_table">
<tr>
<td width="39%" class="table_top">商品</td>
<td width="12%" class="table_top">充值账户</td>
<td width="7%" class="table_top">数量</td>
<td width="15%" class="table_top">购买客户</td>
<td width="15%" class="table_top">提交时间 </td>
<td width="12%" class="table_top">状态详细</td>
</tr>
<?php
$search="where docking!=0  and refund=1"; 
if ($StartYear!='' ) $search.=" and time >=$muyou1 and time <=  $muyou2 "; 
if ($keywords!='')   $search.=" and $seey like '%$keywords%' "; 
if ($state!='')      $search.=" and trading = '$state' "; 
$total=mysql_num_rows(mysql_query("SELECT * FROM `product_order`  $search",$conn1));  //查询总记录！
$num="30";
$page=new page($total,$num);
$sql="select * from product_order  $search order by time desc,id desc  {$page->limit}"; 
$zyc=mysql_query($sql,$conn1);  //执行该SQl语句
while ($row=mysql_fetch_array($zyc)){
?>
<tr onMouseOver="this.style.backgroundColor='#f1f1f1';" onMouseOut="this.style.backgroundColor='';">
<td height="32" align="left"><?=$row['title']?></td>
<td height="32" align="center"><?=$row['content1']?></td>
<td><?=$row['nums']?></td>
<td> <span style="color:#666"><?=$row['number']?></span></td>
<td style="text-align:center"><?=date("Y-m-d G:i:s",$row['time'])?></td>
<td><a  href="#art1" onClick="art.dialog.open('user/order.php?id=<?=$row['orderid']?>&check=chk',{title:'订单详细记录',width:900,height:500,lock:true, fixed:true});">
<?php        if ($row['refund']=='1') {?>
<span class='complaint0'>申请退款</span>
<?php    }elseif($row['refund']=='2') {?>
<span class='complaint3'>取消退款</span>
<?php    }elseif($row['refund']=='3') {?>
<span class='complaint1'>退款失败</span>
<?php    }elseif($row['refund']=='4') {?>
<span class='complaint2'>退款成功</span>
<?php } ?></a></td>
</tr>
<?php
}
?>
</table>

<table width="100%" border="0" cellspacing="0" cellpadding="0">
<tr>
<td align="center"><?php if ($total!=0){?><?=$page->paging();?><?php } ?></td>
</tr>
</table>
</form>
</div>

</body>
</Html>
<script charset="utf-8" src="/Public/js/artDialog/artDialog.source.js?skin=blue"></script>
<script charset="utf-8"  src="/Public/js/artDialog/plugins/iframeTools.source.js"></script>