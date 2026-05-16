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
    { name: "University of the Arts London", logo: "UAL.webp" },
    { name: "Hong Kong Polytechnic University", logo: "Poly U.png" },
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
    { name: "Niccolò Temperanza", img: "niccolo-temperanza.jpg" },
    { name: "Christopher Headleand", img: "Christopher Headleand.jpeg" },
    { name: "Philip Meredith", img: "Philip Meredith.webp" },
    { name: "Ruth Falconer", img: "Ruth.jpg" },
    { name: "Ashley Stegon", img: "Ashley Stegon.jpg" },
    { name: "Philip Vaughan", img: "Philip.jpg" },
    { name: "Russell Miller", img: "Russell Miller.jpg" },
    { name: "Xiaosong Yang", img: "Xiaosong Yang.jpg" },
    { name: "Patrick Schmid", img: "Patrick Schmid.png" },
    { name: "Jae-Eun Oh", img: "Jae-Eun Oh.jpg" },
    { name: "Daniel Livingstone", img: "Daniel Livingstone.png" },
    { name: "Joowon Kim MacDowell", img: "Joowon Kim MacDowell.png" },
    { name: "Ryan Bown", img: "Ryan Bown.jpg" },
    { name: "David Tree", img: "David Tree.jpg" },
    { name: "Matt Brunner", img: "Matt Brunner.webp" },
    { name: "Kingston Chan", img: "KingstonChan-ConceptArtProgramHead-MAGESInstitute.jpg" },
    { name: "Darren Phillipson", img: "darren-phillipson.jpg" },
    { name: "Joffrey Black", img: "Joffery Black.jpg" },
    { name: "Yi Tian", img: "Yi Tian.png" },
    { name: "Pingyao Sun", img: "Pingyao Sun.png" },
    { name: "Tan Yong Zhen", img: "Tan Yong Zhen.webp" }
  ];

  var industrySpeakers = [
    { name: "Maria Burns Ortiz", img: "Maria Burns Ortiz.webp" },
    { name: "Shaojun Sun", img: "Shaojun Sun.jpg" },
    { name: "Irene Liu", img: "Irene Liu.jpg" },
    { name: "Chris Ebeling", img: "Chris Ebeling.jpg" },
    { name: "Jin Wang", img: "Jin Wang.png" }
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

  function renderSpeakers(listId, list, roleKey) {
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
