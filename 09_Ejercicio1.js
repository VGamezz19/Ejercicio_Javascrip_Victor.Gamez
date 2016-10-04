// 1 - Confeccionar un programa que lea 3 pares de datos, cada par de datos corresponde a la medida de la base y la altura de un triángulo. 
//El programa deberá informar:
//a) De cada triángulo la medida de su base, su altura y su superficie.
//b) La cantidad de triángulos cuya superficie es mayor a 12. 


var baseTri = new Array;
var atuTri = new Array;
var superficie = new Array;
var superficieSuperior = 0; 

for (var i = 1; i <=3; i ++){

	baseTri[i]=prompt("Introduce la base del triangulo " + i );
	atuTri[i]=prompt("Introduce la altura del triangulo " + i);

	baseTri.push(baseTri);
	atuTri.push(atuTri);

	//Calculamos superficie

	superficie[i] = baseTri[i] * atuTri[i]/2;

	superficie.push(superficie);

	if (superficie[i] >= 12 ){

		 superficieSuperior ++;

	}

	document.write("Triangulo " + [i] + " Base: " + baseTri[i] + " altura: " + atuTri[i] + " Superficie: " + superficie[i] +"<br>" );

}



document.write(superficieSuperior + " triangulos superan los 12  de superficie");
