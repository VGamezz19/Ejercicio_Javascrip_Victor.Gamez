

function offtablas() {

    	tabla1.style.display='none';
    	tabla2.style.display='none';
   		tabla3.style.display='none';
   		footer.style.display='none';

}
     
function ontablas() {

	if (desplegable.options[0].selected) {
		tabla1.style.display="none";
		tabla2.style.display="none";
		tabla3.style.display='none';
		footer.style.display='none';
		     
	} 

	if (desplegable.options[1].selected) {
		tabla1.style.display="inline-table";
		footer.style.display='inline';
		tabla2.style.display="none";
		tabla3.style.display='none';   	
	} 

	if (desplegable.options[2].selected) {
		tabla2.style.display="inline-table";
		footer.style.display='inline';
		tabla1.style.display="none";
		tabla3.style.display='none';	     
		     	
	}	  

	if (desplegable.options[3].selected) {
		tabla3.style.display='inline-table';
		footer.style.display='inline';
		tabla1.style.display="none";
		tabla2.style.display="none";
		 	
	}
}





 /*function presionar() {

	 	body.style.background='#fff';
  		tabla1.style.display='none';
 		tabla2.style.display='none';
  		tabla3.style.display='none';

}

function levantar() {
   var largeImage = document.getElementById('tabla1');
   body.style.background= 'rgba(55, 187, 186, 0.39)';
   largeImage.style.display = 'block';
   largeImage.style.width=200+"px";
   largeImage.style.height=200+"px";
   var url=largeImage.getAttribute('tabla1');
   window.open(url,'Image','width=largeImage.stylewidth,height=largeImage.style.height,resizable=1');

} */ 




