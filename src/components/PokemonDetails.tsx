import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { PokemonDetail } from '../interfaces/PokemonInterface';
import { COLORS } from '../theme/constants';

interface Props {
    pokemon: PokemonDetail;
}

const PokemonDetails = ({ pokemon }: Props) => {
    return (
        <ScrollView
            style={{
                ...StyleSheet.absoluteFillObject,
            }} >

                {/* Types */}
            <View style={{
                ...styles.container,
                marginTop: 370,
            }}>
                <Text style={styles.title}>Types</Text>

                <View style={{ flexDirection: 'row' }}>
                    {
                        pokemon.types.map(({ type }) => (
                            <Text
                                key={type.name}
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10,
                                }}
                            >
                                {type.name}
                            </Text>
                        ))
                    }
                </View>
            </View>

            {/* Sprites */}
            <View style={{
                ...styles.container,
                marginTop: 20,
            }}>
                <Text style={styles.title}>Sprites</Text>


            </View>
        </ScrollView>
    );
};

export default PokemonDetails;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    title: {
        fontWeight: 'bold',
        color: COLORS.black,
        fontSize: 25,
    },
    regularText: {
        fontSize: 20,
        color: COLORS.black2,
    },
});
