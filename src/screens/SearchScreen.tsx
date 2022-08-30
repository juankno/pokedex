import React from 'react';
import { Dimensions, FlatList, Platform, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SearchInput from '../components/SearchInput';
import usePokemonSearch from '../hooks/usePokemonSearch';
import { globalStyles } from '../theme/appTheme';
import PokemonCard from '../components/PokemonCard';
import Loading from '../components/Loading';


const { width: SCREEN_WIDTH } = Dimensions.get('window');

const SearchScreen = () => {

  const { top } = useSafeAreaInsets();
  const { pokemons, isFetching } = usePokemonSearch();

  if (isFetching) { return <Loading />; }

  return (
    <View style={{
      flex: 1,
      marginHorizontal: 20,
    }}>
      <SearchInput style={{
        position: 'absolute',
        zIndex: 999,
        width: SCREEN_WIDTH - 40,
        top: (Platform.OS === 'ios') ? top : top + 20,
      }} />

      <FlatList
        data={pokemons}
        keyExtractor={(pokemon) => pokemon.id}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        // header
        ListHeaderComponent={(
          <Text style={{
            ...globalStyles.title,
            ...globalStyles.globalMargin,
            paddingBottom: 10,
            marginTop: top + 60,
          }}>
            Pokedex
          </Text>
        )}
        renderItem={({ item }) => (<PokemonCard pokemon={item} />)}


      />
    </View>
  );
};

export default SearchScreen;

