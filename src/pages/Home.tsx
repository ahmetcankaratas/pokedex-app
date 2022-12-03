import {InView} from "react-intersection-observer";

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
                <InView threshold={0.3} triggerOnce={true}>
                    {({ inView, ref }) => {
                        return inView ? (
                            <PokemonCard name={pokemon.name} />
                        ) : ( <div ref={ref} className="w-full h-96 bg-gray-100 rounded-lg"></div>)
                    
                    }
                    }
                    
                </InView>
                
            ))}
        </div>
    )
}

export default Home;