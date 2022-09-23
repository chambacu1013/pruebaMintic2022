
//let sirve almacenar todo lostipos de datos
let slides = window.document.getElementsByClassName("slides");
let btnDisplayLeft = window.document.getElementById("display-left");
let btnDisplayRight = window.document.getElementById("display-right");

btnDisplayLeft.addEventListener( "click", btnEventoLeft );
btnDisplayRight.addEventListener( "click", btnEventoRight );

let slideIndex = 1

btnEventoRight()

function btnEventoRight(){
	slideIndex += 1 
	mostrarSlides( slideIndex )
}
function btnEventoLeft(){
	slideIndex -= 1
	mostrarSlides( slideIndex )
}

function mostrarSlides( n ){
	if ( n > slides.length ){
		slideIndex = 1
	}
	if ( n < 1 ){
		slideIndex = slides.length
	}

	console.log(slideIndex)
	for ( let i = 0; i < slides.length; i++){
		slides[i].style.display = "none"
	}
	slides[slideIndex-1].style.display = "block"


}


