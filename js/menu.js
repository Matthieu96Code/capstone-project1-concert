const hamburgerBtn = document.querySelector('.hamburger-class a');

function callMenu() {
  const headerSection = document.querySelector('header');

  const mainMenu = document.createElement('div');
  mainMenu.className = 'main-menu';

  mainMenu.innerHTML = '<a class="menu-toggle" id="close-btn" href="#" ><img src="./img/png-transparent-x-cross-wrong-sign.png" alt="close button"></a><ul><li><a href="./index.html">Home Page</a></li><li><a href="./aboutme.html">about</a></li><li><a href="./index.html#program">Program</a></li><li><a href="#">Join</a></li><li><a href="#sponsor">Sponsor</a></li><li><a href="#">News</a></li><li><a href="lp-compaign">LP Compaign</a></li></ul>';

  headerSection.appendChild(mainMenu);
}

hamburgerBtn.addEventListener('click', () => {
  callMenu();
  const mainMenuList = document.querySelector('.main-menu');

  const menuList = document.querySelectorAll('.main-menu');
  console.log(menuList);
  for (let list = 0; list < menuList.length; list += 1) {
    menuList[list].addEventListener('click', () => {
      mainMenuList.remove();
    });
  }
});
