function $(id){
	return document.getElementById(id);
}

function getCookie(cookieName){
	var cookieStr = unescape(document.cookie);
	var arr = cookieStr.split("; ");
	var value="";
	for(var i in arr){
		if(arr[i].indexOf(cookieName+"=")==0){
			value=arr[i].substring((cookieName+"=").length);
			break;
		}
	}	
	return value;
}
window.onload = function(){
	//1加载cookie
	var phoneIds = getCookie("phoneId");
//	var passIds= getCookie("passId");
	
	//2.手机号
	$("phoneId").onblur = function(){
		var regPhone = /^\d{11}$/;  
		var phoneId = $("phoneId").value;
		
		if(phoneId==phoneIds){
			$("Msg").innerHTML = "此用户已存在";
		}else {
			if(phoneId==""){
				$("Msg").innerHTML = "请输入常用的手机号";
			}else{
				if(!regPhone.test(phoneId)){
					$("Msg").innerHTML = "请输入正确的手机号码";
				}else{
					$("Msg").innerHTML = "";
				}
			}
		}
	}	
//	3.图片验证码
	
	var arr=["img/code1.jpg","img/code2.jpg","img/code3.jpg"];
	var iNum=1;
	$("imgId").onclick=function(){
		$("imgIds").src=arr[iNum];
		iNum++;
		if(iNum>=arr.length){
			iNum=0;
		}
	}
		
	//4.密码
	$("passId").onblur = function(){		
	   var str1= $("passId").value;
	   if(6>str1.length||str1.length>20){
	   		$("Msg").innerHTML = "用户名或密码错误 ";
	   }
	}
	
	//5.点击注册保存，cookie
	$("btn").onclick = function(){
		var d = new Date();
		var t = d.getDate()+10;
		d.setDate(t);
		var phone = $("phoneId").value;
		document.cookie="phoneId="+phone+";expires="+d.toGMTString();
	}
	
	
}
	