"use strict"
const panels = document.querySelectorAll('.panel'); //Selecciona a todos los elementos con la clase .panel


panels.forEach((panel)=>{
    panel.addEventListener("click", ()=>{
        removeActiveClass();
        panel.classList.add("active");
    })
});

function removeActiveClass(){
    panels.forEach((panel)=>{
        panel.classList.remove("active");
    });
}