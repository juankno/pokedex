import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, Platform, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SearchInput from '../components/SearchInput';
import usePokemonSearch from '../hooks/usePokemonSearch';
import { globalStyles } from '../theme/appTheme';
import PokemonCard from '../components/PokemonCard';
import Loading from '../components/Loading';
import { SimplePokemon } from '../interfaces/PokemonInterface';


const { width: SCREEN_WIDTH } = Dimensions.get('window');

const SearchScreen = () => {

  const { top } = useSafeAreaInsets();
  const { pokemons, isFetching } = usePokemonSearch();

  const [pokemonsFiltered, setPokemonsFiltered] = useState<SimplePokemon[]>([]);

  const [term, setTerm] = useState('');


  useEffect(() => {
    if (term.length === 0) { return setPokemonsFiltered([]); }


    setPokemonsFiltered(
      pokemons.filter(p => p.name.toLocaleLowerCase()
        .includes(term.toLocaleLowerCase()))
    );


  }, [term]);


  if (isFetching) { return <Loading />; }

  return (
    <View style={{
      flex: 1,
      marginHorizontal: 20,
    }}>
      <SearchInput
        onDebounce={(value) => setTerm(value)}
        style={{
          position: 'absolute',
          zIndex: 999,
          width: SCREEN_WIDTH - 40,
          top: (Platform.OS === 'ios') ? top : top + 20,
        }} />

      <FlatList
        data={pokemonsFiltered}
        keyExtractor={(pokemon) => pokemon.id}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        // header
        ListHeaderComponent={(
          <Text style={{
            ...globalStyles.title,
            ...globalStyles.globalMargin,
            paddingBottom: 10,
            marginTop: (Platform.OS === 'ios') ? top + 60 : top + 70,
          }}>
            {term}
          </Text>
        )}
        renderItem={({ item }) => (<PokemonCard pokemon={item} />)}


      />
    </View>
  );
};

export default SearchScreen;

