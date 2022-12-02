import {
    useQuery,
} from 'react-query'
import { PokemonsResponseResult } from '../@types/api';

import pokemonApi from "../api/pokemon";
import PokemonCard from '../components/PokemonCard';

const Home: React.FC<{}> = () => {
    const pokemons = useQuery("all-pokemons", () => {
        return pokemonApi.getAllPokemons();
    });

    if(pokemons.isLoading) {
        return <div>loading</div>
    }
    return(
        <div className="grid grid-cols-4 gap-8">
            <h1>Home</h1>

            {pokemons.data?.data.results.map((pokemon: PokemonsResponseResult) => (
                <PokemonCard name={pokemon.name} />
            ))}
        </div>
    )
}

export default Home;