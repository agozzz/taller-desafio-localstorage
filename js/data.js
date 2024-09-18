document.addEventListener("DOMContentLoaded", function() {
    let data = document.getElementById("data");
    let dato = localStorage.getItem("datoInput");
    

    data.innerHTML += dato;

    /*document.getElementById("volverAIndex").addEventListener("click", function() {
        localStorage.removeItem("datoInput");
    })*/ //Esto lo había hecho simplemente para "jugar" y probar removeItem asociándolo al hacer click para volver al index.html.
})