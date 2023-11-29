//Bucles
//Los bucles son un proceso que se repiten de manera indefinada hasta que una condicion se cumpla. 
//Los tipos e bucles son:
//-while
//-do while
//-for
//-for in
//-for of

//while es un bucle que establece que mientras una condicion se cumpla se repita de manera indefinida, hasta que la condicion ya no se cumpla

//En este ejemplo el bucle creamos un bucle while el cual decalra lo siguiente. Mientras la variable numero sea menor a 10 entonces se escribira en la pantalla la variable numero. Dado que numero es 0, y por lo tanto menor a 10, el bucle se ejecutara de manera infinita. Para evitar esto adicionamos un 1 por cada ves que se repita el bucle, de esta manera la variable numero se sumara hasta llegar a 10, entonces el bucle se terminara.

let numero = 0;

while (numero < 10) {

    numero++;

    document.write(numero);
}

//Do while es un tipo de bucle donde primero se ejecuta, y luego se pregunta. Se usa mas para cuando quiere hacer un proceso y luego verificar si la condicion se comple, y si no se este se rompe.

let numero2 = 0;

do {
    
    document.write(numero2 + "<br>");
    numero2++;
} 
while(numero2 <= 6)

//For es un bucle el cual se repetira una determinada cantidad de veces. Un bucle for tiene 3 fases.
//-Declaracion
//-Condicion
//-iteracion
//El bucle for ingresa tres valores, el primero que es la declaración es en donde creamos una variable y le declaramos un valor, la cual solo sera valida dentro del bucle for
//Luego viene la condicion. En el ejemplo la condion es que si "i" es menor a 0, el bucle se ejecutara
//Por ultimo la iteracion, ya sea decremento o incremento. 
for (let i = 0; i < 6; i++)
{
    document.write(i + "<br>")
}

//for in se usa mas para arrays, y retorna la poscion de los elementos

let animales = ["gato", "perro", "tiranosaurio rex"]

for (animal in animales)
{
    document.write(animal + "<br>");
}

//for of se usa mas para arrayys, y retorna los elementos de la array.
for (animal of animales)
{
    document.write(animal + "<br>");
}