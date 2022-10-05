//1. Crear una variable de tu nombre y ponerle un valor

let miNombre = "Mauro";

//2.    Crear una variable llamada miApellido y guardar en ella su apellido.

let miApellido = "Harretche";

//3.    Crear una variable llamada miEdad y guardar en ella su edad.

let miEdad = 24;

//4.    Crear una variable llamada miMascota y guardar en ella el nombre de su mascota.

let miMascota = "Dona"

//5.    Crear una variable llamada edadMascota y guardar en ella la edad de la mascota.

let edadMascota = 3;

//6.    Visualizar todas las variables dentro de la consola del navegador escribiendo el nombre de cada una de ellas.

console.log(miNombre)
console.log(miApellido)
console.log(miEdad)
console.log(miMascota)
console.log(edadMascota)

//7.    Crear una variable llamada nombreCompleto y guardar en ella la concatenación de miNombre y miApellido.

let miNombreCompleto = miNombre + " " + miApellido
console.log(miNombreCompleto)

//8.    Crear una variable llamada textoPresentacion y guardar en ella un texto comprendido con todas las variables creadas hasta el momento.

let textoPresentacion = "Mi nombre es " + miNombreCompleto + ". Tengo " + miEdad + " años." + "Mi mascota es " + miMascota + " y tiene " + edadMascota + " años."

console.log(textoPresentacion)

//9.    Crear una variable sumaEdades, restaEdades, productoEdades, divisionEdades y calcular sus respectivas operaciones con las variables miEdad y edadMascota.

let sumaEdades = miEdad + edadMascota 
let restaEdades = miEdad - edadMascota 
let productoEdades = miEdad * edadMascota 

//10.    Realizar la carga de las variables del punto 1 al 5 utilizando prompt() y luego ejecutar el código correspondiente para realizar los puntos del 6 al 9 con los datos cargados.
miNombre = prompt("ingrese su nombre")
miApellido = prompt("ingrese su apellido")
miEdad = Number(prompt("ingrese su edad"))
miMascota = prompt("ingrese el nombre de su mascota")
edadMascota = Number(prompt("ingrese la edad de su mascota"))
console.log(miNombre, miApellido, miEdad, miMascota, edadMascota);

//11.    Crear un objeto llamado alumno con un mínimo de 5 propiedades, mostrar dicho objeto utilizando console.table() y también mostrar cada una de las propiedades del objeto por separado.

let alumno = {
    nombre: 'Bruno',
    apellido: 'Buonassisa',
    edad: 20,
    altura: '182cm',
    peso: '80kg'
}

console.table(alumno); 
console.log(alumno.edad, alumno.apellido, alumno.edad, alumno.altura, alumno.peso);

//12.    Crear un objeto llamado mascota con un mínimo de 5 propiedades, mostrar dicho objeto utilizando console.table() y también mostrar cada una de las propiedades del objeto por separado.
let mascota ={
    nombre: "lulu",
    edad: 2,
    genero: "Hembra",
    raza: "Siames",
    tipo: "Gato",
};
console.table(mascota); 
console.log(mascota.nombre, mascota.edad, mascota.genero, mascota.raza, mascota.tipo);

//CESAR 13.    Crear un array llamado frutas con un mínimo de 5 elementos y mostrar por consola el array completo y cada uno de los elementos por separado.
let frutas = ["banana","pera","uva","manzana","durazno"]
console.log(frutas);
console.log(frutas[0],frutas[1],frutas[2],frutas[3],frutas[4]);
//MAURO 14.    Crear un array llamado números con un mínimo de 5 elementos y mostrar por consola el array completo y cada uno de los elementos por separado.
let numeros = [ 2 ,4, 6, 8, 10 ]
console.log(numeros)
console.log(numeros[0],numeros[1],numeros[2],numeros[3],numeros[4])
//GABI 15.    Crear un array llamado familia con un mínimo de 5 objetos y mostrar por consola el array completo y cada uno de los elementos por separado.
let familia = [
    {
        nombre: 'Gabriel',
        edad: 22
    },
    {
        nombre: 'Anto'
    },
    {
        nombre:'Cesar'
    },
    {
        nombre:'Mauro'
    },
    {
        nombre:'Bruno'
    },
]
console.log(familia)
console.log(familia[0], familia[1], familia[2], familia[3], familia[4])
//ANTO 16.    Crear una variable llamada textoAleatorio formando una frase con el segundo elemento del array del punto 13, el cuarto elemento del punto 14 y el quinto objeto del array del punto 15.