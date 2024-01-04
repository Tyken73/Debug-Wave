document.addEventListener("DOMContentLoaded", () => {

  // Carousel

  let x = 1;

  setInterval(Carousel, 3500);

  function Carousel() {
    if(x <= 3){
      document.querySelector('header').style.backgroundImage = 'url(img/interclasse'+x+'.png)'
      x++;
    }

    else{
      x = 0;
      document.querySelector('header').style.backgroundImage = 'url(img/interclasse'+x+'.png)'
      x++;
    }
  }

  // Responsividade para os ícones e o texto do nav bar

  const mobile = window.matchMedia('(max-width: 300px)');

  function Mobile(value) {
    if (value.matches) {
      document.getElementById('events').innerHTML = '<img src="img/events.png">';
      document.getElementById('esportes').innerHTML = '<img src="img/modalidades.png">';
      document.getElementById('equipe').innerHTML = '<img src="img/equipe.png">';
      document.getElementById('ranking').innerHTML = '<img src="img/ranking.png">';
    }
  }

  mobile.addEventListener('change', Mobile);

  Mobile(mobile);

  //

  const tablet = window.matchMedia('(min-width: 300px)', '(max-width: 600px)');

  function Tablet(value) {
    if (value.matches) {
      document.getElementById('events').innerHTML = '<img src="img/events.png">Eventos';
      document.getElementById('esportes').innerHTML = '<img src="img/modalidades.png">Esportes';
      document.getElementById('equipe').innerHTML = '<img src="img/equipe.png">Equipes';
      document.getElementById('ranking').innerHTML = '<img src="img/ranking.png">Ranking';
    }
  }

  tablet.addEventListener('change', Tablet);

  Tablet(tablet);

  //

  const desktop = window.matchMedia('(min-width: 600px)');

  function Desktop(value) {
    if (value.matches) {
      document.getElementById('events').innerHTML = 'Eventos';
      document.getElementById('esportes').innerHTML = 'Modalidades';
      document.getElementById('equipe').innerHTML = 'Equipes';
      document.getElementById('ranking').innerHTML = 'Ranking';
    }
  }

  desktop.addEventListener('change', Desktop);

  Desktop(desktop);
});

document.addEventListener('scroll', function(){
    const scrollPos = window.pageYOffset;

    const retornar = document.getElementById('retornar').style;

    if(scrollPos > 200){
        retornar.display = 'flex';
    }

    if(scrollPos < 200){
        retornar.display = '';
    }
})

// window.scroll({
//     top: 0,
//     left: 0,
//     behavior: 'smooth'
// });

function Retornar(){
    window.scrollTo(0,0);
}