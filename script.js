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
      academicRole: "Academic Speaker",
      industryRole: "Industry Speaker",
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
      academicRole: "院校嘉宾",
      industryRole: "行业嘉宾",
      footerCtaTitle: "准备好加入 GGAES 2026 了吗？",
      footerCtaDesc: "立即报名，锁定你的峰会席位。",
      email: "电子邮箱：support@artdico.co",
      copyright: "© 2026 GGAES · 全球游戏动画留学峰会"
    }
  };

  /* ---------- Data ---------- */
  var institutions = [
    "University of the Arts London",
    "Hong Kong Polytechnic University",
    "University of Utah",
    "CalArts",
    "Bournemouth University",
    "Escape Studios",
    "University of Staffordshire",
    "DigiPen",
    "SMU Guildhall",
    "Abertay University",
    "Gnomon",
    "Teesside University",
    "The Glasgow School of Art",
    "University of Hertfordshire",
    "LIS College",
    "MAGES Institute"
  ];

  var academicSpeakers = [
    "Niccolò Temperanza", "Christopher Headleand", "Philly Meredith",
    "Ruth Falconer", "Ashley Sleigh", "Philip Vaughan", "Russell Miller",
    "Xiaosong Yang", "Patrick Schmid", "Jae-Eun Oh", "Daniel Livingstone",
    "Joowon Kim MacDowell", "Ryan Bown", "David Tree", "Matt Brunner",
    "Kingston Chan", "Darren Phillipson", "Joffrey Black", "Yi Tian",
    "Pingyao Sun", "Tan Yong Zhen"
  ];

  var industrySpeakers = [
    "Maria Burns Ortiz", "Shaojun Sun", "Irene Liu", "Chris Ebeling", "Jin Wang"
  ];

  /* ---------- Render helpers ---------- */
  function initials(name) {
    var parts = name.replace(/[^A-Za-zÀ-ÿ一-鿿 ]/g, "").trim().split(/\s+/);
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }

  function renderInstitutions() {
    var grid = document.getElementById("logo-grid");
    institutions.forEach(function (name) {
      var card = document.createElement("div");
      card.className = "logo-card";
      card.textContent = name;
      grid.appendChild(card);
    });
  }

  function renderSpeakers(listId, names, roleKey) {
    var grid = document.getElementById(listId);
    names.forEach(function (name, idx) {
      var hue = (idx * 47 + (listId === "academic-grid" ? 250 : 200)) % 360;
      var card = document.createElement("div");
      card.className = "speaker";

      var avatar = document.createElement("div");
      avatar.className = "speaker-avatar";
      avatar.style.setProperty("--h", hue);
      avatar.style.setProperty("--h2", (hue + 28) % 360);
      avatar.textContent = initials(name);

      var nameEl = document.createElement("p");
      nameEl.className = "speaker-name";
      nameEl.textContent = name;

      var roleEl = document.createElement("p");
      roleEl.className = "speaker-role";
      roleEl.setAttribute("data-i18n", roleKey);

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
    renderSpeakers("academic-grid", academicSpeakers, "academicRole");
    renderSpeakers("industry-grid", industrySpeakers, "industryRole");

    applyLanguage(getInitialLang());

    document.querySelectorAll(".lang-toggle button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLanguage(btn.getAttribute("data-lang"));
      });
    });

    startCountdown();
  });
})();
