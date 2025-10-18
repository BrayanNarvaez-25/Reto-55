cuentas = [
    { numeroCuenta: "02234567", cedula: "1714616123", nombre: "Juan", apellido: "Perez", saldo: 0.0 },
    { numeroCuenta: "02345211", cedula: "1281238233", nombre: "Felipe", apellido: "Caicedo", saldo: 0.0 }
]
let esNuevo = false;

cargar = function () {
    mostrarComponente("divCuentas");
    ocultarComponente("divMovimientos");
    ocultarComponente("divTransacciones");

}

mostrarCuentas = function () {
    let cmpTabla = document.getElementById("tablaEmpleados");
    let contenidoTabla = "<table><tr>" + "<th> NUM DE CUENTA </th>" +
        "<th> NOMBRE </th>" + "<th> SALDO </th>" + "</tr>";
    let elementoCuentas;
    for (let i = 0; i < cuentas.length; i++) {
        elementoCuentas = cuentas[i];
        contenidoTabla += "<tr> <td> " + elementoCuentas.numeroCuenta + " </td>" +
            "<td> " + elementoCuentas.nombre + " " + elementoCuentas.apellido + " </td>" +
            "<td> " + elementoCuentas.saldo + " </td>" + "</tr>";
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}

/*
    Busca la cuenta en el arreglo en función del número de cuenta,
    si existe retorna el objeto cuenta, caso contrario retorna null. 
*/
buscarCuenta = function (numeroCuenta) {
    let cmpCuenta;
    let cuentaEncontrada = null
    for (let i = 0; i < cuentas.length; i++) {
        cmpCuenta = cuentas[i];
        if (cmpCuenta.cedula == numeroCuenta) {
            cuentaEncontrada = cmpCuenta
            break;
        }
    }
    return cuentaEncontrada;
}

/*
    Agrega una cuenta al arreglo, solamente si no existe otra cuenta con el mismo numero.
    No retorna nada
*/
agregarCuenta = function (cuenta) {
    let cmpCuenta = buscarCuenta(cuenta.numeroCuenta);
    if (cmpCuenta == null) {
        cuentas.push(cuenta);
        alert("CUENTA AGREGADA");
        return true;
    } else {
        alert("CUENTA EXISTENTE");
        return false;
    }
    //Si ya existe mostrar un alert CUENTA EXISTENTE
    //Si se agrega, mostrar un alert CUENTA AGREGADA
}

agregar = function () {
    let cedula = recuperarTexto("txtCedula");
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido");
    let numCuenta = recuperarTexto("txtNumCuenta");
    esNuevo = true;
    if (esNuevo == true) {
        let cuenta = {};
        cuenta.cedula = cedula;
        cuenta.nombre = nombre;
        cuenta.apellido = apellido;
        cuenta.numeroCuenta = numCuenta;
        cuenta.saldo = 0;
        let cuentaNueva = agregarCuenta(cuenta);
        if (cuentaNueva == true) {
            mostrarCuentas();
            esNuevo = false;
        } else {
            alert("YA EXISTE UNA CUENTA CON NUMERO: " + numCuenta);
        }
    }
    //Toma los valores de las cajas de texto, sin validaciones
    //Crea un objeto cuenta y agrega los atributos con los valores de las cajas respectivas
    //Invoca a agregarCuenta
    //Invoca a mostrarCuentas
}
