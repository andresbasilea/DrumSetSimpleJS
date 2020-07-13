
/*
document.querySelector("button").addEventListener("click",controlPresionado);

function controlPresionado(){
  alert("Presionado!");
}
*/
/*
document.querySelector("button").addEventListener("click",function(){alert("presionado");});
*/

/*for(var i = 0; i<7; i++){
  document.querySelectorAll("button")[i].addEventListener("click",function(){alert("presionado");});
}*/

for(var i = 0; i<document.querySelectorAll(".drum").length; i++){
  document.querySelectorAll("button")[i].addEventListener("click",function(){ // -> callback function
    var boton = this.innerHTML;
    hacerSonido(boton);
    animacionBoton(boton);
  });
}

//detectar teclado
document.addEventListener("keydown", function(event){
  hacerSonido(event.key);
  animacionBoton(event.key);
});

function hacerSonido(key){
  switch(key){
    case "w":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
    break;

    case "a":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
    break;

    case "s":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
    break;

    case "d":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
    break;

    case "j":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
    break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
    break;

    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
    break;

    default: console.log(boton);
  }
}


function animacionBoton(currentKey){
  var botonActivo = document.querySelector("." + currentKey);
  botonActivo.classList.add("pressed");

  setTimeout(function() {
    botonActivo.classList.remove("pressed");
  }, 100);
}












/* */
