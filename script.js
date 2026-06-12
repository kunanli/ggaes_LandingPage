(function () {
  "use strict";

  /* ---------- i18n dictionary ---------- */
  var i18n = {
    en: {
      pageTitle: "GGAES 2026 · Global Game & Animation Education Summit",
      brandSub: "Global Game & Animation Education Summit",
      navAbout: "About",
      navSchedule: "Schedule",
      navHighlights: "Highlights",
      navInstitutions: "Institutions",
      navSpeakers: "Speakers",
      navSponsor: "Partner",
      register: "Register Now",
      heroDate: "China Standard Time · June 26–28, 2026",
      heroDesc: "An international study-abroad and career exchange platform connecting students and industry newcomers in the games, animation and creative industries with the world's leading schools.",
      aboutKicker: "ABOUT",
      aboutTitle: "the Summit",
      aboutBody: "GGAES (Global Game & Animation Education Summit) is an international study-abroad and career exchange platform for students and newcomers in the games, animation and creative industries.",
      countdownTitle: "Summit Countdown",
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
      scheduleNote: "Held online over 3 days · June 26–28, 2026 (China Standard Time)",
      scheduleTitle: "Full Schedule",
      scheduleDayLabel: "Day",
      scheduleTzLabel: "Timezone",
      scheduleHint: "Session times update to your selected timezone.",
      highlightsTitle: "Summit Highlights",
      stat1: "Viewers per live session",
      stat2: "Top universities",
      stat3: "Summit speakers",
      stat4: "Social media impressions",
      downloadCH: "Download Official Guide (中文)",
      downloadEN: "Download Official Guide (English)",
      institutionsTitle: "Attending Institutions",
      academicTitle: "Academic Speakers",
      industryTitle: "Industry Speakers",
      sponsorTitle: "Our Partners",
      sponsorLead: "Thank you to all our partners and supporters who made GGAES 2026 possible. Interested in collaborating with future editions? Get in touch.",
      sponsorDownload: "Download Sponsorship Deck (PDF)",
      sponsorContact: "Contact Us",
      footerCtaTitle: "Ready to join GGAES 2026?",
      footerCtaDesc: "Register now to secure your spot at the summit.",
      email: "Email: ggaes@artdico.co",
      copyright: "© 2026 GGAES · Global Game & Animation Education Summit"
    },
    zh: {
      pageTitle: "GGAES 2026 · 全球游戏动画留学峰会",
      brandSub: "全球游戏动画留学峰会",
      navAbout: "关于",
      navSchedule: "日程",
      navHighlights: "亮点",
      navInstitutions: "院校",
      navSpeakers: "嘉宾",
      navSponsor: "合作伙伴",
      register: "活动报名",
      heroDate: "中国标准时间 · 2026.6.26–6.28",
      heroDesc: "面向游戏、动画及创意产业领域学生与行业新人的国际留学与职业交流平台，连接全球顶尖院校。",
      aboutKicker: "关于",
      aboutTitle: "峰会",
      aboutBody: "GGAES 全球游戏动画留学峰会（Global Game & Animation Education Summit）是一个面向游戏、动画及创意产业领域学生与行业新人的国际留学与职业交流平台。",
      countdownTitle: "峰会开始倒计时",
      days: "天",
      hours: "时",
      minutes: "分",
      seconds: "秒",
      scheduleNote: "3天线上召开 · 2026年6月26日-28日中国标准时间档期",
      scheduleTitle: "完整日程",
      scheduleDayLabel: "日期",
      scheduleTzLabel: "时区",
      scheduleHint: "场次时间会根据所选时区自动换算。",
      highlightsTitle: "峰会亮点",
      stat1: "每场直播观看人数",
      stat2: "顶尖大学",
      stat3: "峰会大咖",
      stat4: "社群媒体印象数",
      downloadCH: "下载官方手册（中文）",
      downloadEN: "下载官方手册（英文）",
      institutionsTitle: "出席院校",
      academicTitle: "院校嘉宾",
      industryTitle: "行业嘉宾",
      sponsorTitle: "合作伙伴",
      sponsorLead: "感谢所有支持 GGAES 2026 的合作伙伴与赞助商。如有意向与未来届次合作，欢迎联系我们。",
      sponsorDownload: "下载赞助方案（PDF）",
      sponsorContact: "联系我们",
      footerCtaTitle: "准备好加入 GGAES 2026 了吗？",
      footerCtaDesc: "立即报名，锁定你的峰会席位。",
      email: "电子邮箱：ggaes@artdico.co",
      copyright: "© 2026 GGAES · 全球游戏动画留学峰会"
    }
  };

  /* ---------- Data ---------- */
  var institutions = [
    { name: "University of the Arts London", logo: "UAL.webp" },
    { name: "Hong Kong Polytechnic University", logo: "Poly U.webp", big: true },
    { name: "University of Utah", logo: "Utah.webp" },
    { name: "CalArts", logo: "Calarts.webp" },
    { name: "Bournemouth University", logo: "Bu.webp" },
    { name: "Escape Studios", logo: "Escape.webp" },
    { name: "University of Staffordshire", logo: "Staffordshire.webp" },
    { name: "DigiPen", logo: "DigiPen_web_logo.webp" },
    { name: "SMU Guildhall", logo: "SMU.webp", big: true },
    { name: "Abertay University", logo: "Abertay.webp" },
    { name: "Gnomon", logo: "Gnomon.webp" },
    { name: "Teesside University", logo: "Teessi.webp" },
    { name: "The Glasgow School of Art", logo: "GSA.webp" },
    { name: "University of Hertfordshire", logo: "University_of_Hertfordshire_Logo.svg.webp" },
    { name: "Otis College of Art and Design", logo: "OTis.webp" },
    { name: "MAGES Institute", logo: "MAGES.webp" }
  ];

  var academicSpeakers = [
    {
      name: "Niccolò Temperanza", img: "niccolo-temperanza.webp",
      en: "Game Art Course Leader, Escape Studios\nVeteran game art professional",
      zh: "Escape Studios 游戏美术课程教授\n资深游戏美术从业者"
    },
    {
      name: "Christopher Headleand", img: "Christopher Headleand.webp",
      en: "University of Staffordshire\nHead of Digital, Technology, Innovation & Business",
      zh: "斯泰福厦大学\n数字、技术、创新与商业系主任"
    },
    {
      name: "Kieran Hicks", img: "KieranHicks.webp",
      en: "University of Staffordshire\nCourse Director, Digital, Tech, Innovation & Business",
      zh: "斯泰福厦大学\n数字、科技、创新与商业 课程总监"
    },
    {
      name: "Philip Meredith", img: "Philip Meredith.webp",
      en: "Head of Games, Escape Studios\nCredits: Harry Potter and the Deathly Hallows, Silent Hill",
      zh: "Escape Studios 游戏科系主管\n曾参与《哈利·波特：死亡圣器》《寂静岭：破碎的记忆》"
    },
    {
      name: "Ruth Falconer", img: "Ruth.webp",
      en: "Head of Games Tech & Maths, Abertay University\nCreaTech Lead, CoSTAR National Lab",
      zh: "阿伯泰大学 游戏技术与数学系系主任\nCoSTAR 国家实验室 CreaTech 负责人"
    },
    {
      name: "Ashley Stegon", img: "Ashley Stegon.webp",
      en: "Digital Sculpting Instructor, Gnomon\nCredits: Avengers: Infinity War, The Mandalorian",
      zh: "诺蒙视觉特效学院 数字雕刻教师\n曾参与《复仇者联盟3：无限战争》《曼达洛人》"
    },
    {
      name: "Phillip Vaughan", img: "Philip.webp",
      en: "Abertay University\nSenior Lecturer, Technical Art & Visual Effects",
      zh: "阿伯泰大学\n技术艺术与视觉特效高级讲师"
    },
    {
      name: "Russell Miller", img: "Russell Miller.webp",
      en: "Academic Lead, The Glasgow School of Art\n30 years in design, visual arts & creative education",
      zh: "格拉斯哥艺术学院 学术主管\n30 年平面设计、视觉艺术与创意教育经验"
    },
    {
      name: "Xiaosong Yang", img: "Xiaosong Yang.webp",
      en: "Bournemouth University\nDeputy Director, UK National Centre for Computer Animation",
      zh: "伯恩茅斯大学\n英国国家计算机动画中心副主任"
    },
    {
      name: "Patrick Schmid", img: "Patrick Schmid.webp",
      en: "School of Film/Video, CalArts\nAssistant Director of Admissions — Animation",
      zh: "加州艺术学院 电影/视频学院\n招生助理主任——动画方向"
    },
    {
      name: "Jae-Eun Oh", img: "Jae-Eun Oh.webp",
      en: "Associate Professor, Hong Kong Polytechnic University\nProgramme Leader, BA (Hons) Digital Media",
      zh: "香港理工大学 副教授\n数字媒体（荣誉）文学士项目主任"
    },
    {
      name: "Daniel Livingstone", img: "Daniel Livingstone.webp",
      en: "School of Innovation & Technology, The Glasgow School of Art\nAcademic Portfolio Lead",
      zh: "格拉斯哥艺术学院 创新与技术学院\n学术项目主管"
    },
    {
      name: "Joowon Kim MacDowell", img: "Joowon Kim MacDowell.webp",
      en: "Professor, SMU Guildhall\nGame Art & Production · Immersive Tech (VR/AR) expert",
      zh: "南卫理公会大学 SMU Guildhall 教授\n游戏美术与制作专业 · 沉浸式技术（VR/AR）专家"
    },
    {
      name: "Ryan Bown", img: "Ryan Bown.webp",
      en: "Graduate Faculty, Games Division, University of Utah\nCredits: EIRE, Disney Infinity",
      zh: "犹他大学 游戏学部研究生课程教授\n曾参与开发《EIRE》与《迪士尼无限》"
    },
    {
      name: "David Tree", img: "David Tree.webp",
      en: "University of Hertfordshire\nCourse Leader, Animation & Games Technology",
      zh: "赫特福德大学\n动画与游戏技术专业课程主任"
    },
    {
      name: "Matt Brunner", img: "Matt Brunner.webp",
      en: "Program Director, Digital Art & Animation, DigiPen\nWorked on the original Xbox console",
      zh: "迪吉彭理工学院 数字艺术与动画专业项目主任\n曾参与初代 Xbox 主机的开发设计"
    },
    {
      name: "Kingston Chan", img: "KingstonChan-ConceptArtProgramHead-MAGESInstitute.webp",
      en: "Dean of Art, MAGES Institute Singapore\nFormer senior game artist at SEGA & Koei Tecmo",
      zh: "新加坡 MAGES 学院 艺术学院院长\n曾任 SEGA、Koei Tecmo 资深游戏美术师"
    },
    {
      name: "Darren Phillipson", img: "darren-phillipson.webp",
      en: "Professor of Toy Design, Otis College of Art and Design\nFormerly at Lucasfilm, Disney and other top studios",
      zh: "奥蒂斯艺术与设计学院 玩具设计教授\n曾任职于卢卡斯影业、迪士尼等顶级公司"
    },
    {
      name: "Joffery Black", img: "Joffery Black.webp",
      en: "Chair of Game Design, Otis College of Art and Design\nFormer Heavy Iron Studios — SpongeBob, Toy Story games",
      zh: "奥蒂斯艺术与设计学院 游戏设计系主任\n曾任职 Heavy Iron Studios，参与《海绵宝宝》《玩具总动员》IP 游戏"
    },
    {
      name: "Yi Tan", img: "Yi Tan.webp",
      en: "UAL Beijing Admissions Office\nAcademic Advisor",
      zh: "伦敦艺术大学北京招生办公室\n学术顾问"
    },
    {
      name: "Pingyao Sun", img: "Pingyao Sun.webp",
      en: "China Admissions Manager, Teesside University\n11 years in the UK study-abroad sector",
      zh: "提赛德大学 中国区招生经理\n11 年英国留学行业经验"
    },
    {
      name: "Tan Yong Zhen", img: "Tan Yong Zhen.webp",
      en: "Dean of Art, DigiPen Singapore\nCredits: Star Wars: The Force Unleashed",
      zh: "新加坡迪吉彭理工学院 艺术学院院长\n曾参与《星球大战：原力释放》开发"
    }
  ];

  var industrySpeakers = [
    {
      name: "Maria Burns Ortiz", img: "Maria Burns Ortiz.webp",
      en: "Executive Director, Global Game Jam\nNYT best-selling author · 2016 White House summit speaker",
      zh: "Global Game Jam 执行总监\n《纽约时报》畅销书作者 · 2016 白宫女性峰会演讲嘉宾"
    },
    {
      name: "Shaojun Sun", img: "Shaojun Sun.webp",
      en: "Miora Lead, Tencent CodeBuddy\nAI Product Manager · Product Experience Designer",
      zh: "腾讯 CodeBuddy 团队 Miora 负责人\nAI 产品经理 · 产品体验设计师"
    },
    {
      name: "Irene Liu", img: "Irene Liu.webp",
      en: "Genie Product Lead, Tencent CodeBuddy\nSenior AI-Native Product Manager",
      zh: "腾讯 CodeBuddy 团队 Genie 产品负责人\n资深 AI Native 产品经理"
    },
    {
      name: "Chris Ebeling", img: "Chris Ebeling.webp",
      en: "Unreal Engine Global Partner & Education Advisor\nVeteran digital artist, creative director & entrepreneur",
      zh: "虚幻引擎 全球合作伙伴兼教育顾问\n资深数字艺术家、创意总监与创业者"
    },
    {
      name: "Jin Wang", img: "Jin Wang.webp",
      en: "Official Unreal Engine Certified Instructor\nTop knowledge creator on Bilibili",
      zh: "虚幻引擎官方认证讲师\nBilibili 知识区头部创作者"
    }
  ];

  /* ---------- Schedule ---------- */
  var timezones = [
    { id: "Asia/Shanghai", en: "China · UTC+8", zh: "中国 · UTC+8" },
    { id: "Europe/London", en: "UK · UTC+1", zh: "英国 · UTC+1" },
    { id: "America/New_York", en: "US Eastern · UTC-4", zh: "美国东部 · UTC-4" },
    { id: "America/Chicago", en: "US Central · UTC-5", zh: "美国中部 · UTC-5" },
    { id: "America/Denver", en: "US Mountain · UTC-6", zh: "美国山区 · UTC-6" },
    { id: "America/Los_Angeles", en: "US Pacific · UTC-7", zh: "美国西部 · UTC-7" }
  ];

  var scheduleLabels = {
    morning: { en: "Morning", zh: "上午场" },
    afternoon: { en: "Afternoon", zh: "下午场" },
    keynote: { en: "Keynote", zh: "主题演讲" },
    us: { en: "US School", zh: "美国院校" },
    uk: { en: "UK School", zh: "英国院校" },
    hk: { en: "HK School", zh: "香港院校" },
    sg: { en: "SG School", zh: "新加坡院校" },
    sgus: { en: "SG & US School", zh: "新加坡&美国院校" },
    tba: { en: "Topic to be announced", zh: "主题待公布" }
  };

  var schedule = [
    {
      en: "Day 1 — Fri, Jun 26", zh: "第一天 — 6月26日 周五",
      blocks: [
        {
          part: "morning",
          sessions: [
            {
              start: "2026-06-26T09:00:00+08:00", end: "2026-06-26T09:30:00+08:00", type: "keynote",
              titleEn: "Game Jams: The Ultimate XP Boost",
              titleZh: "游戏 Jam：终极经验值加成",
              speakerEn: "Maria Burns Ortiz · Global Game Jam",
              speakerZh: "Maria Burns Ortiz · Global Game Jam"
            },
            {
              start: "2026-06-26T09:30:00+08:00", end: "2026-06-26T10:15:00+08:00", type: "us",
              titleEn: "How We Become a Professional Game Artist — Leveling Up in SMU",
              titleZh: "如何成为专业游戏美术师——在 SMU 一路升级",
              speakerEn: "Joowon Kim MacDowell · SMU Guildhall",
              speakerZh: "Joowon Kim MacDowell · 南卫理公会大学 SMU Guildhall"
            },
            {
              start: "2026-06-26T10:30:00+08:00", end: "2026-06-26T11:15:00+08:00", type: "us",
              titleEn: "Storytellers Beyond the Algorithm: From Students to Creators of the Stories You Know",
              titleZh: "超越算法的故事讲述者：从学生到你所熟知故事的创作者",
              speakerEn: "Patrick Schmid · CalArts",
              speakerZh: "Patrick Schmid · 加州艺术学院 CalArts"
            },
            {
              start: "2026-06-26T11:30:00+08:00", end: "2026-06-26T12:15:00+08:00", type: "hk",
              titleEn: "Bridging Education and Industry: New Horizons in Immersive Media",
              titleZh: "连接教育与产业：沉浸式媒体的新视野",
              speakerEn: "Jae-Eun Oh · Hong Kong Polytechnic University",
              speakerZh: "Jae-Eun Oh · 香港理工大学"
            }
          ]
        },
        {
          part: "afternoon",
          sessions: [
            {
              start: "2026-06-26T15:30:00+08:00", end: "2026-06-26T16:00:00+08:00", type: "keynote",
              titleEn: "Reshaping the Creative Paradigm: When AIGC Meets the Next Generation of Animation & Game Developers",
              titleZh: "重塑创作范式：当 AIGC 遇见新一代动画与游戏开发者",
              speakerEn: "Shaojun Sun · Irene Liu · Tencent Games",
              speakerZh: "Shaojun Sun · Irene Liu · 腾讯游戏"
            },
            {
              start: "2026-06-26T16:00:00+08:00", end: "2026-06-26T16:45:00+08:00", type: "uk",
              titleEn: "Art Meets Technology: How UAL Empowers Game Creation Both Ways",
              titleZh: "艺术与技术：伦艺如何双向赋能游戏创作？",
              speakerEn: "Yi Tan · Academic Counsellor, UAL Beijing Office",
              speakerZh: "Yi Tan · 伦敦艺术大学北京招生办公室 学术顾问"
            },
            {
              start: "2026-06-26T17:00:00+08:00", end: "2026-06-26T17:45:00+08:00", type: "uk",
              titleEn: "From Concept to Screen: How Professional Game Artists Work at Escape Studios",
              titleZh: "从概念到屏幕：Escape Studios 的专业游戏美术师如何工作",
              speakerEn: "Niccolò Temperanza · Escape Studios",
              speakerZh: "Niccolò Temperanza · Escape Studios"
            }
          ]
        }
      ]
    },
    {
      en: "Day 2 — Sat, Jun 27", zh: "第二天 — 6月27日 周六",
      blocks: [
        {
          part: "morning",
          sessions: [
            {
              start: "2026-06-27T09:00:00+08:00", end: "2026-06-27T09:30:00+08:00", type: "keynote",
              titleEn: "From Passion to Profession: Navigating Careers in Game Development and Beyond",
              titleZh: "从热爱到职业：在游戏开发及更广阔领域规划职业路径",
              speakerEn: "Chris Ebeling · Education Advisor, Unreal Engine",
              speakerZh: "Chris Ebeling · 虚幻引擎 教育顾问"
            },
            {
              start: "2026-06-27T09:30:00+08:00", end: "2026-06-27T10:15:00+08:00", type: "us",
              titleEn: "10 Questions You Should Ask Before Applying to School",
              titleZh: "申请院校前你应该问的 10 个问题",
              speakerEn: "Ryan Bown · Professor, Division of Games, University of Utah",
              speakerZh: "Ryan Bown · 犹他大学 游戏学部教授"
            },
            {
              start: "2026-06-27T10:30:00+08:00", end: "2026-06-27T11:15:00+08:00", type: "sgus",
              titleEn: "From Playing Games to Making Games: Careers in Game Development",
              titleZh: "从玩游戏到做游戏：游戏开发的职业之路",
              speakerEn: "Matt Brunner · Tan Yong Zhen 'YZ' · DigiPen",
              speakerZh: "Matt Brunner · Tan Yong Zhen 'YZ' · 迪吉彭理工学院"
            },
            {
              start: "2026-06-27T11:30:00+08:00", end: "2026-06-27T12:15:00+08:00", type: "sg",
              titleEn: "The Value of Entertainment Art: What Skillset Is Needed as an Artist in the Industry",
              titleZh: "娱乐美术的价值：行业美术师需要具备哪些技能",
              speakerEn: "Kingston Chan · Head of Art, MAGES Institute",
              speakerZh: "Kingston Chan · MAGES 学院 艺术学院院长"
            }
          ]
        },
        {
          part: "afternoon",
          sessions: [
            {
              start: "2026-06-27T15:30:00+08:00", end: "2026-06-27T16:00:00+08:00", type: "keynote",
              titleEn: "How to Land Your First Job in Games: An Insider's Guide from Escape Studios",
              titleZh: "如何拿下你的第一份游戏工作：Escape Studios 的内行指南",
              speakerEn: "Philip Meredith · Head of Games, Escape Studios",
              speakerZh: "Philip Meredith · Escape Studios 游戏科系主管"
            },
            {
              start: "2026-06-27T16:00:00+08:00", end: "2026-06-27T16:45:00+08:00", type: "uk",
              titleEn: "Games and Beyond: Game Art & Design In and Beyond the Entertainment Industry", titleZh: "游戏及超越：娱乐产业内外的游戏美术与设计",
              speakerEn: "Russell Miller (UG) & Daniel Livingstone (PG) · The Glasgow School of Art",
              speakerZh: "Russell Miller（本科）& Daniel Livingstone（研究生）· 格拉斯哥艺术学院"
            },
            {
              start: "2026-06-27T17:00:00+08:00", end: "2026-06-27T17:45:00+08:00", type: "uk",
              titleEn: "AI Reshaping the Creative Future: How Art Students Can Seize the New AI Track in the Media Industry",
              titleZh: "AI 重塑创意未来：艺术生如何抢占媒体行业的 AI 新赛道？",
              speakerEn: "Xiaosong Yang · Deputy Director, Bournemouth NCCA",
              speakerZh: "Xiaosong Yang · 伯恩茅斯大学 国家计算机动画中心副主任"
            },
            {
              start: "2026-06-27T18:00:00+08:00", end: "2026-06-27T19:00:00+08:00", type: "uk",
              titleEn: "The Future of the International Games Industry",
              titleZh: "国际游戏产业的未来",
              speakerEn: "Chris Headleand · Head of Games, University of Staffordshire",
              speakerZh: "Chris Headleand · 斯泰福厦大学 游戏科系主管"
            }
          ]
        }
      ]
    },
    {
      en: "Day 3 — Sun, Jun 28", zh: "第三天 — 6月28日 周日",
      blocks: [
        {
          part: "morning",
          sessions: [
            {
              start: "2026-06-28T09:00:00+08:00", end: "2026-06-28T09:30:00+08:00", type: "keynote",
              titleEn: "Creative Fusion of the UE Physics Engine and Sensors",
              titleZh: "UE 物理引擎 + 传感器的创意结合",
              speakerEn: "Jin Wang · Artist",
              speakerZh: "王瑨 · 艺术家"
            },
            {
              start: "2026-06-28T09:30:00+08:00", end: "2026-06-28T10:15:00+08:00", type: "us",
              titleEn: "Creature Design Pipeline: Starting the ZBrush Sculpt from a 2D Concept",
              titleZh: "生物设计流程：从 2D 概念图开始 ZBrush 雕刻",
              speakerEn: "Ashley Stegon · Gnomon",
              speakerZh: "Ashley Stegon · 诺蒙视觉特效学院 Gnomon"
            },
            {
              start: "2026-06-28T10:30:00+08:00", end: "2026-06-28T11:15:00+08:00", type: "us",
              titleEn: "Designing the Future of Play: Where Game Design and Toy Design Meet Art, Industry and Imagination",
              titleZh: "设计玩乐的未来：当游戏设计与玩具设计相遇于艺术、产业与想象力",
              speakerEn: "Joffery Black (Chair, Game & Entertainment Design) & Darren Phillipson (Lecturer, BFA Toy Design) · Otis College of Art and Design",
              speakerZh: "Joffery Black（游戏与娱乐设计系主任）& Darren Phillipson（玩具设计讲师）· 奥蒂斯艺术与设计学院"
            }
          ]
        },
        {
          part: "afternoon",
          sessions: [
            {
              start: "2026-06-28T15:30:00+08:00", end: "2026-06-28T16:00:00+08:00", type: "keynote",
              titleEn: "A World Leader in Games Education",
              titleZh: "游戏教育的世界领跑者",
              speakerEn: "Kieran Hicks · University of Staffordshire",
              speakerZh: "Kieran Hicks · 斯泰福厦大学"
            },
            {
              start: "2026-06-28T16:00:00+08:00", end: "2026-06-28T16:45:00+08:00", type: "uk",
              titleEn: "Building a China–UK Creative Industry Talent Bridge: Teesside University's Perspective and Practice",
              titleZh: "构建中英创意产业人才桥梁——提赛德大学的视角与实践",
              speakerEn: "Pingyao Sun · Recruitment Manager, Teesside University",
              speakerZh: "Pingyao Sun · 提赛德大学 招生经理"
            },
            {
              start: "2026-06-28T17:00:00+08:00", end: "2026-06-28T17:45:00+08:00", type: "uk",
              titleEn: "Create the Unreal: Next-Level Visual Effects Starts Here…",
              titleZh: "创造非凡：进阶视觉特效从这里开始……",
              speakerEn: "Ruth Falconer & Phillip Vaughan · Abertay University",
              speakerZh: "Ruth Falconer & Phillip Vaughan · 阿伯泰大学"
            },
            {
              start: "2026-06-28T18:00:00+08:00", end: "2026-06-28T19:00:00+08:00", type: "uk",
              titleEn: "From Pencils to Pixels: Training the Next Generation of Games and Visual Effects Artists",
              titleZh: "从铅笔到像素：培养下一代游戏与视觉特效美术师",
              speakerEn: "David Tree · University of Hertfordshire",
              speakerZh: "David Tree · 赫特福德大学"
            }
          ]
        }
      ]
    }
  ];

  /* ---------- Render helpers ---------- */
  function initials(name) {
    var parts = name.replace(/[^A-Za-zÀ-ÿ一-鿿 ]/g, "").trim().split(/\s+/);
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }

  function renderInstitutions() {
    var grid = document.getElementById("logo-grid");
    institutions.forEach(function (inst) {
      var card = document.createElement("div");
      card.className = "logo-card";
      card.title = inst.name;

      var img = document.createElement("img");
      img.loading = "lazy";
      img.alt = inst.name;
      if (inst.big) img.className = "is-lg";
      img.src = encodeURI("logos/" + inst.logo);
      img.onerror = function () {
        card.removeChild(img);
        card.classList.add("logo-card--text");
        card.textContent = inst.name;
      };

      card.appendChild(img);
      grid.appendChild(card);
    });
  }

  function renderSpeakers(listId, list) {
    var grid = document.getElementById(listId);
    list.forEach(function (sp, idx) {
      var hue = (idx * 47 + (listId === "academic-grid" ? 250 : 200)) % 360;
      var card = document.createElement("div");
      card.className = "speaker";

      var avatar = document.createElement("div");
      avatar.className = "speaker-avatar";
      avatar.style.setProperty("--h", hue);
      avatar.style.setProperty("--h2", (hue + 28) % 360);

      var img = document.createElement("img");
      img.loading = "lazy";
      img.alt = sp.name;
      img.src = encodeURI("speakers/" + sp.img);
      img.onerror = function () {
        avatar.classList.add("speaker-avatar--text");
        avatar.textContent = initials(sp.name);
      };
      avatar.appendChild(img);

      var nameEl = document.createElement("p");
      nameEl.className = "speaker-name";
      nameEl.textContent = sp.name;

      var roleEl = document.createElement("p");
      roleEl.className = "speaker-role";
      roleEl.setAttribute("data-bio-en", sp.en);
      roleEl.setAttribute("data-bio-zh", sp.zh);

      card.appendChild(avatar);
      card.appendChild(nameEl);
      card.appendChild(roleEl);
      grid.appendChild(card);
    });
  }

  /* ---------- Schedule rendering ---------- */
  function fmtTime(iso, tz) {
    return new Intl.DateTimeFormat("en-GB", {
      timeZone: tz, hour: "2-digit", minute: "2-digit", hour12: false
    }).format(new Date(iso));
  }

  function fmtDate(iso, tz, lang) {
    return new Intl.DateTimeFormat(lang === "zh" ? "zh-CN" : "en-US", {
      timeZone: tz, month: "short", day: "numeric", weekday: "short"
    }).format(new Date(iso));
  }

  function renderSchedule() {
    var body = document.getElementById("schedule-body");
    var daySel = document.getElementById("schedule-day");
    var tzSel = document.getElementById("schedule-tz");
    if (!body || !daySel || !tzSel) return;

    var lang = document.documentElement.lang === "zh" ? "zh" : "en";
    var dayIdx = parseInt(daySel.value, 10) || 0;
    var tz = tzSel.value || "Asia/Shanghai";
    var day = schedule[dayIdx];

    body.textContent = "";

    day.blocks.forEach(function (block) {
      var blockEl = document.createElement("div");
      blockEl.className = "schedule-block";

      var heading = document.createElement("h3");
      heading.className = "schedule-part";
      heading.textContent = scheduleLabels[block.part][lang];
      blockEl.appendChild(heading);

      block.sessions.forEach(function (s) {
        var row = document.createElement("div");
        row.className = "session";

        var timeEl = document.createElement("div");
        timeEl.className = "session-time";
        var hours = document.createElement("span");
        hours.className = "session-hours";
        hours.textContent = fmtTime(s.start, tz) + "–" + fmtTime(s.end, tz);
        var dateEl = document.createElement("span");
        dateEl.className = "session-date";
        dateEl.textContent = fmtDate(s.start, tz, lang);
        timeEl.appendChild(hours);
        timeEl.appendChild(dateEl);

        var info = document.createElement("div");
        info.className = "session-info";

        var tag = document.createElement("span");
        tag.className = "session-tag session-tag--" + s.type;
        tag.textContent = scheduleLabels[s.type][lang];

        var title = document.createElement("p");
        title.className = "session-title";
        var t = lang === "zh" ? s.titleZh : s.titleEn;
        if (t) {
          title.textContent = t;
        } else {
          title.textContent = scheduleLabels.tba[lang];
          title.classList.add("session-title--tba");
        }

        var speaker = document.createElement("p");
        speaker.className = "session-speaker";
        speaker.textContent = lang === "zh" ? s.speakerZh : s.speakerEn;

        info.appendChild(tag);
        info.appendChild(title);
        info.appendChild(speaker);

        row.appendChild(timeEl);
        row.appendChild(info);
        blockEl.appendChild(row);
      });

      body.appendChild(blockEl);
    });
  }

  function initSchedule() {
    var daySel = document.getElementById("schedule-day");
    var tzSel = document.getElementById("schedule-tz");
    if (!daySel || !tzSel) return;

    schedule.forEach(function (d, i) {
      var opt = document.createElement("option");
      opt.value = i;
      daySel.appendChild(opt);
    });
    timezones.forEach(function (tz) {
      var opt = document.createElement("option");
      opt.value = tz.id;
      tzSel.appendChild(opt);
    });

    daySel.addEventListener("change", renderSchedule);
    tzSel.addEventListener("change", renderSchedule);
  }

  /* ---------- Language ---------- */
  function applyLanguage(lang) {
    var dict = i18n[lang] || i18n.en;
    document.documentElement.lang = lang;
    document.title = dict.pageTitle;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });

    var heroTitle = document.querySelector(".hero-title");
    if (heroTitle) {
      heroTitle.innerHTML = lang === "zh"
        ? "全球游戏动画留学峰会"
        : "GGAES <span>2026</span>";
    }

    document.querySelectorAll(".speaker-role").forEach(function (el) {
      var bio = el.getAttribute("data-bio-" + lang) || el.getAttribute("data-bio-en");
      if (bio != null) el.textContent = bio;
    });

    var daySel = document.getElementById("schedule-day");
    if (daySel) {
      Array.prototype.forEach.call(daySel.options, function (opt, i) {
        opt.textContent = schedule[i][lang];
      });
    }
    var tzSel = document.getElementById("schedule-tz");
    if (tzSel) {
      Array.prototype.forEach.call(tzSel.options, function (opt, i) {
        opt.textContent = timezones[i][lang];
      });
    }
    renderSchedule();

    document.querySelectorAll(".lang-toggle button").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    try { localStorage.setItem("ggaes_lang", lang); } catch (e) {}
  }

  /* ---------- Countdown ---------- */
  function startCountdown() {
    // Summit starts 26 June 2026, 00:00 China Standard Time (UTC+8).
    var target = new Date("2026-06-26T00:00:00+08:00").getTime();
    var els = {
      days: document.getElementById("cd-days"),
      hours: document.getElementById("cd-hours"),
      minutes: document.getElementById("cd-minutes"),
      seconds: document.getElementById("cd-seconds")
    };

    function pad(n) { return (n < 10 ? "0" : "") + n; }

    function tick() {
      var diff = target - Date.now();
      if (diff < 0) diff = 0;
      var s = Math.floor(diff / 1000);
      els.days.textContent = pad(Math.floor(s / 86400));
      els.hours.textContent = pad(Math.floor((s % 86400) / 3600));
      els.minutes.textContent = pad(Math.floor((s % 3600) / 60));
      els.seconds.textContent = pad(s % 60);
    }

    tick();
    setInterval(tick, 1000);
  }

  /* ---------- CTA click tracking ---------- */
  function initCtaTracking() {
    document.addEventListener("click", function (e) {
      var btn = e.target.closest(".btn");
      if (!btn || btn.classList.contains("btn-disabled") || btn.disabled) return;

      var section = "other";
      if (btn.closest("header")) section = "header";
      else if (btn.closest("footer")) section = "footer";
      else if (btn.closest(".hero")) section = "hero";
      else {
        var sec = btn.closest("section");
        if (sec && sec.id) section = sec.id;
      }

      var data = {
        cta_id: btn.getAttribute("data-i18n") || (btn.textContent || "").trim(),
        cta_text: (btn.textContent || "").trim(),
        cta_section: section
      };
      if (btn.href) data.link_url = btn.href;

      if (typeof window.gtag === "function") {
        window.gtag("event", "cta_click", data);
      }
    });
  }

  /* ---------- Init ---------- */
  function getInitialLang() {
    var stored;
    try { stored = localStorage.getItem("ggaes_lang"); } catch (e) {}
    if (stored === "en" || stored === "zh") return stored;
    return "en"; // default language
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderInstitutions();
    renderSpeakers("academic-grid", academicSpeakers);
    renderSpeakers("industry-grid", industrySpeakers);
    initSchedule();

    applyLanguage(getInitialLang());

    document.querySelectorAll(".lang-toggle button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLanguage(btn.getAttribute("data-lang"));
      });
    });

    startCountdown();
    initCtaTracking();
  });
})();
