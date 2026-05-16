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
      viewSchedule: "View Full Schedule",
      scheduleNote: "Held online over 5 days · June 26–28, 2026 (China Standard Time)",
      highlightsTitle: "Summit Highlights",
      stat1: "Viewers per live session",
      stat2: "Top universities",
      stat3: "Summit speakers",
      stat4: "Social media impressions",
      viewBrochure: "View Summit Brochure",
      institutionsTitle: "Attending Institutions",
      academicTitle: "Academic Speakers",
      industryTitle: "Industry Speakers",
      footerCtaTitle: "Ready to join GGAES 2026?",
      footerCtaDesc: "Register now to secure your spot at the summit.",
      email: "Email: support@artdico.co",
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
      viewSchedule: "查看完整日程表",
      scheduleNote: "5天线上召开 · 2026年6月26日-28日中国标准时间档期",
      highlightsTitle: "峰会亮点",
      stat1: "每场直播观看人数",
      stat2: "顶尖大学",
      stat3: "峰会大咖",
      stat4: "社群媒体印象数",
      viewBrochure: "查看峰会电子册",
      institutionsTitle: "出席院校",
      academicTitle: "院校嘉宾",
      industryTitle: "行业嘉宾",
      footerCtaTitle: "准备好加入 GGAES 2026 了吗？",
      footerCtaDesc: "立即报名，锁定你的峰会席位。",
      email: "电子邮箱：support@artdico.co",
      copyright: "© 2026 GGAES · 全球游戏动画留学峰会"
    }
  };

  /* ---------- Data ---------- */
  var institutions = [
    { name: "University of the Arts London", logo: "UAL.webp" },
    { name: "Hong Kong Polytechnic University", logo: "Poly U.png", big: true },
    { name: "University of Utah", logo: "Utah.jpg" },
    { name: "CalArts", logo: "Calarts.webp" },
    { name: "Bournemouth University", logo: "Bu.png" },
    { name: "Escape Studios", logo: "Escape.webp" },
    { name: "University of Staffordshire", logo: "Staffordshire.png" },
    { name: "DigiPen", logo: "DigiPen_web_logo.png" },
    { name: "SMU Guildhall", logo: "SMU.jpg" },
    { name: "Abertay University", logo: "Abertay.png" },
    { name: "Gnomon", logo: "Gnomon.jpg" },
    { name: "Teesside University", logo: "Teessi.webp" },
    { name: "The Glasgow School of Art", logo: "GSA.webp" },
    { name: "University of Hertfordshire", logo: "University_of_Hertfordshire_Logo.svg.png" },
    { name: "Otis College of Art and Design", logo: "OTis.png" },
    { name: "MAGES Institute", logo: "MAGES.png" }
  ];

  var academicSpeakers = [
    {
      name: "Niccolò Temperanza", img: "niccolo-temperanza.jpg",
      en: "Game Art Course Leader, Escape Studios\nVeteran game art professional",
      zh: "Escape Studios 游戏美术课程教授\n资深游戏美术从业者"
    },
    {
      name: "Christopher Headleand", img: "Christopher Headleand.jpeg",
      en: "University of Staffordshire\nHead of Digital, Technology, Innovation & Business",
      zh: "斯塔福德郡大学\n数字、技术、创新与商业系主任"
    },
    {
      name: "Philip Meredith", img: "Philip Meredith.webp",
      en: "Head of Games, Escape Studios\nCredits: Harry Potter and the Deathly Hallows, Silent Hill",
      zh: "Escape Studios 游戏科系主管\n曾参与《哈利·波特：死亡圣器》《寂静岭：破碎的记忆》"
    },
    {
      name: "Ruth Falconer", img: "Ruth.jpg",
      en: "Head of Games Tech & Maths, Abertay University\nCreaTech Lead, CoSTAR National Lab",
      zh: "阿伯泰大学 游戏技术与数学系系主任\nCoSTAR 国家实验室 CreaTech 负责人"
    },
    {
      name: "Ashley Stegon", img: "Ashley Stegon.jpg",
      en: "Digital Sculpting Instructor, Gnomon\nCredits: Avengers: Infinity War, The Mandalorian",
      zh: "诺蒙视觉特效学院 数字雕刻教师\n曾参与《复仇者联盟3：无限战争》《曼达洛人》"
    },
    {
      name: "Phillip Vaughan", img: "Philip.jpg",
      en: "Abertay University\nSenior Lecturer, Technical Art & Visual Effects",
      zh: "阿伯泰大学\n技术艺术与视觉特效高级讲师"
    },
    {
      name: "Russell Miller", img: "Russell Miller.jpg",
      en: "Academic Lead, The Glasgow School of Art\n30 years in design, visual arts & creative education",
      zh: "格拉斯哥艺术学院 学术主管\n30 年平面设计、视觉艺术与创意教育经验"
    },
    {
      name: "Xiaosong Yang", img: "Xiaosong Yang.jpg",
      en: "Bournemouth University\nDeputy Director, UK National Centre for Computer Animation",
      zh: "伯恩茅斯大学\n英国国家计算机动画中心副主任"
    },
    {
      name: "Patrick Schmid", img: "Patrick Schmid.png",
      en: "School of Film/Video, CalArts\nAssistant Director of Admissions — Animation",
      zh: "加州艺术学院 电影/视频学院\n招生助理主任——动画方向"
    },
    {
      name: "Jae-Eun Oh", img: "Jae-Eun Oh.jpg",
      en: "Associate Professor, Hong Kong Polytechnic University\nProgramme Leader, BA (Hons) Digital Media",
      zh: "香港理工大学 副教授\n数字媒体（荣誉）文学士项目主任"
    },
    {
      name: "Daniel Livingstone", img: "Daniel Livingstone.png",
      en: "School of Innovation & Technology, The Glasgow School of Art\nAcademic Portfolio Lead",
      zh: "格拉斯哥艺术学院 创新与技术学院\n学术项目主管"
    },
    {
      name: "Joowon Kim MacDowell", img: "Joowon Kim MacDowell.png",
      en: "Professor, SMU Guildhall\nGame Art & Production · Immersive Tech (VR/AR) expert",
      zh: "南卫理公会大学 SMU Guildhall 教授\n游戏美术与制作专业 · 沉浸式技术（VR/AR）专家"
    },
    {
      name: "Ryan Bown", img: "Ryan Bown.jpg",
      en: "Graduate Faculty, Games Division, University of Utah\nCredits: EIRE, Disney Infinity",
      zh: "犹他大学 游戏学部研究生课程教授\n曾参与开发《EIRE》与《迪士尼无限》"
    },
    {
      name: "David Tree", img: "David Tree.jpg",
      en: "University of Hertfordshire\nCourse Leader, Animation & Games Technology",
      zh: "赫特福德大学\n动画与游戏技术专业课程主任"
    },
    {
      name: "Matt Brunner", img: "Matt Brunner.webp",
      en: "Program Director, Digital Art & Animation, DigiPen\nWorked on the original Xbox console",
      zh: "迪吉彭理工学院 数字艺术与动画专业项目主任\n曾参与初代 Xbox 主机的开发设计"
    },
    {
      name: "Kingston Chan", img: "KingstonChan-ConceptArtProgramHead-MAGESInstitute.jpg",
      en: "Dean of Art, MAGES Institute Singapore\nFormer senior game artist at SEGA & Koei Tecmo",
      zh: "新加坡 MAGES 学院 艺术学院院长\n曾任 SEGA、Koei Tecmo 资深游戏美术师"
    },
    {
      name: "Darren Phillipson", img: "darren-phillipson.jpg",
      en: "Professor of Toy Design, Otis College of Art and Design\nFormerly at Lucasfilm, Disney and other top studios",
      zh: "奥蒂斯艺术与设计学院 玩具设计教授\n曾任职于卢卡斯影业、迪士尼等顶级公司"
    },
    {
      name: "Joffery Black", img: "Joffery Black.jpg",
      en: "Chair of Game Design, Otis College of Art and Design\nFormer Heavy Iron Studios — SpongeBob, Toy Story games",
      zh: "奥蒂斯艺术与设计学院 游戏设计系主任\n曾任职 Heavy Iron Studios，参与《海绵宝宝》《玩具总动员》IP 游戏"
    },
    {
      name: "Yi Tian", img: "Yi Tian.png",
      en: "UAL Beijing Admissions Office\nAcademic Advisor",
      zh: "伦敦艺术大学北京招生办公室\n学术顾问"
    },
    {
      name: "Pingyao Sun", img: "Pingyao Sun.png",
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
      name: "Shaojun Sun", img: "Shaojun Sun.jpg",
      en: "Miora Lead, Tencent CodeBuddy\nAI Product Manager · Product Experience Designer",
      zh: "腾讯 CodeBuddy 团队 Miora 负责人\nAI 产品经理 · 产品体验设计师"
    },
    {
      name: "Irene Liu", img: "Irene Liu.jpg",
      en: "Genie Product Lead, Tencent CodeBuddy\nSenior AI-Native Product Manager",
      zh: "腾讯 CodeBuddy 团队 Genie 产品负责人\n资深 AI Native 产品经理"
    },
    {
      name: "Chris Ebeling", img: "Chris Ebeling.jpg",
      en: "Unreal Engine Global Partner & Education Advisor\nVeteran digital artist, creative director & entrepreneur",
      zh: "虚幻引擎 全球合作伙伴兼教育顾问\n资深数字艺术家、创意总监与创业者"
    },
    {
      name: "Jin Wang", img: "Jin Wang.png",
      en: "Official Unreal Engine Certified Instructor\nTop knowledge creator on Bilibili",
      zh: "虚幻引擎官方认证讲师\nBilibili 知识区头部创作者"
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

  /* ---------- Language ---------- */
  function applyLanguage(lang) {
    var dict = i18n[lang] || i18n.en;
    document.documentElement.lang = lang;
    document.title = dict.pageTitle;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });

    document.querySelectorAll(".speaker-role").forEach(function (el) {
      var bio = el.getAttribute("data-bio-" + lang) || el.getAttribute("data-bio-en");
      if (bio != null) el.textContent = bio;
    });

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

    applyLanguage(getInitialLang());

    document.querySelectorAll(".lang-toggle button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLanguage(btn.getAttribute("data-lang"));
      });
    });

    startCountdown();
  });
})();
