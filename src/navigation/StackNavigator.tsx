import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import PokemonScreen from '../screens/PokemonScreen';
import { COLORS } from '../theme/constants';
import { SimplePokemon } from '../interfaces/PokemonInterface';

export type RootStackParamList = {
    SearchScreen: undefined;
    HomeScreen: undefined;
    PokemonScreen: { simplePokemon: SimplePokemon, color: string };
}


const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: COLORS.white,
                },
            }}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
        </Stack.Navigator>
    );
};

export default StackNavigator;
