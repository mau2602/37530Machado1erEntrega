
// DESARROLLO DE UNA PLATAFORMA DE ALQUILER DE MOTOS.

// Solicitamos al usuario que ingrese sus datos, moto deseada, ciudad, casco extra y duración del alquiler.
var nombre1 = ("Mauro Machado");//prompt
var correo1 = ("coderhouse@coder.com");//prompt
var bikes = parseInt(prompt("Seleccione la moto que desee. \n1. Yamaha dMax 300cc \n2. Honda PCX 125cc \n3. Aprilia Motard 150cc \n4. Kawasaki Ninja 650cc \n5. Vespa Primavera 125cc"));
const rentTime = parseInt(prompt("Cuantas semanas desea alquilar?"));
const geoLoc = ("Palma de Mallorca");//prompt
var extraHelmet = ("si");//prompt
extraHelmet = extraHelmet.toLowerCase();

function Moto (marca, modelo, cilindrada, precio){
    
    this.marca = marca;
    this.modelo = modelo;
    this.cilindrada = cilindrada;
    this.precio = precio;
    this.disponible = true;
    this.eliminar = () => {
        this.disponible = false;
    }
}
// OBJETO YAMAHA
const yamaha = new Moto ("Yamaha", "dMax", 300, 175);

//OBJETO HONDA
const honda = new Moto ("Honda", "PCX", 125, 140);

//OBJETO APRILIA
const aprilia = new Moto ("Aprilia", "Motard", 150, 155);

//OBJETO KAWASAKI
const kawasaki = new Moto ("Kawasaki", "Ninja", 650, 400);

//OBJETO VESPA
const vespa = new Moto ("Vespa", "Primavera", 125, 125);

var bikeStock = [yamaha, honda, aprilia, kawasaki, vespa];

// Asignacion del objeto moto a la eleccion del cliente
if (bikes === 1){
    var moto = yamaha;
} else if (bikes === 2){
    moto = honda;
} else if (bikes === 3){
    moto = aprilia;
} else if (bikes === 4){
    moto = kawasaki;
} else if (bikes === 5){
    moto = vespa;
}
class Cliente {
    constructor (nombre, correo){
        this.nombre = nombre;
        this.correo = correo;
        this.newMoto = null;

        this.addMoto = () => {
            if ( moto.disponible ) {
                this.newMoto = moto;
                moto.eliminar();
            } else {
                console.log(`La moto no esta disponible`);
            }
            
         this.finalPrice = () => {
                 alert(`Has alquilado la moto ${this.newMoto.marca} por ${rentTime} semanas, en la ciudad de ${geoLoc}. El precio final es: $ ${((this.newMoto.precio * rentTime) + extraHelmet)}`)
             }

         this.informeInterno = () => {
                 console.log(`INFORMACION ALQUILER\n\nDATOS CLIENTE.\nNombre: ${nombre1} \nCorreo electronico: ${correo1}\n\nDATOS VEHICULO\nMarca: ${this.newMoto.marca}\nModelo: ${this.newMoto.modelo}\nCilindrada: ${this.newMoto.cilindrada}\nFecha de alquiler: ${fechaHoy}\nFecha devolucion: ${devolucion}`)
         }
    }
    }
}
if (extraHelmet === "si"){
    extraHelmet = 10;
} else {
    extraHelmet = 0;
}

const cliente1 = new Cliente(nombre1, correo1);

// obtenemos las fechas de alquiler y devolucion de la moto
var fecha = new Date ( Date.now());
var dd = fecha.getDate();
var mm = fecha.getMonth();
var yyyy = fecha.getFullYear();

var fechaHoy = dd + '/' + mm + '/' + yyyy;

var fechaDevolucion = (rentTime * 7);
var targetDate = new Date();
targetDate.setDate(targetDate.getDate() + fechaDevolucion);
var dd2 = targetDate.getDate();
var mm2 = targetDate.getMonth() + 1; 
var yyyy2 = targetDate.getFullYear();

var devolucion = dd2 + "/" + mm2 + "/" + yyyy2;

 cliente1.addMoto();
 cliente1.finalPrice();
 cliente1.informeInterno();

 // LISTA DE CLIENTES PARA FINES INTERNOS Y DE MARKETING
/* dejamos todo listo para una eventual base de datos de clientes.

var clientsList = [];
clientsList.push(cliente1);
console.log(clientsList);
*/
