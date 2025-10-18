cuentas=[
    {numeroCuenta:"02234567", cedula:"1714616123",nombre:"Juan",apellido:"Perez",saldo:0.0},
    {numeroCuenta:"02345211",cedula:"1281238233",nombre:"Felipe",apellido:"Caicedo",saldo:0.0}
]

movimientos=[
    {numeroCuenta:"02234567",monto:10.24,tipo:"D"},
    {numeroCuenta:"02345211",monto:45.90,tipo:"D"},
    {numeroCuenta:"02234567",monto:65.23,tipo:"C"},
    {numeroCuenta:"02345211",monto:65.23,tipo:"C"},
    {numeroCuenta:"02345211",monto:12.0,tipo:"D"},
]
let esNuevo = false;

cargar = function () {
    mostrarComponente("divCuentas");
    ocultarComponente("divMovimientos");
    ocultarComponente("divTransacciones");

}
cargar2 = function () {
    mostrarComponente("divTransacciones");
    ocultarComponente("divCuentas");
    ocultarComponente("divMovimientos");

}
cargar3 = function () {
    mostrarComponente("divMovimientos");
    ocultarComponente("divCuentas");
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
ejecutarBusqueda = function () {
    let numeroCuenta = recuperarTexto("txtNumCuenta2");
    let cuentaEncontrada = buscarCuenta(numeroCuenta);
    if (cuentaEncontrada != null) {
        mostrarTexto("infoCedula", cuentaEncontrada.cedula);
        mostrarTexto("infoNombre", cuentaEncontrada.nombre + " " + cuentaEncontrada.apellido);
        mostrarTexto("infoSueldo", cuentaEncontrada.saldo);
    } else {
        alert("CUENTA NO EXISTE");
    }
    //toma el numero de cuenta de la caja de texto
    //invoca a buscarCuenta y guarda el resultado en una variable
    //Si el resultado es diferente de null, muestra en pantalla, caso contrario muestra un alert
}

depositar = function (numeroCuenta, monto) {
    let cuentaAfectada = buscarCuenta(numeroCuenta);
    cuentaAfectada.saldo += monto;
    return cuentaAfectada.saldo;
    //invoca a buscarCuenta, guarda el resultado en la variable cuentaAfectada;
    //Al saldo actual de la cuenta afectada, le suma el monto que recibe como parámetro
}

ejecutarDeposito = function () {
    let numeroCuenta = recuperarTexto("txtNumCuenta2");
    let monto = recuperarInt("txtMonto");
    let saldoTotal = depositar(numeroCuenta, monto);
    alert("TRANSACCION EXITOSA")
    let movimiento = {
        numeroCuenta : numeroCuenta,
        tipo : "C",
        monto: monto,
    }
    movimientos.push(movimiento);
    mostrarTexto("infoSaldo", saldoTotal);
    //Toma el numero de cuenta ingresado en la caja de texto
    //Toma el monto ingresado en la caja de texto
    //invoca a depositar
    //Muestra un mensaje TRANSACCION EXITOSA
    //Muestra en pantalla el nuevo saldo de la cuenta
}

retirar = function (numeroCuenta, monto) {
    numeroCuenta = recuperarTexto("txtNumCuenta2");
    monto = recuperarInt("txtMonto");
    let cuentaAfectada = buscarCuenta(numeroCuenta);
    if(cuentaAfectada.saldo <= monto){
        alert("SALDO INSUFICIENTE");
    }else{
        cuentaAfectada.saldo -= monto;
        alert("TRANSACCION EXITOSA");
        let movimiento = {
        numeroCuenta : numeroCuenta,
        tipo : "D",
        monto: monto,
    }
    movimientos.push(movimiento);
        mostrarTexto("infoSaldo", cuentaAfectada.saldo);
    }
    //invoca a buscarCuenta, guarda el resultado en la variable cuentaAfectada;
    //Valida si la cuenta tiene el saldo suficiente para retirar el monto
    //Si el saldo es suficiente,al saldo actual de la cuenta afectada, le resta el monto que recibe como parámetro
    //Si el saldo no es suficiente, muestra un alert SALDO INSUFICIENTE
    //Si logra retirar muestra un mensaje TRANSACCION EXITOSA y muestra en pantalla el nuevo saldo de la cuenta
}
filtrarMovimientos = function (numeroCuenta) {
    let movimientosCuenta = [];
    for (let i = 0; i < movimientos.length; i++) {
        if (movimientos[i].numeroCuenta == numeroCuenta) {
            movimientosCuenta.push(movimientos[i])
        }
    }

    for (let i = 0; i < movimientosCuenta.length; i++) {
        if (movimientosCuenta[i].tipo == "D") {
            movimientosCuenta[i].monto *= -1;
        }
    }
    mostrarMovimientos(movimientosCuenta);
    //Se barre el arreglo de movimientos
    //En cada iteración, verifica si el numero de cuenta del movimiento es igual al que recibe como parametro
    //En caso de serlo, agrega la cuenta al arreglo movimientosCuenta
    //Invoca a mostrarMovimientos, pasándole como parámetro movimientosCuenta
}

/*
    Recibe un arreglo con los movimientos que va a mostrar en pantalla
*/
mostrarMovimientos = function (misMovimientos) {
    let cmpTabla = document.getElementById("tablaMovimientos");
    let contenidoTabla = "<table><tr>" + "<th> CUENTA </th>" +
        "<th> MONTO </th>" + "<th> OPERACION </th>" + "</tr>";
    let elementoCuentas;
    for (let i = 0; i < misMovimientos.length; i++) {
        elementoCuentas = misMovimientos[i];
        contenidoTabla += "<tr> <td> " + elementoCuentas.numeroCuenta + " </td>" +
            "<td> " + elementoCuentas.monto + " </td>" +
            "<td> " + elementoCuentas.tipo + " </td>" + "</tr>";
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
    //Muestra en pantalla una tabla con los movimientos que recibe en misMovimientos
    //Columnas: NUMERO CUENTA, MONTO, TIPO
    //Si ya pinta correctamente la tabla, hacer el siguiente cambio:
    //Si el tipo es D(DEBITO), mostrar el monto en negativo (multiplicar por -1)
    //Si el tipo es C(CREDITO), mostrar el monto en positivo (tal como está guardado)
}

ejecutarMovimientos = function(){
    let numeroCuenta = recuperarTexto("txtNumCuenta3");
    filtrarMovimientos(numeroCuenta);
}
/*
    En este archivo se deben colocar todas las funciones de cuentas, movimientos y transacciones
    IMPORTANTE: NO DUPLICAR FUNCIONES, si existe una misma función en varios archivos,
    dejar solo una de ellas, ejemplo la función buscarCuenta
*/

//OCULTAR Y MOSTRAR LOS DIVS, para que cada opción muestre solo su parte


//Cuando se realiza un depósito de forma exitosa, se debe crear un objeto movimiento
//con el tipo C, que corresponde a CREDITO, el número de cuenta a la que se hizo el depósito
//y el monto que se depositó. Este objeto movimiento se agrega al arreglo movimientos

//Cuando se realiza un retiro de forma exitosa, se debe crear un objeto movimiento
//con el tipo D, que corresponde a DEBITO, el número de cuenta a la que se hizo el retiro
//y el monto que se retiró. Este objeto movimiento se agrega al arreglo movimientos


