package servlet;

import entity.Total;
import service.TotalService;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * @Author TotalServlet
 * @create 2021/6/24 8:55 上午
 */
public class TotalServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doPost(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.setCharacterEncoding("UTF-8");
        resp.setCharacterEncoding("UTF-8");
        String method = req.getParameter("method");
        if ("selAll".equals(method)) {
            selAll(req, resp);
        } else if ("delete".equals(method)) {
            delete(req, resp);
        } else if ("xg".equals(method)) {
            xg(req, resp);
        } else if ("add".equals(method)) {
            add(req, resp);
        } else if ("search".equals(method)) {
            search(req, resp);
        }
    }

    protected void selAll(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        TotalService service = new TotalService();
        resp.getWriter().write(service.selALl());
    }

    protected void search(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        TotalService service = new TotalService();
        String eventName = req.getParameter("eventName");
        System.out.println(eventName);
        System.out.println(service.search(eventName));
        resp.getWriter().write(service.search(eventName));
    }

    protected void delete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        TotalService service = new TotalService();
        String eventName = req.getParameter("eventName");
        resp.getWriter().write(service.delete(eventName));
    }

    protected void xg(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        TotalService service = new TotalService();
        Total total = new Total();
        total.setEventName(req.getParameter("eventName"));
        total.setPl(req.getParameter("pl"));
        total.setStarttime(req.getParameter("starttime"));
        total.setEndtime(req.getParameter("endtime"));
        resp.getWriter().write(service.xg(total));
    }

    protected void add(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        TotalService service = new TotalService();
        Total total = new Total();
        total.setEventName(req.getParameter("eventName"));
        total.setPl(req.getParameter("pl"));
        total.setStarttime(req.getParameter("starttime"));
        total.setEndtime(req.getParameter("endtime"));
        resp.getWriter().write(service.add(total));
    }
}
