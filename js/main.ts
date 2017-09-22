//Variables de los elementos
let fecha_1970_1977:HTMLElement = <HTMLElement> document.getElementsByClassName('contenedor-izq')[0];
let fecha_2000_2025:HTMLElement = <HTMLElement> document.getElementsByClassName('contenedor-der')[0];
let contenedor_info_anos_izq:HTMLElement = <HTMLElement> document.getElementsByClassName('contenedor-info-anos-izq')[0];
let contenedor_info_anos_der:HTMLElement = <HTMLElement> document.getElementsByClassName('contenedor-info-anos-der')[0];
let regresar_button:HTMLElement = <HTMLElement> document.getElementById('regresar-button');
let level1_ocultos:HTMLElement[] = [fecha_1970_1977, fecha_2000_2025];
let level1_izquierda_mostrados:HTMLElement[] = [contenedor_info_anos_izq, regresar_button];
let level1_derecha_mostrados:HTMLElement[] = [contenedor_info_anos_der, regresar_button];
let div_anterior_oculto:HTMLElement[] = [];
let div_mostrados:HTMLElement[] = [];

function assig_level_data_hide(data:HTMLElement[]){
  div_anterior_oculto = data;
}
function assig_level_data_show(data:HTMLElement[]){
  div_mostrados = data;
}

function mostrar_contenido_level1(){
  fecha_1970_1977.classList.add("display-none");
  fecha_2000_2025.classList.add("display-none");
  assig_level_data_hide(level1_ocultos);
  regresar_button.classList.remove("display-none");
}

function mostrar_contenido_izquierda(){
  mostrar_contenido_level1()
  contenedor_info_anos_izq.classList.remove("display-none");
  assig_level_data_show(level1_izquierda_mostrados);
}

function mostrar_contenido_derecha(){
  mostrar_contenido_level1()
  contenedor_info_anos_der.classList.remove("display-none");
  assig_level_data_show(level1_derecha_mostrados);
}

function regresar(){
  for (let div_mostrado of div_mostrados) {
      div_mostrado.classList.add("display-none");
  }

  for (let div_oculto of div_anterior_oculto) {
      div_oculto.classList.remove("display-none");
  }
}

//Para cuando se tenga la opción de mouseover
fecha_1970_1977.onmouseover = function(){
  mostrar_contenido_izquierda();
};
//Para cuando se encuentre en moviles y no se tenga la opción mouseover
fecha_1970_1977.onmousedown = function(){
  mostrar_contenido_izquierda()
};

//Para cuando se tenga la opción de mouseover
regresar_button.onmouseover = function(){
  regresar();
};

//Para cuando se encuentre en moviles y no se tenga la opción mouseover
regresar_button.onmousedown = function(){
  regresar();
};

//Para cuando se tenga la opción de mouseover
fecha_2000_2025.onmouseover = function(){
  mostrar_contenido_derecha();
};
//Para cuando se encuentre en moviles y no se tenga la opción mouseover
fecha_2000_2025.onmousedown = function(){
  mostrar_contenido_derecha();
};
