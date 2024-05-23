//  variables

let persona: string = 'John';

const nombres = ['John', 'Paul', 'Ringo', 'George'];

// Objetos
const personas = {
    name: 'John',
    age: 30
}

const booleano: boolean = true;

const numeros: number = 10;

const hoy: Date = new Date();

// Arreglos
const arreglo: string[] = [];

// En typescript hay que intentar no usar el tipo any

console.log(persona);


// cuando no sabe inferir un tipo de dato, se le puede asignar any

let a;

// No es necesario especificar el tipo de dato, typescript lo infiere.
// Pero en algunos casos es necesario especificar el tipo de dato.

// Funciones

function saludar(nombre: string): string {
    return `Hola ${nombre}`;
}

function saludar2(nombre: string): void {
    console.log(`Hola ${nombre}`);
}


// parametros que sean objetos
function saludar3({ name, age }: { name: string, age: string }): void {
    console.log(`Hola ${name} de ${age} años`);
}

// con arrow function

const sumar = (a: number, b: number): number => {
    return a + b;
}

// inferencia funciones anonimas segun el contexto

const avengers = ['Thor', 'Ironman', 'Spiderman'];

avengers.forEach(avenger => {
    console.log(avenger.toUpperCase());
});

// Objetos 

let ironman: { name: string, age: number, powers: string[] } = {
    name: 'Tony Stark',
    age: 45,
    powers: ['Volar', 'Lanzar misiles']
}