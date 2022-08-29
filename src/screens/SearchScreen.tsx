import { ActivityIndicator, Platform, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SearchInput from '../components/SearchInput';
import usePokemonSearch from '../hooks/usePokemonSearch';

const SearchScreen = () => {

  const { top } = useSafeAreaInsets();
  const { pokemons, isFetching } = usePokemonSearch();

  if (true) {
    return (
      <View style={styles.activityContainer}>
        <ActivityIndicator
          size={50}
          color="gray"
        />
        <Text>Cargando....</Text>
      </View>
    );
  }

  return (
    <View style={{
      flex: 1,
      marginTop: (Platform.OS === 'ios') ? top : top + 10,
      marginHorizontal: 20,
    }}>
      <SearchInput />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  activityContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
