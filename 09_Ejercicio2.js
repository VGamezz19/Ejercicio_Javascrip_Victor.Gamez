//- En un banco se procesan datos de las cuentas corrientes de sus clientes. De cada cuenta corriente se conoce: número de cuenta, nombre del cliente y saldo actual. El ingreso de datos debe finalizar al ingresar un valor negativo en el número de cuenta.
//Se pide confeccionar un programa que lea los datos de las cuentas corrientes e informe:
//a) De cada cuenta: número de cuenta, nombre del cliente y estado de la cuenta según su saldo, sabiendo que:
//Estado de la cuenta	'Acreedor' si el saldo es >0.
//			'Deudor' si el saldo es <0.
//			'Nulo' si el saldo es =0.
//b) La suma total de los saldos acreedores. 

var banco =new Array;
var nomCliente =  "";
var numCuenta = 0;
var saldo = 0;
var estadoCuenta = "";

do{

	numCuenta=prompt("introduce un numero de cuenta. para finalizar introduce FIN");
	nomCliente=prompt("introduce el nombre del cliente. para finalizar introduce FIN");
	saldo=prompt("introduce el sueldo del cliente . para finalizar introduce FIN");

	
	if (saldo > 0 ) {
		estadoCuenta = "Acreedor";
		
			}
		else if (saldo < 0) {
				estadoCuenta = "Deudor";
				
			} else if (saldo = 0) {
				estadoCuenta = "Nulo";
			
			}

		banco.push(numCuenta, nomCliente, saldo, estadoCuenta);}


	while(numCuenta!= "fin" || nomCliente != "fin" || saldo != "fin");

	//imprimir

	for (var i = 0; i <banco.length; i++){	
			document.write(banco[i]+"<br>");
	}


 