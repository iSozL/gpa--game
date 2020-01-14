// import React from 'react'
// const testOther =  [
//       {
//           "createUser": "6130116207",
//           "count": 5575,
//           "check_count": 13,
//           "title": "早起",
//           "content": "叫醒我的不是闹钟",
//           "color": "https://incu-orbit.ncuos.com/habit-icon/morning.webp",
//           "type": 1,
//           "create_date": 1524656740079,
//           "id": "5ae06a64dec60900018bfc6d",
//           "join": false
//       },
//       {
//           "createUser": "6130116207",
//           "count": 3686,
//           "check_count": 5,
//           "title": "早睡",
//           "content": "",
//           "color": "https://incu-orbit.ncuos.com/habit-icon/night.webp",
//           "type": 1,
//           "create_date": 1524656740179,
//           "id": "5ae06a64dec60900018bfc6f",
//           "join": true
//       },
//       {
//           "createUser": "6130116207",
//           "count": 1758,
//           "check_count": 0,
//           "title": "对一天进行回顾",
//           "content": "",
//           "color": "https://incu-orbit.ncuos.com/habit-icon/thinking.webp",
//           "type": 1,
//           "create_date": 1524656740281,
//           "id": "5ae06a64dec60900018bfc71",
//           "join": false
//       }
//   ]
// const testMy = [
//       {
//           "createUser": "6130116207",
//           "count": 3686,
//           "check_count": 4,
//           "title": "早睡",
//           "content": "",
//           "color": "https://incu-orbit.ncuos.com/habit-icon/night.webp",
//           "type": 1,
//           "create_date": 1524656740179,
//           "id": "5ae06a64dec60900018bfc6f",
//           "join": true,
//           "rank": 4,
//           "last": 1,
//           "history": [
//               1547291348379,
//               1548566575070,
//               1550642686746,
//               1578989509856
//           ],
//           "is_checked": true,
//           "joined_at": 1543384658161
//       },
//       {
//           "createUser": "6130116207",
//           "count": 2284,
//           "check_count": 5,
//           "title": "跑步",
//           "content": "",
//           "color": "https://incu-orbit.ncuos.com/habit-icon/runner.webp",
//           "type": 1,
//           "create_date": 1524656740374,
//           "id": "5ae06a64dec60900018bfc73",
//           "join": true,
//           "rank": 2,
//           "last": 1,
//           "history": [
//               1547291507439,
//               1568554244155,
//               1570501380415,
//               1570799991126,
//               1578989522587
//           ],
//           "is_checked": true,
//           "joined_at": 1543384660427
//       },
//       {
//           "createUser": "6130116207",
//           "count": 3957,
//           "check_count": 5,
//           "title": "背单词",
//           "content": "",
//           "color": "https://incu-orbit.ncuos.com/habit-icon/study.webp",
//           "type": 1,
//           "create_date": 1524656740702,
//           "id": "5ae06a64dec60900018bfc79",
//           "join": true,
//           "rank": 6,
//           "last": 1,
//           "history": [
//               1547545556897,
//               1552223551954,
//               1552434538854,
//               1561218588607,
//               1578989542253
//           ],
//           "is_checked": true,
//           "joined_at": 1543384664732
//       }
//   ]
// const testPaper = 
// {
//       "page_1": {
//           "join_month": "9",
//           "join_year": "2019",
//           "semester_spent": 1
//       },
//       "page_2": {
//           "first_class_address": "教239",
//           "first_class_day": 9,
//           "first_class_name": "大学英语（1）",
//           "first_class_teacher": "李琪",
//           "join_year": "2019"
//       },
//       "page_3": {
//           "course_hours_defeat": "43.77",
//           "pass_days": 126,
//           "total_course_hours": 316
//       },
//       "page_4": {
//           "if_grade_19": true,
//           "page_4_data": {
//               "course_defeat_rank": "90.19",
//               "top_three_courses": [
//                   {
//                       "class_name": "形势与政策（1）",
//                       "score": "91"
//                   },
//                   {
//                       "class_name": "军事理论",
//                       "score": "83"
//                   },
//                   {
//                       "class_name": "体育（1）",
//                       "score": "82"
//                   }
//               ]
//           }
//       },
//       "page_7": {
//           "elec_expense": "85.68"
//       }
//   }
// localStorage.setItem("papers", JSON.stringify(testPaper))
// localStorage.setItem("my", JSON.stringify(testMy))
// localStorage.setItem("other", JSON.stringify(testOther))
// const data = JSON.parse(localStorage.getItem("papers"))
// const my = JSON.parse(localStorage.getItem("my"))
// const other = JSON.parse(localStorage.getItem("other"))
// const papers = [
//   {
//     id: 1,
//     name: "缘起",
//     bg: "paper1",
//     bgcolor: "rgba(40, 97, 167, .4)",
//     logo: require('../assets/imgs/nculogo.jpg'),
//     puzzle: require('../assets/imgs/yq.png'),
//     ncolor: "#2861a1",
//     color: "rgba(40, 97, 167, .7)",
//     end: true,
//     context: <div>{data.page_1.join_year}年{data.page_1.join_month}月,<br />南昌大学正式与你相遇。<br />直到现在,<br />校徽上的蓝色香樟<br />已经见证你{data.page_1.semester_spent}个学期的大学生活。</div>
//   },
//   {
//     id: 2,
//     name: "足迹",
//     bg: "paper2",
//     bgcolor: "rgba(111, 161, 106, .4)",
//     logo: require('../assets/imgs/nculogo.jpg'),
//     puzzle: require('../assets/imgs/zj.png'),
//     ncolor: "#6fa16a",
//     color: "rgba(111, 161, 106, .7)",
//     end: false,
//     context: <div>这个学期,<br />你见过南大{data.page_3.pass_days}个夜晚里形状各异的月亮,<br />坐在教室里<br />听了{data.page_3.total_course_hours}次上课铃</div>
//   },
//   {
//     id: 2,
//     name: "足迹",
//     bg: "paper2",
//     bgcolor: "rgba(111, 161, 106, .4)",
//     logo: require('../assets/imgs/nculogo.jpg'),
//     puzzle: require('../assets/imgs/zj.png'),
//     ncolor: "#6fa16a",
//     color: "rgba(111, 161, 106, .7)",
//     end: true,
//     context: <div>关于课堂的模样<br />你的体会或许<br />比全校{parseInt(data.page_3.course_hours_defeat)}%<br />的同学更深</div>
//   },
//   {
//     id: 3,
//     name: "成就",
//     bg: "paper3",
//     bgcolor: "rgba(216, 195, 76, .4)",
//     logo: "",
//     puzzle: require('../assets/imgs/cj.png'),
//     ncolor: "#d8c34c",
//     color: "rgba(216, 195, 76, .7)",
//     end: false,
//     context: Boolean(data.page_4.if_grade_19) === true ? <div>在已经公布的期末成绩里,<br />你考的最好的课程有：{data.page_4.page_4_data.top_three_courses.map((item, index)=>(<span key={index}><br />{item.class_name}</span>))}</div> : <div>星光不负赶路人。<br />高达{data.page_4.page_4_data.credits_taken}的学分<br />没有辜负你。<br />在专业排名前{data.page_4.page_4_data.gpa_rank}%<br />{data.page_4.page_4_data.gpa}平均绩点<br />也在肯定着你的努力</div>
//   },
//   {
//     id: 3,
//     name: "成就",
//     bg: "paper3",
//     bgcolor: "rgba(216, 195, 76, .4)",
//     logo: "",
//     puzzle: require('../assets/imgs/cj.png'),
//     ncolor: "#d8c34c",
//     color: "rgba(216, 195, 76, .7)",
//     end: false,
//     context: Boolean(data.page_4.if_grade_19) === true ? <div>最高的那门{data.page_4.page_4_data.top_three_courses[0].class_name}<br />超过了全专业{data.page_4.page_4_data.course_defeat_rank}%的同学<br />不用担心啦,<br />这次期末一定能过</div> : <div>不知不觉中,<br />你已经修满了{data.page_4.page_4_data.credits_taken}个学分<br />{data.page_4.page_4_data.gpa}的平均绩点,<br />为你的大学生活,<br />留下了珍贵的足迹。<br />加油！<br />未来的你,<br />一定还有着更好的模样</div>
//   },
//   {
//     id: 4,
//     name: "初见",
//     bg: "paper4",
//     bgcolor: "rgba(236, 179, 181, .4)",
//     logo: "",
//     puzzle: require('../assets/imgs/chuj.png'),
//     ncolor: "#ecb3b5",
//     color: "rgba(236, 179, 181, .7)",
//     end: false,
//     context: <div>{data.page_2.join_year}年9月{data.page_2.first_class_day}日<br />你在人{data.page_2.first_class_address}上了大学的第一堂课。</div>
//   },
//   {
//     id: 4,
//     name: "初见",
//     bg: "paper4",
//     bgcolor: "rgba(236, 179, 181, .4)",
//     logo: "",
//     puzzle: require('../assets/imgs/chuj.png'),
//     ncolor: "#ecb3b5",
//     color: "rgba(236, 179, 181, .7)",
//     end: true,
//     context: <div>在那儿,<br />{data.page_2.first_class_teacher}老师与你初见。<br />也许在毕业季,<br />你还会想重温那天那节<br />{data.page_2.first_class_name}</div>
//   },
//   {
//     id: 5,
//     name: "提醒",
//     bg: "paper5",
//     bgcolor: "rgba(117, 84, 160, .4)",
//     logo: "",
//     puzzle: require('../assets/imgs/tx.png'),
//     ncolor: "#7554a0",
//     color: "rgba(117, 84, 160, .7)",
//     end: true,
//     context: <div>在潜心专业课的同时,<br />要记得你还要选修<br />二类通识。<br />把还没修的类别<br />记进备忘录吧<br />下次选课 so easy</div>
//   },
//   {
//     id: 6,
//     name: "坚持",
//     bg: "paper6",
//     bgcolor: "rgba(100, 161, 174, .4)",
//     logo: "",
//     puzzle: require('../assets/imgs/jc.png'),
//     ncolor: "#64a1ae",
//     color: "rgba(100, 161, 174, .7)",
//     end: false,
//   context: <div>朝气蓬勃的生活<br />总是离不开良好的习惯,<br />在南大app里,<br />你参与的习惯有{my ? my[0].title : "无"} {my ? my[1].title + "等": ""}<br />{my ? "其中坚持"+my[0].title+"长达"+my[0].check_count+"天" : ""}</div>
//   },
//   {
//     id: 6,
//     name: "坚持",
//     bg: "paper6",
//     bgcolor: "rgba(100, 161, 174, .4)",
//     logo: "",
//     puzzle: require('../assets/imgs/jc.png'),
//     ncolor: "#64a1ae",
//     color: "rgba(100, 161, 174, .7)",
//     end: false,
//     context: <div>你选择坚持的,<br />最终也将塑就你,<br />新的一年也请继续加油呀~</div>
//   },
//   {
//     id: 6,
//     name: "坚持",
//     bg: "paper6",
//     bgcolor: "rgba(100, 161, 174, .4)",
//     logo: "",
//     puzzle: require('../assets/imgs/jc.png'),
//     ncolor: "#64a1ae",
//     color: "rgba(100, 161, 174, .7)",
//     end: false,
//     context: <div>在南大app里<br />有着这样一群人<br />每天互相鼓劲<br />在习惯圈子里坚持打卡<br />其中不乏如读书,早睡<br />这样有趣的习惯</div>
//   },
//   {
//     id: 6,
//     name: "坚持",
//     bg: "paper6",
//     bgcolor: "rgba(100, 161, 174, .4)",
//     logo: "",
//     puzzle: require('../assets/imgs/jc.png'),
//     ncolor: "#64a1ae",
//     color: "rgba(100, 161, 174, .7)",
//     end: true,
//   context: <div>而这些习惯圈子<br />拥有最多的参与者<br />成为了习惯圈子里的王者<br />{other[0].title}: {other[0].count}人 <br />{other[1].title}: {other[1].count}人 <br />{other[2].title}: {other[2].count}人</div>
//   },
//   // 有一个判断
//   {
//     id: 7,
//     name: "消费",
//     bg: "paper7",
//     bgcolor: "rgba(203, 139, 65, .4)",
//     logo: "",
//     puzzle: require('../assets/imgs/xf.png'),
//     ncolor: "#cb8b41",
//     color: "rgba(203, 139, 65, .7)",
//     end: true,
//     context: <div>本学期,<br />你们寝室的<br />月平均用电量为{data.page_7.elec_expense}度。<br />在本校<br />月平均用电量100度以上的爱用电的寝室,<br />生活一定不会太单调</div>
//   },
//   {
//     id: 8,
//     name: "遗失",
//     bg: "paper8",
//     bgcolor: "rgba(169,169,169, .4)",
//     logo: "",
//     puzzle: require('../assets/imgs/ys.png'),
//     ncolor: "#a9a9a9",
//     color: "rgba(169,169,169, .7)",
//     end: false,
//     context: <div>最大的遗憾,<br />大概就是<br />捡到你东西的人没法联系你<br />不过还好,<br />这学期已有7836人<br />通过失物招领功能<br />寻回了自己的失物</div>
//   },
//   {
//     id: 8,
//     name: "遗失",
//     bg: "paper8",
//     bgcolor: "rgba(169,169,169, .4)",
//     logo: "",
//     puzzle: require('../assets/imgs/ys.png'),
//     ncolor: "#a9a9a9",
//     color: "rgba(169,169,169, .7)",
//     end: true,
//     context: <div>我们因此少了7836次遗憾<br />也愿更多的爱心<br />在这里传递下去。</div>
//   }
// ]
// export default papers