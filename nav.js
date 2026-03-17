/* nav.js — Casa da Adelaide · navegação partilhada */
(function(){
  var pag = window.location.pathname.split('/').pop() || 'index.html';
  var links = [
    { href:'colorir.html',  label:'🎨 Colorir' },
    { href:'quiz.html',     label:'🎵 Quiz' },
    { href:'sopa.html',     label:'🔍 Sopa' },
    { href:'poema.html',    label:'✍️ Poema' },
    { href:'sala.html',     label:'🎬 Vídeos' },
    { href:'workshop.html', label:'📄 Workshop' },
    { href:'escola.html',   label:'🏫 Escolas' },
  ];
  var html = [
    '<nav id="nav-global" aria-label="Navegação principal">',
    '<a href="index.html" class="nav-logo" aria-label="Casa da Adelaide — início">',
    '<span class="nav-logo-main">Casa da Adelaide</span>',
    '<span class="nav-logo-sub">Onofriana</span>',
    '</a>',
    '<ul class="nav-links" role="list">'
  ];
  links.forEach(function(l){
    var active = pag === l.href ? ' class="nav-active"' : '';
    html.push('<li><a href="' + l.href + '"' + active + '>' + l.label + '</a></li>');
  });
  html.push('</ul>');
  html.push('<a href="https://onofriana.pt" class="nav-ono" target="_blank" rel="noopener">onofriana.pt ↗</a>');
  html.push('<button class="nav-burger" id="nav-burger" aria-label="Menu" aria-expanded="false">');
  html.push('<span></span><span></span><span></span>');
  html.push('</button>');
  html.push('</nav>');
  html.push('<div class="nav-drawer" id="nav-drawer" aria-hidden="true">');
  links.forEach(function(l){
    var active = pag === l.href ? ' class="drawer-active"' : '';
    html.push('<a href="' + l.href + '"' + active + '>' + l.label + '</a>');
  });
  html.push('<a href="https://onofriana.pt" target="_blank" rel="noopener" class="drawer-ono">onofriana.pt ↗</a>');
  html.push('</div>');

  document.body.insertAdjacentHTML('afterbegin', html.join(''));

  var burger = document.getElementById('nav-burger');
  var drawer = document.getElementById('nav-drawer');
  burger.addEventListener('click', function(){
    var open = drawer.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
    drawer.setAttribute('aria-hidden', !open);
  });
  document.addEventListener('click', function(e){
    if(!drawer.contains(e.target) && !burger.contains(e.target)) {
      drawer.classList.remove('open');
      burger.setAttribute('aria-expanded','false');
      drawer.setAttribute('aria-hidden','true');
    }
  });
})();
