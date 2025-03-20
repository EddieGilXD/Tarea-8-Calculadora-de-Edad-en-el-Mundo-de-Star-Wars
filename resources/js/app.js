function convertirEdad() {
    let edadEspecie = parseInt(document.getElementById("especie").value);
    let edad = document.getElementById("edad").value;    
    console.log(edad);
    console.log(edadEspecie);

    respuesta.style.animation = "none"
    void respuesta.offsetWidth;
    respuesta.style.animation = "";

    if (edad > 0) {
        let edadEquivalente = (edad * edadEspecie) / 80;
        console.log(edadEquivalente);
        document.getElementById("respuesta").innerText = "La edad equivalente es de: " + edadEquivalente + " años";
        return;
    } else {
        console.log("Error al ingresar edad intente de nuevo");
        return;
    }
}