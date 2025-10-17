let esNuevo = true;
cuentas = [
    { numeroCuenta: "02234567", cedula: "1714616123", nombre: "Juan", apellido: "Perez", saldo: 0.0 },
    { numeroCuenta: "02345211", cedula: "1281238233", nombre: "Felipe", apellido: "Caicedo", saldo: 0.0 },
    { numeroCuenta: "0015453333", cedula: "1001501277", nombre: "Moises", apellido: "Baez", saldo: 0.0 },
    { numeroCuenta: "02143005967", cedula: "1003669551", nombre: "James", apellido: "Baez", saldo: 0.0 },
    { numeroCuenta: "02324251", cedula: "1001552783", nombre: "Fernando", apellido: "Kastillo", saldo: 0.0 }
]

movimientos = [
    { numeroCuenta: "02234567", monto: 10.24, tipo: "D" },
    { numeroCuenta: "02345211", monto: 45.90, tipo: "D" },
    { numeroCuenta: "02143005967", monto: 45.90, tipo: "D" },
    { numeroCuenta: "0015453333", monto: 45.90, tipo: "D" },
    { numeroCuenta: "02234567", monto: 65.23, tipo: "C" },
    { numeroCuenta: "02345211", monto: 65.23, tipo: "C" },
    { numeroCuenta: "02345211", monto: 12.0, tipo: "D" },
]

/*
    En este archivo se deben colocar todas las funciones de cuentas, movimientos y transacciones
    IMPORTANTE: NO DUPLICAR FUNCIONES, si existe una misma función en varios archivos,
    dejar solo una de ellas, ejemplo la función buscarCuenta
*/
mostrarCuentas = function () {
    let cmpTabla = document.getElementById("tablaCuentas");
    let contenidoTabla = "<table><tr>" +
        "<th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>APELLIDO</th>" +
        "<th>NUM_CUENTA</th>" +
        "<th>SALDO</th>" +
        "</tr>";
    let elementoCuenta;
    for (let i = 0; i < cuentas.length; i++) {
        elementoCuenta = cuentas[i];
        contenidoTabla += "<tr><td>" + elementoCuenta.cedula + "</td>"
            + "<td>" + elementoCuenta.nombre.toUpperCase() + "</td >"
            + "<td>" + elementoCuenta.apellido.toUpperCase() + "</td >"
            + "<td>" + elementoCuenta.numeroCuenta.toUpperCase() + "</td >"
            + "<td>" + elementoCuenta.saldo + "</td >"
            + "</tr>";
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}

agregarCuentas = function (cedula) {
    let resultado;
    resultado = buscarCliente(cuentas.cedula);
    if (resultado == null) {
        cuentas.push(cedula);
        mostrarCuentas();
        alert("Empleado agregado Correctamente");
    } else {
        alert("Ya existe mi amigo " + cliente.nombre);
    }
}
crearCuentas = function () {
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorApellido = recuperarTexto("txtApellido");
    let valorNumeroCuenta = recuperarTexto("txtNumeroCuenta");
    let valorSaldo = recuperarInt("txtSaldo");
    let nuevoCliente = {};
    nuevoCliente.cedula = valorCedula;
    nuevoCliente.nombre = valorNombre;
    nuevoCliente.apellido = valorApellido;
    nuevoCliente.numeroCuenta = valorNumeroCuenta;
    nuevoCliente.saldo = valorSaldo;
    mostrarCuentas();

}
guardaCambios = function () {
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorApellido = recuperarTexto("txtApellido");
    let valorNumeroCuenta = recuperarTexto("txtNumeroCuenta");
    let valorSaldo = recuperarInt("txtSaldo");
    if (valorNombre.length < 4) {
        esNuevo = false;
        mostrarTexto("lblErrorCedula", "Nombre NO VALIDO");
    }
    valorNombre = valorNombre.toUpperCase();
    mostrarTextoEnCaja("txtNombre", valorNombre);
    valorApellido = valorApellido.toUpperCase();
    mostrarTextoEnCaja("txtApellido", valorApellido);
    if (valorNombre.length < 4) {
        esNuevo = false;
        mostrarTexto("lblErrorNombre", "Longitud del nombre NO VALIDA");
        alert(esNuevo + "nombre");
    }
    if (esNuevo == true) {
        crearCuentas();
        let nuevoCliente = {};
        nuevoCliente.cedula = valorCedula;
        nuevoCliente.nombre = valorNombre;
        nuevoCliente.apellido = valorApellido;
        nuevoCliente.numeroCuenta = valorNumeroCuenta;
        nuevoCliente.saldo = valorSaldo;
        agregarCuentas(nuevoCliente);
        mostrarCuentas();
        limpiar();
     //   empleado();
    } else {
        nuevoCliente.cedula = valorCedula;
        nuevoCliente.nombre = valorNombre;
        nuevoCliente.apellido = valorApellido;
        nuevoCliente.numeroCuenta = valorNumeroCuenta;
        nuevoCliente.saldo = valorSaldo;
        modificaCliente();
        mostrarClientes();
        alert("EMPLEADO MODIFICADO EXITOSAMENTE");
        habilitarComponente("btnNuevo");
    }
}
buscarCliente = function (cedula) {
    let elementoCuenta;
    let clienteEncontrado = null;
    for (i = 0; i < cuentas.length; i++) {
        elementoCuenta = cuentas[i];
        if (elementoCuenta.nombre == cedula) {
            clienteEncontrado = elementoCuenta;
            alert(clienteEncontrado);
            return clienteEncontrado;
            break;
        }
    }
}
limpiar = function () {
    mostrarTextoEnCaja("txtCedula", "");
    mostrarTextoEnCaja("txtNombre", "");
     mostrarTextoEnCaja("txtApellido", "");
      mostrarTextoEnCaja("txtNumeroCuenta", "");
    mostrarTextoEnCaja("txtSaldo", "0.00");
    
}

//OCULTAR Y MOSTRAR LOS DIVS, para que cada opción muestre solo su parte


//Cuando se realiza un depósito de forma exitosa, se debe crear un objeto movimiento
//con el tipo C, que corresponde a CREDITO, el número de cuenta a la que se hizo el depósito
//y el monto que se depositó. Este objeto movimiento se agrega al arreglo movimientos
buscarTransa = function () {
    let cuenta = buscarCliente(cuenta);
    if (cuenta == null) {
        alert("Cliente no encontrado");
    } else {
        mostrarTextoEnCaja("txtNombre", cuenta.nombre);
        mostrarTextoEnCaja("txtSueldo", cuenta.saldo);
        habilitarComponente("txtNombre");
        habilitarComponente("txtSaldo");
        habilitarComponente("btnGuardar");
        deshabilitarComponente("btnNuevo");
        esNuevo = false;
    }
}
transacciones=function(){
    deshabilitarComponente("retiro");
    deshabilitarComponente("deposito");
    ocultarComponente("divMovimientos");
    ocultarComponente("divCuentas");
   
}

mostrarTransa = function () {
    let cmpTabla = document.getElementById("tablaCuentas");
    let contenidoTabla = "<table><tr>" +
        "<th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>APELLIDO</th>" +
        "<th>NUM_CUENTA</th>" +
        "<th>SALDO</th>" +
        "</tr>";
    let elementoCuenta;
    for (let i = 0; i < cuentas.length; i++) {
        elementoCuenta = cuentas[i];
        contenidoTabla += "<tr><td>" + elementoCuenta.cedula + "</td>"
            + "<td>" + elementoCuenta.nombre.toUpperCase() + "</td >"
            + "<td>" + elementoCuenta.apellido.toUpperCase() + "</td >"
            + "<td>" + elementoCuenta.numeroCuenta.toUpperCase() + "</td >"
            + "<td>" + elementoCuenta.saldo + "</td >"
            + "</tr>";
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}

agregarTransa = function (cedula) {
    let resultado;
    resultado = buscarCliente(cuentas.cedula);
    if (resultado == null) {
        cuentas.push(cedula);
        mostrarCuentas();
        alert("Empleado agregado Correctamente");
    } else {
        alert("Ya existe mi amigo " + cliente.nombre);
    }
}
crearTransa = function () {
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorApellido = recuperarTexto("txtApellido");
    let valorNumeroCuenta = recuperarTexto("txtNumeroCuenta");
    let valorSaldo = recuperarInt("txtSaldo");
    let nuevoCliente = {};
    nuevoCliente.cedula = valorCedula;
    nuevoCliente.nombre = valorNombre;
    nuevoCliente.apellido = valorApellido;
    nuevoCliente.numeroCuenta = valorNumeroCuenta;
    nuevoCliente.saldo = valorSaldo;
    mostrarCuentas();

}
guardaTransa = function () {
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorApellido = recuperarTexto("txtApellido");
    let valorNumeroCuenta = recuperarTexto("txtNumeroCuenta");
    let valorSaldo = recuperarInt("txtSaldo");
    if (valorNombre.length < 4) {
        esNuevo = false;
        mostrarTexto("lblErrorCedula", "Nombre NO VALIDO");
    }
    valorNombre = valorNombre.toUpperCase();
    mostrarTextoEnCaja("txtNombre", valorNombre);
    valorApellido = valorApellido.toUpperCase();
    mostrarTextoEnCaja("txtApellido", valorApellido);
    if (valorNombre.length < 4) {
        esNuevo = false;
        mostrarTexto("lblErrorNombre", "Longitud del nombre NO VALIDA");
        alert(esNuevo + "nombre");
    }
    if (esNuevo == true) {
        crearCuentas();
        let nuevoCliente = {};
        nuevoCliente.cedula = valorCedula;
        nuevoCliente.nombre = valorNombre;
        nuevoCliente.apellido = valorApellido;
        nuevoCliente.numeroCuenta = valorNumeroCuenta;
        nuevoCliente.saldo = valorSaldo;
        agregarCuentas(nuevoCliente);
        mostrarCuentas();
        limpiar();
     //   empleado();
    } else {
        nuevoCliente.cedula = valorCedula;
        nuevoCliente.nombre = valorNombre;
        nuevoCliente.apellido = valorApellido;
        nuevoCliente.numeroCuenta = valorNumeroCuenta;
        nuevoCliente.saldo = valorSaldo;
        modificaCliente();
        mostrarClientes();
        alert("EMPLEADO MODIFICADO EXITOSAMENTE");
        habilitarComponente("btnNuevo");
    }
}
buscarTransa = function (cedula) {
    let elementoCuenta;
    let clienteEncontrado = null;
    for (i = 0; i < cuentas.length; i++) {
        elementoCuenta = cuentas[i];
        if (elementoCuenta.nombre == cedula) {
            clienteEncontrado = elementoCuenta;
            alert(clienteEncontrado);
            return clienteEncontrado;
            break;
        }
    }
}

//Cuando se realiza un retiro de forma exitosa, se debe crear un objeto movimiento
//con el tipo D, que corresponde a DEBITO, el número de cuenta a la que se hizo el retiro
//y el monto que se retiró. Este objeto movimiento se agrega al arreglo movimientos


