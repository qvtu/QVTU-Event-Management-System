/***************************用户修改*******************************/
function xgUser(obj) {
	var x = $(obj).parent().parent().find("td");
	var userName = x.eq(1).text();
	var url = "http://localhost/JavaWeb/user.do";
	layui.use('layer', function() {
		var layer = layui.layer;
		layer.open({
			area: ['800px', 'auto']
			,
			btn: ["立即提交"]
			,
			type: 1 //Page层类型
			,
			anim: 5
			,
			title: '用户名：' + userName
			,
			skin: 'layui-layer-lan'
			,
			content: "<div class='layui-tab layui-tab-card'>" +
				"            <ul class='layui-tab-title'>" +
				"                <li class='layui-this'>账户修改</li>" +
				"            </ul>" +
				"            <div class='layui-tab-content' style='height: auto;'>" +
				"                <div class='layui-tab-item layui-show'>" +
				"                    <form class='layui-form' action=''>" +
				"                        <div class='layui-form-item'>" +
				"                            <label class='layui-form-label'>用户名：</label>" +
				"                            <div class='layui-input-block'>" +
				"                                <input id='xgUserName' type='text' name='title' required lay-verify='required'" +
				"                                       placeholder='请输入新的用户名'" +
				"                                       autocomplete='off' class='layui-input'>" +
				"                            </div>" +
				"                        </div>" +
				"                        <div class='layui-form-item'>" +
				"                            <label class='layui-form-label'>新的积分：</label>" +
				"                            <div class='layui-input-block'>" +
				"                                <input id='xgUserTotal' type='text' name='title' required lay-verify='required'" +
				"                                       placeholder='请输入积分'" +
				"                                       autocomplete='off' class='layui-input'>" +
				"                            </div>" +
				"                        </div>" +
				"                        <div class='layui-form-item'>" +
				"                            <label class='layui-form-label'>权限等级：</label>" +
				"                            <div class='layui-input-block'>" +
				"                                <input id='xgUserType' type='text' name='title' required lay-verify='required'" +
				"                                       placeholder='请输入新的权限等级(管理员：1 普通用户：2)'" +
				"                                       autocomplete='off' class='layui-input'>" +
				"                            </div>" +
				"                        </div>" +
				"                        <div class='layui-form-item'>" +
				"                            <div class='layui-input-block'>" +
				"                                <button type='reset' class='layui-btn layui-btn-primary'>重置</button>" +
				"                            </div>" +
				"                        </div>" +
				"                    </form>" +
				"                </div>" +
				"            </div>" +
				"        </div>"
			,
			yes: function(index, layero) {
				var data = {
					"method": "xgUser",
					"userName": userName,
					"xgUserName": $(layero).find("#xgUserName").val(),
					"Total": $(layero).find("#xgUserTotal").val(),
					"UserType": $(layero).find("#xgUserType").val(),
				};
				$.post(url, data, function(data) {
					hideAll();
					if (data.flag) {
						layui.use('layer', function() {
							var layer = layui.layer;
							layer.open({
								type: 0, //默认就是0，所以可以省略
								content: '修改成功',
								icon: 1,
								end: function() {
									window.parent.location.reload(); //刷新父页面
								}
							})
						});
					} else {
						layui.use('layer', function() {
							var layer = layui.layer;
							layer.open({
								type: 0, //默认就是0，所以可以省略
								content: '修改失败-请重新输入',
								icon: 2,
								end: function() {
									window.parent.location.reload(); //刷新父页面
								}
							})
						});
					}
				}, "json");
			}
		});
	});
}
/***************************用户删除*******************************/
function deteleUser(obj) {
	var x = $(obj).parent().parent().find("td");
	var userName = x.eq(1).text();
	var url = "http://localhost/JavaWeb/user.do";
	//封装要提交到服务器的数据
	layui.use('layer', function() {
		var layer = layui.layer;
		layer.confirm('确定删除？', {
			icon: 3,
			btn: ['确定', '取消'] //按钮
		}, function() {
			var data = {
				"method": "deleteUser",
				"userName": userName,
			};
			$.post(url, data, function(data) {
				hideAll();
				if (data.flag) {
					layui.use('layer', function() {
						var layer = layui.layer;
						layer.open({
							type: 0, //默认就是0，所以可以省略
							content: '删除成功',
							icon: 1,
							end: function() {
								window.parent.location.reload(); //刷新父页面
							}
						});
					});
				} else {
					layui.use('layer', function() {
						var layer = layui.layer;
						layer.open({
							type: 0, //默认就是0，所以可以省略
							content: '删除失败-请重新输入',
							icon: 2,
							end: function() {
								window.parent.location.reload(); //刷新父页面
							}
						})
					});
				}
			}, "json");
		}, function() {
			layer.msg('取消成功', { icon: 1 });
		});
	});
}

/***************************用户列表*******************************/
function loadUser() {
	var pd = 1;
	var url = "http://localhost/JavaWeb/user.do";
	// 封装要提交到服务器的数据
	var data = {
		"method": "qxpd"
	};
	$.post(url, data, function(data) {
		if (data.flag) {
			loadUserText();
			return 1;
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
			return 0;
		}
	}, "json"
	);
}
function loadUserText() {
	var url = "http://localhost/JavaWeb/user.do";
	// 封装要提交到服务器的数据
	var data = {
		"method": "selAllUser"
	};
	$.post(url, data, function(data) {
		if (data.flag) {
			var tbody = $("tbody");
			tbody.find("tr[flag!='trUser']").remove();
			var trUser = $("tbody tr[flag='trUser']").clone();
			trUser.removeAttr("flag");
			trUser.show();
			var userList = data.obj;
			for (var i = 0; i < userList.length; i++) {
				var user = userList[i];
				var tr = trUser.clone();
				var tds = tr.find("td");
				if (user.userType == 0) {
					continue;
				}
				tds.eq(0).html(i + 1);
				tds.eq(1).html(user.userName);
				tds.eq(2).html(user.total);
				if (user.userType == 2) {
					tds.eq(3).html("普通用户");
				} else if (user.userType == 1) {
					tds.eq(3).html("管理员");
				} else {
					tds.eq(3).html("未知");
				}
				tbody.append(tr);
			}
			$("table").show();
		}
	}, "json");
}