import { elements } from './elements.js';

export const viewFilmes = (filmes) => {

    var options = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    filmes.forEach(filme => {
        const releaseDate = new Date(filme.release_date);

        let colorRing = '';

        if(Math.round(filme.vote * 10)>= 70){
            colorRing = 'green';
        } else if(Math.round(filme.vote * 10) >= 50){
            colorRing = 'orange';
        } else {
            colorRing = 'red';
        }
        
        const markup = `
            <div class="card">
                <div class="card-img">
                    <div class="ring-do-lian" style="background-color: ${colorRing}">
                        <p class="score">${Math.round(filme.vote * 10)}%</p>
                    </div>
                    <img src="https://image.tmdb.org/t/p/w500${filme.poster_path}" alt="${filme.title}">
                </div>                
             
                <div class="card-info" >
                    <a class="card-tittle" href="https://www.themoviedb.org/movie/${filme.id}-damsel?language=pt-BR" target="_blank">${filme.title}</a>
                    <p class="card-date">${releaseDate.toLocaleDateString('pt-BR', options)}</p>
                </div>
            </div>
        `;
        elements.cardContainer.insertAdjacentHTML('beforeend', markup);
    });
}
