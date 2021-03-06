function upload_mc_a_icon() {
    var upfile = $("#upload_mc_a_icon")[0].files[0];
    if (in_login < 1) {
        alert("请先登录");
        return false;
    }
    if (upfile.size > 1048576) {
        alert("图标不能大于1M");
        return false;
    }
    var fd = new FormData();
    fd.append("mobileconfig", upfile);
    var a_icon_xhr = new XMLHttpRequest();
    a_icon_xhr.open("post", in_path + "source/pack/mobileconfig/ajax.php");
    a_icon_xhr.onload = complete_mc_a_icon;
    a_icon_xhr.onerror = failed_mc_a_icon;
    a_icon_xhr.upload.onprogress = progress_mc_a_icon;
    a_icon_xhr.send(fd);
}
function progress_mc_a_icon(evt) {
    var per = Math.round(evt.loaded / evt.total * 100);
    $("#tips_mc_a_icon").text(per + "%");
    if (per > 99) {
        $("#tips_mc_a_icon").text("请稍等...");
    }
}
function complete_mc_a_icon(evt) {
    var response = evt.target.responseText;
    if (response == "return_0") {
        alert("文件不规范");
    } else {
        $("#preview_mc_a_icon").html('<img width="100" height="100" src="' + in_path + "data/tmp/" + response + '">');
    }
}
function failed_mc_a_icon() {
    alert("上传异常");
}
function mobile_config() {
    var xhr = new XMLHttpRequest();
    if (in_login < 1) {
        alert("请先登录后再操作！");
        return;
    }
    if ($("#mc_title").val() == "") {
        $("#mc_title").focus();
        return;
    }
    if ($("#mc_url").val() == "") {
        $("#mc_url").focus();
        return;
    }
    if ($("#preview_mc_a_icon img").length < 1) {
        alert("请上传应用图标！");
        return;
    }
    $(".mc-btn").attr("disabled", "disabled").text("生成中...");
    xhr.open("GET", in_path + "source/pack/mobileconfig/ajax.php?ac=mobileconfig&title=" + escape($("#mc_title").val()) + "&url=" + $("#mc_url").val() + "&aicon=" + $("#preview_mc_a_icon img")[0].src, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                if (xhr.responseText == "return_0") {
                   alert("请先登录");
                } else if (xhr.responseText == "return_1") {
                    alert("云币不足");
                } else {
                    $(".mc-btn").text("上传中...");
                    ReturnMcValue(xhr.responseText);
                }
            } else {
                alert("通讯异常");
            }
        }
    };
    xhr.send(null);
}
function ReturnMcValue(response) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        processAJAX();
    };
    xhr.open("GET", in_path + "source/pack/upload/index-mobileconfig.php?time=" + response + "&id=0", true);
    xhr.send(null);
    function processAJAX() {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                if (xhr.responseText == -1) {
                    alert("请先登录后再操作！");
                } else if (xhr.responseText == -2 || xhr.responseText == -5) {
                    alert("Access denied");
                } else if (xhr.responseText == -3) {
                    alert("未进行实名认证或认证审核中！");
                } else if (xhr.responseText == -4) {
                   alert("应用容量不足！");
                } else if (xhr.responseText == -6) {
                   alert("安装包不一致，无法覆盖！");
                } else if (xhr.responseText == 1) {
                   location.href = in_path + "index.php/apps";
                } else {
                   alert("内部出现错误，请稍后再试！");
                }
            }
        }
    }
}