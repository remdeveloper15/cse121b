//Un condicional permite que un bloque se ejecute si una condicion establecida previamente se cumple. En el ejemplo se estable una declaracion if, en donde se dice que 2 es menor que 4, y si es asi, el programa ejucata la funcion document.write, caso contrario no lo ejecutara nunca. En este caso 2 si es menor a 4, por lo que se ejecuta la funcion.  

if (2 < 4)
{
    document.write(":O");
}

//Entre estos estan: 
//if
//else if
//else

//if sirve para declarar si una condicion se cumple, y si es asi el proceso que este dentro del bloque if, se ejecutara 
nombre = "Helaman Franco";
if (nombre == "Helaman Franco Reyes")
{
    document.write("En efecto, es igual.")
}

//else if sirve para agregar una condicion mas
else if (nombre == "Helaman")
{
    document.write("Tu nombre es Helaman");
}

//else sirve para que si las otras condicones no se cumplen, entonces ejecute esto
else
{
    document.write("No tienes nombre :(")
}

 