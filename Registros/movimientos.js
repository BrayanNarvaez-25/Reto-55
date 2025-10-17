movimientos = [
    { numeroCuenta: "02234567", monto: 10.24, tipo: "D" },
    { numeroCuenta: "02345211", monto: 45.90, tipo: "D" },
    { numeroCuenta: "02234567", monto: 65.23, tipo: "C" },
    { numeroCuenta: "02345211", monto: 65.23, tipo: "C" },
    { numeroCuenta: "02345211", monto: 12.0, tipo: "D" },
]

const cargar = () => {
    mostrarComponente("divMovimientos");
    ocultarComponente("divCuentas");
    ocultarComponente("divTransacciones");
}

const filtrarMovimientos = (numeroCuenta) => {
    let movimientosCuenta = [];
    for (let i = 0; i < movimientos.length; i++) {
        if (movimientos[i].numeroCuenta == numeroCuenta) {
            movimientosCuenta.push(movimientos[i])
        }
    }

    for(let i=0; i<movimientosCuenta.length; i++){
        if(movimientosCuenta[i].tipo == "D"){
            movimientosCuenta[i].monto *=-1;
        }
    }
    mostrarMovimientos(movimientosCuenta);
}


const mostrarMovimientos = (misMovimientos) => {
    let tabla = '<table><tr><th>Numero de cuenta</th><th>Monto</th><th>Tipo</th></tr>';
    let elemento;
    for (let i = 0; i < misMovimientos.length; i++) {
        elemento = misMovimientos[i];
        tabla +=
            '<tr>' +
            '<td>' + elemento.numeroCuenta + '</td>' +
            '<td>' + elemento.monto + '</td>' +
            '<td>' + elemento.tipo + '</td>' +
            '</tr>'
    }
    tabla += '</table>'
    document.getElementById('tablaMovimientos').innerHTML = tabla;
}


const buscarMovimientos = () => {
    const numeroCuenta = recuperarTexto("buscarMovimientos");
    filtrarMovimientos(numeroCuenta);
}

