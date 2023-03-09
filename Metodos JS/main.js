// Metodo "length", Nos dice el número de caracteres en una cadena

hola = "Hola soy una cadena";

console.log(hola.length);


//Metodo "includes", Nos devuelve false o true si la cadena contiene el caracter especificado

nombre = "Marshall";

console.log(nombre.includes("R"));


//Metodo "startsWith", Nos devuelve false o true si la cadena empieza por el o los caracteres especificados

apellido = "Nossa";

console.log(apellido.startsWith("n"));

//Aqui retorna un false porque las mayusculas poseen mucha importancia en JS


//Metodo "endsWith", Nos devuelve false o true si la cadena termina por el o los caracteres especificados

pc = "si es pc";

console.log(pc.endsWith("pc"));

//En este metodo cuando se quiere usar mas de un caracter se tienen que poner en el orden en el que están en la cadena, de l contrario retornará false


//Metodo "replace", con este metodo podemos reemplazar caracteres o palabras de una cadena y nos retornara una cadena nueva con las instrucciones que le dimos

cadena = "Esto es una cadena, bueno, mas o menos cadena";

console.log(cadena.replace('cadena', 'cadenita'));

//El primer argumento es el caracter o caracteres que se quieren reemplazar y el segundo es lo que pondrá en cambio del primero (esto solo reemplazara la primer coincidencia, de haber mas no se verán afectadas)

//Para poder reemplazar todas las coincidencias o caracteres se debe usar el metodo "replaceAll"

console.log(cadena.replaceAll('cadena', 'cadenita'));


//Metodo "slice", extrae una parte de la cadena y devuelve una nueva (se debe especificar en el primer argumento de que parte de la cadena empezara a extraer y en el segundo argumento en que parte terminar[a la extraccion)

cadenota = "Esta cadena debe ser lo suficientemente larga para poder explicar el metodo";
cadenota2 = cadenota.slice(12,34);

console.log(cadenota2);


//Metodo "substring", Devuelve un subconjunto de una cadena (La diferencia entre "substring" y "slice" es que "substring" devuelve un subconjunto de una cadena, y "slice" extrae una sección de una cadena y devuelve una cadena nueva.)

denuevoxd = "Esta cadena debe ser lo suficientemente larga para poder explicar el metodo";

console.log(denuevoxd.substring(12,34));


//Metodo "repeat", este metodo repite la cadena la cantidad de veces que especifiquemos

repetir = "Im slim shady ";

console.log(repetir.repeat(5));


//Metodo "charAt", devuelve el caracter de la posición especificada

ejemplo = "Example";

console.log(ejemplo.charAt(4));


//Metodo "indexOf", Devuelve la posicion en la cadena por texto

chao = "chao chaito";

console.log(chao.indexOf("c"));

//Si hay mas de un caracter se puede especificar que posicion se desea tener

console.log(chao.indexOf("c", 1));


//Metodo "lastIndexOf", funciona igual al anterior pero analizando de derecha a izquierda

console.log(chao.lastIndexOf("c"));

console.log(chao.lastIndexOf("c", 1));


//Metodo "search" y "match", search hace una busqueda entre una expresion regular y una cadena y devuelve la posicio de la primera ocurrencia encontrada, el metodo match devuelve un array con las coincidencias encontradas

linea = "La niña y la piña.";
re = /.i.a/;

console.log(linea.search(re));
console.log(linea.match(re));


//Metodo "toLowerCase", devuelve la cadena convertida en minusculas

minus = "ESTO ESTA ES MAYUSCULAS"

console.log(minus.toLowerCase())


//Metodo "toUpperCase", devuelve la cadena convertida en mayusculas

mayus = "esto esta en minusculas"

console.log(mayus.toUpperCase())


//Metodo "padStart" y "padEnd", el metodo "padStart" rellena la cadena a partir del inicio con el texto que se desee (implica 2 argumentos, size y text, el argumento size determina la cantidad de caracteres que se desea tener en la cadena y text el texto de relleno que se utilizara), el metodo "padEnd" hace exactamente lo mismo pero de derecha a izquierda

padstart = "58"

console.log(padstart.padStart(10, "0"))
console.log(padstart.padEnd(10, "0"))


//Metodo "trim" "trimStart" y "trimEnd",el metodo "trim" elimina los espacios a la izquierda y a la derecha del texto, el metodo "trimStart" elimina los espacios a la izquierda del texto y el metodo "trimEnd" elimina espacios a la derecha del texto

trim = "     Por que es ese el caso?        "
trim2 = "     Por que es ese el caso?"
trim3 = "Por que es ese el caso?    "

console.log(trim.trim())
console.log(trim2.trimStart())
console.log(trim3.trimEnd())


//Metodo "concat", devuelve la cadena unida a los textos que se les especifique

conc = "Hola "

console.log(conc.concat("soy ", "Marshall"))