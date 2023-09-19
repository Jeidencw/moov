
//mostra menu
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const menu = document.getElementById("menu");
const menuItems = document.querySelectorAll('.nav__link');

openMenu.addEventListener("click", () => {
    menu.style.display = 'block'
    menu.classList.add('menuOpen')
})

closeMenu.addEventListener("click", () => {
    menu.style.display = 'none'
    menu.classList.remove('menuOpen')
})

menuItems.forEach((menuItem => {
    menuItem.addEventListener('click', () => {
        if(menu.classList.contains('menuOpen')){
            menu.style.display = 'none'
        }
    })
}))