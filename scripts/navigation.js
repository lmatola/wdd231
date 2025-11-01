const navButton = document.querySelector('#ham-btn');
const navBar = document.querySelector('#nav-bar');

navButton.addEventListener('click', () => {
  navBar.classList.toggle('open');

  // Toggle icon: ☰ (hamburger) → ✕ 
  if (navBar.classList.contains('open')) {
    navButton.textContent = '✕';
  } else {
    navButton.textContent = '☰';
  }
});
