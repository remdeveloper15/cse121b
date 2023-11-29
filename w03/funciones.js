//Funciones
//Una funcion es una porcion de codigo, con determinadas tareas el cual puede ser llamado tantas veces como se desea, haciendo uso de un nombre asignado. 

//Para declarar una funcion usamos la palabra reservada "function", seguido del nombre de la funcion que queramos ponerle y por ultimo parentesis en donde iran parametros en caso de necesitarlo.

function saludar()
{
    let pregunta = prompt("Hola Lucas ¿Como fue tu día?");
    
    if (pregunta == "bien")
    {
        alert("Me alegro!");
    } 
    
    else
    {
        alert("Che Lucas, que mal...");
    }

    return "Si funciona we :O"
}

//Aqui llamamos a la funcion mediante el nombre de la misma. 
saludar();


//Tambien usamos la palabra reservada return para devolver un valor una vez la funcion termine.

let saludo = saludar(); 
document.write(saludo);

//Las funciones aceptan parametros. Para esto definimos las variables cuando hacemos la funcion. Luego cuando llamemos a la funcion les asignamos un valor a las variables.


function suma(num1, num2)
{
    let res = num1 + num2;
    document.write(res);
    document.write("<br>")
}

suma(12, 32)
suma(1, 2)

//Exsiten mas formas de crear una funcion. Una de ellas es crear una variable y darle el valor de la funcion

const hola = function(nombre)
{
    let hello = `Hola ${nombre}. ¿Como te ha ido?`
    document.write("<br>")
    document.write(hello)

}

hola("Helaman")

//La otra manera es mediante las funciones flecha

const fullName = (first, last)=>
{
    let despido = `${first} ${last}`;
    document.write(despido)
    return despido
}

fullName("Helaman", "Franco");