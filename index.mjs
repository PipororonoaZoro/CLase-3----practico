import { leerSuperheroes, agregarSuperheroes } from './utils.mjs';

const archivoOriginal = './superheroes.txt';
const archivoNuevo = './agregarSuperheroes.txt';

// Agregar nuevos superhéroes
agregarSuperheroes(archivoOriginal, archivoNuevo);

// Leer y mostrar la lista actualizada
const superheroes = leerSuperheroes(archivoOriginal);
console.log('Superhéroes ordenados:');
console.log(superheroes);