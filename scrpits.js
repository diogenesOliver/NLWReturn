let navigation = document.getElementById('navigation')
let openMenu = document.getElementById('openMenu')
let closeMenu = document.getElementById('closeMenu')
let backToTopButton = document.getElementById('backToTopButton')

function onScroll() {
    showNavOnScroll()
    showBackTOTopButtonOnScroll()

    activateMenuAtCurrentSection()
}

function activateMenuAtCurrentSection(){
    const targetLine = scrollY + innerHeight / 2
}

function showBackTOTopButtonOnScroll(){
    if (scrollY > 500) {
        backToTopButton.classList.add('show')
    } else{
        backToTopButton.classList.remove('show')
    }
}

function showNavOnScroll(){
    if (scrollY > 0) {
        navigation.classList.add('scroll')
    } else{
        navigation.classList.remove('scroll')
    }
}

openMenu.addEventListener('click', () => {
    document.body.classList.add('menu-expanded')
})

closeMenu.addEventListener('click', () => {
    document.body.classList.remove('menu-expanded')
})

function closeMenuFunction(){
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distance: '300px',
    duration: 700
}).reveal('#home, #home img, #home .stats, #services, #services header, #services .card, #about, #about header, #about .content');