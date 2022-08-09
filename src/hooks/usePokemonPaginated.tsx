import { useEffect, useRef, useState } from 'react';
import { pokemonApi } from '../api/pokemonApi';
import { Pokemon, PokemonResponse, SimplePokemon } from '../interfaces/PokemonInterface';

const usePokemonPaginated = () => {

    const [pokemons, setPokemons] = useState<SimplePokemon[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');

    const loadPokemons = async () => {

        setIsLoading(true);

        const resp = await pokemonApi.get<PokemonResponse>(nextPageUrl.current);
        nextPageUrl.current = resp.data.next;

        mapPokemonsList(resp.data.results);
    };

    const mapPokemonsList = (pokemonList: Pokemon[]) => {
        const newPokemons: SimplePokemon[] = pokemonList.map(({ name, url }) => {

            const ulrParts = url.split('/');
            const id = ulrParts[ulrParts.length - 2];
            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

            return { id, name, picture };
        });

        setPokemons([...pokemons, ...newPokemons]);
        setIsLoading(false);
    };

    useEffect(() => {
        loadPokemons();
    }, []);



    return {
        pokemons,
        isLoading,
    };

};

export default usePokemonPaginated;
