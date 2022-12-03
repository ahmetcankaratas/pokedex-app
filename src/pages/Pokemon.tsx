import { useQuery } from "react-query";
import { useParams } from "react-router";
import pokemonApi from "../api/pokemon";

const Pokemon: React.FC<{}> = () => {
    const { pokemon: pokemonName} = useParams();

   const pokemon = useQuery(['pokemon',pokemonName], () => {
    if(!pokemonName){
        return null;
    }
    return pokemonApi.getPokemon(pokemonName)
   });

    if(pokemon.isLoading){
        return <div>loading</div>
    }

    return (
        <div>{pokemon.data?.data.name}</div>
    )
    
}

export default Pokemon;