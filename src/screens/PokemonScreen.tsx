import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { RootStackParamList } from '../navigation/StackNavigator';
import { COLORS } from '../theme/constants';

type Props = StackScreenProps<RootStackParamList, 'PokemonScreen'>;

const PokemonScreen = ({ navigation }: Props) => {
    return (
        <View style={styles.container}>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Icon name="happy-outline" size={30} color={COLORS.black} />
                <Text>Pokemon Screen</Text>
            </View>

            <TouchableOpacity
                onPress={() => navigation.navigate('HomeScreen')}
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
                    Home
                </Text>
                <Icon name="home-outline" size={20} color={COLORS.white} />
            </TouchableOpacity>
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
