cuentas = [
    { numeroCuenta: "02234567", cedula: "1714616123", nombre: "Juan", apellido: "Perez", saldo: 0.0 },
    { numeroCuenta: "02345211", cedula: "1281238233", nombre: "Felipe", apellido: "Caicedo", saldo: 0.0 }
]

cargar = function () {
    mostrarComponente("divTransacciones");
    ocultarComponente("divCuentas");
    ocultarComponente("divMovimientos");

}

/*
    Busca la cuenta en el arreglo en función del número de cuenta,
    si existe retorna el objeto cuenta, caso contrario retorna null. 
*/
buscarCuenta = function (numeroCuenta) {
    let cmpNumCuenta;
    let NumEncontrada = null
    for (let i = 0; i < cuentas.length; i++) {
        cmpNumCuenta = cuentas[i];
        if (cmpNumCuenta.numeroCuenta == numeroCuenta) {
            NumEncontrada = cmpNumCuenta
            break;
        }
    }
    return NumEncontrada;
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
        mostrarTexto("infoSaldo", cuentaAfectada.saldo);
    }
    //invoca a buscarCuenta, guarda el resultado en la variable cuentaAfectada;
    //Valida si la cuenta tiene el saldo suficiente para retirar el monto
    //Si el saldo es suficiente,al saldo actual de la cuenta afectada, le resta el monto que recibe como parámetro
    //Si el saldo no es suficiente, muestra un alert SALDO INSUFICIENTE
    //Si logra retirar muestra un mensaje TRANSACCION EXITOSA y muestra en pantalla el nuevo saldo de la cuenta
}