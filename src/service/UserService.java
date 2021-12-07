package service;

import base.MSGCallback;
import com.fasterxml.jackson.core.JsonProcessingException;
import dao.UserDAO;
import entity.User;

import java.util.List;

/**
 * @Author UserService
 * @create 2021/6/21 9:14 上午
 */
public class UserService {
    private UserDAO dao = new UserDAO();

    public MSGCallback login(User user) {
        user = dao.login(user);
        if (user == null) {
            return new MSGCallback(false, "账号或密码错误");
        }
        return new MSGCallback(true, user);
    }

    public String add(User user) throws JsonProcessingException {
        user.setUserId(System.currentTimeMillis());
        int flag = dao.add(user);
        if (flag == 1) {
            return new MSGCallback(true, "添加成功").toJson();
        }
        return new MSGCallback(false, "添加失败").toJson();
    }

    public String rePSW(String oldPSW, String newPSW, User user) throws JsonProcessingException {
        if (user==null){
            return new MSGCallback(false, "请登录").toJson();
        }
        int flag = dao.rePSW(oldPSW, newPSW, user.getUserName());
        if (flag == 1) {
            return new MSGCallback(true, "修改成功").toJson();
        }
        return new MSGCallback(false, "修改失败").toJson();
    }
    public String selALlUser() throws JsonProcessingException {
        List<User> list = dao.selAllUser();
        return new MSGCallback(true, "共找到" + list.size() + "条记录", list).toJson();
    }

    public String xgUser(String newName,String total,String type,String oldName) throws JsonProcessingException {
        int flag = dao.xgUser(newName,total,type,oldName);
        if (flag == 1) {
            return new MSGCallback(true, "修改成功").toJson();
        }
        return new MSGCallback(false, "修改失败").toJson();
    }

    public String deleteUser(String userName) throws JsonProcessingException {
        int flag = dao.deleteUser(userName);
        if (flag == 1) {
            return new MSGCallback(true, "删除成功").toJson();
        }
        return new MSGCallback(false, "删除失败").toJson();
    }
    public String qxmz() throws JsonProcessingException {
        return new MSGCallback(true, "权限满足").toJson();
	}
    public String qxbz() throws JsonProcessingException {
        return new MSGCallback(false, "权限不足").toJson();
	}
}
