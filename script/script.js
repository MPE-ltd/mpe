 // navbar scroll state
  const navbar = document.getElementById('navbar');
  const backToTop = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    navbar.classList.toggle('scrolled', y > 40);
    backToTop.classList.toggle('show', y > 500);
  });

  // mobile menu
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  function toggleMenu(){
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  }
  hamburger.addEventListener('click', toggleMenu);
  hamburger.addEventListener('keydown', e => { if(e.key === 'Enter' || e.key === ' ') toggleMenu(); });
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', toggleMenu));

  // back to top
  function scrollTop(){ window.scrollTo({top:0, behavior:'smooth'}); }
  backToTop.addEventListener('click', scrollTop);
  backToTop.addEventListener('keydown', e => { if(e.key === 'Enter' || e.key === ' ') scrollTop(); });

  // scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

