class Celulares {
    constructor(color, peso, resolucion, camara, memoria)
    {
        this.color = color;
        this.peso = peso;
        this.resolucion = resolucion;
        this.camara = camara;
        this.memoria = memoria;
        this.info = `Color: ${this.color} <br> Peso: ${this.peso} <br> Resolucion De Pantalla: ${this.resolucion} <br> Resolucion de Camara: ${this.camara} <br> Almacenamiento ${this.memoria} <br>`
    }

    displayInfo()
    {
        let cantida = 0

        document.write(this.info + "<br>")

    }
}

let celular1 = new Celulares("Sky Blue", "20kg", "720×1280 píxeles",  "108MP", "250GB" )

let celular2 = new Celulares("Metal Red", "30kg", "500×1280 píxeles",  "90MP", "500GB" )

let celular3 = new Celulares("Pink", "10kg", "1080×1280 píxeles", "208MP", "100GB" )

celular1.displayInfo();
celular2.displayInfo();
celular3.displayInfo();