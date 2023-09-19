
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

//mostra modal
const modal = document.getElementsByClassName("modal")
const saibaMais = document.getElementsByClassName("saibaMais")
const fechaModal = document.getElementsByClassName("fechaModal")
const card = document.getElementsByClassName("card")
const servicesContent = document.getElementsByClassName("services__content")


for(let i = 0; i < saibaMais.length; i++){
    saibaMais[i].addEventListener("click", () => {
        modal[i].classList.add("active-modal")
    })

    modal[i].addEventListener('click', event => {
        if(event.target === modal[i]){
            modal[i].classList.remove('active-modal')
        }
    })

    fechaModal[i].addEventListener("click", () => {
        modal[i].classList.remove("active-modal")
    })
    
    card[i].addEventListener("click", () => {
        modal[i].classList.add("active-modal")
    })
}