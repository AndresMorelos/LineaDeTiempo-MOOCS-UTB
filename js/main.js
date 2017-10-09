var contenedor_1970 = document.getElementsByClassName('contenedor-1970')[0];
var contenedor_1971 = document.getElementsByClassName('contenedor-1971')[0];
var contenedor_1972 = document.getElementsByClassName('contenedor-1972')[0];
var contenedor_1973 = document.getElementsByClassName('contenedor-1973')[0];
var contenedor_1974_1977 = document.getElementsByClassName('contenedor-1974-1977')[0];
var contenedor_1978_1985 = document.getElementsByClassName('contenedor-1978-1985')[0];
var contenedor_1989 = document.getElementsByClassName('contenedor-1989')[0];
var contenedor_1993_1994 = document.getElementsByClassName('contenedor-1993-1994')[0];
var contenedor_1995 = document.getElementsByClassName('contenedor-1995')[0];
var contenedor_1997 = document.getElementsByClassName('contenedor-1997')[0];
var contenedor_2000_2001 = document.getElementsByClassName('contenedor-2000-2001')[0];
var contenedor_2003 = document.getElementsByClassName('contenedor-2003')[0];
var contenedor_2005_2006 = document.getElementsByClassName('contenedor-2005-2006')[0];
var contenedor_2007_2008 = document.getElementsByClassName('contenedor-2007-2008')[0];
var contenedor_2009_2011 = document.getElementsByClassName('contenedor-2009-2011')[0];
var contenedor_2012 = document.getElementsByClassName('contenedor-2012')[0];
var contenedor_2013 = document.getElementsByClassName('contenedor-2013')[0];
var contenedor_2014 = document.getElementsByClassName('contenedor-2014')[0];
var contenedor_2015 = document.getElementsByClassName('contenedor-2015')[0];
var contenedor_2016 = document.getElementsByClassName('contenedor-2016')[0];
var contenedor_2017_2025 = document.getElementsByClassName('contenedor-2017-2025')[0];
//Elementos a ocultar por contenedor accionado
var hidden_contenedor_1970 = [contenedor_1971, contenedor_2017_2025, contenedor_2016, contenedor_2015, contenedor_1997, contenedor_1995, contenedor_1993_1994, contenedor_1989];
var hidden_contenedor_1971 = [contenedor_2016, contenedor_2015, contenedor_1997, contenedor_1993_1994, contenedor_1989, contenedor_1995, contenedor_2014, contenedor_2000_2001];
var hidden_contenedor_1972 = [contenedor_1989, contenedor_1978_1985];
var hidden_contenedor_1973 = [contenedor_1974_1977, contenedor_1978_1985, contenedor_1989];
var hidden_contenedor_1974_1977 = [contenedor_1978_1985, contenedor_1989];
var hidden_contenedor_1978_1985 = [contenedor_1989];
var hidden_contenedor_2009_2011 = [contenedor_2015, contenedor_2014];
var hidden_contenedor_2012 = [contenedor_2015, contenedor_2014];
//funciones
function hidden(contenedores) {
    for (var _i = 0, contenedores_1 = contenedores; _i < contenedores_1.length; _i++) {
        var contenedor = contenedores_1[_i];
        contenedor.classList.add('visibility-hidden');
    }
}
function show(contenedores) {
    for (var _i = 0, contenedores_2 = contenedores; _i < contenedores_2.length; _i++) {
        var contenedor = contenedores_2[_i];
        contenedor.classList.remove('visibility-hidden');
    }
}
//Ocultando y mostrando los contenedores
//1970
contenedor_1970.onmouseover = function () {
    hidden(hidden_contenedor_1970);
};
contenedor_1970.onmouseout = function () {
    show(hidden_contenedor_1970);
};
//1971
contenedor_1971.onmouseover = function () {
    hidden(hidden_contenedor_1971);
};
contenedor_1971.onmouseout = function () {
    show(hidden_contenedor_1971);
};
//1972
contenedor_1972.onmouseover = function () {
    hidden(hidden_contenedor_1972);
};
contenedor_1972.onmouseout = function () {
    show(hidden_contenedor_1972);
};
//1973
contenedor_1973.onmouseover = function () {
    hidden(hidden_contenedor_1973);
};
contenedor_1973.onmouseout = function () {
    show(hidden_contenedor_1973);
};
//1974 - 1977
contenedor_1974_1977.onmouseover = function () {
    hidden(hidden_contenedor_1974_1977);
};
contenedor_1974_1977.onmouseout = function () {
    show(hidden_contenedor_1974_1977);
};
//1978 - 1985
contenedor_1978_1985.onmouseover = function () {
    hidden(hidden_contenedor_1978_1985);
};
contenedor_1978_1985.onmouseout = function () {
    show(hidden_contenedor_1978_1985);
};
//2009 - 2011
contenedor_2009_2011.onmouseover = function () {
    hidden(hidden_contenedor_2009_2011);
};
contenedor_2009_2011.onmouseout = function () {
    show(hidden_contenedor_2009_2011);
};
//2012
contenedor_2012.onmouseover = function () {
    hidden(hidden_contenedor_2012);
};
contenedor_2012.onmouseout = function () {
    show(hidden_contenedor_2012);
};
