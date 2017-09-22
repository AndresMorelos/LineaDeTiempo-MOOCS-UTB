//Variables de los elementos
var fecha_1970_1977 = document.getElementsByClassName('contenedor-izq')[0];
var fecha_2000_2025 = document.getElementsByClassName('contenedor-der')[0];
var contenedor_info_anos_izq = document.getElementsByClassName('contenedor-info-anos-izq')[0];
var regresar_button = document.getElementById('regresar-button');
var div_anterior_oculto = [];
var div_mostrados = [];
fecha_1970_1977.onmouseover = function () {
    fecha_1970_1977.classList.add("display-none");
    fecha_2000_2025.classList.add("display-none");
    contenedor_info_anos_izq.classList.remove("display-none");
    regresar_button.classList.remove("display-none");
    div_anterior_oculto.push(fecha_1970_1977, fecha_2000_2025);
    div_mostrados.push(contenedor_info_anos_izq, regresar_button);
};
regresar_button.onmouseover = function () {
    for (var _i = 0, div_mostrados_1 = div_mostrados; _i < div_mostrados_1.length; _i++) {
        var div_mostrado = div_mostrados_1[_i];
        div_mostrado.classList.add("display-none");
    }
    for (var _a = 0, div_anterior_oculto_1 = div_anterior_oculto; _a < div_anterior_oculto_1.length; _a++) {
        var div_oculto = div_anterior_oculto_1[_a];
        div_oculto.classList.remove("display-none");
    }
    div_anterior_oculto.splice(0, div_anterior_oculto.length);
    div_mostrados.splice(0, div_mostrados.length);
};
