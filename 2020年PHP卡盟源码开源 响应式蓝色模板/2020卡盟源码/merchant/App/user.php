<?php 
include_once('../../jhs_config/function.php');
include_once('../../jhs_config/user_check.php');
$yx_us_result=mysql_query("select * from members where number='$_SESSION[ysk_number]' ",$conn1);
$yx_us=mysql_fetch_array($yx_us_result);
?>

<?=$yx_us['username']?> ( <?=$yx_us['number']?> )