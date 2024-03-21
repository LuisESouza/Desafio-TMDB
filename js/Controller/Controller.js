import { Filmes } from "../Model/Filmes.js";
import { viewFilmes } from '../View/viewFilmes.js';

async function init() {
    try {
        const filmsModel = new Filmes();
        const filmsPopular = await filmsModel.getFilmesPopular();
        viewFilmes(filmsPopular);
    } catch (error) {
        console.log(error);
    }
}

init();