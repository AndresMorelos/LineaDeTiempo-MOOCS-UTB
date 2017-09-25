//Variables de los elementos
var fecha_1970_1977 = document.getElementsByClassName('contenedor-izq')[0];
var fecha_2000_2025 = document.getElementsByClassName('contenedor-der')[0];
var contenedor_info_anos_izq = document.getElementsByClassName('contenedor-info-anos-izq')[0];
var contenedor_info_anos_der = document.getElementsByClassName('contenedor-info-anos-der')[0];
var contenedor_info_anos_der_level2_1 = document.getElementsByClassName('contenedor-info-der-level2-1')[0];
var contenedor_info_anos_der_level2_2 = document.getElementsByClassName('contenedor-info-der-level2-2')[0];
var contenedor_info_anos_der_level2_3 = document.getElementsByClassName('contenedor-info-der-level2-3')[0];
var fecha_2009_2011 = document.getElementsByClassName("mostrar_level2_1")[0];
var fecha_2014 = document.getElementsByClassName("mostrar_level2_2")[0];
var fecha_2016 = document.getElementsByClassName("mostrar_level2_3")[0];
var regresar_button = document.getElementById('regresar-button');
var level1_ocultos = [fecha_1970_1977, fecha_2000_2025];
var level1_izquierda_mostrados = [contenedor_info_anos_izq, regresar_button];
var level1_derecha_mostrados = [contenedor_info_anos_der, regresar_button];
//level2_1 derecha
var level2_derecha_mostrados = [contenedor_info_anos_der_level2_1];
var level2_derecha_ocultos = [contenedor_info_anos_der];
//level2_2 derecha
var level2_2_derecha_mostrados = [contenedor_info_anos_der_level2_2];
var level2_2_derecha_ocultos = [contenedor_info_anos_der];
//level2_3 derecha
var level2_3_derecha_mostrados = [contenedor_info_anos_der_level2_3];
var level2_3_derecha_ocultos = [contenedor_info_anos_der];
var div_anterior_oculto = [];
var div_mostrados = [];
//animaciones
var fadeIn_animation = "fadeIn";
//Nodos
var nodo_izq = document.getElementsByClassName("nodo-izq");
var nodo_der = document.getElementsByClassName("nodo-der");
var nodo_der_level2_1 = document.getElementsByClassName("nodo-der-level2-1");
var nodo_der_level2_2 = document.getElementsByClassName("nodo-der-level2-2");
var nodo_der_level2_3 = document.getElementsByClassName("nodo-der-level2-3");
//Para el regresar_button
var fecha_corriendo = new Date();
var fecha_ejecutado = new Date();
var tiempo;
function agregar_animacion(Nodos, NombreAnimacion) {
    for (var _i = 0, _a = Nodos; _i < _a.length; _i++) {
        var nodo = _a[_i];
        nodo.classList.add(NombreAnimacion);
    }
}
function assig_level_data_hide(data) {
    div_anterior_oculto.push(data);
}
function assig_level_data_show(data) {
    div_mostrados.push(data);
}
function mostrar_contenido_level1() {
    fecha_1970_1977.classList.add("display-none");
    fecha_2000_2025.classList.add("display-none");
    assig_level_data_hide(level1_ocultos);
    regresar_button.classList.remove("display-none");
}
function mostrar_contenido_derecha_level2_1() {
    contenedor_info_anos_der.classList.add("display-none");
    agregar_animacion(nodo_der_level2_1, fadeIn_animation);
    assig_level_data_hide(level2_derecha_ocultos);
    assig_level_data_show(level2_derecha_mostrados);
    contenedor_info_anos_der_level2_1.classList.remove("display-none");
}
function mostrar_contenido_derecha_level2_2() {
    contenedor_info_anos_der.classList.add("display-none");
    agregar_animacion(nodo_der_level2_2, fadeIn_animation);
    assig_level_data_hide(level2_2_derecha_ocultos);
    assig_level_data_show(level2_2_derecha_mostrados);
    contenedor_info_anos_der_level2_2.classList.remove("display-none");
}
function mostrar_contenido_derecha_level2_3() {
    contenedor_info_anos_der.classList.add("display-none");
    agregar_animacion(nodo_der_level2_3, fadeIn_animation);
    assig_level_data_hide(level2_3_derecha_ocultos);
    assig_level_data_show(level2_3_derecha_mostrados);
    contenedor_info_anos_der_level2_3.classList.remove("display-none");
}
function mostrar_contenido_izquierda() {
    agregar_animacion(nodo_izq, fadeIn_animation);
    mostrar_contenido_level1();
    contenedor_info_anos_izq.classList.remove("display-none");
    assig_level_data_show(level1_izquierda_mostrados);
}
function mostrar_contenido_derecha() {
    mostrar_contenido_level1();
    agregar_animacion(nodo_der, fadeIn_animation);
    contenedor_info_anos_der.classList.remove("display-none");
    assig_level_data_show(level1_derecha_mostrados);
}
function regresar() {
    fecha_corriendo = new Date();
    for (var _i = 0, _a = div_mostrados[div_mostrados.length - 1]; _i < _a.length; _i++) {
        var div_mostrado = _a[_i];
        div_mostrado.classList.add("display-none");
    }
    div_mostrados.pop();
    for (var _b = 0, _c = div_anterior_oculto[div_anterior_oculto.length - 1]; _b < _c.length; _b++) {
        var div_oculto = _c[_b];
        div_oculto.classList.remove("display-none");
    }
    div_anterior_oculto.pop();
}
//Para cuando se tenga la opción de mouseover
fecha_1970_1977.onmouseover = function () {
    mostrar_contenido_izquierda();
};
//Para cuando se encuentre en moviles y no se tenga la opción mouseover
fecha_1970_1977.onmousedown = function () {
    mostrar_contenido_izquierda();
};
//Para cuando se tenga la opción de mouseover
regresar_button.onmouseover = function () {
    fecha_ejecutado = new Date();
    tiempo = (fecha_ejecutado.getTime() - fecha_corriendo.getTime()) / 1000;
    if (tiempo > 3) {
        regresar();
    }
};
//Para cuando se encuentre en moviles y no se tenga la opción mouseover
regresar_button.onmousedown = function () {
    fecha_ejecutado = new Date();
    tiempo = (fecha_ejecutado.getTime() - fecha_corriendo.getTime()) / 1000;
    if (tiempo > 3) {
        regresar();
    }
};
//Para cuando se tenga la opción de mouseover
fecha_2000_2025.onmouseover = function () {
    mostrar_contenido_derecha();
};
//Para cuando se encuentre en moviles y no se tenga la opción mouseover
fecha_2000_2025.onmousedown = function () {
    mostrar_contenido_derecha();
};
//Para cuando se tenga la opción de mouseover
fecha_2009_2011.onmouseover = function () {
    mostrar_contenido_derecha_level2_1();
};
//Para cuando se encuentre en moviles y no se tenga la opción mouseover
fecha_2009_2011.onmousedown = function () {
    mostrar_contenido_derecha_level2_1();
};
//Para cuando se tenga la opción de mouseover
fecha_2014.onmouseover = function () {
    mostrar_contenido_derecha_level2_2();
};
//Para cuando se encuentre en moviles y no se tenga la opción mouseover
fecha_2014.onmousedown = function () {
    mostrar_contenido_derecha_level2_2();
};
//Para cuando se tenga la opción de mouseover
fecha_2016.onmouseover = function () {
    mostrar_contenido_derecha_level2_3();
};
//Para cuando se encuentre en moviles y no se tenga la opción mouseover
fecha_2016.onmousedown = function () {
    mostrar_contenido_derecha_level2_3();
};
