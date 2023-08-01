// JavaScript для переключення мобільної навігації
function toggleMenu() {
    let navbarMenu = document.querySelector('.navbar-menu');
    let navbarToggle = document.querySelector('.navbar-toggle');
    let activeLink = document.querySelector('.navbar-menu>li>a');
  
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
    activeLink.classList.toggle('active-link');
  }
  console.log("Hello!");