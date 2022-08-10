import { useEffect, useState } from 'react';
import { pokemonApi } from '../api/pokemonApi';
import { PokemonDetail } from '../interfaces/PokemonInterface';

const usePokemon = (id: string) => {

    const [isLoading, setIsLoading] = useState(true);
    const [pokemon, setPokemon] = useState<PokemonDetail>({} as PokemonDetail);

    const loadPokemon = async () => {
        const resp = await pokemonApi.get<PokemonDetail>(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon(resp.data);
        setIsLoading(false);
    };


    useEffect(() => {
        loadPokemon();
    }, []);




    return {
        isLoading,
        pokemon,
    };

};

export default usePokemon;
