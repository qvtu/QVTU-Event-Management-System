package service;

import base.MSGCallback;
import com.fasterxml.jackson.core.JsonProcessingException;
import dao.TotalDAO;
import entity.Total;

import java.util.List;

/**
 * @Author TotalService
 * @create 2021/6/24 8:52 上午
 */
public class TotalService {
    private TotalDAO dao = new TotalDAO();

    public String selALl() throws JsonProcessingException {
        List<Total> list = dao.selAll();
        return new MSGCallback(true, "共找到" + list.size() + "条记录", list).toJson();
    }

    public String search(String eventName) throws JsonProcessingException {
        Total total=(dao.search(eventName));
        if (total!= null&&total.getEventName()!=null) {
            return new MSGCallback(true, "查询成功",total).toJson();
        }
        return new MSGCallback(false, "查询失败").toJson();
    }

    public String delete(String eventName) throws JsonProcessingException {
        int flag = dao.delete(eventName);
        if (flag == 1) {
            return new MSGCallback(true, "删除成功").toJson();
        }
        return new MSGCallback(false, "删除失败").toJson();
    }

    public String xg(Total total) throws JsonProcessingException {
        int flag = dao.xg(total);
        if (flag == 1) {
            return new MSGCallback(true, "修改成功").toJson();
        }
        return new MSGCallback(false, "修改失败").toJson();
    }

    public String add(Total total) throws JsonProcessingException {
        int flag = dao.add(total);
        if (flag == 1) {
            return new MSGCallback(true, "添加成功").toJson();
        }
        return new MSGCallback(false, "添加失败").toJson();
    }
}
