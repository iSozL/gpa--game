import React from 'react'
const papers = [
  {
    name: "缘起",
    bg: "paper1",
    bgcolor: "rgba(40, 97, 167, .4)",
    logo: require('../assets/imgs/nculogo.jpg'),
    ncolor: "#2861a1",
    color: "rgba(40, 97, 167, .7)",
    context: <div>2019年9月14日,<br />南昌大学正式与你相遇。<br />直到现在,<br />校徽上的蓝色香樟<br />已经见证你一个学期的大学生活。</div>
  },
  {
    name: "足迹",
    bg: "paper2",
    bgcolor: "rgba(111, 161, 106, .4)",
    logo: require('../assets/imgs/nculogo.jpg'),
    ncolor: "#6fa16a",
    color: "rgba(111, 161, 106, .7)",
    context: <div>这个学期,<br />你见过南大90个夜晚里形状各异的月亮,<br />坐在教室里<br />听了600次上课铃</div>
  },
  {
    name: "足迹",
    bg: "paper2",
    bgcolor: "rgba(111, 161, 106, .4)",
    logo: require('../assets/imgs/nculogo.jpg'),
    ncolor: "#6fa16a",
    color: "rgba(111, 161, 106, .7)",
    context: <div>关于课堂的模样<br />你的体会或许<br />比全校65%<br />的同学更深</div>
  },
  {
    name: "成就",
    bg: "paper3",
    bgcolor: "rgba(216, 195, 76, .4)",
    logo: "",
    ncolor: "#d8c34c",
    color: "rgba(216, 195, 76, .7)",
    context: <div>星光不负赶路人。<br />高达16的学分<br />没有辜负你。<br />在专业排名前1%<br />4.0的平均绩点<br />也在肯定着你的努力</div>
  },
  {
    name: "成就",
    bg: "paper3",
    bgcolor: "rgba(216, 195, 76, .4)",
    logo: "",
    ncolor: "#d8c34c",
    color: "rgba(216, 195, 76, .7)",
    context: <div>不知不觉中,<br />你已经修满了10个学分<br />4.0的平均绩点,<br />为你的大学生活,<br />留下了珍贵的足迹。<br />加油！<br />未来的你,<br />一定还有着更好的模样</div>
  },
  {
    name: "成就",
    bg: "paper3",
    bgcolor: "rgba(216, 195, 76, .4)",
    logo: "",
    ncolor: "#d8c34c",
    color: "rgba(216, 195, 76, .7)",
    context: <div>在已经公布的期末成绩里,<br />你考的最好的课程有:<br />艺术学概论<br />新闻学概论<br />高等数学</div>
  },
  {
    name: "成就",
    bg: "paper3",
    bgcolor: "rgba(216, 195, 76, .4)",
    logo: "",
    ncolor: "#d8c34c",
    color: "rgba(216, 195, 76, .7)",
    context: <div>最高的那门艺术学概论<br />超过了全专业90%的同学<br />不用担心啦,<br />这次期末一定能过</div>
  },
  {
    name: "初见",
    bg: "paper4",
    bgcolor: "rgba(236, 179, 181, .4)",
    logo: "",
    ncolor: "#ecb3b5",
    color: "rgba(236, 179, 181, .7)",
    context: <div>2019年9月16日<br />你在人文楼上了大学的第一堂课。</div>
  },
  {
    name: "初见",
    bg: "paper4",
    bgcolor: "rgba(236, 179, 181, .4)",
    logo: "",
    ncolor: "#ecb3b5",
    color: "rgba(236, 179, 181, .7)",
    context: <div>在那儿,<br />李淑婷老师与你初见。<br />也许在毕业季,<br />你还会想重温那天那节<br />中国古代文学作品选读</div>
  },
  {
    name: "提醒",
    bg: "paper5",
    bgcolor: "rgba(117, 84, 160, .4)",
    logo: "",
    ncolor: "#7554a0",
    color: "rgba(117, 84, 160, .7)",
    context: <div>在潜心专业课的同时,<br />要记得你还选修了<br />自然科学,人文科学<br />二类通识。<br />把还没修的类别<br />记进备忘录吧<br />下次选课 so easy</div>
  },
  {
    name: "坚持",
    bg: "paper6",
    bgcolor: "rgba(100, 161, 174, .4)",
    logo: "",
    ncolor: "#64a1ae",
    color: "rgba(100, 161, 174, .7)",
    context: <div>朝气蓬勃的生活<br />总是离不开良好的习惯,<br />在南大app里,<br />你参与了早起,背单词<br />其中坚持跑步长达21天</div>
  },
  {
    name: "坚持",
    bg: "paper6",
    bgcolor: "rgba(100, 161, 174, .4)",
    logo: "",
    ncolor: "#64a1ae",
    color: "rgba(100, 161, 174, .7)",
    context: <div>你选择坚持的,<br />最终也将塑就你,<br />新的一年也请继续加油呀~</div>
  },
  {
    name: "坚持",
    bg: "paper6",
    bgcolor: "rgba(100, 161, 174, .4)",
    logo: "",
    ncolor: "#64a1ae",
    color: "rgba(100, 161, 174, .7)",
    context: <div>在南大app里<br />有着这样一群人<br />每天互相鼓劲<br />在习惯圈子里坚持打卡<br />其中不乏如读书,早睡<br />这样有趣的习惯</div>
  },
  {
    name: "坚持",
    bg: "paper6",
    bgcolor: "rgba(100, 161, 174, .4)",
    logo: "",
    ncolor: "#64a1ae",
    color: "rgba(100, 161, 174, .7)",
    context: <div>而你身边的他们<br />则凭借着惊人的毅力<br />成为了各自习惯圈子里的王者。</div>
  },
  // 有一个判断
  {
    name: "消费",
    bg: "paper7",
    bgcolor: "rgba(203, 139, 65, .4)",
    logo: "",
    ncolor: "#cb8b41",
    color: "rgba(203, 139, 65, .7)",
    context: <div>本学期,<br />你们寝室的<br />月平均用电量为150度。<br />在本校<br />月平均用电量100度以上的爱用电的寝室,<br />生活一定不会太单调</div>
  },
  {
    name: "遗失",
    bg: "paper8",
    bgcolor: "rgba(169,169,169, .4)",
    logo: "",
    ncolor: "#a9a9a9",
    color: "rgba(169,169,169, .7)",
    context: <div>最大的遗憾,<br />大概就是<br />捡到你东西的人没法联系你<br />不过还好,<br />这学期已有76人<br />通过失物招领功能<br />寻回了自己的失物</div>
  },
  {
    name: "遗失",
    bg: "paper8",
    bgcolor: "rgba(169,169,169, .4)",
    logo: "",
    ncolor: "#a9a9a9",
    color: "rgba(169,169,169, .7)",
    context: <div>我们因此少了76次遗憾<br />也愿更多的爱心<br />在这里传递下去。</div>
  }
]
export default papers