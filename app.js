// Navegación de pestañas principales
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

function showTab(tabId) {
    tabContents.forEach(tab => {
        tab.classList.remove('active');
        if (tab.id === tabId) tab.classList.add('active');
        // Asegura que el detalle de proyecto se oculte si no es la pestaña de detalle
        if (tab.id === 'project-detail' && tabId !== 'project-detail') {
            tab.style.display = 'none';
        } else if (tab.id === 'project-detail' && tabId === 'project-detail') {
            tab.style.display = '';
        }
    });
    tabButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabId);
    });
}
tabButtons.forEach(btn => {
    btn.addEventListener('click', () => showTab(btn.dataset.tab));
});

// Navegación lateral en About Me
const sideButtons = document.querySelectorAll('.side-btn');
sideButtons.forEach(btn => {
    btn.addEventListener('click', () => showTab(btn.dataset.tab));
});

// Tema oscuro/claro (opcional)
document.querySelector('.theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
});

// Mostrar la pestaña principal al cargar
showTab('home');

// --- Lógica para mostrar detalle de proyecto ---
const projectBtns = document.querySelectorAll('.project-btn');
const projectDetailSection = document.getElementById('project-detail');
const projectsSection = document.getElementById('projects');

projectBtns.forEach((btn, idx) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        showTab('project-detail');
        projectDetailSection.style.display = '';
        window.scrollTo({top:0, behavior:'smooth'});
        // Si quieres que el detalle sea dinámico, aquí puedes cambiar el contenido según idx
        // Por ahora, solo muestra el detalle estático
    });
});

// --- Traducciones ---
const translations = {
    en: {
        home_hi: "Hi all, I am",
        home_webdev: "> Web developer",
        home_number: "// my number",
        home_email: "// my e-mail",
        home_github: "// you can also see it on my Github page",

        about_title: "About Me",
        about_desc: `I'm Biel Nieto Juanes, a passionate Junior Frontend and Backend Developer with a strong interest in building modern, efficient, and user-friendly web applications. My journey in software development began with a curiosity for how technology shapes our daily lives, and quickly grew into a commitment to mastering both frontend and backend technologies. I enjoy working with frameworks and tools such as React, NodeJS, Express, and MongoDB, always striving to write clean, maintainable code. I am comfortable collaborating in teams, but also thrive when working independently on challenging projects. My goal is to continuously learn and stay up-to-date with the latest trends in web development, while delivering solutions that make a real impact.

I am eager to take on new challenges, contribute to innovative projects, and grow as a developer in a dynamic environment.`,

        skills: "Skills",
        skills_speaking: "_speaking-languages",
        skills_programming: "_programing-languages",
        skills_frontend: "_frontend",
        skills_backend: "_backend",

        experience: "Experience",
        education: "Education",
        projects: "Projects",

        find_me: "Find-me-in:",
        github: "GitHub",
        linkedin: "LinkedIn",
        instagram: "Instagram"
    },

    ca: {
        home_hi: "Hola a tothom, sóc",
        home_webdev: "> Desenvolupador web",
        home_number: "// el meu número",
        home_email: "// el meu correu",
        home_github: "// també el pots veure al meu Github",

        about_title: "Sobre mi",
        about_desc: `Sóc Biel Nieto Juanes, un desenvolupador junior frontend i backend apassionat, amb un gran interès per crear aplicacions web modernes, eficients i fàcils d'utilitzar. El meu camí en el desenvolupament de programari va començar amb la curiositat per com la tecnologia influeix en la nostra vida diària, i ràpidament es va transformar en un compromís per dominar tant el frontend com el backend.

Gaudeixo treballant amb frameworks i eines com React, NodeJS, Express i MongoDB, sempre intentant escriure codi net i mantenible. Em sento còmode col·laborant en equip, però també m'agrada treballar de manera independent en projectes desafiadors. El meu objectiu és aprendre contínuament i mantenir-me al dia de les últimes tendències en desenvolupament web, oferint solucions que tinguin un impacte real.

Tinc moltes ganes d'afrontar nous reptes, contribuir a projectes innovadors i créixer com a desenvolupador en un entorn dinàmic.`,

        skills: "Habilitats",
        skills_speaking: "_idiomes-parlats",
        skills_programming: "_llenguatges-programació",
        skills_frontend: "_frontend",
        skills_backend: "_backend",

        experience: "Experiència",
        education: "Formació",
        projects: "Projectes",

        find_me: "Contacta'm a:",
        github: "GitHub",
        linkedin: "LinkedIn",
        instagram: "Instagram"
    },

    es: {
        home_hi: "Hola a todos, soy",
        home_webdev: "> Desarrollador web",
        home_number: "// mi número",
        home_email: "// mi correo",
        home_github: "// también lo puedes ver en mi Github",

        about_title: "Sobre mí",
        about_desc: `Soy Biel Nieto Juanes, un desarrollador junior frontend y backend apasionado, con gran interés en crear aplicaciones web modernas, eficientes y fáciles de usar. Mi camino en el desarrollo de software comenzó con la curiosidad por cómo la tecnología influye en nuestra vida diaria, y pronto se transformó en un compromiso por dominar tanto el frontend como el backend.

Disfruto trabajando con frameworks y herramientas como React, NodeJS, Express y MongoDB, siempre buscando escribir código limpio y mantenible. Me siento cómodo colaborando en equipo, pero también disfruto trabajando de forma independiente en proyectos desafiantes. Mi objetivo es aprender continuamente y mantenerme actualizado con las últimas tendencias del desarrollo web, entregando soluciones que generen un impacto real.

Estoy motivado para asumir nuevos retos, contribuir en proyectos innovadores y crecer como desarrollador en un entorno dinámico.`,

        skills: "Habilidades",
        skills_speaking: "_idiomas-hablados",
        skills_programming: "_lenguajes-programación",
        skills_frontend: "_frontend",
        skills_backend: "_backend",

        experience: "Experiencia",
        education: "Formación",
        projects: "Proyectos",

        find_me: "Encuéntrame en:",
        github: "GitHub",
        linkedin: "LinkedIn",
        instagram: "Instagram"
    }
};

// --- Lógica de cambio de idioma ---
const langDropdown = document.getElementById('lang-dropdown');
const langMenu = document.getElementById('lang-menu');
let currentLang = 'en';

langDropdown.addEventListener('click', function(e) {
  langDropdown.classList.toggle('open');
});
document.querySelectorAll('.lang-option').forEach(opt => {
  opt.addEventListener('click', function(e) {
    const lang = this.getAttribute('data-lang');
    setLanguage(lang);
    langDropdown.classList.remove('open');
    e.stopPropagation();
  });
});
document.addEventListener('click', function(e) {
  if (!langDropdown.contains(e.target)) langDropdown.classList.remove('open');
});

function setLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];
  // Home
  document.querySelector('#home h2').textContent = t.home_hi;
  document.querySelector('#home .subtitle').textContent = t.home_webdev;
  document.querySelector('#home pre').innerHTML = `${t.home_number}\nconst telephoneNum = <span class="highlight">+34 656 33 23 17</span>;\n${t.home_email}\nconst email = "bielnieto.formacion@gmail.com";\n${t.home_github}\nconst githubLink = "https://github.com/Bielnieto";`;
  // About Me
  document.querySelectorAll('.about-main-block h2').forEach(el => el.textContent = t.about_title);
  document.querySelectorAll('.about-desc').forEach(el => el.textContent = t.about_desc);
  // Skills
  document.querySelectorAll('.skills-main-block h2').forEach(el => el.textContent = t.skills);
  document.querySelectorAll('.skills-title')[0].textContent = t.skills_speaking;
  document.querySelectorAll('.skills-title')[1].textContent = t.skills_programming;
  document.querySelectorAll('.skills-title')[2].textContent = t.skills_frontend;
  document.querySelectorAll('.skills-title')[3].textContent = t.skills_backend;
  // Experience
  document.querySelectorAll('.experience-main-block h2').forEach(el => el.textContent = t.experience);
  // Education
  document.querySelectorAll('.education-main-block h2').forEach(el => el.textContent = t.education);
  // Projects
  document.querySelectorAll('.projects-main-block h2').forEach(el => el.textContent = t.projects);
  // Footer
  document.querySelector('footer div').childNodes[0].textContent = t.find_me;
  document.querySelector('.social.instagram').textContent = t.instagram;
  document.querySelector('.social.linkedin').textContent = t.linkedin;
  document.querySelector('.social.github').textContent = t.github;
  // Projects: títulos y descripciones
  const projectTitles = [
    ["Formula 1 API", "API basada en Fórmula 1 para gestionar pilotos y escuderías", "API basada en Fórmula 1 per gestionar pilots i escuderies"],
    ["EstudIA", "Aplicación web para estudiantes, donde pueden guardar su progreso académico y estudiar junto a un chatbot con dos modos, examen o repaso.", "Aplicació web per a estudiants, on poden guardar el seu progrés acadèmic i estudiar amb un chatbot amb dos modes, examen o repàs."],
    ["RouteHunter", "Aplicación web para compartir, explorar y crear rutas para coches y motos, con diferentes temáticas (históricas, culturales, gastronómicas, etc.)", "Aplicació web per compartir, explorar i crear rutes per a cotxes i motos, amb diferents temàtiques (històriques, culturals, gastronòmiques, etc.)"]
  ];
  const projectTitlesEN = [
    "Formula 1 API",
    "EstudIA",
    "RouteHunter"
  ];
  const projectDescsEN = [
    "API based on formula 1 for manage the pilots and scuderias",
    "Web application for students, where they can save their academic progress and can study together with a chatbot with two modes, exam or review.",
    "Web application to share, explore and create routes for both cars and motorcycles, with different themes (historical, cultural, gastronomic routes, etc.)."
  ];
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card, idx) => {
    let title = projectTitlesEN[idx];
    let desc = projectDescsEN[idx];
    if (lang === 'es') {
      title = projectTitles[idx][0];
      desc = projectTitles[idx][1];
    } else if (lang === 'ca') {
      title = projectTitles[idx][0];
      desc = projectTitles[idx][2];
    }
    card.querySelector('h3').textContent = title;
    card.querySelector('p').textContent = desc;
  });

    // Project labels (Frontend, Backend, FullStack)
  const projectLabels = {
    en: ["Backend", "Frontend", "FullStack"],
    es: ["Backend", "Frontend", "FullStack"],
    ca: ["Backend", "Frontend", "FullStack"]
  };
  document.querySelectorAll('.project-label').forEach((el, idx) => {
    el.textContent = projectLabels[lang][idx] || el.textContent;
  });

  // Project detail section
  const detailTitles = {
    en: "Project Overview",
    es: "Resumen del Proyecto",
    ca: "Resum del Projecte"
  };
  const detailDescs = {
    en: `A comprehensive Formula 1 analytics platform that provides real-time race data, driver statistics, and team performance metrics.\nBuilt with modern web technologies to deliver an immersive racing experience.`,
    es: `Plataforma integral de analítica de Fórmula 1 que ofrece datos de carrera en tiempo real, estadísticas de pilotos y métricas de rendimiento de equipos.\nConstruida con tecnologías web modernas para una experiencia de usuario inmersiva.`,
    ca: `Plataforma integral d'analítica de Fórmula 1 que ofereix dades de cursa en temps real, estadístiques de pilots i mètriques de rendiment d'equips.\nConstruïda amb tecnologies web modernes per oferir una experiència immersiva.`
  };
  const detailBtns = {
    en: ["Live Demo", "View Code"],
    es: ["Demo en vivo", "Ver código"],
    ca: ["Demo en viu", "Veure codi"]
  };
  const detailMeta = {
    en: ["// Project Type", "// Duration", "// Team Size", "Web Application", "3 Months", "Solo Project"],
    es: ["// Tipo de Proyecto", "// Duración", "// Equipo", "Aplicación Web", "3 Meses", "Proyecto Individual"],
    ca: ["// Tipus de Projecte", "// Durada", "// Equip", "Aplicació Web", "3 Mesos", "Projecte Individual"]
  };
  // Título
  const detailTitleEl = document.querySelector('.project-detail-title');
  if (detailTitleEl) detailTitleEl.textContent = detailTitles[lang];
  // Descripción
  const detailDescEl = document.querySelector('.project-detail-desc');
  if (detailDescEl) detailDescEl.textContent = detailDescs[lang];
  // Botones
  const detailBtnsEls = document.querySelectorAll('.project-detail-btn');
  if (detailBtnsEls.length >= 2) {
    detailBtnsEls[0].textContent = detailBtns[lang][0];
    detailBtnsEls[1].textContent = detailBtns[lang][1];
  }
  // Meta
  const metaDivs = document.querySelectorAll('.project-detail-meta > div');
  if (metaDivs.length >= 3) {
    metaDivs[0].innerHTML = `${detailMeta[lang][0]} <span>${detailMeta[lang][3]}</span>`;
    metaDivs[1].innerHTML = `${detailMeta[lang][1]} <span>${detailMeta[lang][4]}</span>`;
    metaDivs[2].innerHTML = `${detailMeta[lang][2]} <span>${detailMeta[lang][5]}</span>`;
  }
}

// Inicializar idioma por defecto
document.addEventListener('DOMContentLoaded', () => setLanguage(currentLang));
