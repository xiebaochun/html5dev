<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="/struts-tags" prefix="s" %>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">

<title>易行通位置服务平台后台管理系统</title>
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<style type="text/css">
<!--
body {
	margin-left: 0px;
	margin-top: 0px;
	margin-right: 0px;
	margin-bottom: 0px;
	background-color: #016aa9;
	overflow:hidden;
}
.STYLE1 {
	color: #000000;
	font-size: 11px;
}
-->
</style>
<script type="text/javascript" src="Public/js/jquery-1.9.1.js"></script>
<script type="text/javascript" src="Public/lhgdialog/lhgdialog.min.js"></script>
<script  type="text/javascript">
$(document).ready(function(){
	$("#randcode").click(function(){
		var now = new Date().getTime();
		$(".code").attr("src","randcode?d="+now);
	});
	$("#login").click(function(){
		var username= $("#username").val();
		var password= $("#password").val();
		var code 	= $("#code").val();
		$("#login").attr("disabled","disabled");
		if(username==""){
			$.dialog.alert(' 用户名不能为空! ',function(){
				$("#login").removeAttr("disabled");
			});
			return false;
		}
		if(password==""){
			$.dialog.alert(' 密码不能为空! ',function(){
				$("#login").removeAttr("disabled");
			});
			return false;
		}
		if(code==""){
			$.dialog.alert(' 验证码不能为空! ',function(){
				$("#login").removeAttr("disabled");
			});
			return false;
		}
		$.post(
			"loginput",
			{"admin.name":username,
			 "admin.pwd":password,
			 "admin.code":code},
			function(data){
				if(data==0){
					window.location.href='systemmanager/password.jsp';
				}else if(data==1){
						window.location.href='Map/dump.jsp';
					  }else if(data==2){
					  			$.dialog.alert(' 用户名/密码错误! ',function(){
					  				var now = new Date().getTime();
									$(".code").attr("src","randcode?d="+now);
									$("#login").removeAttr("disabled");
								});
					  		}else if(data==3){
						  			$.dialog.alert(' 验证码错误! ',function(){
							  			var now = new Date().getTime();
										$(".code").attr("src","randcode?d="+now);
										$("#login").removeAttr("disabled");
									});
						  		}else if(data==4){
								  			$.dialog.alert(' 用户已到期! ',function(){
								  				var now = new Date().getTime();
												$(".code").attr("src","randcode?d="+now);
												$("#login").removeAttr("disabled");
											});
								  		}
			},
			"html"
		);
	});
});
</script>
</head>

<body>
<table width="100%" height="100%" border="0" cellpadding="0" cellspacing="0">
  <tr>
    <td><table width="962" border="0" align="center" cellpadding="0" cellspacing="0">
      <tr>
        <td height="235" background="Public/images/login_03.gif">&nbsp;</td>
      </tr>
      <tr>
        <td height="53"><table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td width="394" height="53" style="background-image:url(Public/images/login_05.gif);background-size:100% 100%;">&nbsp;</td>
            <td width="206" style="background-image:url(Public/images/login_06.gif);background-size:100% 100%;" ><table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td width="16%" height="15"><div align="right"><span class="STYLE1">用户</span></div></td>
                <td width="57%" height="15"><div align="center">
                  <input type="text" name="admin.name" id="username" style="width:105px; height:15px; background-color:#292929; border:solid 1px #7dbad7; font-size:11px; color:#6cd0ff">
                </div></td>
                <td width="27%" height="10">&nbsp;</td>
              </tr>
              <tr align="center">
                <td height="15"><div align="right"><span class="STYLE1">密码</span></div></td>
                <td height="15"><div align="center">
                  <input type="password" name="admin.pwd" id="password" style="width:105px; height:15px; background-color:#292929; border:solid 1px #7dbad7; font-size:11px; color:#6cd0ff">
                </div></td>
                <td height="15"><div align="left"><a href="javascript:void(0);"><img src="Public/images/dl.gif" id="login" width="49" height="15" border="0"></a></div></td>      
              </tr>
			<tr>
                <td height="15"><div align="right"><span class="STYLE1"> 验证</span></div></td>
                <td height="15"><div align="center" style="float:left">
                  <input type="text" name="admin.code" id="code" style="width:50px; height:15px; background-color:#292929; border:solid 1px #7dbad7; font-size:11px; color:#6cd0ff; float:left; margin-left:7px;">
                </div>
                <div style="float:right; margin-right:10px;"><img src="randcode" width="50" height="15px" class="code"/></div>
                </td>     
			<td><a href="javascript:void(0);" style="font-size: 12px;color:orange;display: inline-block;" id="randcode">看不清?</a></td>				
              </tr>
            </table></td>
            <td width="360" style="background-image:url(Public/images/login_07.gif);background-size:100% 100%;" background="Public/images/login_07.gif">&nbsp;</td>
          </tr>
        </table></td>
      </tr>
      <tr>
        <td height="213" background="Public/images/login_08.gif">&nbsp;</td>
      </tr>
    </table></td>
  </tr>
</table>
</body>
</html>