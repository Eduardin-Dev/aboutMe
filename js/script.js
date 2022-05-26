

const mains = document.querySelectorAll('main');
const icons = document.querySelectorAll('.sidenav li');
const aIcons = document.querySelectorAll('.sidenav a');

function initSideNav() {

  mains[0].classList.add('ativo');

  aIcons[0].classList.add('ativoA');

  function hideShow(index) {
    mains.forEach((main) => {
      main.classList.remove('ativo');
    });
    mains[index].classList.add('ativo');
  };

  function colorIcon(index) {
    aIcons.forEach((link) => {
      link.classList.remove('ativoA');
    });
    aIcons[index].classList.add('ativoA');
  };

  aIcons.forEach((link, index) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      hideShow(index);
      colorIcon(index);
    });
  });
};

initSideNav();