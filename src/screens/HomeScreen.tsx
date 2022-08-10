import React from 'react';
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/StackNavigator';
import { globalStyles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import usePokemonPaginated from '../hooks/usePokemonPaginated';
import { COLORS } from '../theme/constants';
import { FadeInImage } from '../components/FadeInImage';
import PokemonCard from '../components/PokemonCard';

type Props = StackScreenProps<RootStackParamList, 'HomeScreen'>;

const HomeScreen = ({ navigation }: Props) => {

    const { top } = useSafeAreaInsets();
    const { pokemons, isLoading, loadPokemons } = usePokemonPaginated();

    return (
        <>
            <Image
                source={require('../assets/pokebola.png')}
                style={globalStyles.pokebolaBackground}
            />

            <View style={{ alignItems: 'center' }}>
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
                            top: top + 20,
                            marginBottom: top + 20,
                            paddingBottom: 10,
                        }}>
                            Pokedex
                        </Text>
                    )}
                    renderItem={({ item }) => (<PokemonCard pokemon={item} />)}

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
            </View>
        </>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({

});
