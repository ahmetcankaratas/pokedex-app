import {InView} from "react-intersection-observer";

import { PokemonsResponseResult } from '../@types/api';

import { useApp } from '../states/AppState';
import PokemonCard from '../components/PokemonCard';
import Header from "../components/Header";
import Loader from "../components/Loader";
const Home: React.FC<{}> = () => {
    const { pokemons, filteredPokemons } = useApp();

    if(pokemons.isLoading) {
        return <div>
            <Loader />
        </div>
    }
    return(
        <div className="space-y-8">
            <Header />

            <main className="container mx-auto">
            <div className="grid grid-cols-4 gap-8">
            <h1>Home</h1>

            {filteredPokemons?.map((pokemon: PokemonsResponseResult) => (
                <InView key={pokemon.name} threshold={0.3} triggerOnce={true}>
                    {({ inView, ref }) => {
                        return inView ? (
                            <PokemonCard name={pokemon.name} />
                        ) : ( <div ref={ref} className="w-full h-72 bg-gray-100 rounded-lg"></div>)
                    
                    }
                    }
                    
                </InView>
                
            ))}
            </div>
            </main>

        </div>
        
    )
}

export default Home;