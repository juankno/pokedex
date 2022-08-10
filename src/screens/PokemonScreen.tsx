import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { RootStackParamList } from '../navigation/StackNavigator';
import { COLORS } from '../theme/constants';

type Props = StackScreenProps<RootStackParamList, 'PokemonScreen'>;

const PokemonScreen = ({ navigation, route }: Props) => {

    const { simplePokemon: pokemon, color } = route.params;

    return (
        <View style={{
            ...styles.container,
            backgroundColor: color,
        }}>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Image
                    source={{ uri: pokemon.picture }}
                    style={{
                        width: 100,
                        height: 150,
                    }}
                    resizeMode="contain"
                />
                <Text style={{
                    color: COLORS.white,
                    fontSize: 20,
                    fontWeight: 'bold',
                }}>{pokemon.name}
                </Text>
            </View>
        </View>
    );
};

export default PokemonScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
