package servlet;

import base.MSGCallback;
import entity.User;
import service.UserService;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

/**
 * @Author UserServlet
 * @create 2021/6/21 9:14 上午
 */

public class UserServlet extends HttpServlet {
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.setCharacterEncoding("UTF-8");
		resp.setCharacterEncoding("UTF-8");
		String method = req.getParameter("method");
		System.out.println(method);
		if ("login".equals(method)) {
			login(req, resp);
		} else if ("register".equals(method)) {
			register(req, resp);
		} else if ("rePSW".equals(method)) {
			rePSW(req, resp);
		} else if ("selAllUser".equals(method)) {
			selAllUser(req, resp);
		} else if ("add".equals(method)) {
			add(req, resp);
		} else if ("xgUser".equals(method)) {
			xgUser(req, resp);
		} else if ("deleteUser".equals(method)) {
			deleteUser(req, resp);
		} else if ("qxpd".equals(method)) {
			qxpd(req, resp);
		} else if ("qxpd2".equals(method)) {
			qxpd2(req, resp);
		}
	}

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		doPost(req, resp);
	}

	protected void login(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		User user = new User();
		UserService service = new UserService();
		user.setUserName(req.getParameter("userName"));
		user.setUserPSW(req.getParameter("userPSW"));
		MSGCallback msg = service.login(user);
		req.getSession().invalidate();
		req.getSession().setAttribute("user", msg.getObj());
		resp.getWriter().write(msg.toJson());
	}

	protected void out(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.getSession().invalidate();
	}

	protected void register(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		User user = new User();
		UserService service = new UserService();
		user.setUserName(req.getParameter("userName"));
		user.setUserPSW(req.getParameter("userPSW"));
		user.setUserType(req.getParameter("userType"));
		user.setTotal(req.getParameter("total"));
		resp.getWriter().write(service.add(user));
	}

	protected void add(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		User user = new User();
		UserService service = new UserService();
		user.setUserName(req.getParameter("userName"));
		user.setUserPSW(req.getParameter("userPSW"));
		user.setUserType(req.getParameter("userType"));
		user.setTotal(req.getParameter("total"));
		resp.getWriter().write(service.add(user));
	}

	protected void qxpd(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		UserService service = new UserService();
		HttpSession session = req.getSession();
		User user = (User) session.getAttribute("user");
		System.out.println(user);
		if (user == null) {
			resp.getWriter().write(service.qxbz());
			System.out.println(1);
		} else if ((user.getUserType() == 0 || user.getUserType() == 1) && user != null) {
			resp.getWriter().write(service.qxmz());
			System.out.println(2);
		} else {
			resp.getWriter().write(service.qxbz());
			System.out.println(3);
		}
	}

	protected void qxpd2(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		UserService service = new UserService();
		HttpSession session = req.getSession();
		User user = (User) session.getAttribute("user");
		System.out.println(user);
		if (user == null) {
			resp.getWriter().write(service.qxbz());
			System.out.println(4);
		} else if ((user.getUserType() == 0 || user.getUserType() == 1 || user.getUserType() == 2) && user != null) {
			resp.getWriter().write(service.qxmz());
			System.out.println(5);
		} else {
			resp.getWriter().write(service.qxbz());
			System.out.println(6);
		}
	}

	protected void rePSW(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		UserService service = new UserService();
		HttpSession session = req.getSession();
		User user = (User) session.getAttribute("user");
		String oldPSW = req.getParameter("oldPSW");
		String newPSW = req.getParameter("newPSW");
		resp.getWriter().write(service.rePSW(oldPSW, newPSW, user));
	}

	protected void selAllUser(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		UserService service = new UserService();
		resp.getWriter().write(service.selALlUser());
	}

	protected void xgUser(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		UserService service = new UserService();
		String newName = req.getParameter("xgUserName");
		String total = req.getParameter("Total");
		String type = req.getParameter("UserType");
		String oldName = req.getParameter("userName");
		resp.getWriter().write(service.xgUser(newName, total, type, oldName));
	}

	protected void deleteUser(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		UserService service = new UserService();
		String userName = req.getParameter("userName");
		System.out.println(userName);
		resp.getWriter().write(service.deleteUser(userName));
	}
}
