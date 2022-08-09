import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/StackNavigator';
import { globalStyles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import usePokemonPaginated from '../hooks/usePokemonPaginated';

type Props = StackScreenProps<RootStackParamList, 'HomeScreen'>;

const HomeScreen = ({ navigation }: Props) => {

    const { top } = useSafeAreaInsets();
    const { pokemons, isLoading } = usePokemonPaginated();

    console.log(JSON.stringify(pokemons, null, 2));

    return (
        <>
            <Image
                source={require('../assets/pokebola.png')}
                style={globalStyles.pokebolaBackground}
            />

            <Text style={{
                ...globalStyles.title,
                ...globalStyles.globalMargin,
                top: top + 20,
            }}>
                Pokedex
            </Text>
        </>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({

});
