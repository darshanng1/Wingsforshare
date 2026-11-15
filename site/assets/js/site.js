/* WingsForShare — progressive enhancement. No dependencies, no network calls. */
(function () {
  'use strict';
  var root = document.documentElement;
  var doc = document;

  /* ---------- Theme ---------- */
  var STORE = 'wfs-theme';
  function setTheme(mode, persist) {
    root.setAttribute('data-theme', mode);
    var meta = doc.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', mode === 'light' ? '#F7F5EF' : '#050F0A');
    doc.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
      var next = mode === 'light' ? 'dark' : 'light';
      btn.setAttribute('aria-label', 'Switch to ' + next + ' mode');
      btn.setAttribute('aria-pressed', mode === 'light' ? 'true' : 'false');
    });
    if (persist) {
      try { localStorage.setItem(STORE, mode); } catch (e) {}
    }
  }
  doc.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      setTheme(next, true);
    });
  });
  // Follow system changes only if the visitor has not chosen explicitly.
  try {
    if (!localStorage.getItem(STORE) && window.matchMedia) {
      var mq = window.matchMedia('(prefers-color-scheme: light)');
      var follow = function (e) { setTheme(e.matches ? 'light' : 'dark', false); };
      if (mq.addEventListener) mq.addEventListener('change', follow);
    }
  } catch (e) {}

  /* ---------- Mobile drawer ---------- */
  var menuBtn = doc.querySelector('[data-menu-btn]');
  var drawer = doc.querySelector('[data-drawer]');
  if (menuBtn && drawer) {
    var closeDrawer = function () {
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.setAttribute('aria-label', 'Open menu');
      drawer.setAttribute('data-open', 'false');
      drawer.setAttribute('aria-hidden', 'true');
      doc.body.removeAttribute('data-drawer');
    };
    menuBtn.addEventListener('click', function () {
      var open = menuBtn.getAttribute('aria-expanded') === 'true';
      if (open) return closeDrawer();
      menuBtn.setAttribute('aria-expanded', 'true');
      menuBtn.setAttribute('aria-label', 'Close menu');
      drawer.setAttribute('data-open', 'true');
      drawer.setAttribute('aria-hidden', 'false');
      doc.body.setAttribute('data-drawer', 'open');
    });
    doc.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeDrawer(); });
    drawer.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeDrawer); });
    window.addEventListener('resize', function () { if (window.innerWidth > 900) closeDrawer(); });
  }

  /* ---------- Services dropdown ---------- */
  doc.querySelectorAll('.nav-drop').forEach(function (drop) {
    var btn = drop.querySelector('button');
    var panel = drop.querySelector('.drop-panel');
    if (!btn || !panel) return;
    var close = function () {
      drop.setAttribute('data-open', 'false');
      btn.setAttribute('aria-expanded', 'false');
    };
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var open = drop.getAttribute('data-open') === 'true';
      if (open) return close();
      drop.setAttribute('data-open', 'true');
      btn.setAttribute('aria-expanded', 'true');
    });
    drop.addEventListener('mouseenter', function () {
      if (window.innerWidth > 900) { drop.setAttribute('data-open', 'true'); btn.setAttribute('aria-expanded', 'true'); }
    });
    drop.addEventListener('mouseleave', function () { if (window.innerWidth > 900) close(); });
    doc.addEventListener('click', function (e) { if (!drop.contains(e.target)) close(); });
    doc.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  });

  /* ---------- Scroll reveal ---------- */
  var reveals = doc.querySelectorAll('[data-reveal]');
  if (reveals.length) {
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
      reveals.forEach(function (el) { io.observe(el); });
    } else {
      reveals.forEach(function (el) { el.classList.add('in'); });
    }
  }

  /* ---------- Reading progress ---------- */
  var bar = doc.querySelector('[data-progress]');
  if (bar) {
    var update = function () {
      var h = doc.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';
    };
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
  }

  /* ---------- Table of contents ---------- */
  var toc = doc.querySelector('[data-toc]');
  if (toc) {
    var links = Array.prototype.slice.call(toc.querySelectorAll('a[href^="#"]'));
    var targets = links.map(function (a) { return doc.getElementById(a.getAttribute('href').slice(1)); }).filter(Boolean);
    if ('IntersectionObserver' in window && targets.length) {
      var spy = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          links.forEach(function (a) {
            a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id);
          });
        });
      }, { rootMargin: '-15% 0px -70% 0px' });
      targets.forEach(function (t) { spy.observe(t); });
    }
  }

  /* ---------- Filters ---------- */
  doc.querySelectorAll('[data-filter-group]').forEach(function (group) {
    var buttons = group.querySelectorAll('[data-filter]');
    var items = doc.querySelectorAll('[data-filter-item]');
    var counter = doc.querySelector('[data-filter-count]');
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var key = btn.getAttribute('data-filter');
        buttons.forEach(function (b) { b.setAttribute('aria-pressed', b === btn ? 'true' : 'false'); });
        var shown = 0;
        items.forEach(function (item) {
          var match = key === 'all' || (item.getAttribute('data-tags') || '').indexOf(key) !== -1;
          item.classList.toggle('is-hidden', !match);
          if (match) shown++;
        });
        if (counter) counter.textContent = shown + (shown === 1 ? ' project' : ' projects');
      });
    });
  });

  /* ---------- Copy link ---------- */
  doc.querySelectorAll('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var text = window.location.href;
      var done = function () {
        var old = btn.getAttribute('data-label') || btn.textContent;
        btn.setAttribute('data-label', old);
        btn.textContent = 'Link copied';
        setTimeout(function () { btn.textContent = old; }, 1800);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done).catch(function () {});
      }
    });
  });

  /* ---------- Accordion: allow one open at a time per group ---------- */
  doc.querySelectorAll('[data-accordion]').forEach(function (group) {
    var all = group.querySelectorAll('details');
    all.forEach(function (d) {
      d.addEventListener('toggle', function () {
        if (!d.open) return;
        all.forEach(function (other) { if (other !== d) other.open = false; });
      });
    });
  });

  /* ---------- Contact form -> prefilled email (no server needed) ---------- */
  var form = doc.querySelector('[data-inquiry-form]');
  if (form) {
    var status = form.querySelector('[data-form-status]');
    var showError = function (field, message) {
      var wrap = field.closest('.field');
      var err = wrap ? wrap.querySelector('.field-error') : null;
      field.setAttribute('aria-invalid', message ? 'true' : 'false');
      if (err) {
        err.textContent = message || '';
        err.classList.toggle('show', !!message);
      }
    };
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var required = ['name', 'email', 'goal'];
      var invalid = null;
      required.forEach(function (name) {
        var el = form.elements[name];
        if (!el) return;
        var value = (el.value || '').trim();
        if (!value) { showError(el, 'This field is required.'); invalid = invalid || el; }
        else if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
          showError(el, 'Enter a valid email address.'); invalid = invalid || el;
        } else { showError(el, ''); }
      });
      if (invalid) { invalid.focus(); return; }

      var get = function (n) { var el = form.elements[n]; return el ? (el.value || '').trim() : ''; };
      var body = [
        'Name: ' + get('name'),
        'Email: ' + get('email'),
        'Company: ' + get('company'),
        'Website: ' + get('website'),
        'Budget: ' + get('budget'),
        'Service: ' + get('service'),
        '',
        'Goal:',
        get('goal')
      ].join('\n');
      var href = 'mailto:info@wingsforshare.com?subject=' +
        encodeURIComponent('Project inquiry — ' + (get('company') || get('name'))) +
        '&body=' + encodeURIComponent(body);
      window.location.href = href;
      if (status) {
        status.textContent = 'Your email app is opening with the brief filled in. If nothing happens, write to info@wingsforshare.com or use WhatsApp.';
        status.classList.add('show', 'ok');
      }
    });
  }

  /* ---------- Current year ---------- */
  doc.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  /* ---------- Animate hero bars once visible ---------- */
  doc.querySelectorAll('[data-bar]').forEach(function (barEl) {
    var pct = barEl.getAttribute('data-bar') || '0';
    requestAnimationFrame(function () { barEl.style.width = pct + '%'; });
  });
})();
