/*******************************添加用户*******************************/
function addUser() {
    var url = "http://localhost/JavaWeb/user.do";
    //封装要提交到服务器的数据
    var data = {
        "method": "add",
        "userName": $("#addUserName").val(),
        "userPSW": $("#addUserPSW").val(),
        "total":$("#addUserTotal").val(),
        "userType": $("#addUserType").val(),
    };
    $.post(url, data, function (data) {
        hideAll();
        if (data.flag) {
            layui.use('layer', function () {
                var layer = layui.layer;
                layer.open({
                    type: 0, //默认就是0，所以可以省略
                    content: '添加成功',
                    icon: 1,
                    end: function () {
                        window.parent.location.reload(); //刷新父页面
                    },
                })
            });
        } else {
            layui.use('layer', function () {
                var layer = layui.layer;
                layer.open({
                    type: 0, //默认就是0，所以可以省略
                    content: '添加失败-该用户名已存在',
                    icon: 2,
                    end: function () {
                        window.parent.location.reload(); //刷新父页面
                    },
                })
            });
        }
    }, "json");
}
