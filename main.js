let navBtn = document.querySelector('.nav-toggle');
let navBar = document.querySelector('nav');


navBtn.addEventListener('click', function(){
  navBar.classList.toggle('show');
});

