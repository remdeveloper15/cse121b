//METODOS ESTATICOS

//Es un metodo que no necesita que la clase se defina para poder ser creado. Por lo general son metodos que no necesitan usar los atributos

class Persona 
{
    constructor (nombre, edad, genero)
    {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }

    info()
    {
        let info = `Nombre: ${this.nombre} <br> Edad: ${this.edad} años <br> Genero ${this.genero}`
        document.write(info);
    }

    //Para definir un metodo estatico usamos la palabra reservada static. Recuerda que los metodo estaticos no hacen uso de los atributos. En este caso esta funcion unicamente despliega un mensaje.
    static laChichaMasHermosa()
    {
        alert("Estas apunto de ver a la chica mas hermosa del mundo!");
    }
}

let persona = new Persona("Rubi", 17, "Femenino");
persona.info();
Persona.laChichaMasHermosa();

