import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/StackNavigator';
import { COLORS } from '../theme/constants';

type Props = StackScreenProps<RootStackParamList, 'HomeScreen'>;

const HomeScreen = ({ navigation }: Props) => {
    return (
        <View style={styles.container}>

            <View style={{
                 flexDirection: 'row',
                 justifyContent: 'center',
                 alignItems: 'center',

            }}>
                <Icon name="home-outline" size={30} color="black" />
                <Text>Home Screen</Text>
            </View>

            <TouchableOpacity
                onPress={() => navigation.navigate('PokemonScreen')}
                activeOpacity={0.8}
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    backgroundColor: COLORS.black,
                    padding: 10,
                    alignItems: 'center',
                }}>
                <Text style={{
                    color: COLORS.white,
                    marginRight: 10,
                    alignSelf: 'center', fontWeight: 'bold',
                }}>
                    Pokemons
                </Text>
                <Icon name="happy-outline" size={20} color={COLORS.white} />
            </TouchableOpacity>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
