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


/*=============== REMOVE MENU MOBILE ===============*/


/*=============== ADD BLUR TO HEADER ===============*/

const blurHeader = () =>{
    const Header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? Header.classList.add('blur-header') 
                       : Header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== SLIDER ===============*/ 

let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
	let items = document.querySelectorAll('.item')
	document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
	let items = document.querySelectorAll('.item')
	document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{ 
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 3000,
    delay: 400,
})

sr.reveal('.home_data')
sr.reveal('.home_card', {distance: '100px', interval: 100})
sr.reveal('.about_data', {origin: 'right'})
sr.reveal('about_image', {origin: 'left'})