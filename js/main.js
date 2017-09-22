//Variables de los elementos
var fecha_1970_1977 = document.getElementsByClassName('contenedor-izq')[0];
var fecha_2000_2025 = document.getElementsByClassName('contenedor-der')[0];
var contenedor_info_anos_izq = document.getElementsByClassName('contenedor-info-anos-izq')[0];
var contenedor_info_anos_der = document.getElementsByClassName('contenedor-info-anos-der')[0];
var regresar_button = document.getElementById('regresar-button');
var level1_ocultos = [fecha_1970_1977, fecha_2000_2025];
var level1_izquierda_mostrados = [contenedor_info_anos_izq, regresar_button];
var level1_derecha_mostrados = [contenedor_info_anos_der, regresar_button];
var div_anterior_oculto = [];
var div_mostrados = [];
function assig_level_data_hide(data) {
    div_anterior_oculto = data;
}
function assig_level_data_show(data) {
    div_mostrados = data;
}
function mostrar_contenido_level1() {
    fecha_1970_1977.classList.add("display-none");
    fecha_2000_2025.classList.add("display-none");
    assig_level_data_hide(level1_ocultos);
    regresar_button.classList.remove("display-none");
}
function mostrar_contenido_izquierda() {
    mostrar_contenido_level1();
    contenedor_info_anos_izq.classList.remove("display-none");
    assig_level_data_show(level1_izquierda_mostrados);
}
function mostrar_contenido_derecha() {
    mostrar_contenido_level1();
    contenedor_info_anos_der.classList.remove("display-none");
    assig_level_data_show(level1_derecha_mostrados);
}
function regresar() {
    for (var _i = 0, div_mostrados_1 = div_mostrados; _i < div_mostrados_1.length; _i++) {
        var div_mostrado = div_mostrados_1[_i];
        div_mostrado.classList.add("display-none");
    }
    for (var _a = 0, div_anterior_oculto_1 = div_anterior_oculto; _a < div_anterior_oculto_1.length; _a++) {
        var div_oculto = div_anterior_oculto_1[_a];
        div_oculto.classList.remove("display-none");
    }
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
    regresar();
};
//Para cuando se encuentre en moviles y no se tenga la opción mouseover
regresar_button.onmousedown = function () {
    regresar();
};
//Para cuando se tenga la opción de mouseover
fecha_2000_2025.onmouseover = function () {
    mostrar_contenido_derecha();
};
//Para cuando se encuentre en moviles y no se tenga la opción mouseover
fecha_2000_2025.onmousedown = function () {
    mostrar_contenido_derecha();
};
