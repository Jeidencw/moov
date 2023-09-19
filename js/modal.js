const modal = document.querySelectorAll(".modal")
const saibaMais = document.querySelectorAll(".saibaMais")
const fechaModal = document.querySelectorAll(".fechaModal")
const card = document.querySelectorAll(".card")
const imgModal = document.querySelectorAll('.imgModal')



for(let i = 0; i < saibaMais.length; i++){

    const addModal = () => modal[i].classList.add("active-modal")
    const removeModal = () => modal[i].classList.remove("active-modal")
    
    imgModal[i].addEventListener('click', addModal)
    saibaMais[i].addEventListener('click', addModal)
    card[i].addEventListener("click", addModal)

    fechaModal[i].addEventListener("click", removeModal)

    modal[i].addEventListener('click', event => {
        if(event.target === modal[i]){
            removeModal()
        }
    })
}