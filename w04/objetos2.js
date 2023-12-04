//OBJETOS

//Un objecto es una coleccion de datos o funciones relacionadas. Estas usualmente consisten de muchas variables y funciones (las cuales son llamadas propiedades o metodos cuando estan dentro un objecto).

let person = 
{
    name: "Helaman Franco",
    age: 19,
    profession: "Secretary",
    hobbies: ["Traveling", "Cry", "Read manga"],
    addres: 
    {
        street: "Av. El Petrolero",
        city: "Santa Elena",
        country: "Ecuador"
    },
    isEmployed: true,
    greet: function()
    {
        document.write(`Hello, my name is ${this.name}`);
    }

};

//Ejemplo de como no se debe hacer - B2

let names = ['Lactated Ringers','levothyroxine','rosuvastatin','albuterol','esomeprazole']
let amounts = ['100L','2000ct','1500ct','1325ct','23145ct']
let codes = ['13ab7','at342','gr5423','iuy6532','mnb78932']
let expDateDate = ['12/30/2029','03/18/2021','09/01/2020','01/01/2023','10/01/2021']

//Ejemplo de una mejor organizacion, pero igual de ineficiente - B2

let medications1 = [
	['Lactated Ringers','levothyroxine','rosuvastatin','albuterol','esomeprazole'],
	['100L','2000ct','1500ct','1325ct','23145ct'],
	['13ab7','at342','gr5423','iuy6532','mnb78932'],
	['12/30/2029','03/18/2021','09/01/2020','01/01/2023','10/01/2021']
]

//Forma definitiva de hacerlo - B2

let lactatedRingers = {'id':'13ab7','amount':100,'amountType':'L','expDate':'12/30/2029'}
let levothyroxine = {'id':'at342','amount':2000,'amountType':'ct','expDate':'03/18/2021'}
let rosuvastatin = {'id':'gr5423','amount':1500,'amountType':'ct','expDate':'09/01/2020'}
let albuterol = {'id':'iuy6532','amount':1325,'amountType':'ct','expDate':'01/01/2023'}
let esomeprazole = {'id':'mnb78932','amount':23145,'amountType':'ct','expDate':'10/01/2021'}

//Accediendo a los datos de la variable rosuvastatin, especificamente su cantidad.
let anAmount = rosuvastatin['amount']

//Tambien podemos cambiar el valor de los datos de la siguiente forma
rosuvastatin['amount'] = 1455

//Aunque es un buena forma de hacerlo, sera mejor crear un array de objetos definidos que encerrie todos los objetos definidos, en este caso se llamara "medicaitons"

let medications = {
	'Lactated Ringers' : {'id':'13ab7','amount':100,'amountType':'L','expDate':'12/30/2029'},
	'Levothyroxine' : {'id':'at342','amount':2000,'amountType':'ct','expDate':'03/18/2021'},
	'Rosuvastatin' : {'id':'gr5423','amount':1500,'amountType':'ct','expDate':'09/01/2020'},
	'Albuterol' : {'id':'iuy6532','amount':1325,'amountType':'ct','expDate':'01/01/2023'},
	'Esomeprazole' : {'id':'mnb78932','amount':23145,'amountType':'ct','expDate':'10/01/2021'}
}

//Mediante este codigo podemos acceder a las variables de este array
let aBerstByDate1 = medications["Albuterol"]["expDate"];

//Tambien se pueden usar puntos, pero estos solo funcionaran cuando los valores de los arrays ya esten predefinidos.

let aBerstByDate2 = medications.Albuterol.expDate

//E incluso cambiar el valor de las propiedades
medications.Albuterol.amount = 1432

const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        {sectionNum: 1, roomNum: "STC 353", enrolled: 26, days: "TTh", instructor: "Bro T"},
        {sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
    ],
};



