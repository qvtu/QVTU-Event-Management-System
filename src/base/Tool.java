package base;

/**
 * @Author Tool
 * @create 2021/6/21 9:09 上午
 */
public class Tool {
    // 字符串转byte
    public static final byte toByte(String str) {
        try {
            return Byte.parseByte(str);
        } catch (NumberFormatException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return 0;
    }

    // 字符串转long
    public static final long toLong(String str) {
        try {
            return Long.parseLong(str);
        } catch (NumberFormatException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return 0;
    }

    // 字符串转int
    public static final int toInt(String str) {
        try {
            return Integer.parseInt(str);
        } catch (NumberFormatException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return 0;
    }
}
