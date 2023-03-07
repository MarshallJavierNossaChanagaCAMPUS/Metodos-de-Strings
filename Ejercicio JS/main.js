const tabla = {
    a:{note:4.0,text:'Su nota es de 90-100 en el sistema tradicional, de 12-14 en el sistema de rango, A en sistema americano, y 4 en sistema SBG, Felicitaciones, eres un master pro'},
    b:{note:3.0,text:'Su nota es de 80-89 en el sistema tradicional, de 9-11 en el sistema de rango, B en sistema americano, y 3 en sistema SBG, Felicitaciones, eres un master'},
    c:{note:2.0,text:'Su nota es de 70-79 en el sistema tradicional, de 6-8 en el sistema de rango, C en sistema americano, y 2 en sistema SBG, Felicitaciones, eres un pro'},
    d:{note:1.0,text:"Su nota es de 60-69 en el sistema tradicional, de 3-5 en el sistema de rango, D en sistema americano, y 1 en sistema SBG, Felicitaciones, eres un casi pro"},
    e:{note:0.0,text:'Su nota es de 1-60 en el sistema tradicional, de 1-2 en el sistema de rango, E en sistema americano, y 0 en sistema SBG, Felicitaciones, lo intentaste'},
    f:{note:0.0,text:"Su nota es de 0 en el sistema tradicional, de 0 en el sistema de rango, F en sistema americano, y 0 en sistema SBG, Felicitaciones, se fue PFC"},
    error:{ msg:"Introduzca un valor valido"}
}

console.table(tabla)
var seleccion;
seleccion = prompt("Escoja su tipo de nota (1, 2, 3) (1:Tradicional 1-100, 2:14 Point Range, 3:SBG")
var nota; 
nota = prompt("Introduzca su nota: ")
let select = parseInt(seleccion)
let calificacion

switch (select) {
    case 1:
        if ( nota>= 90 && nota<=100) {
            calificacion = tabla.a;
        }else if (nota>= 80 && nota<=89) {
            calificacion = tabla.b;
        }else if (nota>= 70 && nota<=79) {
            calificacion = tabla.c;
        }else if (nota>= 60 && nota<=69) {
            calificacion = tabla.d;
        }else if (nota < 60) {
            calificacion = tabla.e;
        }else if(nota == 0 ){
            calificacion = tabla.f;
        }else{
            calificacion = tabla.error
        };
        break;
    case 2: 
        if ( nota>= 12 && nota<=14) {
            calificacion = tabla.a;
        }else if (nota>= 9 && nota<=11) {
            calificacion = tabla.b;
        }else if (nota>= 6 && nota<=8) {
            calificacion = tabla.c;
        }else if (nota>= 3 && nota<=5) {
            calificacion = tabla.d;
        }else if (nota>= 1 && nota <=2) {
            calificacion = tabla.e;
        }else if (nota == 0 ) {
            calificacion = tabla.f;
        }else{
            calificacion = tabla.error;
        };
        break;
    case 3: 
        let notaU = nota.toUpperCase();
        if ( notaU === "4" ) {
            calificacion = tabla.a;
        }else if (notaU === "3"){
            calificacion = tabla.b;
        }else if (notaU === "2") {
            calificacion = tabla.c;
        }else if (notaU === "1") {
            calificacion = tabla.d;
        }else if (notaU === "0") {
            calificacion = tabla.e;
        }else if(notaU === "0"){
            calificacion = tabla.f;
        }else{
            calificacion = tabla.error;
        };
        break;
    default:
        break;
}

if (!calificacion.msg) {
    alert(`Su nota es: ${calificacion.note}\nmensaje: ${calificacion.text}`)
}
else {
    alert(`Advertencia: ${calificacion.msg}`)
}