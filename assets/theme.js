(function(){
  // Inject the toggle button into the nav (after the CTA), on every page.
  function build(){
    var nav = document.getElementById('navLinks');
    if(!nav || document.getElementById('themeToggle')) return;
    var bar = nav.closest('.nav-inner') || nav.parentNode;
    var burger = document.getElementById('burger');
    var btn = document.createElement('button');
    btn.id = 'themeToggle';
    btn.className = 'theme-toggle';
    btn.type = 'button';
    btn.setAttribute('aria-label','Przełącz motyw jasny / ciemny');
    btn.setAttribute('title','Motyw jasny / ciemny');
    btn.innerHTML =
      '<span class="ic i-moon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.5 6.5 0 0 0 9.8 9.8z"/></svg></span>' +
      '<span class="ic i-sun" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8"/></svg></span>';
    if(burger && burger.parentNode === bar){ bar.insertBefore(btn, burger); }
    else { bar.appendChild(btn); }
    btn.addEventListener('click', function(){
      var cur = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      var next = cur === 'dark' ? 'light' : 'dark';
      apply(next);
      try{ localStorage.setItem('tyrbud-theme', next); }catch(e){}
    });
  }
  function apply(theme){
    if(theme === 'dark'){ document.documentElement.setAttribute('data-theme','dark'); }
    else { document.documentElement.removeAttribute('data-theme'); }
    var meta = document.querySelector('meta[name="theme-color"]');
    if(meta){ meta.setAttribute('content', theme === 'dark' ? '#0F1216' : '#0A0A0A'); }
  }
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', build);
  } else { build(); }
})();
