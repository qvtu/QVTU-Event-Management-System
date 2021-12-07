package entity;

import base.Tool;

/**
 * @Author User
 * @create 2021/6/21 8:50 上午
 */
public class User {
    private Long userId;
    private String userName;
    private String userPSW;
    private int total;
    private int userType;

    public int getUserType() {
        return userType;
    }

    public void setUserType(int userType) {
        this.userType = userType;
    }

    public void setUserType(String userType) {
        this.userType = Tool.toInt(userType);
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserPSW() {
        return userPSW;
    }

    public void setUserPSW(String userPSW) {
        this.userPSW = userPSW;
    }

    public int getTotal() {
        return total;
    }

    public void setTotal(int total) {
        this.total = total;
    }
    public void setTotal(String total) {
        this.total = Tool.toInt(total);
    }
    @Override
    public String toString() {
        return "User{" +
                "userId=" + userId +
                ", userName='" + userName + '\'' +
                ", userPSW='" + userPSW + '\'' +
                ", total=" + total +
                ", userType=" + userType +
                '}';
    }
}
