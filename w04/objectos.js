//PROGRAMACION ORIENTADO A OBJECTOS POO

//CLASE
//Una clase es una receta, o instrucciones, o ene otras palabras, un crador un objeto

//OBJETO
//Es el resultado de las instrucciones dadas por una clase. 

//ATRIBUTO
//Son las caracteisticas de los objectos.

//METODO
//Son las funciones o instrucciones detalladas que se ecuentran dentro de la clase.

//Contructor
//Una particularidar que tienen las clases, una funcion obligatoria.

//Instanciación
//Una vez que la clase esta terminada, se puede decir que esta instanciada.


//Aqui creamos la clase Animal
class Animal {

    //Definimos el contructor donde tambien le agregamos los atributos. En este caso son especie, edad y color
    constructor(especie, edad, color)
    {
        //Usamos la palabra reservada "this" para asignarles un valor a cada uno de los atributos
        this.especie = especie;
        this.color = color;
        this.edad = edad;
        this.informacion = `Soy un: ${this.especie}, tengo: ${this.edad} y soy de color: ${this.color}`
    }

    //Este es un metodo para desplegar la informacion del animal.
    verInfo(){
        document.write(this.informacion + "<br>")
    }
}



//document.write(perro.informacion + "<br>");
//document.write(gato.informacion + "<br>");
//document.write(pajaro.informacion + "<br>");

//ABSTRACCION
//Reducir el objecto a lo mas basico. Tanto los metodos como las caracteristicas.


//MODULARIDAD
//La capacidad de resolver problemas por partes o modulos

//ENCAPSULAMIENTO
//El encapsulamiento sirve para limitar el acceso a los datos

//POLIMORFISMO
//Como el metodo de comporta de manera distinta, dependiendo el objeto. Como se comporta el objeto de acuerdo a sus propiedades.

//HERENCIA
//Las clases de herencia se usan para heredar caracteristicas usando el prencipio de "es un". En este caso se crea una clase de herencia que es "Perro". Para definir que es un herencia usamos la palabra reservada "extends" seguido de el nombre de la clase de la cual se hereda, en este caso "Animal".
class Perro extends Animal {
    //Se agrega un constructor y agregamos los atributos que vamos a usar, en este caso los tres de la clase "Animal" y uno nuevo llamado "raza". Para definir que los tres atributos son heredados usamos la plabra reservada "super".
    constructor(especie, edad, color, raza){
        super(especie, edad, color);
        this.raza = raza;
    }

    ladrar()
    {
        alert("¡WAW!")
    }
}

//Aqui creamos un nuevo objeto usando la clase "Perro" y "Animal"
let perro = new Perro("perro", 12, "verde", "doberman");
let gato = new Animal("gato", 1, "negro");
let pajaro = new Animal("pajaro", 5, "rojo");

//Finalmente les llamamos.
perro.ladrar();
perro.verInfo();
gato.verInfo();
pajaro.verInfo();




