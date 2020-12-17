//javaScript is very flexible
//flexible == dangerous
//바닐라 자바 스크립트 사용시 use strict; 를 선언해줌으로써 좀더 상식적인 코딩이 가능해진다.
'use strict';

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height
document.addEventListener('scroll', () => {
    if( window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    }else {
        navbar.classList.remove('navbar--dark');
    }
})