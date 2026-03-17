/* nav.js — navegação partilhada Casa da Adelaide v3 */
(function(){
  var pag=window.location.pathname.split('/').pop()||'index.html';
  var links=[
    {href:'colorir.html',emoji:'🎨',label:'Colorir'},
    {href:'quiz.html',emoji:'🎵',label:'Quiz'},
    {href:'sopa.html',emoji:'🔍',label:'Sopa'},
    {href:'poema.html',emoji:'✍️',label:'Poema'},
    {href:'sala.html',emoji:'🎬',label:'Vídeos'},
    {href:'workshop.html',emoji:'📄',label:'Workshop'},
    {href:'escola.html',emoji:'🏫',label:'Escolas'},
  ];
  var html=[
    '<a href="#conteudo-principal" class="skip-link">Saltar para o conteúdo</a>',
    '<nav id="nav-global" role="navigation" aria-label="Navegação principal">',
    '<a href="index.html" class="nav-logo" aria-label="Casa da Adelaide — página inicial">',
    '<div class="nav-logo-icon" aria-hidden="true">A</div>',
    '<div class="nav-logo-text">',
    '<span class="nav-logo-main">Casa da Adelaide</span>',
    '<span class="nav-logo-sub">Onofriana</span>',
    '</div></a>',
    '<ul class="nav-links" role="list">',
  ];
  links.forEach(function(l){
    var a=pag===l.href?' class="nav-active" aria-current="page"':'';
    html.push('<li><a href="'+l.href+'"'+a+'><span class="nav-emoji" aria-hidden="true">'+l.emoji+'</span>'+l.label+'</a></li>');
  });
  html.push('</ul>');
  html.push('<a href="https://onofriana.pt" class="nav-ono" target="_blank" rel="noopener" aria-label="Visitar onofriana.pt (abre em nova janela)">onofriana.pt ↗</a>');
  html.push('<button class="nav-burger" id="nav-burger" aria-label="Abrir menu de navegação" aria-expanded="false" aria-controls="nav-drawer">');
  html.push('<span></span><span></span><span></span></button>');
  html.push('</nav>');
  html.push('<nav id="nav-drawer" aria-label="Menu móvel" aria-hidden="true">');
  links.forEach(function(l){
    var a=pag===l.href?' class="drawer-active" aria-current="page"':'';
    html.push('<a href="'+l.href+'"'+a+'>'+l.emoji+' '+l.label+'</a>');
  });
  html.push('<a href="https://onofriana.pt" target="_blank" rel="noopener" class="nav-drawer__ono">onofriana.pt ↗</a>');
  html.push('</nav>');
  document.body.insertAdjacentHTML('afterbegin',html.join(''));
  var burger=document.getElementById('nav-burger');
  var drawer=document.getElementById('nav-drawer');
  burger.addEventListener('click',function(){
    var open=drawer.classList.toggle('open');
    burger.setAttribute('aria-expanded',open);
    drawer.setAttribute('aria-hidden',!open);
  });
  document.addEventListener('click',function(e){
    if(!drawer.contains(e.target)&&!burger.contains(e.target)){
      drawer.classList.remove('open');
      burger.setAttribute('aria-expanded','false');
      drawer.setAttribute('aria-hidden','true');
    }
  });
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape'){
      drawer.classList.remove('open');
      burger.setAttribute('aria-expanded','false');
      drawer.setAttribute('aria-hidden','true');
    }
  });
})();
