import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { PokemonDetail } from '../interfaces/PokemonInterface';
import { COLORS } from '../theme/constants';
import { FadeInImage } from './FadeInImage';

interface Props {
    pokemon: PokemonDetail;
}

const PokemonDetails = ({ pokemon }: Props) => {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
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

                <Text style={styles.title}>Weight</Text>
                <Text style={styles.regularText}>{pokemon.weight}Kg</Text>

            </View>

            {/* Sprites */}
            <View style={styles.container}>
                <Text style={styles.title}>Sprites</Text>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    <FadeInImage
                        uri={pokemon.sprites.front_default}
                        style={styles.basicSprite}
                    />

                    <FadeInImage
                        uri={pokemon.sprites.back_default}
                        style={styles.basicSprite}
                    />

                    <FadeInImage
                        uri={pokemon.sprites.front_shiny}
                        style={styles.basicSprite}
                    />

                    <FadeInImage
                        uri={pokemon.sprites.back_shiny}
                        style={styles.basicSprite}
                    />
                </ScrollView>


            </View>


            {/* Habilities */}
            <View style={styles.container}>
                <Text style={styles.title}>Habilidades base</Text>
                <View style={{ flexDirection: 'row' }}>
                    {
                        pokemon.abilities.map(({ ability }) => (
                            <Text
                                key={ability.name}
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10,
                                }}
                            >
                                {ability.name}
                            </Text>
                        ))
                    }
                </View>

            </View>


            {/* Moves */}
            <View style={styles.container}>
                <Text style={styles.title}>Movimientos</Text>
                <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
                    {
                        pokemon.moves.map(({ move }) => (
                            <Text
                                key={move.name}
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10,
                                }}
                            >
                                {move.name}
                            </Text>
                        ))
                    }
                </View>

            </View>


            {/* Stats */}
            <View style={styles.container}>
                <Text style={styles.title}>Stats</Text>
                <View>
                    {
                        pokemon.stats.map((stat, i) => (
                            <View
                                key={stat.stat.name + i}
                                style={{
                                    flexDirection: 'row',
                                }}

                            >
                                <Text
                                    style={{
                                        ...styles.regularText,
                                        marginRight: 10,
                                        width: 150,
                                    }}
                                >
                                    {stat.stat.name}
                                </Text>

                                <Text
                                    style={{
                                        ...styles.regularText,
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {stat.base_stat}
                                </Text>
                            </View>
                        ))
                    }
                </View>

            </View>

            {/* Final image */}
            <View style={{
                marginBottom: 20,
                alignItems: 'center',
            }}>
                <FadeInImage
                    uri={pokemon.sprites.front_default}
                    style={styles.basicSprite}
                />
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
        fontSize: 20,
        marginTop: 20,
    },
    regularText: {
        fontSize: 18,
        color: COLORS.black2,
    },

    basicSprite: {
        width: 100,
        height: 100,
    },
});
