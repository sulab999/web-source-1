
<?php
include_once('../../jhs_config/function.php');
include_once('../../jhs_config/admin_check.php');
include_once('../../jhs_config/page_class.php');


$Action=$_REQUEST['Action'];
////////添加记录
if ($Action=="Addsave") {
$title=$_POST['title'];
$address=$_POST['address'];
$url=$_POST['url'];
$begtime=$_POST['begtime'];
ysk_date_log(6,$_SESSION['ysk_username'],'新增了名称为"'.$title.'" 的友情链接');
mysql_query("insert into `bobo_links` (title,url,begtime)"."values ('$title','$url','$begtime')",$conn1);
echo "<script>alert('添加成功!');window.location='?Action=add';</script>";
}

////////修改记录
if ($Action=="editsave") {
$title=$_POST['title'];
$address=$_POST['address'];
$url=$_POST['url'];
$y3=$_POST['y3'];
$y4=$_POST['y4'];

if ($y3<>$title){ysk_date_log(6,$_SESSION['ysk_username'],'修改了友情链接 "'.$y3.'" 的链接名称');}
if ($y4<>$url){ysk_date_log(6,$_SESSION['ysk_username'],'修改了友情链接 "'.$y3.'" 的链接地址');}

mysql_query("update bobo_links set title='$title',url='$url'  where id='$_POST[Id]'",$conn1); 
echo "<script>alert('修改成功!');window.location='?Action=List';</script>";

}

////////删除单记录
If ($Action=="del") {
ysk_date_log(6,$_SESSION['ysk_username'],'删除了一条友情链接');
mysql_query("delete from bobo_links where id ='$_REQUEST[Id]'",$conn1);
echo "<script>alert('删除成功!');window.location='?Action=List';</script>";
}

////////批量删除
If ($_POST[ID_Dele]!="") {
$ID_Dele= implode(",",$_POST['ID_Dele']);
ysk_date_log(6,$_SESSION['ysk_username'],'删除了一些友情链接');
$sql="delete from bobo_links where id in ($ID_Dele)";
mysql_query($sql,$conn1);
echo "<script>alert('删除成功!');window.location='?Action=List';</script>";
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>welcome</title>
<link href="../images/index.css" rel="stylesheet" type="text/css" />
<link rel="stylesheet" href="../css/layui.css" media="all">
<link rel="stylesheet" href="../css/admin.css" media="all">
<link href="/Public/images/page.css" rel="stylesheet" type="text/css" />
<link href="/Public/yoxi_editor/themes/default/default.css" rel="stylesheet" type="text/css" />
<script charset="utf-8" src="/Public/yoxi_editor/kindeditor.js"></script>
<script charset="utf-8" src="/Public/yoxi_editor/lang/zh_CN.js"></script>
<script>
KindEditor.ready(function(K) {
var editor = K.editor({
allowFileManager : true
});
K('#image3').click(function() {
editor.loadPlugin('image', function() {
editor.plugin.imageDialog({
showRemote : false,
imageUrl : K('#url3').val(),
clickFn : function(url, title, width, height, border, align) {
K('#url3').val(url);
editor.hideDialog();
}
});
});
});
});
</script>
</head>
<body>
<?php if($Action=="List" or $Action==""){?>
<form name="form1" method="post" action="">
<div class="layui-fluid">
    <div class="layui-card">
      <div class="layui-card-header">友情链接管理中心 - Powered by <a href="http://www.juheshe.cn" target="_blank">聚合社</a></div>
	  <div class="layui-card-body" style="padding: 15px;">
<div style="padding-bottom: 10px;">
		  <input type="button" value="全选" onClick="CheckAll()" class="layui-btn layui-btn-sm" />
<input type="submit" name="Del" id="Del" value="删除" onclick="test()" class="layui-btn layui-btn-danger layui-btn-sm" >  &nbsp;  &nbsp;  <a href="?Action=add" class="layui-btn layui-btn-sm layui-btn-normal">新增</a>
		  </div>
<table class="layui-table admin-table">
<div class="layui-table-header"><thead>
                <tr>
                    <th width="50px" style="text-align:center">选择</th>
					<th width="50px" style="text-align:center">编号</th>
                    <th width="900px" style="text-align:center">链接名称</th>
                    <th width="200px" style="text-align:center">链接地址</th>
                    <th width="200px" style="text-align:center">栏目</th>
                    <th width="200px" style="text-align:center">发布时间</th>
                    <th width="210px" style="text-align:center">操作</th>
                </tr>
            </thead>
			</div></div>
<?php

$total=mysql_num_rows(mysql_query("SELECT * FROM `bobo_links`  ",$conn1));  //查询总记录！
$num="30";
$page=new page($total,$num);
$sql="select * from bobo_links  order by begtime desc,id desc  {$page->limit}"; 

$zyc=mysql_query($sql,$conn1);  //执行该SQl语句
while ($row=mysql_fetch_array($zyc)){
?>
<tr bgcolor="ffffff" onMouseOut="this.style.backgroundColor=''" onMouseOver="this.style.backgroundColor='#F5F5F5'">
<td height="24" align="center" ><input name="ID_Dele[]" type="checkbox" id="ID_Dele[]" value="<?=$row[id]?>"></td>
<td align="center"><?=$row[id]?></td>
<td align="center"><?=$row[1]?></td>
<td><?=$row[3]?></td>
<td align="center">友情链接</td>
<td align="center"><?=date("Y-m-d G:i:s",$row['begtime'])?></td>
<td align="center"><a href="?Action=edit&Id=<?=$row[id]?>" class="layui-btn layui-btn-xs layui-btn-normal">编辑</a> <a href="?Action=del&Id=<?=$row[id]?>" onclick="Javascript:return confirm('确定要删除吗？');" class="layui-btn layui-btn-xs layui-btn-danger" onclick="Javascript:return confirm('确定要删除吗？');">删除</a> </td>
</tr>
<?php
}
?>
</table>

</form>

<?php }elseif($Action=="add"){  ?>
<form name="add" method="post" action="?Action=Addsave" >
<div class="layui-fluid">
    <div class="layui-card">
      <div class="layui-card-header">新增公告 - Powered by <a href="http://www.juheshe.cn" target="_blank">聚合社</a></div>
	  <div class="layui-card-body" style="padding: 15px;">
	     <div class="layui-form-item">
            <label class="layui-form-label">公告标题：</label>
            <div class="layui-input-block">
              <input type="text" name="title" lay-verify="title" autocomplete="off" placeholder="请输入标题" class="layui-input">
            </div>
          </div>
		  	     <div class="layui-form-item">
            <label class="layui-form-label">链接地址：</label>
            <div class="layui-input-block">
              <input type="text" name="url" lay-verify="url" autocomplete="off" placeholder="请输入标题" class="layui-input">
            </div>
          </div>
		  <div class="layui-form-item">
                <div class="layui-input-block">
                  <button class="layui-btn" id="btnSubmit" onClick="return checkuserinfo();"lay-submit="" lay-filter="component-form-element">提交添加</button>
				  <button onclick="history.go(-1);return false;" class="layui-btn layui-btn-primary layui-btn-sm">返回</button>
                </div>
              </div>


</form>

<?php }elseif($Action=="edit"){  
$sql="select * from bobo_links where id='$_REQUEST[Id]'";   //读取数据表
$zyc=mysql_query($sql,$conn1);  //执行该SQl语句
$row=mysql_fetch_array($zyc);
?>

<form action="?Action=editsave" method="post" name="add" onsubmit="return CheckPost();">
<input id="Id" name="Id" type="hidden" value="<?=$row[id]?>">
<input name="y3" type="hidden" value="<?=$row['title']?>">
<input name="y4" type="hidden" value="<?=$row['url']?>">
<div class="layui-fluid">
    <div class="layui-card">
      <div class="layui-card-header">新增公告 - Powered by <a href="http://www.juheshe.cn" target="_blank">聚合社</a></div>
	  <div class="layui-card-body" style="padding: 15px;">
	     <div class="layui-form-item">
            <label class="layui-form-label">公告标题：</label>
            <div class="layui-input-block">
              <input type="text" name="title" value="<?=$row['url']?>" lay-verify="title" autocomplete="off" placeholder="请输入标题" class="layui-input">
            </div>
          </div>
		  	     <div class="layui-form-item">
            <label class="layui-form-label">链接地址：</label>
            <div class="layui-input-block">
              <input type="text" name="url" lay-verify="url"  value="<?=$row['url']?>" autocomplete="off" placeholder="请输入链接地址" class="layui-input">
            </div>
          </div>
		  <div class="layui-form-item">
                <div class="layui-input-block">
                  <button class="layui-btn" id="btnSubmit" onClick="return checkuserinfo();"lay-submit="" lay-filter="component-form-element">提交添加</button>
				  <button onclick="history.go(-1);return false;" class="layui-btn layui-btn-primary layui-btn-sm">返回</button>
                </div>
              </div>
			  </form>
<?php } ?>
</body>
</Html>
<script>

function CheckAll(value,obj)  {
var form=document.getElementsByTagName("form")
for(var i=0;i<form.length;i++){
for (var j=0;j<form[i].elements.length;j++){
if(form[i].elements[j].type=="checkbox"){ 
var e = form[i].elements[j]; 
if (value=="selectAll"){e.checked=obj.checked}     
else{e.checked=!e.checked;} 
}
}
}
}
</script>