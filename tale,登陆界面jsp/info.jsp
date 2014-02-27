<%@ page language="java" import="java.util.*,com.e.domain.Gongsi" pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
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
.map{
	position:absolute;
	left:40%;
	top:200px;;
	padding-left:80px;
	margin-left:20px;
	width:500px;
	height:400px;
	border: 1px solid #166A9D;
}
</style>
<link href="Public/tab/css/style1.css" rel="stylesheet" type="text/css"/>
<script src="Public/js/jquery-1.7.2.min.js" type="text/javascript"></script>
<script type="text/javascript" src="http://api.map.baidu.com/api?v1.5&ak=2c26c6b95b94b9cf6fb5efea9a92753a"></script>
<script type="text/javascript" src="Public/lhgdialog/lhgdialog.min.js"></script>
<script type="text/javascript">
$(document).ready(function(){
	$("#submit").click(function(){
				var id =$("#gid").val();
				var name=$("#uname").val();
				var connector=$("#connector").val();
				var sex=$("input:radio[name=gongsi.sex]:checked").val();
				var tel = $("#tel").val();
				var email=$("#email").val();
				var utime=$("#utime").val();
				var dtime=$("#dtime").val();
				var lat=$("#lat").val();
				var lng=$("#lng").val();
				if(name==""){
	                $.dialog({
							    lock: true,
							    title:"易行通提示",
							    width: 160,
	    						height: 80,
							    content: '公司全称不能为空!',
							    icon: 'alert.gif',
							    cancelVal: '关闭',
	    						cancel: true 
							});
	                return false;
				}
				if(connector==""){
	                $.dialog({
							    lock: true,
							    title:"易行通提示",
							    width: 160,
	    						height: 80,
							    content: '联系人不能为空!',
							    icon: 'alert.gif',
							    cancelVal: '关闭',
	    						cancel: true 
							});
	                return false;
				}
				if(tel==""){
	                $.dialog({
							    lock: true,
							    title:"易行通提示",
							    width: 160,
	    						height: 80,
							    content: '联系电话不能为空!',
							    icon: 'alert.gif',
							    cancelVal: '关闭',
	    						cancel: true 
							});
	                return false;
				}
				if(email==""){
	                $.dialog({
							    lock: true,
							    title:"易行通提示",
							    width: 160,
	    						height: 80,
							    content: 'Email不能为空!',
							    icon: 'alert.gif',
							    cancelVal: '关闭',
	    						cancel: true 
							});
	                return false;
				}
				if(lat==""){
	                $.dialog({
							    lock: true,
							    title:"易行通提示",
							    width: 160,
	    						height: 80,
							    content: '经度不能为空!',
							    icon: 'alert.gif',
							    cancelVal: '关闭',
	    						cancel: true 
							});
	                return false;
				}
				if(lng==""){
	                $.dialog({
							    lock: true,
							    title:"易行通提示",
							    width: 160,
	    						height: 80,
							    content: '纬度不能为空!',
							    icon: 'alert.gif',
							    cancelVal: '关闭',
	    						cancel: true 
							});
	                return false;
				}
				$.post("update_gongsi",{
					"gongsi.id":id,
					"gongsi.name":name,
					"gongsi.connector":connector,
					"gongsi.sex":sex,
					"gongsi.tel":tel,
					"gongsi.email":email,
					"gongsi.utime":utime,
					"gongsi.dtime":dtime,
					"gongsi.lat":lat,
					"gongsi.lng":lng
				}, function(data) {
					if(data!=""){
						if (data == 1) {
							$.dialog({
							    lock: true,
							    title:"易行通提示",
							    width: 160,
	    						height: 80,
							    content: '修改成功',
							    icon: 'success.gif',
							    cancelVal: '关闭',
	    						cancel: true,
	    						close:function(){
									window.location.reload();
	    						}
							});
						}else {
							$.dialog({
							    lock: true,
							    title:"易行通提示",
							    width: 160,
	    						height: 80,
							    content: '修改失败',
							    icon: 'error.gif',
							    cancelVal: '关闭',
	    						cancel: true 
							});
						}
					}
				},"html"
				);
	});			
});

</script>
</head>

<body>
    	<div class="top">
    	<span class="STYLE3">你当前的位置</span>：[基本信息]-[公司详情]
    </div>
  <div class="form1">
            <ul class="reg">
                <li>
                    <span class="k">公司账号：</span>
                    <span class="c">
                        <input rel="check" type="hidden" name="Username" value="${gongsi.id}"  id="gid" size="30" class="main" />${admin.loginname}<br />
                        <span class="tip"></span>
                    </span>
                </li>
                <li>
                    <span class="k">公司全称：</span>
                    <span class="c">
                        <input rel="check" type="text"  id="uname" value="${gongsi.name}"  size="30" class="main" /><br />
                        <span class="tip"></span>
                    </span>
                </li>
                 <li>
                    <span class="k">所在地区：</span>
                    <span class="c">
                        &nbsp;&nbsp;&nbsp;${gongsi.area1} - ${gongsi.area2}<br />
                        <span class="tip"></span>
                    </span>
                </li>
                <li>
                    <span class="k">所在经度：</span>
                    <span class="c">
                        <input rel="check" type="text" id="lng"  value="${gongsi.lng}" size="30" class="main" /><br />
                        <span class="tip"></span>
                    </span>
                </li>
                <li>
                    <span class="k">所在纬度：</span>
                    <span class="c">
                        <input rel="check" type="text" id="lat" value="${gongsi.lat}" size="30" class="main" /><br />
                        <span class="tip"></span>
                    </span>
                </li>
                <li>
                    <span class="k">联系人：</span>
                    <span class="c">
                        <input rel="check" type="text" id="connector" value="${gongsi.connector}" size="30" class="main" /><br />
                        <span class="tip"></span>
                    </span>
                </li>
                <li>
                    <span class="k">性别：</span>
                    <span class="c">
                        <input type="radio" id="sex" value="先生"
      	<c:if test="${gongsi.sex eq '先生'}"> checked</c:if>
       name="gongsi.sex"  />先生
                        <input type="radio" id="sex1" value="女士" 
      	<c:if test="${gongsi.sex eq '女士'}"> checked</c:if>
      name="gongsi.sex" />女士<br />
                        <span class="tip"></span>
                    </span>
                </li>
                <li>
                    <span class="k">手机号：</span>
                    <span class="c">
                        <input id="tel"  rel="check" type="text" name="Birth" value="${gongsi.tel}" size="30" class="main"  /><br />
                        <span class="tip"></span>
                    </span>
                </li>
                <li>
                    <span class="k">邮箱：</span>
                    <span class="c">
                        <input  id="email" rel="check" type="text" name="Birth" value="${gongsi.email}" size="30" class="main"  /><br />
                        <span class="tip"></span>
                    </span>
                </li>
				<li>
                    <span class="k">上班时间：</span>
                    <span class="c">
                        <select name="gongsi.utime" id="utime">
      		<option value="7:00"
      		<c:if test="${gongsi.utime eq '7:00'}">selected</c:if>
      		>7:00</option>
      		<option value="7:30"
      		<c:if test="${gongsi.utime eq '7:30'}">selected</c:if>
      		>7:30</option>
      		<option value="8:00"
      		<c:if test="${gongsi.utime eq '8:00'}">selected</c:if>
      		>8:00</option>
      		<option value="8:30"
      		<c:if test="${gongsi.utime eq '8:30'}">selected</c:if>
      		>8:30</option>
      		<option value="9:00"
      		<c:if test="${gongsi.utime eq '9:00'}">selected</c:if>
      		>9:00</option>
      		<option value="9:30"
      		<c:if test="${gongsi.utime eq '9:30'}">selected</c:if>
      		>9:30</option>
      	  </select><br />
                        <span class="tip"></span>
                    </span>
                </li>
				<li>
                    <span class="k">下班时间：</span>
                    <span class="c">
                        <select name="gongsi.dtime" id="dtime">
      		<option value="16:00"
      		<c:if test="${gongsi.dtime eq '16:00'}">selected</c:if>
      		>16:00</option>
      		<option value="16:30"
      		<c:if test="${gongsi.dtime eq '16:30'}">selected</c:if>
      		>16:30</option>
      		<option value="17:00"
      		<c:if test="${gongsi.dtime eq '17:00'}">selected</c:if>
      		>17:00</option>
      		<option value="17:30"
      		<c:if test="${gongsi.dtime eq '17:30'}">selected</c:if>
      		>17:30</option>
      		<option value="18:00"
      		<c:if test="${gongsi.dtime eq '18:00'}">selected</c:if>
      		>18:00</option>
      		<option value="18:30"
      		<c:if test="${gongsi.dtime eq '18:30'}">selected</c:if>
      		>18:30</option>
      		<option value="19:00"
      		<c:if test="${gongsi.dtime eq '19:00'}">selected</c:if>
      		>19:00</option>
      	  </select><br />
                        <span class="tip"></span>
                    </span>
                </li>
				
                <li class="butt" ><input type="image" value="提交" src="Public/images/tj.gif" id="submit"/></li>  
                </ul>
    <div class="map" id="allmap">
    </div>
</div>
</body>
</html>
<script>
	<% Gongsi g = (Gongsi)request.getAttribute("gongsi");
		String lat=g.getLat();
		String lng=g.getLng();
		String gongsiname=g.getName();
	%>
	var lat=<%=lat%>;
	var lng=<%=lng%>;
	var name='<%=gongsiname%>';
	var map = new BMap.Map("allmap"); // 创建Map实例 
	var point=new BMap.Point(lng,lat);
	map.centerAndZoom(point, 18); // 初始化地图,设置中心点坐标和地图级别
	map.addControl(new BMap.ScaleControl()); // 添加比例尺控件
	map.addControl(new BMap.OverviewMapControl()); //添加缩略地图控件
	map.enableScrollWheelZoom(); //启用滚轮放大缩小
	map.addControl(new BMap.MapTypeControl()); 
	var marker =new BMap.Marker(point);
	marker.setAnimation(BMAP_ANIMATION_BOUNCE);
	map.addOverlay(marker);
	var label = new BMap.Label(name, {
		offset : new BMap.Size(20, -10)
	});
	marker.setLabel(label);
	map.addEventListener("click", function(e){
	  	document.getElementById("lng").value = e.point.lng;
	  	document.getElementById("lat").value = e.point.lat;
	});
</script>