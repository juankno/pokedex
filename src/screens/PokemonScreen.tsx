import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { RootStackParamList } from '../navigation/StackNavigator';
import { COLORS } from '../theme/constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage } from '../components/FadeInImage';

type Props = StackScreenProps<RootStackParamList, 'PokemonScreen'>;

const PokemonScreen = ({ navigation, route }: Props) => {

    const { simplePokemon: pokemon, color } = route.params;
    const { top } = useSafeAreaInsets();

    return (
        <View>

            {/* Header */}
            <View style={{
                ...styles.headerContainer,
                backgroundColor: color,
            }} >
                <TouchableOpacity
                    onPress={() => navigation.pop()}
                    activeOpacity={0.8}
                    style={{
                        ...styles.backButton,
                        top: top + 5,
                    }}
                >
                    <Icon name="arrow-back-outline" size={35} color={COLORS.white} />

                </TouchableOpacity>

                <Text style={{
                    ...styles.pokemonName,
                    top: top + 40,
                }}>
                    {pokemon.name + '\n'}#{pokemon.id}
                </Text>


                {/* Pokebola */}
                <Image
                    source={require('../assets/pokebola-blanca.png')}
                    style={styles.pokebola}
                />

                <FadeInImage
                    uri={pokemon.picture}
                    style={styles.pokemonImage}
                />
            </View>
        </View>
    );
};

export default PokemonScreen;

const styles = StyleSheet.create({
    headerContainer: {
        height: 370,
        zIndex: 999,
        alignItems: 'center',
        borderBottomRightRadius: 1000,
        borderBottomLeftRadius: 1000,
    },
    backButton: {
        position: 'absolute',
        left: 20,
    },
    pokemonName: {
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: 40,
        textTransform: 'capitalize',
        alignSelf: 'flex-start',
        left: 20,
    },

    pokebola: {
        width: 250,
        height: 250,
        bottom: -20,
        opacity: 0.7,
    },

    pokemonImage: {
        width: 250,
        height: 250,
        position: 'absolute',
        bottom: -10,
    },

});
