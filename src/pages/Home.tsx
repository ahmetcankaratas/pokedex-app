import {
    useQuery,
} from 'react-query'

import pokemonApi from "../api/pokemon";

const Home: React.FC<{}> = () => {
    const pokemons = useQuery("pokemons", () => {
        return pokemonApi.getPokemons();
    });

    if(pokemons.isLoading) {
        return <div>loading</div>
    }
    return(
        <div>
            <h1>Home</h1>

            {pokemons.data?.data.results.map((pokemon: any) => (
                <div>{pokemon.name}</div>
            ))}
        </div>
    )
}

export default Home;