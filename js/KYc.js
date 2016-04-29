$(function(){
    //消除第一个文章上的border
		$("#news .list-group-item").eq(0).css({"border-top":"none"});
		$("#sport .list-group-item").eq(0).css({"border-top":"none"});
		$("#entertament .list-group-item").eq(0).css({"border-top":"none"});
		$("#science .list-group-item").eq(0).css({"border-top":"none"});
	/*点击顶部图片有透明效果
	    $(".gallery-cell").click(
	    	function(){
	    	    var i=$(this).index();
	    	    $(".gallery-cell").eq(i).css("opacity",0.5)	    		 	    		
	    	})
	*/  
	//simplemodal插件控制及登陆/关于我的脚本
	$("#aboutme").click(function(){$("#aboutmeInfo").modal();});
	$("#admin").click(function(){$("#admindialog").modal();});
			function login(){if($("#name").val()=="admin"&& $("#password").val()=="admin" )
				{
					$.modal.close();
					$("#adminControl").show();
				}
				else{
				     $("#login").popover("show");
					}
				}
	$("#login").click(function(){login()});	
	$("#admindialog").keydown(function(event){ if(event.keyCode==13){login(); }  });  
	//管理员功能
	$("#logout").click(function(){$("#adminControl").hide();})

	//simplemodal插件控制及添加文章的脚本
	var now=new Date();
	var month=Number(now.getMonth())+1;
	var day=Number(now.getDay())+1;
	var mytime=now.getFullYear()+"-"+month+"-"+day;
	
	var text1="<div class=\"list-group-item\"><h3><strong><a href=\"#\">";
	var text2="</a></strong></h3><p>";
	var text3="</p><p><span class=\"glyphicon glyphicon-pencil\"></span><small>&nbsp;</small><small class=\"time\">"
    var text4="</small><small>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</small><span class=\"glyphicon glyphicon-eye-open\"></span><small>&nbsp;</small><small class=\"clickNumber\">0</small></p></div>";
	
	$("#addNews").click(function(){$("#addnews").modal();});
	$(".btn-success").click(function(){
		if($("#addoption1").hasClass("active")){			
		$("#news .list-group").before(text1+$("#headline").val()+text2+$("#content").val()+text3+mytime+text4);
		$.modal.close();
		alert("发布成功！")
		}
		else if($("#addoption2").hasClass("active")){
		$("#sport .list-group").before(text1+$("#headline").val()+text2+$("#content").val()+text3+mytime+text4);
		$.modal.close();
		alert("发布成功！")
		}
		else if($("#addoption3").hasClass("active")){
		$("#entertament .list-group").before(text1+$("#headline").val()+text2+$("#content").val()+text3+mytime+text4);
		$.modal.close();
		alert("发布成功！")
		}
		else if($("#addoption4").hasClass("active")){
		$("#science .list-group").before(text1+$("#headline").val()+text2+$("#content").val()+text3+mytime+text4);
		$.modal.close();
		alert("发布成功！")	
		}
		else{alert("你未选择新闻类别！")}
		
	})
	
   
	//simplemodal插件控制及删除文章的脚本
    $("#delNews").click(function(){$("#delnews").modal();});
    $(".btn-danger").click(function(){
    	var del=Number($("#deletenum").val());
    	if($("#deloption1").hasClass("active")){
		 $("#news .list-group-item").eq(del-1).remove();
		 $.modal.close();
		 alert("删除成功！")
		}
		else if($("#deloption2").hasClass("active")){
			 $("#sport .list-group-item").eq(del-1).remove();
			 $.modal.close();
		 alert("删除成功！")
		}
		else if($("#deloption3").hasClass("active")){
			 $("#entertament .list-group-item").eq(del-1).remove();
			 $.modal.close();
		 alert("删除成功！")
		}
		else if($("#deloption4").hasClass("active")){
			 $("#science .list-group-item").eq(del-1).remove();
			 $.modal.close();
		 alert("删除成功！")
		}
		else{alert("你未选择新闻类别！")}
    })
    	//添加阅读量
	$("#news a").click(function(){	
		var j=($("#news a").index(this));
		var i=$("#news .clickNumber").eq(j).text();
		i=Number(i)+1;
		$("#news .clickNumber").eq(j).text(i);
	});
	$("#sport a").click(function(){	
		var j=($("#sport a").index(this));
		var i=$("#sport .clickNumber").eq(j).text();
		i=Number(i)+1;
		$("#sport .clickNumber").eq(j).text(i);
	});
	$("#entertament a").click(function(){	
		var j=($("#entertament a").index(this));
		var i=$("#entertament .clickNumber").eq(j).text();
		i=Number(i)+1;
		$("#entertament .clickNumber").eq(j).text(i);
	});
	$("#science a").click(function(){	
		var j=($("#science a").index(this));
		var i=$("#science .clickNumber").eq(j).text();
		i=Number(i)+1;
		$("#science .clickNumber").eq(j).text(i);
	});
	$("#picture a").click(function(){	
		var j=($("#picture a").index(this));
		if(j%2!=0)
		{
		j=(j-1)/2;
		var i=$("#picture .clickNumber").eq(j).text();
		i=Number(i)+1;		
		$("#picture .clickNumber").eq(j).text(i);
		}
		else{
		j=j/2;
		var i=$("#picture .clickNumber").eq(j).text();
		i=Number(i)+1;		
		$("#picture .clickNumber").eq(j).text(i);
		}
	});
	
	//视频控制JS	
	var video = $("#video");
	$("#video").mouseover(
	function play(){
		video.play();
	}).mouseover(
	function pause(){
		video.pause();
	}).mouseover(
	//静音
	function shutup(){
		video.muted=true;
	}	).mouseover(
	//恢复声音
	function openMouth(){
		video.muted=false;
	}).mouseover(
	//提高音量
	function improveAudio(){
		video.volume+=0.2;
	}).mouseover(
	//提高音量
	function reduceAudio(){
		video.volume-=0.2;
	}	)
	
 })