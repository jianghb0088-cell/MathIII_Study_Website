MathIII_Study_Website
======================

项目说明
- 主题：南加州公立高中十年级 Math IIIA / Math IIIB 学习指南
- 文件：index.html、style.css、script.js、README.txt
- 保存日期：2026-05-20
- 最后更新时间：2026-05-20
- 适用于南加州公立高中十年级 Integrated Math III 学生

如何打开网页
1. 打开 Mac 的“文稿/Documents”文件夹。
2. 进入 MathIII_Study_Website 文件夹。
3. 双击 index.html。
4. 网页会在默认浏览器中打开。

如何在手机查看
方法一：AirDrop
1. 在 Mac 上右键 MathIII_Study_Website 文件夹，压缩为 zip。
2. 通过 AirDrop 发送到 iPhone。
3. 在手机“文件”App 中解压并打开 index.html。

方法二：同一 Wi-Fi 本地预览
1. 在 Mac 上打开“终端”。
2. 输入：cd ~/Documents/MathIII_Study_Website
3. 输入：python3 -m http.server 8000
4. 查找 Mac 的局域网 IP 地址。
5. 手机连接同一 Wi-Fi 后，在浏览器输入：http://你的Mac IP:8000

如何打印试卷
1. 打开网页。
2. 进入“模拟考试”或“试卷导航菜单”。
3. 选择 Test 1 到 Test 10。
4. 点击“打印试卷”按钮。
5. 在打印窗口中选择纸张、份数，确认打印。

如何更新题库
1. 用文本编辑器打开 script.js。
2. 搜索 buildExam(testNo)。
3. 在 partA、partB、partC、partD 对应区域修改题目、答案、解析和 keywords。
4. 保存 script.js。
5. 刷新浏览器页面查看更新。

注意
- 学习统计和错题本保存在当前浏览器的 localStorage 中。
- 如果更换浏览器或清除浏览器数据，统计记录可能会消失。
- 本网页不依赖外部数据库或网络资源。
