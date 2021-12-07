/*******************************添加*******************************/
function add() {
	qxpd2();
    var url = "http://localhost/JavaWeb/total.do";
    var inputs = $("input");
    //封装要提交到服务器的数据
    var data = {
        "method": "add",
        "eventName": $("#eventName").val(),
        "pl": $("#pl").val(),
        "starttime": $("#starttime").val(),
        "endtime": $("#endtime").val(),
    };
    $.post(url, data, function (data) {
        hideAll();
        showMSG(data);
        if (data.flag) {
            layui.use('layer', function () {
                var layer = layui.layer;
                layer.open({
                    type: 0, //默认就是0，所以可以省略
                    content: '添加成功',
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
                    content: '添加失败-已有该赛事或信息有误-请重新输入',
                    icon: 2,
                    end: function () {
                        window.parent.location.reload(); //刷新父页面
                    }
                })
            });
        }
    }, "json");
}

/*******************************修改*******************************/

function xg() {
	qxpd2();
    var url = "http://localhost/JavaWeb/total.do";
    var inputs = $("input");
    //封装要提交到服务器的数据
    var data = {
        "method": "xg",
        "eventName": $("#eventName1").val(),
        "pl": $("#pl1").val(),
        "starttime": $("#starttime1").val(),
        "endtime": $("#endtime1").val(),
    };
    $.post(url, data, function (data) {
        hideAll();
        showMSG(data);
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
                    content: '修改失败-未查询到该赛事-请重新输入',
                    icon: 2,
                    end: function () {
                        window.parent.location.reload(); //刷新父页面
                    }
                })
            });
        }
    }, "json");
}

/*******************************查询*******************************/
function sev() {
	qxpd2();
    var url = "http://localhost/JavaWeb/total.do";
    var data = {
        "method": "search",
        "eventName": $("#eventName3").val()
    };
    $.post(url, data, function (data) {
        $("#msgDiv").hide();
        $("table").hide();
        console.log(JSON.stringify(data));
        if (data.flag) {
            var tds = $("table td");
            var tl = data.obj;
            tds.eq(0).html(1)
            tds.eq(1).html(tl.eventName);
            tds.eq(2).html(tl.pl);
            tds.eq(3).html(tl.starttime);
            tds.eq(4).html(tl.endtime)
            $("table").show();
        } else {
            layui.use('layer', function () {
                var layer = layui.layer;
                layer.open({
                    type: 0, //默认就是0，所以可以省略
                    content: '未查询到该赛事-请重新输入',
                    icon: 2,
                    end: function () {
                        window.parent.location.reload(); //刷新父页面
                    }
                })
            });
            $("#msgDiv").html(data.msg);
            $("#msgDiv").show();
        }

    }, "json");
}

/*******************************删除*******************************/
function delete1() {
	qxpd2();
    var url = "http://localhost/JavaWeb/total.do";
    //封装要提交到服务器的数据
    var data = {
        "method": "delete",
        "eventName": $("#eventName2").val(),
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
                })
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
};