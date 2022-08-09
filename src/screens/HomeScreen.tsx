import React from 'react';
import { ActivityIndicator, FlatList, Image, StyleSheet, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/StackNavigator';
import { globalStyles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import usePokemonPaginated from '../hooks/usePokemonPaginated';
import { COLORS } from '../theme/constants';

type Props = StackScreenProps<RootStackParamList, 'HomeScreen'>;

const HomeScreen = ({ navigation }: Props) => {

    const { top } = useSafeAreaInsets();
    const { pokemons, isLoading, loadPokemons } = usePokemonPaginated();

    console.log(JSON.stringify(pokemons, null, 2));

    return (
        <>
            <Image
                source={require('../assets/pokebola.png')}
                style={globalStyles.pokebolaBackground}
            />

            <FlatList
                data={pokemons}
                keyExtractor={(pokemon) => pokemon.id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Image
                        source={{ uri: item.picture }}
                        style={{
                            width: 100,
                            height: 100,
                        }}
                    />
                )}

                // infite scroll
                onEndReached={loadPokemons}
                onEndReachedThreshold={0.4}

                ListFooterComponent={
                    <ActivityIndicator
                        style={{ height: 100 }}
                        size={20}
                        color={COLORS.gray}
                    />}

            />

            {/* <Text style={{
                ...globalStyles.title,
                ...globalStyles.globalMargin,
                top: top + 20,
            }}>
                Pokedex
            </Text> */}
        </>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({

});
