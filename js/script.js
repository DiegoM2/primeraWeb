$(document).ready(function() {
    $(".boton_detalles").click(function() {
        alert("Sitio web en construcción, por favor intente más tarde.");
    });

    $("#usuario").click(function(){
      
      var modal = document.getElementById("modal_usuario");
      modal.style.display = block;
    });

});

var slideIndex = 0;
showSlides();

function showSlides() { /*Pasa las imagenes del carrusel*/
  var slides = document.getElementsByClassName("mySlides");
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4500); 
}

function buscar(){
  var busqueda = document.getElementById('txt_busqueda').value;
  /*Esto debiese tomar las palabras y buscarlas en alguna base de datos, pero aún no hay base de datos. */
}

/* Se supone que esto debiese abrir lo que será la ventana para iniciar sesión. 
var modal = document.getElementById('modal_usuario');
function miUsuario(){
  modal.style.display= block;
}*/

