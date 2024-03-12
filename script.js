let menuBtn = document.querySelector('.menu-icon');
let navItems = document.querySelector('.nav-items');
let a = document.querySelector('.active');


menuBtn.addEventListener('click', () => {
  navItems.classList.toggle('active');
  navItems.style.backgroundColor = "red";
})

