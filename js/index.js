document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("buttonText");


boton.addEventListener("click", function() {
    const input = document.getElementById("inputText");
    const dato = input.value;


    localStorage.setItem("datoInput", dato);
    console.log(localStorage.getItem("datoInput"));
})
    
});