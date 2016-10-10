//7 - Se realiza la carga de 10 valores enteros por teclado. Se desea conocer: a) La cantidad de valores negativos ingresados.
//b) La cantidad de valores positivos ingresados.
//c) La cantidad de múltiplos de 15.
//d) El valor acumulado de los números ingresados que son pares.

 function multiple(valor, multiple) {

            resto = valor % multiple;
            
            if(resto==0) {
                return true;
            } else {
             return false;
            }            
}


	var numArray = new Array;
	var n1 = 0;
	var negativos = 0;
	var positivos = 0;
	var multiplos = 0;
	var numPares = 0;

	
for (var i = 0; i<= 9; i++) {

	var n1 = parseInt(prompt("introduce numero"));
	numArray.push(n1);

	if (n1 < 0 ) {negativos ++;}  else {positivos++;}

	if (multiple(n1, 15) == true) { multiplos++;} 
		 
	if (multiple(n1, 2) == true) {numPares = numPares + n1}
}

console.log(negativos, positivos, multiplos, numPares); 

document.write(" negativos = "  + negativos + " positivos =  " +  positivos + " Multiplos = " +  multiplos + " NumPares = " +  numPares);


