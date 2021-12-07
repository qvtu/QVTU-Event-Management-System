$(document).ready(function() {
	hideAll();
});

function showAdd() {
	hideAll();
	$("#addDiv").show();
}
/*******************************退出*******************************/
function out() {
	var url = "http://localhost/JavaWeb/user.do";
	//封装要提交到服务器的数据
	var data = {
		"method": "out",
	};
	$.post(url, data, function(data) {
		hideAll();
		window.location = "http://localhost/JavaWeb/login.html";
	}, "json");
}
/*******************************通用****************************** */
function showAdd() {
	hideAll();
	$("#addDiv").show();
}

function showTable() {
	hideAll();
	$("table").show();
}

function addHide() {
	$("#addDiv").hide();
}

function hideAll() {
	$("#msgDiv").hide();
	$("table").hide();
	$("#addDiv").hide();
}

function showMSG(data) {
	if (data.flag) {
		$("#msgDiv").css("color", "green");
	} else {
		$("#msgDiv").css("color", "red");
	}
	$("#msgDiv").html(data.msg);
	$("#msgDiv").show();
}

function printJson(data) {
	console.log(JSON.stringify(data));
}
function qxpd() {
	var pd = 1;
	var url = "http://localhost/JavaWeb/user.do";
	// 封装要提交到服务器的数据
	var data = {
		"method": "qxpd"
	};
	$.post(url, data, function(data) {
		if (data.flag) {
			return 1;
		} else {
			layui.use('layer', function() {
				var layer = layui.layer;
				layer.open({
					type: 0, //默认就是0，所以可以省略
					content: '权限不足',
					icon: 2,
					end: function() {
						window.parent.location.reload(); //刷新父页面
					}
				});
			});
			return 0;
		}
	}, "json"
	);
}
function qxpd1() {
	var url = "http://localhost/JavaWeb/user.do";
	// 封装要提交到服务器的数据
	var data = {
		"method": "qxpd"
	};
	$.post(url, data, function(data) {
		if (data.flag) {
		} else {
			layui.use('layer', function() {
				var layer = layui.layer;
				layer.open({
					type: 0, //默认就是0，所以可以省略
					content: '权限不足',
					icon: 2,
					end: function() {
						window.location = "http://localhost/JavaWeb/main.html";
					}
				});
			});
		}
	}, "json"
	);
}
function qxpd2() {
	var url = "http://localhost/JavaWeb/user.do";
	// 封装要提交到服务器的数据
	var data = {
		"method": "qxpd2"
	};
	$.post(url, data, function(data) {
		if (data.flag) {
		} else {
			layui.use('layer', function() {
				var layer = layui.layer;
				layer.open({
					type: 0, //默认就是0，所以可以省略
					content: '权限不足',
					icon: 2,
					end: function() {
						window.location = "http://localhost/JavaWeb/main.html";
					}
				});
			});
		}
	}, "json"
	);
}