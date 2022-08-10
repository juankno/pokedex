import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { SimplePokemon } from '../interfaces/PokemonInterface';
import { COLORS } from '../theme/constants';
import { FadeInImage } from './FadeInImage';
import { getImageColors } from '../helpers/getImageColors';

interface Props {
    pokemon: SimplePokemon;
}

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const PokemonCard = ({ pokemon }: Props) => {

    const [bgColor, setBgColor] = useState(COLORS.gray);
    const isMounted = useRef(true);

    const getPokemonColor = async () => {
        const [primary, secondary] = await getImageColors(pokemon.picture);

        if (!isMounted.current) {return;}

        if (primary) { setBgColor(primary); }
    };

    useEffect(() => {
        getPokemonColor();

        return () => {
            isMounted.current = false;
        };
    }, []);


    return (
        <TouchableOpacity
            activeOpacity={0.8}
        >
            <View style={{
                ...styles.cardContainer,
                width: SCREEN_WIDTH * 0.4,
                backgroundColor: bgColor,
            }} >

                <View>
                    <Text style={styles.name}>
                        {pokemon.name}
                        {'\n#' + pokemon.id}
                    </Text>
                </View>

                <Image
                    source={require('../assets/pokebola-blanca.png')}
                    style={styles.pokeBola}
                />

                <FadeInImage
                    uri={pokemon.picture}
                    style={styles.pokemonImage}
                />

            </View>
        </TouchableOpacity>
    );
};

export default PokemonCard;

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        height: 120,
        width: 160,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    name: {
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: 20,
        top: 20,
        left: 10,
    },
    pokeBola: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: -20,
        right: -20,
        opacity: 0.5,
    },
    pokemonImage: {
        width: 120,
        height: 120,
        position: 'absolute',
        right: -10,
        bottom: -5,
    },
});
