// Toggle menu mobile
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('open');
});

// Fechar menu ao clicar em link mobile
const menuLinks = document.querySelectorAll('#menu a');

menuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    // Scroll suave
    targetSection.scrollIntoView({ behavior: 'smooth' });

    // Animação da seção clicada
    document.querySelectorAll('main section').forEach(sec => sec.classList.remove('active'));
    targetSection.classList.add('active');

    menu.classList.remove('open');
  });
});

// Ativar animação ao rolar
const sections = document.querySelectorAll('main section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, {
  threshold: 0.5
});

sections.forEach(section => observer.observe(section));

// Ativa primeira seção ao carregar
window.addEventListener('load', () => {
  const firstSection = document.querySelector('main section');
  firstSection.classList.add('active');
});
