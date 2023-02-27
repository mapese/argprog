//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu() {
  if (menu_visible == false) {
    //si esta oculto
    menu.style.display = "block";
    menu_visible = true;
  } else {
    menu.style.display = "none";
    menu_visible = false;
  }
}
//oculto el menu una vez que selecciono una opción
let links = document.querySelectorAll("nav a");
for (var x = 0; x < links.length; x++) {
  links[x].onclick = function () {
    menu.style.display = "none";
    menu_visible = false;
  };
}

//Creo las barritas de una barra particular identificada por su id
function crearBarra(id_barra) {
  for (i = 0; i <= 16; i++) {
    let div = document.createElement("div");
    div.className = "e";
    id_barra.appendChild(div);
  }
}

//selecciono todas las barras generales par aluego manipularlas
let comunicacion = document.getElementById("comunicacion");
crearBarra(comunicacion);
let capacidadorganizativa = document.getElementById("capacidadorganizativa");
crearBarra(capacidadorganizativa);
let equipo = document.getElementById("equipo");
crearBarra(equipo);
let proactiva = document.getElementById("proactiva");
crearBarra(proactiva);
let liderazgo = document.getElementById("liderazgo");
crearBarra(liderazgo);
let ingles = document.getElementById("ingles");
crearBarra(ingles);
let frances = document.getElementById("frances");
crearBarra(frances);
let portuges = document.getElementById("portuges");
crearBarra(portuges);
let office = document.getElementById("office");
crearBarra(office);
let datos = document.getElementById("datos");
crearBarra(datos);

// Ahora voy a guardar la cantidad de barritas que se van a ir pintando por cada barar
// para eso utilizo un arreglo, cada posiciòn pertenece a un elemento
// comienzan en -1 porque no tiene ninguna pintada al iniciarse
let contadores = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
//esta variable la voy a utilizar de bandera para saber si ya ejecuto la animación
let entro = false;

//función que aplica las animaciones de la habilidades

function efectoAptitudes() {
  var aptitudes = document.getElementById("aptitudes");
  var distancia_skills =
    window.innerHeight - aptitudes.getBoundingClientRect().top;
  if (distancia_skills >= 300 && entro == false) {
    entro = true;
    const intervalComunicacion = setInterval(function () {
      pintarBarra(comunicacion, 16, 0, intervalComunicacion);
    }, 100);
    const intervalCapacidad = setInterval(function () {
      pintarBarra(capacidadorganizativa, 15, 1, intervalCapacidad);
    }, 100);
    const intervalEquipo = setInterval(function () {
      pintarBarra(equipo, 16, 2, intervalEquipo);
    }, 100);
    const intervalLiderazgo = setInterval(function () {
      pintarBarra(liderazgo, 10, 3, intervalLiderazgo);
    }, 100);
    const intervalProactiva = setInterval(function () {
      pintarBarra(proactiva, 13, 4, intervalProactiva);
    }, 100);
    const intervalIngles = setInterval(function () {
      pintarBarra(ingles, 16, 5, intervalIngles);
    }, 100);
    const intervalFrances = setInterval(function () {
      pintarBarra(frances, 10, 6, intervalFrances);
    }, 100);
    const intervalPortuges = setInterval(function () {
      pintarBarra(portuges, 15, 7, intervalPortuges);
    }, 100);
    const intervalOffice = setInterval(function () {
      pintarBarra(office, 10, 8, intervalOffice);
    }, 100);
    const intervalDatos = setInterval(function () {
      pintarBarra(datos, 11, 9, intervalDatos);
    }, 100);
    
  }
}
  //lleno una barra particular con la cantidad indicada
  function pintarBarra(id_barra, cantidad, indice, interval) {
    contadores[indice]++;
    x = contadores[indice];
    if (x < cantidad) {
      let elementos = id_barra.getElementsByClassName("e");
      elementos[x].style.backgroundColor = "#940253";
    } else {
      clearInterval(interval);
    }
  }
  
  //detecto el scrolling del mouse para aplicar la animación de la barra
  window.onscroll = function () {
    efectoAptitudes();
  };