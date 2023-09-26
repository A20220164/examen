var nombre = prompt("Hola\nCuál es tu nombre: ");
alert(nombre+",bienvenido informatica examen ");
var res1 = prompt("¿Cuánta agua hay en la Tierra?\A. Alrededor de un 41% de la superficie terrestre es agua.\B. Alrededor de un 51% de la superficie terrestre es agua\C. Alrededor de un 71% de la superficie terrestre es agua");
if (res1 == "C"){
    res1 = 25;
}else if(resl == "A"){
    res1 = 0;
}else if(res1 == "B"){
    res1 = 0;
}else{
    alert(nombre+", esa no es uan opcion valida")
}

var res2 = prompt("¿Qué océano es el más grande?\A. El Pacífico \B. El Atlántico\C. El Índico");
if (res2 == "A"){
    res2 = 25;
}else if(res2 == "B"){
    res2 = 0;
}else if(res2 == "C"){
    res2 = 0;
}else{
    alert(nombre+", esa no es uan opcion valida")
}

var res3 = prompt("¿Cuánto mide la parte más profunda de los Océanos?\A. 11 Km \B. 23 Km\C. 31 Km");
if (res3 == "A"){
    res3 = 25;
}else if(res3 == "B"){
    res3 = 0;
}else if(res3 == "C"){
    res1 = 0;
}else{
    alert(nombre+", esa no es uan opcion valida")
}
var total = resl + res2 + res3

document.write(nombre+", conseguiste un puntaje de: "+total)
if (total == 3){
    prompt(nombre+",Lo has hecho bien")
}else if(total == 2){
    prompt(nombre+",Puedes hacerlo mejor")
}else if(total == 1/0){
    prompt(nombre+",Vuelve a intentarlo")
}
