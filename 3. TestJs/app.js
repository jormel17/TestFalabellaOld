
//Test1//
function Sumar(a,b) 
{return a+b;}
Sumar(10,5); 
console.log(Sumar(10,5));  //El resultado es 15

//test2//
function  Producto (a,b){
    var c = 20;
    return a*b*c;
}
    Producto(2,5);
console.log(Producto(2,5));  //el resultado es 200

//Test3//

/*function Persona (nombre, apellido, telefono, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this. telefono = telefono;
    this.email = email;

}
var ObjePersona = new Persona ("Juan", "Perez", "900199703", "juan.perez@gmail.com");

console.log (ObjePersona);*/


var Persona = {
    nombre: "Juan",
    apellido: "Perez",
    telefono: "900199703",
    email: "juan.perez@gmail.com"
    }
function ObjPersona(){return Persona;}

console.log(ObjPersona().nombre, ObjPersona().apellido, ObjPersona().telefono, ObjPersona().email);