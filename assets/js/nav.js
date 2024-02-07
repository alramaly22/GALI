window.addEventListener('scroll', function() {
  var navbar = document.getElementById('header');

  // var tty = document.getElementsByClassName('.nav__link');


  var scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    navbar.style.backgroundColor = 'var(--body-color)'; 

  //   tty.style.color = 'var(--title-color)'; 


  } else {
    navbar.style.backgroundColor = 'transparent'; 

  //   tty.style.color = 'white';


  }
});