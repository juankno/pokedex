import { useEffect, useState } from 'react';
import { pokemonApi } from '../api/pokemonApi';
import { Pokemon, PokemonResponse, SimplePokemon } from '../interfaces/PokemonInterface';

const usePokemonSearch = () => {

    const [isFetching, setIsFetching] = useState<boolean>(true);
    const [pokemons, setPokemons] = useState<SimplePokemon[]>([]);


    const loadPokemons = async () => {

        const resp = await pokemonApi.get<PokemonResponse>('https://pokeapi.co/api/v2/pokemon?limit=1200');

        mapPokemonsList(resp.data.results);
    };

    const mapPokemonsList = (pokemonList: Pokemon[]) => {

        const newPokemons: SimplePokemon[] = pokemonList.map(({ name, url }) => {

            const ulrParts = url.split('/');
            const id = ulrParts[ulrParts.length - 2];
            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

            return { id, name, picture };
        });

        setPokemons(newPokemons);
        setIsFetching(false);
    };

    useEffect(() => {
        loadPokemons();
    }, []);



    return {
        pokemons,
        isFetching,
    };

};

export default usePokemonSearch;
