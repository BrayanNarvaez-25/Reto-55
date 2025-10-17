cuentas=[
    {numeroCuenta:"02234567", cedula:"1714616123",nombre:"Juan",apellido:"Perez",saldo:0.0},
    {numeroCuenta:"02345211",cedula:"1281238233",nombre:"Felipe",apellido:"Caicedo",saldo:0.0}
]

const cargar = () 
cargar=function(){
    mostrarComponente("divCuentas");
    ocultarComponente("divMovimientos");
    ocultarComponente("divTransacciones");
    mostrarCuentas();
    
}

mostrarCuentas=function(){
    let tabla = '<table><tr><th>Numero de cuenta</th><th>Cedula</th><th>Nombre</th><th>Apellido</th><th>Saldo</th></tr>';
    let elemento;
    for (let i = 0; i < cuentas.length; i++) {
        elemento = cuentas[i];
        tabla +=
            '<tr>' +
            '<td>' + elemento.numeroCuenta + '</td>' +
            '<td>' + elemento.cedula + '</td>' +
            '<td>' + elemento.nombre + '</td>' +
            '<td>' + elemento.apellido + '</td>' +
            '<td>' + elemento.saldo + '</td>' +
            '</tr>'
    }
    tabla += '</table>'
    document.getElementById('contentAccount').innerHTML = tabla;
}

/*
    Busca la cuenta en el arreglo en función del número de cuenta,
    si existe retorna el objeto cuenta, caso contrario retorna null. 
*/
buscarCuenta=function(numeroCuenta){
    const accountNumberSearch = recuperarTexto("accountNumber");
    let accountExist = false;
    for(let i=0; i<cuentas.length; i++){
        if(cuentas[i].numeroCuenta == accountNumberSearch){
            accountExist = true;
            break
        }
    }
    if(accountExist){
        alert("La cuenta ya existe")
    }else{
        alert("La cuenta No existe")
    }

}

/*
    Agrega una cuenta al arreglo, solamente si no existe otra cuenta con el mismo numero.
    No retorna nada
*/
agregarCuenta=function(cuenta){
    console.log(cuenta);
    let existe = false;


    for(let i=0; i<cuentas.length; i++){
        if(cuentas[i].numeroCuenta == cuenta.numeroCuenta){
            existe = true;
            break
        }
    }

    console.log(existe)

    if(existe){
        alert("La cuenta ya existe")
    }else{
        cuentas.push(cuenta);
        alert("Cuenta agregada correctamente");
    }

    mostrarCuentas();




    //Si ya existe mostrar un alert CUENTA EXISTENTE
    //Si se agrega, mostrar un alert CUENTA AGREGADA
}

agregar=function(){
    const cedula = recuperarTexto("addAccountCedula");
    const nombre = recuperarTexto("addAccountNombre");
    const apellido = recuperarTexto("addAccountApellido");
    const numeroCuenta = recuperarTexto("addAccountNumeroCuenta");
    const saldo = parseFloat(0);
    const cuenta = {numeroCuenta, cedula, nombre, apellido, saldo}

    agregarCuenta(cuenta)
    
    //Toma los valores de las cajas de texto, sin validaciones
    //Crea un objeto cuenta y agrega los atributos con los valores de las cajas respectivas
    //Invoca a agregarCuenta
    //Invoca a mostrarCuentas
}
