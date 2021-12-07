/*******************************登陆*******************************/
function login() {
    var url = "http://localhost/JavaWeb/user.do";
    //封装要提交到服务器的数据
    var data = {
        "method": "login",
        "userName": $("#userName").val(),
        "userPSW": $("#userPSW").val(),
    };

    $.post(url, data, function (data) {
        hideAll();
        if (data.flag) {
            var tds = $("table td");
            var user = data.obj;
            tds.eq(0).html(user.userName);
            tds.eq(1).html(user.userPSW);
            window.location = "http://localhost/JavaWeb/main.html";
        } else {
            layui.use('layer', function () {
                var layer = layui.layer;
                layer.open({
                    type: 0, //默认就是0，所以可以省略
                    content: '用户名、密码错误或未注册-请重新输入',
                    icon: 2,
                })
            });
            showMSG(data);
        }
    }, "json");
}

/*******************************注册*******************************/
function Register() {
    var url = "http://localhost/JavaWeb/user.do";
    //封装要提交到服务器的数据
    var data = {
        "method": "register",
        "userName": $("#userName").val(),
        "userPSW": $("#userPSW").val(),
        "userType": 2,
        "total":99,
    };
    $.post(url, data, function (data) {
        hideAll();
        if (data.flag) {
            layui.use('layer', function () {
                var layer = layui.layer;
                layer.open({
                    type: 0, //默认就是0，所以可以省略
                    content: '注册成功-请登录',
                    icon: 1,
                })
            });
        } else {
            layui.use('layer', function () {
                var layer = layui.layer;
                layer.open({
                    type: 0, //默认就是0，所以可以省略
                    content: '注册失败-该用户名已被注册',
                    icon: 2,
                })
            });
            showMSG(data);
        }
    }, "json");
}


