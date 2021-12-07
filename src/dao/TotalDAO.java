package dao;

import entity.Total;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/**
 * @Author TotalDAO
 * @create 2021/6/24 8:36 上午
 */
public class TotalDAO {
    private Connection conn;
    private PreparedStatement pstm;
    private ResultSet rs;

    public int add(Total total) {
        String strSQL = "INSERT INTO total_ (eventName,pl,starttime,endtime) VALUES(?,?,?,?)";
        try {
            conn = DBConnection.getDBConnection();
            pstm = conn.prepareStatement(strSQL);
            pstm.setString(1, total.getEventName());
            pstm.setString(2, total.getPl());
            pstm.setString(3, total.getStarttime());
            pstm.setString(4, total.getEndtime());
            return pstm.executeUpdate();
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } finally {
            DBConnection.close(conn, pstm, rs);
        }
        return -1;
    }

    public int xg(Total total) {
        String strSQL = "UPDATE total_ SET pl = ? ,starttime = ? ,endtime= ? WHERE eventName= ?";
        try {
            conn = DBConnection.getDBConnection();
            pstm = conn.prepareStatement(strSQL);
            pstm.setString(1, total.getPl());
            pstm.setString(2, total.getStarttime());
            pstm.setString(3, total.getEndtime());
            pstm.setString(4, total.getEventName());
            return pstm.executeUpdate();
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } finally {
            DBConnection.close(conn, pstm, rs);
        }
        return -1;
    }

    public List<Total> selAll() {
        String strSQL = "SELECT * FROM total_";
        List<Total> list = new ArrayList<Total>();
        try {
            conn = DBConnection.getDBConnection();
            pstm = conn.prepareStatement(strSQL);
            rs = pstm.executeQuery();
            while (rs.next()) {
                Total total = new Total();
                total.setEventName(rs.getString("eventName"));
                total.setPl(rs.getString("pl"));
                total.setStarttime(rs.getString("starttime"));
                total.setEndtime(rs.getString("endtime"));
                list.add(total);
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

    public int delete(String eventName) {
        System.out.println(eventName);
        String strSQL = "DELETE FROM total_ WHERE eventName = ?";
        try {
            conn = DBConnection.getDBConnection();
            pstm = conn.prepareStatement(strSQL);
            pstm.setString(1, eventName);
            return pstm.executeUpdate();
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } finally {
            DBConnection.close(conn, pstm, rs);
        }
        return -1;
    }

    public Total search(String eventName) {
        String strSQL = "SELECT * FROM total_ WHERE eventName = ?";
        try {
            conn = DBConnection.getDBConnection();
            pstm = conn.prepareStatement(strSQL);
            pstm.setString(1, eventName);
            Total total = new Total();
            rs=pstm.executeQuery();
            if(rs.next()){
                total.setEventName(rs.getString("eventName"));
                total.setPl(rs.getString("pl"));
                total.setStarttime(rs.getString("starttime"));
                total.setEndtime(rs.getString("endtime"));
            }
            return total;
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } finally {
            DBConnection.close(conn, pstm, rs);
        }
        return null;
    }
}