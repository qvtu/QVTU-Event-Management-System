function rePSW() {
    var url = "http://localhost/JavaWeb/user.do";
    var inputs = $("input");
    //封装要提交到服务器的数据
    var data = {
        "method": "rePSW",
        "oldPSW": $("#oldPSW").val(),
        "newPSW": $("#newPSW").val(),
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
                    content: '修改失败-密码错误-请重新输入',
                    icon: 2,
                    end: function () {
                        window.parent.location.reload(); //刷新父页面
                    }
                })
            });
        }
    }, "json");
}