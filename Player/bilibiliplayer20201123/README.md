访问/dmku/index.php,填写数据库信息进行安装
安装完成后访问/admin/index.php登录后台，默认用户名为admin密码为123456
player文件夹下的index.php第12行可修改是否显示加载动画，视频信息屏蔽词汇，弹幕规则(这三项默认都是隐藏状态的)。
count.dat权限需要有写入权限，无脑777即可。
修改用户名与密码的话修改dmku/config.inc.php文件即可
如何显示加载动画：index.php第12行删除#loading-box,就显示了
如何显示弹幕规则：index.php第12行删除.dmrules就显示了

支持画中画功能
修复弹幕后台管理登陆系统后门
修复安装程序界面没有样式问题
后台登录支持输出账号与密码了，更改用户名与密码请修改dmku文件夹下的config.inc.php
修复右键菜单点击后自动在新窗口打开一个空白页面的bug

# 2020年7月泽泽修改说明
1，修复弹幕后台管理登录系统后门（原版居然将正确密码存cookie里了）
2，修复安装程序界面没有样式问题
3，后台登录支持输出账号与密码了，更改用户名与密码请修改dmku文件夹下的config.inc.php文件

# 修改说明
原作者：京都一只喵，蘑菇君做了一些小修复
1. 解密 `yzmplayer.js` 文件
2. 修复了视频弹幕非独立的问题
3. 兼容了 PHP7.X，在 PHP7.4 环境测试通过
4. 更新版本号至 v1.2.1
5. 重写了使用说明

# 使用方法
1. 解压到网站根目录
2. 登录  你的域名/dmku 进行配置数据库  
3. 修改播放器后台密码  dmku/config.inc.php
4. 登录后台 你的域名/admin  密码为第3步修改的密码
5. 播放器功能可后台设置

# 参数说明（player/index.php）
"av":'<?php echo($_GET['av']);?>',//B站av号，用于调用弹幕
"url":"<?php echo($_GET['url']);?>",//视频链接
"id":"<?php echo($_GET['url']);?>",//视频id
"sid":"<?php echo($_GET['sid']);?>",//集数id
"pic":"<?php echo($_GET['pic']);?>",//视频封面
"title":"<?php echo($_GET['name']);?>",//视频标题
"next":"<?php echo($_GET['next']);?>",//下一集链接
"user": '<?php echo($_GET['user']);?>',//用户名
"group": "<?php echo($_GET['group']);?>",//用户组

# 请求示例
#### 基本
http://localhost/player/?url=https://cdn.jsdelivr.net/gh/MoGuJ/Video-Bed/Your.Name/playlist.m3u8

#### 高级
除了 url 参数，其他都可以省略

http://localhost/player/?url=https://cdn.jsdelivr.net/gh/MoGuJ/Video-Bed/Your.Name/playlist.m3u8&next=https://cdn.jsdelivr.net/gh/MoGuJ/Video-Bed/Your.Name/playlist.m3u8&sid=1&pic=https://img.xx.com/1.png&user=游客&group=1&name=测试