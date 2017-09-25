//Variables de los elementos
let fecha_1970_1977:HTMLElement = <HTMLElement> document.getElementsByClassName('contenedor-izq')[0];
let fecha_2000_2025:HTMLElement = <HTMLElement> document.getElementsByClassName('contenedor-der')[0];
let contenedor_info_anos_izq:HTMLElement = <HTMLElement> document.getElementsByClassName('contenedor-info-anos-izq')[0];
let contenedor_info_anos_der:HTMLElement = <HTMLElement> document.getElementsByClassName('contenedor-info-anos-der')[0];
let contenedor_info_anos_der_level2_1:HTMLElement = <HTMLElement> document.getElementsByClassName('contenedor-info-der-level2-1')[0];
let contenedor_info_anos_der_level2_2:HTMLElement = <HTMLElement> document.getElementsByClassName('contenedor-info-der-level2-2')[0];
let contenedor_info_anos_der_level2_3:HTMLElement = <HTMLElement> document.getElementsByClassName('contenedor-info-der-level2-3')[0];

let fecha_2009_2011:HTMLElement = <HTMLElement> document.getElementsByClassName("mostrar_level2_1")[0];
let fecha_2014:HTMLElement = <HTMLElement> document.getElementsByClassName("mostrar_level2_2")[0];
let fecha_2016:HTMLElement = <HTMLElement> document.getElementsByClassName("mostrar_level2_3")[0];


let regresar_button:HTMLElement = <HTMLElement> document.getElementById('regresar-button');

let level1_ocultos:HTMLElement[] = [fecha_1970_1977, fecha_2000_2025];
let level1_izquierda_mostrados:HTMLElement[] = [contenedor_info_anos_izq, regresar_button];
let level1_derecha_mostrados:HTMLElement[] = [contenedor_info_anos_der, regresar_button];

//level2_1 derecha
let level2_derecha_mostrados:HTMLElement[] = [contenedor_info_anos_der_level2_1];
let level2_derecha_ocultos:HTMLElement[] = [contenedor_info_anos_der];

//level2_2 derecha
let level2_2_derecha_mostrados:HTMLElement[] = [contenedor_info_anos_der_level2_2];
let level2_2_derecha_ocultos:HTMLElement[] = [contenedor_info_anos_der];

//level2_3 derecha
let level2_3_derecha_mostrados:HTMLElement[] = [contenedor_info_anos_der_level2_3];
let level2_3_derecha_ocultos:HTMLElement[] = [contenedor_info_anos_der];

let div_anterior_oculto:HTMLElement[][] = [];
let div_mostrados:HTMLElement[][] = [];


//animaciones
let fadeIn_animation:string = "fadeIn";

//Nodos
let nodo_izq:HTMLCollectionOf<Element> = document.getElementsByClassName("nodo-izq");
let nodo_der:HTMLCollectionOf<Element> = document.getElementsByClassName("nodo-der");
let nodo_der_level2_1:HTMLCollectionOf<Element> = document.getElementsByClassName("nodo-der-level2-1");
let nodo_der_level2_2:HTMLCollectionOf<Element> = document.getElementsByClassName("nodo-der-level2-2");
let nodo_der_level2_3:HTMLCollectionOf<Element> = document.getElementsByClassName("nodo-der-level2-3");

//Para el regresar_button

let fecha_corriendo = new Date();
let fecha_ejecutado = new Date();
let tiempo:number;

function agregar_animacion(Nodos:HTMLCollectionOf<Element>,NombreAnimacion:string){
  for (let nodo of <Node[]><any>Nodos) {
      (<HTMLElement> nodo).classList.add(NombreAnimacion);

  }
}

function assig_level_data_hide(data:HTMLElement[]){
  div_anterior_oculto.push(data);
}
function assig_level_data_show(data:HTMLElement[]){
  div_mostrados.push(data);
}

function mostrar_contenido_level1(){
  fecha_1970_1977.classList.add("display-none");
  fecha_2000_2025.classList.add("display-none");
  assig_level_data_hide(level1_ocultos);
  regresar_button.classList.remove("display-none");
}

function mostrar_contenido_derecha_level2_1(){
  contenedor_info_anos_der.classList.add("display-none");
  agregar_animacion(nodo_der_level2_1,fadeIn_animation);
  assig_level_data_hide(level2_derecha_ocultos);
  assig_level_data_show(level2_derecha_mostrados);
  contenedor_info_anos_der_level2_1.classList.remove("display-none");
}

function mostrar_contenido_derecha_level2_2(){
  contenedor_info_anos_der.classList.add("display-none");
  agregar_animacion(nodo_der_level2_2,fadeIn_animation);
  assig_level_data_hide(level2_2_derecha_ocultos);
  assig_level_data_show(level2_2_derecha_mostrados);
  contenedor_info_anos_der_level2_2.classList.remove("display-none");
}

function mostrar_contenido_derecha_level2_3(){
  contenedor_info_anos_der.classList.add("display-none");
  agregar_animacion(nodo_der_level2_3,fadeIn_animation);
  assig_level_data_hide(level2_3_derecha_ocultos);
  assig_level_data_show(level2_3_derecha_mostrados);
  contenedor_info_anos_der_level2_3.classList.remove("display-none");
}

function mostrar_contenido_izquierda(){
  agregar_animacion(nodo_izq,fadeIn_animation);
  mostrar_contenido_level1();
  contenedor_info_anos_izq.classList.remove("display-none");
  assig_level_data_show(level1_izquierda_mostrados);
}

function mostrar_contenido_derecha(){
  mostrar_contenido_level1()
  agregar_animacion(nodo_der,fadeIn_animation);
  contenedor_info_anos_der.classList.remove("display-none");
  assig_level_data_show(level1_derecha_mostrados);
}

function regresar(){
  fecha_corriendo = new Date();
  for (let div_mostrado of div_mostrados[div_mostrados.length-1]) {
      div_mostrado.classList.add("display-none");
  }
  div_mostrados.pop();

  for (let div_oculto of div_anterior_oculto[div_anterior_oculto.length-1]) {
      div_oculto.classList.remove("display-none");
  }

  div_anterior_oculto.pop();
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
  fecha_ejecutado = new Date();
  tiempo = (fecha_ejecutado.getTime() - fecha_corriendo.getTime())/1000;
      if (tiempo > 3) {
          regresar();
      }
};

//Para cuando se encuentre en moviles y no se tenga la opción mouseover
regresar_button.onmousedown = function(){
  fecha_ejecutado = new Date();
  tiempo = (fecha_ejecutado.getTime() - fecha_corriendo.getTime())/1000;
      if (tiempo > 3) {
          regresar();
      }

};

//Para cuando se tenga la opción de mouseover
fecha_2000_2025.onmouseover = function(){
  mostrar_contenido_derecha();
};
//Para cuando se encuentre en moviles y no se tenga la opción mouseover
fecha_2000_2025.onmousedown = function(){
  mostrar_contenido_derecha();
};

//Para cuando se tenga la opción de mouseover
fecha_2009_2011.onmouseover = function(){
  mostrar_contenido_derecha_level2_1();
};
//Para cuando se encuentre en moviles y no se tenga la opción mouseover
fecha_2009_2011.onmousedown = function(){
  mostrar_contenido_derecha_level2_1();
};

//Para cuando se tenga la opción de mouseover
fecha_2014.onmouseover = function(){
  mostrar_contenido_derecha_level2_2();
};
//Para cuando se encuentre en moviles y no se tenga la opción mouseover
fecha_2014.onmousedown = function(){
  mostrar_contenido_derecha_level2_2();
};

//Para cuando se tenga la opción de mouseover
fecha_2016.onmouseover = function(){
  mostrar_contenido_derecha_level2_3();
};
//Para cuando se encuentre en moviles y no se tenga la opción mouseover
fecha_2016.onmousedown = function(){
  mostrar_contenido_derecha_level2_3();
};
