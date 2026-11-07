(function () {
  var root = document.documentElement;
  var toggles = Array.prototype.slice.call(document.querySelectorAll('[data-theme-toggle]'));

  function applyTheme(theme) {
    var light = theme === 'light';
    root.setAttribute('data-theme', light ? 'light' : 'dark');
    try { localStorage.setItem('wf-theme', light ? 'light' : 'dark'); } catch (error) {}
    toggles.forEach(function (button) {
      button.setAttribute('aria-pressed', light ? 'true' : 'false');
      button.setAttribute('aria-label', light ? 'Switch to dark mode' : 'Switch to light mode');
    });
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', light ? '#F3F1EA' : '#080A08');
  }

  toggles.forEach(function (button) {
    button.addEventListener('click', function () {
      applyTheme(root.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
    });
  });
  applyTheme(root.getAttribute('data-theme') === 'light' ? 'light' : 'dark');

  var body = document.body;
  var menu = document.getElementById('mobile-menu');
  var menuButton = document.querySelector('[data-menu-btn]');

  function setMenu(open) {
    if (!menu || !menuButton) return;
    menu.classList.toggle('is-open', open);
    menu.setAttribute('aria-hidden', open ? 'false' : 'true');
    menuButton.setAttribute('aria-expanded', open ? 'true' : 'false');
    menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    body.classList.toggle('menu-open', open);
  }

  if (menu && menuButton) {
    menuButton.addEventListener('click', function () {
      setMenu(!menu.classList.contains('is-open'));
    });
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { setMenu(false); });
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') setMenu(false);
    });
  }

  var revealItems = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' });
    revealItems.forEach(function (item) { observer.observe(item); });
  } else {
    revealItems.forEach(function (item) { item.classList.add('is-in'); });
  }
  setTimeout(function () {
    revealItems.forEach(function (item) { item.classList.add('is-in'); });
  }, 2500);
})();
