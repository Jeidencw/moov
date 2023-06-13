window.addEventListener('scroll', function() {
    const botao = document.getElementById('scrollup');
    let scrollY = window.scrollY || window.pageYOffset;
  
    if (scrollY >= 560) {
      botao.classList.add('show-scroll');
    } else {
      botao.classList.remove('show-scroll');
    }
});
  