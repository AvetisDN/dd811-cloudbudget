const burger = document.getElementById('btn-burger')
const menu = document.querySelector('.header-navbar_menu')
burger.addEventListener('click', (e) => {
    e.preventDefault()
    burger.classList.toggle('open')
    menu.classList.toggle('open')
})