(function () {
  document.documentElement.classList.add('js');
  try {
    var saved = localStorage.getItem('wf-theme');
    document.documentElement.setAttribute('data-theme', saved === 'light' ? 'light' : 'dark');
  } catch (error) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
