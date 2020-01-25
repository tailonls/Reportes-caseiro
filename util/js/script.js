$(document).ready(function(){
	
	// Obtem a data/hora atual
	var data = new Date();

	var dia     = data.getDate();           // 1-31
	var dia_sem = data.getDay();            // 0-6 (zero=domingo)
	var mes     = data.getMonth();          // 0-11 (zero=janeiro)
	var ano2    = data.getYear();           // 2 digitos
	var ano4    = data.getFullYear();       // 4 digitos
	var hora    = data.getHours();          // 0-23
	var min     = data.getMinutes();        // 0-59
	var seg     = data.getSeconds();        // 0-59
	var mseg    = data.getMilliseconds();   // 0-999
	var tz      = data.getTimezoneOffset(); // em minutos

	// Formata a data e a hora (note o mes + 1)
	var str_data = dia + '/' + (mes+1) + '/' + ano4;
	var str_hora = hora + 'h' + min + 'm';

	$('#dataHora').html(str_data + '  ' + str_hora);

	// Get the modal
	var modal = document.getElementById('myModal');

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	//var img = document.getElementsByClassName('image');
	var modalImg = document.getElementById("img01");	
	var captionText = document.getElementById("caption");
	
	$(".image").click(function() {
		console.log("Clicou na imagem " + this.alt);
		modal.style.display = "block";
		modalImg.src = this.src;
		captionText.innerHTML = this.alt;
	});

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	  modal.style.display = "none";
	}
});