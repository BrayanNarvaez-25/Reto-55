
mostrarImagen = function (idComponente, rutaImagen) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.src = rutaImagen;
}
mostrarTexto = function (idComponente, mensaje) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.innerText = mensaje;
}
mostrarTextoEnCaja = function (idComponente, mensaje) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.value = mensaje;
}

recuperarTexto = function (idComponente) {
    let componente;
    let valorIngresado;
    componente = document.getElementById(idComponente);
    valorIngresado = componente.value;
    return valorIngresado;
}

recuperarTextoDiv = function (idComponente) {
    let componente;
    let valorIngresado;
    componente = document.getElementById(idComponente);
    valorIngresado = componente.textContent;
    return valorIngresado;
}

recuperarInt = function (idComponente) {
    let valorCaja = recuperarTexto(idComponente);
    let valorEntero = parseInt(valorCaja);
    return valorEntero;
}

recuperarIntDiv = function (idComponente) {
    let valorCaja = recuperarTextoDiv(idComponente);
    let valorEntero = parseInt(valorCaja);
    return valorEntero;
}

recuperarFloat = function (idComponente) {
    let valorCaja = recuperarTexto(idComponente);
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante;
}

recuperarFloatDiv = function (idComponente) {
    let valorCaja = recuperarTextoDiv(idComponente);
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante;
}

mostrarComponente = function (idComponente) {
    document.getElementById(idComponente).style.display = "block";
}

ocultarComponente = function (idComponente) {
    document.getElementById(idComponente).style.display = "none";
}

deshabilitarComponente = function (idComponente) {
    document.getElementById(idComponente).disabled = true;
}

habilitarComponente = function (idComponente) {
    document.getElementById(idComponente).disabled = false;
}

esMayuscula = function (caracter) {
    let esMayuscula;
    for (let i = 0; i < caracter.length; i++) {
        esMayuscula = caracter.charCodeAt(i);
    }
    if (esMayuscula >= 65 && esMayuscula <= 90) {
        return true;
    } if (esMayuscula >= 97 && esMayuscula <= 122) {
        return false;
    }
}

esDigito = function (caracter) {
    let esDigito = caracter.charCodeAt(0);
    if (esDigito >= 48 && esDigito <= 57) {
        return true;
    } else {
        return false;
    }
}

contarDigitos = function (cadena) {
    let digitos;
    let contarDigitos = 0;
    for (let i = 0; i < cadena.length; i++) {
        digitos = cadena.charAt(1);
        if (esDigito(digitos)) {
            contarDigitos++;
        }
    }
}
