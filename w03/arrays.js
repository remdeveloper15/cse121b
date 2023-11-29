//Arrays
//Los arreglos o listas son un conjunto de elementos encerrados en una lista. En este ejemplo creamos un array llamado frutas. Los arrays se definen usando corchete "[]" 
let frutas = ["banana", "manzana", "pera"]
document.write(frutas)

//Los elementos se empiezan a contar desde 0. En el array anterior la posicion del elemento "banana" es 0. Puedes acceder a cada uno de los elementos de la lista, usando su posicion. Para esto ponemos el nombre del array y luego entre parentesis el numero de item con el queremos interactuar. 
document.write(frutas[0])

//Arrays asociativos
//Es un arrays con un valor asociado. Para definir un array asociativo se usan las llaves {}.
//Seguidamente se declaran sus caracteristicas, y se les asigna un valor, cada caracteristica se separa con una coma ",".
let pc = {
    nombre: "Helaman PC",
    procesador: "Intel Core I9",
    ram: "8GB",
    espacio: "1TB",
}

//Para interactuar con los elementos de este tipo de array, escribimos la caracteristica especifica que queremos mostrar.
document.write(pc["nombre"]);
document.write(pc["ram"]); 

//Podemos asignar cada una de las caracteristicas a una variable para luego usarla en diferentes operaciones c:
let nombre = pc["nombre"];
let procesador = pc["procesador"];
let ram = pc["ram"];
let espacio = pc["espacio"]

frase = `<br> El nombre de mi PC es: ${nombre} <br> El procesador es: ${procesador} <br> La memoria es: ${ram} <br> El Almacenamiento es: ${espacio}`;
document.write(frase);