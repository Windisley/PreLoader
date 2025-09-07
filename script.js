const containerLoad = document.querySelector(".cont-load")
const container = document.querySelector(".container")

window.addEventListener("load", ()=>{
    containerLoad.remove()
    container.style.display = "flex" 
})