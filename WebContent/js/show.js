/***************************赛事列表*******************************/
function loadTotal() {
	var url = "http://localhost/JavaWeb/user.do";
	// 封装要提交到服务器的数据
	var data = {
		"method": "qxpd2"
	};
	$.post(url, data, function(data) {
		if (data.flag) {
			loadTotalText();
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
function loadTotalText() {
    var url = "http://localhost/JavaWeb/total.do";
    // 封装要提交到服务器的数据
    var data = {
        "method": "selAll"
    };
    $.post(url, data, function (data) {
        if (data.flag) {
            var tbody = $("tbody");
            tbody.find("tr[flag!='trDemo']").remove();
            var trDemo = $("tbody tr[flag='trDemo']").clone();
            trDemo.removeAttr("flag");
            trDemo.show();
            var totalList = data.obj;
            for (var i = 0; i < totalList.length; i++) {
                var total = totalList[i];
                var tr = trDemo.clone();
                var tds = tr.find("td");
                tds.eq(0).html(i + 1);
                tds.eq(1).html(total.eventName);
                tds.eq(2).html(total.pl);
                tds.eq(3).html(total.starttime);
                tds.eq(4).html(total.endtime);
                tbody.append(tr);
            }
            $("table").show();
        }
    }, "json");
}

/******************************删除2*******************************/
function detele2(obj) {
	qxpd2();
    var x = $(obj).parent().parent().find("td");
    var y = x.eq(1).text();
    var url = "http://localhost/JavaWeb/total.do";
    //封装要提交到服务器的数据
    layui.use('layer', function () {
        var layer = layui.layer;
        layer.confirm('确定删除？', {
            icon: 3,
            btn: ['确定', '取消'] //按钮
        }, function () {
            var data = {
                "method": "delete",
                "eventName": y,
            };
            $.post(url, data, function (data) {
                hideAll();
                if (data.flag) {
                    layui.use('layer', function () {
                        var layer = layui.layer;
                        layer.open({
                            type: 0, //默认就是0，所以可以省略
                            content: '删除成功',
                            icon: 1,
                            end: function () {
                                window.parent.location.reload(); //刷新父页面
                            }
                        });
                    });
                } else {
                    layui.use('layer', function () {
                        var layer = layui.layer;
                        layer.open({
                            type: 0, //默认就是0，所以可以省略
                            content: '删除失败-未找到该赛事-请重新输入',
                            icon: 2,
                            end: function () {
                                window.parent.location.reload(); //刷新父页面
                            }
                        })
                    });
                }
            }, "json");
        }, function () {
            layer.msg('取消成功', {icon: 1});
        });
    });
};

/******************************修改2*******************************/
function xg2(obj) {
	qxpd2();
    var x = $(obj).parent().parent().find("td");
    var y = x.eq(1).text();
    var url = "http://localhost/JavaWeb/total.do";
    layui.use('layer', function () {
        var layer = layui.layer;
        layer.open({
            area: ['600px', 'auto']
            ,
            btn: ["立即提交"]
            ,
            type: 1 //Page层类型
            ,
            anim: 5
            ,
            title: '赛事名：' + y
            ,
            skin: 'layui-layer-lan'
            ,
            content:
                "<div class='layui-tab layui-tab-card'>" +
                "            <ul class='layui-tab-title'>" +
                "                <li class='layui-this'>修改赛事</li>" +
                "            </ul>" +
                "            <div class='layui-tab-content' style='height: auto;'>" +
                "                <div class='layui-tab-item layui-show'>" +
                "                    <form class='layui-form' action=''>" +
                "                        <div class='layui-form-item'>" +
                "                            <label class='layui-form-label'>赔率：</label>" +
                "                            <div class='layui-input-block'>" +
                "                                <input id='pl3' type='text' name='title' required lay-verify='required'" +
                "                                       placeholder='请输入赛事的赔率'" +
                "                                       autocomplete='off' class='layui-input'>" +
                "                            </div>" +
                "                        </div>" +
                "                        <div class='layui-form-item'>" +
                "                            <label class='layui-form-label'>开始时间：</label>" +
                "                            <div class='layui-input-block'>" +
                "                                <input id='starttime3' type='text' name='title' required lay-verify='required'" +
                "                                       placeholder='请输入赛事的开始时间'" +
                "                                       autocomplete='off' class='layui-input'>" +
                "                            </div>" +
                "                        </div>" +
                "                        <div class='layui-form-item'>" +
                "                            <label class='layui-form-label'>结束时间：</label>" +
                "                            <div class='layui-input-block'>" +
                "                                <input id='endtime3' type='text' name='title' required lay-verify='required'" +
                "                                       placeholder='请输入赛事的结束时间'" +
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
                "        </div>" +
                "<script> " +
                "   layui.use('laydate', function () { " +
                "       var laydate = layui.laydate; " +
                "  laydate.render({ " +
                "            elem: '#starttime3' " +
                "           ,type: 'datetime' " +
                "           , theme: '#393D49' " +
                "           , calendar: true " +
                "       }); " +
                "   }); " +
                " </script> " +
                "<script> " +
                "   layui.use('laydate', function () { " +
                "       var laydate = layui.laydate; " +
                "  laydate.render({ " +
                "            elem: '#endtime3' " +
                "           ,type: 'datetime' " +
                "           , theme: '#393D49' " +
                "           , calendar: true " +
                "       }); " +
                "   }); " +
                " </script> "
            ,
            yes: function (index, layero) {
                var data = {
                    "method": "xg",
                    "eventName": y,
                    "pl": $(layero).find("#pl3").val(),
                    "starttime": $(layero).find("#starttime3").val(),
                    "endtime": $(layero).find("#endtime3").val(),
                };
                $.post(url, data, function (data) {
                    hideAll();
                    if (data.flag) {
                        layui.use('layer', function () {
                            var layer = layui.layer;
                            layer.open({
                                type: 0, //默认就是0，所以可以省略
                                content: '修改成功',
                                icon: 1,
                                end: function () {
                                    window.parent.location.reload(); //刷新父页面
                                }
                            })
                        });
                    } else {
                        layui.use('layer', function () {
                            var layer = layui.layer;
                            layer.open({
                                type: 0, //默认就是0，所以可以省略
                                content: '修改失败-填写错误-请重新输入',
                                icon: 2,
                                end: function () {
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