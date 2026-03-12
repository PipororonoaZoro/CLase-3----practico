import fs from 'fs';

// Clase para representar un Superhéroe
class Superheroe
{
    constructor(id, nombreSuperheroe, nombreReal, nombreSociedad, edad, planetaOrigen, debilidad, poder, habilidadEspecial, aliado, enemigo)
    {
        this.id = id;
        this.nombreSuperheroe = nombreSuperheroe;
        this.nombreReal = nombreReal;
        this.nombreSociedad = nombreSociedad;
        this.edad = edad;
        this.planetaOrigen = planetaOrigen;
        this.debilidad = debilidad;
        this.poder = poder;
        this.habilidadEspecial = habilidadEspecial;
        this.aliado = aliado;
        this.enemigo = enemigo;
    }

}

// Funcion para leer y ordenar los superhéroes
export function leerSuperheroes(ruta) {
    const datos = fs.readFileSync(ruta, 'utf8');
    const superheroesArray = JSON.parse(datos);

    // Convertir a instancias de Superheroe
    const superheroes = superheroesArray.map(hero => new Superheroe(hero.id, hero.nombreSuperheroe, hero.nombreReal, hero.nombreSociedad, hero.edad, hero.planetaOrigen, hero.debilidad, hero.poder, hero.habilidadEspecial, hero.aliado, hero.enemigo));

    // Ordenar por nombre superhéroe
    superheroes.sort((a, b) => a.nombreSuperheroe.localeCompare(b.nombreSuperheroe));

    return superheroes;
}

// Nueva funcion para agregar superhéroes
export function agregarSuperheroes(rutaOriginal, rutaNueva) {
    const datosOriginales = fs.readFileSync(rutaOriginal, 'utf8');
    const datosNuevos = fs.readFileSync(rutaNueva, 'utf8');

    const superheroesOriginales = JSON.parse(datosOriginales);
    const nuevosSuperheroes = JSON.parse(datosNuevos);

    // Convertir los nuevos superhéroes a instancias de superheroe
    const instanciasNuevos = nuevosSuperheroes.map(hero => new Superheroe(hero.id, hero.nombreSuperheroe, hero.nombreReal, hero.nombreSociedad, hero.edad, hero.planetaOrigen, hero.debilidad, hero.poder, hero.habilidadEspecial, hero.aliado, hero.enemigo));

    // Cambiar listas - convertir instancias de vuelta a objetos planos
    const instanciasNuevosPlanos = instanciasNuevos.map(hero => ({
        id: hero.id,
        nombreSuperheroe: hero.nombreSuperheroe,
        nombreReal: hero.nombreReal,
        nombreSociedad: hero.nombreSociedad,
        edad: hero.edad,
        planetaOrigen: hero.planetaOrigen,
        debilidad: hero.debilidad,
        poder: hero.poder,
        habilidadEspecial: hero.habilidadEspecial,
        aliado: hero.aliado,
        enemigo: hero.enemigo
    }));

    const listaActualizada = [...superheroesOriginales, ...instanciasNuevosPlanos];

    // Guardar la lista actualizada
    fs.writeFileSync(rutaOriginal, JSON.stringify(listaActualizada, null, 2), 'utf8');
    console.log('Lista de superhéroes actualizada con exito.');
}
}