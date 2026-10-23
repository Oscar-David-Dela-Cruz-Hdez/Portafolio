/* =========================================================
   Portafolio — Oscar David · main.js
   ========================================================= */

/* ---------- 1. Datos de proyectos ---------- */
const projects = [
  {
    name: 'BINA — Frontend',
    cat: 'web',
    icon: 'rocket',
    catLabel: 'Web',
    catColor: '#ffd93d',
    grad: 'linear-gradient(90deg, #ff6ec7, #c792ea)',
    desc: 'Aplicación web frontend construida con Angular y PWA: experiencia rápida, instalable y con animaciones modernas. Desplegada en Vercel.',
    tech: ['Angular', 'PWA', 'TypeScript', 'Vercel'],
    repo: 'https://github.com/Oscar-David-Dela-Cruz-Hdez/pryBinaFront',
    demo: 'https://pry-bina-front.vercel.app'
  },
  {
    name: 'BINA — Backend',
    cat: 'backend',
    icon: 'brain',
    catLabel: 'Backend / IA',
    catColor: '#7af0ff',
    grad: 'linear-gradient(90deg, #7af0ff, #c792ea)',
    desc: 'API backend en Node.js con machine learning: modelo Random Forest para predecir cancelaciones, generación de datasets y notebooks de análisis.',
    tech: ['Node.js', 'Express', 'Python', 'Scikit-learn'],
    repo: 'https://github.com/Oscar-David-Dela-Cruz-Hdez/pryBinaBack'
  },
  {
    name: 'Sistema Pastelería',
    cat: 'backend',
    icon: 'cake',
    catLabel: 'Web / Backend',
    catColor: '#ff9a56',
    grad: 'linear-gradient(90deg, #ff9a56, #ff6ec7)',
    desc: 'Sistema completo de gestión para pastelería con arquitectura MVC: catálogo, inventario, reportes en PDF con FPDF y base de datos MySQL.',
    tech: ['PHP', 'MySQL', 'MVC', 'FPDF'],
    repo: 'https://github.com/Oscar-David-Dela-Cruz-Hdez/sistema_pasteleria'
  },
  {
    name: 'TortuTerra',
    cat: 'web',
    icon: 'globe',
    catLabel: 'Web',
    catColor: '#a8ff78',
    grad: 'linear-gradient(90deg, #a8ff78, #7af0ff)',
    desc: 'Aplicación web interactiva de TortuTerra: interfaz moderna y dinámica con JavaScript moderno para ofrecer una experiencia ágil y atractiva.',
    tech: ['JavaScript', 'React', 'Vite'],
    repo: 'https://github.com/Oscar-David-Dela-Cruz-Hdez/pry-tortuTerra-definitivo2'
  },
  {
    name: 'Panamericana Flutter',
    cat: 'movil',
    icon: 'phone',
    catLabel: 'Móvil',
    catColor: '#c792ea',
    grad: 'linear-gradient(90deg, #c792ea, #ff6ec7)',
    desc: 'App multiplataforma desarrollada con Flutter para Android, iOS, web y escritorio: una sola base de código, diseño consistente en todas las plataformas.',
    tech: ['Flutter', 'Dart', 'Multiplataforma'],
    repo: 'https://github.com/lizolvera/panamericana_flutter'
  },
  {
    name: 'App Pings',
    cat: 'backend',
    icon: 'network',
    catLabel: 'Herramienta',
    catColor: '#ff6ec7',
    grad: 'linear-gradient(90deg, #ff6ec7, #ffd93d)',
    desc: 'Monitor de red en Python: detecta pings, registra eventos y aplicaciones abiertas, genera alertas detalladas en CSV y crea ejecutables para Windows.',
    tech: ['Python', 'Automatización', 'CSV'],
    repo: 'https://github.com/Oscar-David-Dela-Cruz-Hdez/app_pings'
  }
];

/* ---------- 2. Renderizar proyectos ---------- */
function renderIcon(name) {
  return `<svg class="icon" aria-hidden="true" focusable="false"><use href="assets/icons.svg#${name}"></use></svg>`;
}

const grid = document.getElementById('projectsGrid');

function renderProjects(list) {
  grid.innerHTML = '';
  list.forEach((p, i) => {
    const card = document.createElement('article');
    card.className = 'card project-card';
    card.style.setProperty('--grad', p.grad);
    card.style.setProperty('--cat', p.catColor);
    card.style.animationDelay = `${i * 0.08}s`;

    const links = `
      <a href="${p.repo}" target="_blank" rel="noopener" class="link-btn">${renderIcon('github')} GitHub</a>
      ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener" class="link-btn demo">${renderIcon('play')} Demo</a>` : ''}
    `;

    card.innerHTML = `
      <div class="project-top">
        <span class="project-icon">${renderIcon(p.icon)}</span>
        <span class="project-cat">${p.catLabel}</span>
      </div>
      <h3>${p.name}</h3>
      <p class="project-desc">${p.desc}</p>
      <div class="project-tech">${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}</div>
      <div class="project-links">${links}</div>
    `;
    grid.appendChild(card);
  });
}
renderProjects(projects);

/* ---------- 3. Filtros ---------- */
const chips = document.querySelectorAll('.chip');
chips.forEach(chip => {
  chip.addEventListener('click', () => {
    chips.forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    const filter = chip.dataset.filter;
    const visible = filter === 'todos' ? projects : projects.filter(p => p.cat === filter);
    renderProjects(visible);
  });
});

/* ---------- 4. Efecto máquina de escribir ---------- */
const words = ['experiencias web', 'apps móviles', 'sistemas inteligentes', 'ideas creativas'];
const typeEl = document.getElementById('typeText');
let wi = 0, ci = 0, deleting = false;

function type() {
  const word = words[wi];
  if (!deleting) {
    ci++;
    typeEl.textContent = word.slice(0, ci);
    if (ci === word.length) { deleting = true; setTimeout(type, 1800); return; }
    setTimeout(type, 90);
  } else {
    ci--;
    typeEl.textContent = word.slice(0, ci);
    if (ci === 0) { deleting = false; wi = (wi + 1) % words.length; setTimeout(type, 350); return; }
    setTimeout(type, 45);
  }
}
type();

/* ---------- 5. Navbar al hacer scroll ---------- */
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

/* ---------- 6. Menú móvil ---------- */
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  menuToggle.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.classList.remove('open');
  })
);

/* ---------- 7. Aparición al hacer scroll ---------- */
const observer = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      e.target.querySelectorAll('.bar-fill').forEach(bar => {
        bar.style.width = bar.dataset.width + '%';
      });
      observer.unobserve(e.target);
    }
  }),
  { threshold: 0.15 }
);

document.querySelectorAll('.section, .footer').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

/* ---------- 8. Año dinámico ---------- */
document.querySelector('.footer p').innerHTML =
  `Hecho con <span class="heart">${renderIcon('heart')}</span> y mucho café · © ${new Date().getFullYear()} Oscar David Dela Cruz Hernández`;
