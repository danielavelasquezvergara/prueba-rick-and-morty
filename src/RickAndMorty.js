import axios from 'axios';

class Personajes {

    constructor(nombre, id, genero, especies, estado, img) {
        this.nombre = nombre;
        this.id = id;
        this.genero = genero;
        this.especies = especies;
        this.estado = estado;
        this.img = img;
    }
}

const rickMorty  = (() => {
    return new Promise( async (resolve, reject) => {
        try {
            const baseurl = await axios.get('https://rickandmortyapi.com/api/character');
            let datos = baseurl.data.results;
            let personajes = [];
            datos.forEach(e => {
                let personaje = new Personajes(e.name, e.id, e.gender, e.species, e.status, e.image);
                personajes.push(personaje)
            });
            resolve(personajes);
            
        } catch(error) {
            reject(`Hubo un error: ${error}`); 
        }
    });
}) ();

export default rickMorty