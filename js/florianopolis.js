/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu'),
        navToggle.classList.add('hidden'),
        navClose.classList.add('org')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu'),
        navToggle.classList.remove('hidden'),
        navClose.classList.remove('org')
    })
}

/*=============== ADD BLUR TO HEADER ===============*/

const blurHeader = () =>{
    const Header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? Header.classList.add('blur-header') 
                       : Header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 3000,
    delay: 400,
})

sr.reveal('.home')
sr.reveal('.about_data')
sr.reveal('.about_image', {distance: '300px', interval: 100})
sr.reveal('.paisagem')
sr.reveal('.popular')
sr.reveal('.box', {interval: 100})