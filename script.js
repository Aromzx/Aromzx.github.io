  // ── NAV active link on scroll ────────────────────────
  const sections = document.querySelectorAll('section');
  const navLinks  = document.querySelectorAll('.nav-inner a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  });

  // ── Reveal on scroll ─────────────────────────────────
  const revealEls = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  revealEls.forEach(el => obs.observe(el));

  // ── Hamburger ─────────────────────────────────────────
  const ham = document.getElementById('ham');
  const menu = document.getElementById('mobileMenu');
  ham.addEventListener('click', () => {
    ham.classList.toggle('open');
    menu.classList.toggle('open');
  });
  function closeMobile() {
    ham.classList.remove('open');
    menu.classList.remove('open');
  }

  // ── Form feedback ─────────────────────────────────────
  function sendForm(e) {
    e.preventDefault();
    const btn = e.target.querySelector('.form-submit');
    btn.textContent = '¡Enviado! ✅';
    btn.style.background = '#22c55e';
    setTimeout(() => {
      btn.textContent = 'Enviar mensaje ✉️';
      btn.style.background = '';
      e.target.reset();
    }, 2500);
  }

  // ── Stat counter animation ────────────────────────────
  function animateCounters() {
    document.querySelectorAll('.stat-n').forEach(el => {
      const match = el.textContent.match(/(\d+)/);
      if (!match) return;
      const target = parseInt(match[1]);
      const prefix = el.textContent.replace(match[1], '').replace(/\d/g,'').split(match[1])[0];
      const suffix = el.textContent.slice(el.textContent.indexOf(match[1]) + match[1].length);
      let cur = 0;
      const step = Math.ceil(target / 30);
      const t = setInterval(() => {
        cur = Math.min(cur + step, target);
        el.textContent = prefix + cur + suffix;
        if (cur >= target) clearInterval(t);
      }, 40);
    });
  }
  setTimeout(animateCounters, 1000);