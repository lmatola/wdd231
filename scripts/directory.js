const toogleButton = document.getElementById('toogle-button');
const navList = document.getElementById('navi-list');

toogleButton.addEventListener('click', () => {
  navList.classList.toggle('active');

});
