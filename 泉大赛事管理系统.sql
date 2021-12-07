/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 80023
Source Host           : localhost:3306
Source Database       : web

Target Server Type    : MYSQL
Target Server Version : 80023
File Encoding         : 65001

Date: 2021-07-02 14:52:26
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for total_
-- ----------------------------
DROP TABLE IF EXISTS `total_`;
CREATE TABLE `total_` (
  `eventName` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `pl` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `starttime` datetime(6) NOT NULL,
  `endtime` datetime(6) NOT NULL,
  PRIMARY KEY (`eventName`) USING BTREE,
  CONSTRAINT `total__chk_1` CHECK ((`eventName` <> _utf8mb4''))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Records of total_
-- ----------------------------
INSERT INTO `total_` VALUES ('80126 vs 80125', '1:99999999', '2021-07-01 00:00:00.000000', '2021-07-02 14:51:47.000000');
INSERT INTO `total_` VALUES ('kfjs vs sndj', '2:1', '2021-07-01 00:00:00.000000', '2021-07-30 00:00:00.000000');
INSERT INTO `total_` VALUES ('oppo vs vivo', '3:1', '2021-06-27 00:00:00.000000', '2026-06-27 00:00:00.000000');
INSERT INTO `total_` VALUES ('QZIT vs MIT', '999:1', '2021-06-01 00:00:00.000000', '2021-06-26 00:00:00.000000');
INSERT INTO `total_` VALUES ('人工智能 vs 大数据', '32:12', '2021-07-01 00:00:00.000000', '2021-07-31 00:00:00.000000');
INSERT INTO `total_` VALUES ('华为 vs 苹果', '1:999', '2021-06-27 00:00:00.000000', '2021-06-27 00:00:00.000000');
INSERT INTO `total_` VALUES ('华侨大学 vs 福州大学', '1:1', '2021-06-30 00:00:00.000000', '2022-06-30 00:00:00.000000');
INSERT INTO `total_` VALUES ('华师大 vs 泉大', '1:1', '2021-06-28 00:00:00.000000', '2022-06-28 00:00:00.000000');
INSERT INTO `total_` VALUES ('围棋大师赛', '1:2', '2021-06-01 00:00:00.000000', '2022-06-27 00:00:00.000000');
INSERT INTO `total_` VALUES ('小米 vs 苹果', '1:23', '2021-06-27 00:00:00.000000', '2021-07-02 00:00:00.000000');
INSERT INTO `total_` VALUES ('泉大拳击赛', '1:2', '2021-06-03 00:00:00.000000', '2021-06-27 01:22:32.000000');
INSERT INTO `total_` VALUES ('泉大钓鱼大赛', '1:1', '2021-06-01 00:00:00.000000', '2023-07-26 00:00:00.000000');
INSERT INTO `total_` VALUES ('泉州信息工程学院 vs 阳光学院', '1:1', '2021-06-27 00:00:00.000000', '2023-06-27 00:00:00.000000');
INSERT INTO `total_` VALUES ('泉州职业技术大学 vs 泉州信息工程学院', '5:12', '2021-07-01 11:25:21.000000', '2021-07-31 00:00:00.000000');
INSERT INTO `total_` VALUES ('泉州职业技术大学 vs 阳光学院', '999:1', '2021-06-27 00:00:00.000000', '2022-06-27 00:00:00.000000');
INSERT INTO `total_` VALUES ('王者荣耀泉大赛区', '11:32', '2021-06-30 00:00:00.000000', '2021-06-30 00:00:00.000000');
INSERT INTO `total_` VALUES ('生化环材 vs 机械土木', '1:1', '2000-06-01 00:00:00.000000', '2039-06-30 09:20:01.000000');
INSERT INTO `total_` VALUES ('美羊羊 vs 暖羊羊', '1:1', '2021-06-27 00:00:00.000000', '2021-06-27 11:58:33.000000');
INSERT INTO `total_` VALUES ('象棋大赛', '1:1', '2021-06-27 00:00:00.000000', '2021-06-30 00:00:00.000000');
INSERT INTO `total_` VALUES ('青眼白龙 vs 黑魔导', '12:21', '2021-06-30 00:00:00.000000', '2023-06-26 00:00:00.000000');

-- ----------------------------
-- Table structure for user_
-- ----------------------------
DROP TABLE IF EXISTS `user_`;
CREATE TABLE `user_` (
  `userId` bigint DEFAULT NULL,
  `userName` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `userPSW` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `total` int NOT NULL,
  `userType` int NOT NULL,
  PRIMARY KEY (`userName`) USING BTREE,
  CONSTRAINT `user__chk_1` CHECK ((`userName` <> _utf8mb4''))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Records of user_
-- ----------------------------
INSERT INTO `user_` VALUES ('1625099793539', '132sa', '21wesdedqw', '12', '1');
INSERT INTO `user_` VALUES ('1625101740679', '43124', 'asdasdw', '99', '1');
INSERT INTO `user_` VALUES ('1625015313186', '567465cxsdc', 'm,ndsbfjk ajk', '1234', '2');
INSERT INTO `user_` VALUES ('1625208685322', '80126', '80126', '80126', '1');
INSERT INTO `user_` VALUES ('1625107002776', 'adfasdfasdf', 'asfewesdfsae', '99', '2');
INSERT INTO `user_` VALUES ('1625106607745', 'adsasdasd', '', '99', '2');
INSERT INTO `user_` VALUES ('1625103104316', 'asdasdaw', '213sadasd', '3221', '1');
INSERT INTO `user_` VALUES ('1624880106707', 'asdfg', 'asdsadasdaw', '123', '1');
INSERT INTO `user_` VALUES ('1625099908113', 'asdzxc', '123zasd', '21', '1');
INSERT INTO `user_` VALUES ('1625107462718', 'asfa', 'fdsa', '99', '2');
INSERT INTO `user_` VALUES ('1625107957480', 'bsgfbsfg', 'asdf12deq2', '99', '2');
INSERT INTO `user_` VALUES ('1624858068815', 'edfssdfv', 'qvtue21', '100', '2');
INSERT INTO `user_` VALUES ('1625015792111', 'gfrfujtr4', '74676rre', '245', '2');
INSERT INTO `user_` VALUES ('1625108005525', 'gsdfgsdg', '12asd2daw', '99', '2');
INSERT INTO `user_` VALUES ('1624858046913', 'hhh', 'sadasd', '100', '2');
INSERT INTO `user_` VALUES ('1625015774303', 'hjujuhb3e4', 'ghfrted', '100', '1');
INSERT INTO `user_` VALUES ('1624859740856', 'ijisdjhkdnj', 'jnsj', '999', '1');
INSERT INTO `user_` VALUES ('1625015734328', 'jkl', '324wrs', '1', '1');
INSERT INTO `user_` VALUES ('1624856357392', 'Kor', 'kor', '100', '2');
INSERT INTO `user_` VALUES ('1624858953067', 'nhdbvnm下课', 'jksjkd', '88128', '2');
INSERT INTO `user_` VALUES ('1624859060574', 'osdo', 'aisojd', '100', '1');
INSERT INTO `user_` VALUES ('1624858055856', 'qvtu', 'qvtu', '100', '2');
INSERT INTO `user_` VALUES ('1624858060363', 'qvtusdc', 'qvtu', '100', '2');
INSERT INTO `user_` VALUES ('0', 'root', 'root', '999999', '0');
INSERT INTO `user_` VALUES ('1625103579027', 'rzxcnjknjkn', 'xjhcuihaskjnd', '99', '2');
INSERT INTO `user_` VALUES ('1625102104560', 'sdafasf', 'swqedqw', '99', '1');
INSERT INTO `user_` VALUES ('1624858063364', 'sdbhjsbdjh', 'qvtu', '1234', '2');
INSERT INTO `user_` VALUES ('1625109748822', 'sdfgsdfg', 'afgg', '99', '2');
INSERT INTO `user_` VALUES ('1625105184065', 'sdfgsdfgsd', 'fgasdfgs', '99', '2');
INSERT INTO `user_` VALUES ('1624859729990', 'sdfroasotas', 'rotvdfdf', '99', '1');
INSERT INTO `user_` VALUES ('1624859227442', 'sdfs', 'asd', '99', '1');
INSERT INTO `user_` VALUES ('1625013453026', 'sdjfl', 'weslkisefe', '99', '1');
INSERT INTO `user_` VALUES ('1624859758339', 'shjadjhuu3284', '2ww2e2342', '234', '2');
INSERT INTO `user_` VALUES ('1624859099754', 'sndvi', 'kjsdasdfs', '100', '1');
INSERT INTO `user_` VALUES ('1625109873529', 'svsdf', 'asdwa', '99', '2');
INSERT INTO `user_` VALUES ('1625109681822', 'vasdfasdf', 'asdfasfd', '99', '2');
INSERT INTO `user_` VALUES ('1625103028445', 'vxczzcx', 'qwdq2e4', '99', '2');
INSERT INTO `user_` VALUES ('1625109896688', 'vzxvsDF1231', 'vxcvsdfawedas', '99', '2');
INSERT INTO `user_` VALUES ('1624858050846', 'wss', 'wss', '100', '2');
INSERT INTO `user_` VALUES ('1625108218973', 'xzcas', 'wdawd', '99', '2');
INSERT INTO `user_` VALUES ('1625104447024', 'zsvdvgsd', 'fnfgnfgfghdf', '99', '2');
INSERT INTO `user_` VALUES ('1625105813313', '刘必辛', 'lbxlbx', '999999', '1');
INSERT INTO `user_` VALUES ('1624858042399', '就离谱', 'asdasd', '100', '2');
INSERT INTO `user_` VALUES ('1625141626452', '泉小理', 'qvtuqvtu', '80126', '2');
INSERT INTO `user_` VALUES ('1625208660549', '邱津芳', '123123', '123', '1');
