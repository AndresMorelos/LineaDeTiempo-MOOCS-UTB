let contenedor_1970:HTMLElement = <HTMLElement> document.getElementsByClassName('contenedor-1970')[0];
let contenedor_1971:HTMLElement = <HTMLElement> document.getElementsByClassName('contenedor-1971')[0];
let contenedor_1972:HTMLElement = <HTMLElement> document.getElementsByClassName('contenedor-1972')[0];
let contenedor_1973:HTMLElement = <HTMLElement> document.getElementsByClassName('contenedor-1973')[0];
let contenedor_1974_1977:HTMLElement = <HTMLElement> document.getElementsByClassName('contenedor-1974-1977')[0];
let contenedor_1978_1985:HTMLElement = <HTMLElement> document.getElementsByClassName('contenedor-1978-1985')[0];
let contenedor_1989:HTMLElement = <HTMLElement> document.getElementsByClassName('contenedor-1989')[0];
let contenedor_1993_1994:HTMLElement = <HTMLElement> document.getElementsByClassName('contenedor-1993-1994')[0];
let contenedor_1995:HTMLElement = <HTMLElement> document.getElementsByClassName('contenedor-1995')[0];
let contenedor_1997:HTMLElement = <HTMLElement> document.getElementsByClassName('contenedor-1997')[0];
let contenedor_2000_2001:HTMLElement = <HTMLElement> document.getElementsByClassName('contenedor-2000-2001')[0];
let contenedor_2003:HTMLElement = <HTMLElement> document.getElementsByClassName('contenedor-2003')[0];
let contenedor_2005_2006:HTMLElement = <HTMLElement> document.getElementsByClassName('contenedor-2005-2006')[0];
let contenedor_2007_2008:HTMLElement = <HTMLElement> document.getElementsByClassName('contenedor-2007-2008')[0];
let contenedor_2009_2011:HTMLElement = <HTMLElement> document.getElementsByClassName('contenedor-2009-2011')[0];
let contenedor_2012:HTMLElement = <HTMLElement> document.getElementsByClassName('contenedor-2012')[0];
let contenedor_2013:HTMLElement = <HTMLElement> document.getElementsByClassName('contenedor-2013')[0];
let contenedor_2014:HTMLElement = <HTMLElement> document.getElementsByClassName('contenedor-2014')[0];
let contenedor_2015:HTMLElement = <HTMLElement> document.getElementsByClassName('contenedor-2015')[0];
let contenedor_2016:HTMLElement = <HTMLElement> document.getElementsByClassName('contenedor-2016')[0];
let contenedor_2017_2025:HTMLElement = <HTMLElement> document.getElementsByClassName('contenedor-2017-2025')[0];

//Elementos a ocultar por contenedor accionado
let hidden_contenedor_1970:HTMLElement[] = [contenedor_1971,contenedor_2017_2025,contenedor_2016,contenedor_2015,contenedor_1997, contenedor_1995, contenedor_1993_1994,contenedor_1989];
let hidden_contenedor_1971:HTMLElement[] = [contenedor_2016,contenedor_2015,contenedor_1997,contenedor_1993_1994,contenedor_1989,contenedor_1995,contenedor_2014,contenedor_2000_2001];
let hidden_contenedor_1972:HTMLElement[] = [contenedor_1989,contenedor_1978_1985];
let hidden_contenedor_1973:HTMLElement[] = [contenedor_1974_1977,contenedor_1978_1985,contenedor_1989];
let hidden_contenedor_1974_1977:HTMLElement[] = [contenedor_1978_1985,contenedor_1989];
let hidden_contenedor_1978_1985:HTMLElement[] = [contenedor_1989];
let hidden_contenedor_2009_2011:HTMLElement[] = [contenedor_2015,contenedor_2014];
let hidden_contenedor_2012:HTMLElement[] = [contenedor_2015,contenedor_2014];

//funciones
function hidden(contenedores:HTMLElement[]) {
    for (let contenedor of contenedores) {
      contenedor.classList.add('visibility-hidden');
    }
}

function show(contenedores:HTMLElement[]){
  for (let contenedor of contenedores) {
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
