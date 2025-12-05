(function(){
  const KEY = 'shiba_theme';
  const root = document.documentElement;
  function applyTheme(t){
    if(t === 'dark') root.setAttribute('data-theme','dark');
    else root.removeAttribute('data-theme');
  }
  function init(){
    const saved = localStorage.getItem(KEY);
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved || (prefersDark ? 'dark' : 'light');
    applyTheme(theme);
    // Sync toggle button state
    const btn = document.getElementById('theme-toggle-btn');
    if(btn) btn.innerText = theme === 'dark' ? 'Light' : 'Dark';
  }
  function toggle(){
    const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem(KEY, next);
    const btn = document.getElementById('theme-toggle-btn');
    if(btn) btn.innerText = next === 'dark' ? 'Light' : 'Dark';
  }
  window.ShBaseTheme = { init, toggle };
  document.addEventListener('DOMContentLoaded', init);
  document.addEventListener('click', function(e){
    if(e.target && e.target.id === 'theme-toggle-btn') toggle();
  });
})();
