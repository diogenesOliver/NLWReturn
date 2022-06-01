let navigation = document.getElementById('navigation')
let openMenu = document.getElementById('openMenu')
let closeMenu = document.getElementById('closeMenu')

function onScroll() {

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
}).reveal('#home, #home img, #home .stats, #services, #services header, #services .card');