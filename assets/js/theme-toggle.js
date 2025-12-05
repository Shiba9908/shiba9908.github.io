(function(){
  const KEY = 'shiba_theme';
  const root = document.documentElement;
  
  function applyTheme(t){
    if(t === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }
  }
  
  function init(){
    const saved = localStorage.getItem(KEY);
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved || 'dark';
    applyTheme(theme);
    updateButtonText(theme);
  }
  
  function updateButtonText(theme){
    const btn = document.getElementById('theme-toggle-btn');
    if(btn) {
      btn.innerText = theme === 'dark' ? 'Light' : 'Dark';
    }
  }
  
  function toggle(){
    const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem(KEY, next);
    updateButtonText(next);
  }
  
  window.ShBaseTheme = { init, toggle, applyTheme };
  
  // Initialize as soon as script loads
  init();
  
  // Also reinit on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', init);
  
  // Handle button clicks
  document.addEventListener('click', function(e){
    if(e.target && e.target.id === 'theme-toggle-btn') {
      toggle();
    }
  });
})();
