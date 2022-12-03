import { useContext, createContext} from "react";
import { useQuery, UseQueryResult } from "react-query";

import pokemonApi from "../api/pokemon";
import {PokemonsResponse} from "../@types/api";

type AppContextProps = {
    pokemons: UseQueryResult<PokemonsResponse>;
}

type AppStateProviderProps = {
  children: React.ReactNode;
}

export const AppContext = createContext<AppContextProps>(({} as AppContextProps));

export const useApp = () => useContext(AppContext);

export const AppStateProvider: React.FC<AppStateProviderProps> = ({ children }) => {
    const pokemons = useQuery("all-pokemons", () => {
        return pokemonApi.getAllPokemons();
    })

    

    return (
        <AppContext.Provider value={{pokemons}}>
            {children}
        </AppContext.Provider>
    )
}