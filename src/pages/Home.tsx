import { PokemonsResponseResult } from '../@types/api';
import { useApp } from '../states/AppState';
import PokemonCard from '../components/PokemonCard';

const Home: React.FC<{}> = () => {
    const { pokemons } = useApp();

    if(pokemons.isLoading) {
        return <div>loading</div>
    }
    return(
        <div className="grid grid-cols-4 gap-8">
            <h1>Home</h1>

            {pokemons.data?.data.results.map((pokemon: PokemonsResponseResult) => (
                <PokemonCard key={pokemon.name} name={pokemon.name} />
            ))}
        </div>
    )
}

export default Home;