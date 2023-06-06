
//mostra menu
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const menu = document.getElementById("menu")

openMenu.addEventListener("click", () => {
    menu.classList.add("show-menu")
})

closeMenu.addEventListener("click", () => {
    menu.classList.remove("show-menu")
})


//mostra modal
const modal = document.getElementsByClassName("modal")
const saibaMais = document.getElementsByClassName("saibaMais")
const fechaModal = document.getElementsByClassName("fechaModal")
const card = document.getElementsByClassName("card")

for(let i = 0; i < saibaMais.length; i++){
    saibaMais[i].addEventListener("click", () => {
        modal[i].classList.add("active-modal")
    })

    fechaModal[i].addEventListener("click", () => {
        modal[i].classList.remove("active-modal")
    })

    card[i].addEventListener("click", () => {
        modal[i].classList.add("active-modal")
    })
}