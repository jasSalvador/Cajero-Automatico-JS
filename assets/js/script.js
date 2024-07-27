function Cliente(nombre, identificador, clave, saldo) {
    this.nombre = nombre.toLowerCase();
    this.identificador = identificador;
    this.clave = clave;
    this.saldo = saldo;
}

let cliente1 = new Cliente("Juan", 1, 123, 24700);
let cliente2 = new Cliente("Pedro", 2, 123, 47000);
let cliente3 = new Cliente("Diego", 3, 123, 104500);

let nombre;
let clave;

do {
    alert("Bienvenido a Banca en Línea");
    nombre = prompt("Ingrese su nombre").toLowerCase();
    clave = prompt("Ingrese su clave");

    if (
        (nombre == cliente1.nombre && clave == cliente1.clave) || (nombre == cliente2.nombre && clave == cliente2.clave) || (nombre == cliente3.nombre && clave == cliente3.clave)
    ) { alert("Bienvenido " + nombre);
        let cliente;
        do {
            cliente = prompt("Ingrese una opción \n1.- Ver saldo \n2.- Realizar giro \n3.- Realizar depósito \n4.- Salir");
            if (cliente == "1") {
                //mostrar saldo
                if (nombre === cliente1.nombre) {
                    alert("Su saldo es: " + cliente1.saldo);
                } else if (nombre === cliente2.nombre) {
                    alert("Su saldo es: " + cliente2.saldo);
                } else if (nombre === cliente3.nombre) {
                    alert("Su saldo es: " + cliente3.saldo);
                }
            //realizar giro
            } else if (cliente == "2") {
                let saldoActual;
                if(nombre === cliente1.nombre){
                    saldoActual = cliente1.saldo;
                }
                else if(nombre === cliente2.nombre){
                    saldoActual = cliente2.saldo;
                }
                else if(nombre === cliente3.nombre){
                    saldoActual = cliente3.saldo;
                }

                let giro = parseInt(prompt("Su saldo actual es " + saldoActual + "\nIngrese monto a girar"));
                if(nombre === cliente1.nombre) {
                    if(giro <= cliente1.saldo){
                        cliente1.saldo -= giro;
                        alert("Giro realizado, su nuevo saldo es " + cliente1.saldo);
                    }else{
                        alert("No tiene saldo suficiente");
                    }                    
                }else if(nombre === cliente2.nombre){
                    if(giro <= cliente2.saldo){
                        cliente2.saldo -= giro;
                        alert("Giro realizado, su nuevo saldo es " + cliente2.saldo);
                    }else{
                        alert("No tiene saldo suficiente");
                    }                
                }else if(nombre === cliente3.nombre){
                    if(giro <= cliente3.saldo){
                        cliente3.saldo -= giro;
                        alert("Giro realizado, su nuevo saldo es " + cliente3.saldo);
                    }else{
                        alert("No tiene saldo suficiente");
                    }                
                }
            // Código para realizar depósito
            } else if (cliente == "3") {
                let montoActual;
                if(nombre === cliente1.nombre){
                    montoActual = cliente1.saldo;
                }
                else if(nombre === cliente2.nombre){
                    montoActual = cliente2.saldo;
                }
                else if(nombre === cliente3.nombre){
                    montoActual = cliente3.saldo;
                }
                let deposito = parseInt(prompt("Su saldo actual es " + montoActual + "\nIngrese monto deposito"));
                if(nombre === cliente1.nombre) {
                    cliente1.saldo += deposito;
                    alert("Deposito realizado, su nuevo saldo es " + cliente1.saldo);
                }else if(nombre === cliente2.nombre){
                    cliente2.saldo += deposito;
                    alert("Deposito realizado, su nuevo saldo es " + cliente2.saldo);
                }else if(nombre === cliente3.nombre){  
                    cliente3.saldo += deposito;
                    alert("Deposito realizado, su nuevo saldo es " + cliente3.saldo);               
                }
            //salir
            }else if(cliente == "4") {
                alert("Gracias por utilizar nuestros servicios");
            }else{
                alert("Opción no válida");
            }
        } while (cliente !== "4");
    } else {
        alert("No se encontró el cliente");
    }
} while (nombre != "Salir");
