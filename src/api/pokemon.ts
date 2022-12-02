import client from './client';

const getPokemons = async () => client.get("/pokemon");

const pokemonApi = {
    getPokemons
}

export default pokemonApi;