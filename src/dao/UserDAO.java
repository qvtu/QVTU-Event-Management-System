package dao;

import entity.User;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/**
 * @Author UserDAO
 * @create 2021/6/21 9:11 上午
 */
public class UserDAO {
    private Connection conn;
    private PreparedStatement pstm;
    private ResultSet rs;

    public User login(User user) {
        String strSQL = "SELECT * FROM user_ WHERE userName=? AND userPSW=? ";
        try {
            conn = DBConnection.getDBConnection();
            pstm = conn.prepareStatement(strSQL);
            pstm.setString(1, user.getUserName());
            pstm.setString(2, user.getUserPSW());
            rs = pstm.executeQuery();
            if (rs.next()) {
                user = new User();
                user.setUserId(rs.getLong("userId"));
                user.setUserName(rs.getString("userName"));
                user.setUserPSW(rs.getString("userPSW"));
                user.setTotal(rs.getInt("total"));
                user.setUserType(rs.getString("userType"));
                return user;
            }
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } finally {
            DBConnection.close(conn, pstm, rs);
        }
        return null;
    }

    public int add(User user) {
        String strSQL = "INSERT INTO user_ (userId,userName,userPSW,total,userType) VALUES (?,?,?,?,?)";
        try {
            conn = DBConnection.getDBConnection();
            pstm = conn.prepareStatement(strSQL);
            pstm.setLong(1,user.getUserId());
            pstm.setString(2, user.getUserName());
            pstm.setString(3, user.getUserPSW());
            pstm.setInt(4,user.getTotal());
            pstm.setInt(5,user.getUserType());
            return pstm.executeUpdate();
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } finally {
            DBConnection.close(conn, pstm, rs);
        }
        return -1;
    }

    public int rePSW(String oldPSW,String newPSW,String userName) {
        String strSQL = "UPDATE user_ SET userPSW = ? WHERE userPSW = ? AND userName = ?";
        try {
            conn = DBConnection.getDBConnection();
            pstm = conn.prepareStatement(strSQL);
            pstm.setString(1,newPSW);
            pstm.setString(2,oldPSW);
            pstm.setString(3,userName);
            return pstm.executeUpdate();
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } finally {
            DBConnection.close(conn, pstm, rs);
        }
        return -1;
    }
    public List<User> selAllUser() {
        String strSQL = "SELECT * FROM user_";
        List<User> list = new ArrayList<User>();
        try {
            conn = DBConnection.getDBConnection();
            pstm = conn.prepareStatement(strSQL);
            rs = pstm.executeQuery();
            while (rs.next()) {
                User user = new User();
                user.setUserId(rs.getLong("userId"));
                user.setUserName(rs.getString("userName"));
                user.setTotal(rs.getInt("total"));
                user.setUserType(rs.getInt("userType"));
                user.setUserPSW(rs.getString("userPSW"));
                list.add(user);
            }
            return list;
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } finally {
            DBConnection.close(conn, pstm, rs);
        }
        return null;
    }

    public int xgUser(String newName,String total,String type,String oldName) {
        String strSQL = "UPDATE user_ SET userName = ? ,total= ? ,userType= ? WHERE userName= ?";
        try {
            conn = DBConnection.getDBConnection();
            pstm = conn.prepareStatement(strSQL);
            pstm.setString(1,newName);
            pstm.setString(2,total);
            pstm.setString(3,type);
            pstm.setString(4,oldName);
            return pstm.executeUpdate();
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } finally {
            DBConnection.close(conn, pstm, rs);
        }
        return -1;
    }

    public int deleteUser(String userName) {
        String strSQL = "DELETE FROM user_ WHERE userName = ?";
        try {
            conn = DBConnection.getDBConnection();
            pstm = conn.prepareStatement(strSQL);
            pstm.setString(1, userName);
            return pstm.executeUpdate();
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } finally {
            DBConnection.close(conn, pstm, rs);
        }
        return -1;
    }
}
