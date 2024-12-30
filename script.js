let menu_button = document.querySelector('#menu_btn')
let close_button = document.querySelector('#close_btn')
let navbar = document.querySelector('.small__dis')
let body = document.querySelector('body')
body.addEventListener('click', (e) => {
    if(e.target.classList.contains('lock')){
        navbar.classList.remove('active')
        body.classList.remove('lock')
    }
})
menu_button.addEventListener('click', () => {
    
    navbar.classList.toggle('active')
    body.classList.toggle('lock')
})
close_button.addEventListener('click', () => {
    navbar.classList.remove('active')
    body.classList.remove('lock')
})