import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PokemonScreen from '../screens/PokemonScreen';
import SearchScreen from '../screens/SearchScreen';
import { COLORS } from '../theme/constants';
import { RootStackParamList } from './StackNavigator';


const Stack = createStackNavigator<RootStackParamList>();

const StackSearchNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: COLORS.white,
                },
            }}
        >
            <Stack.Screen name="SearchScreen" component={SearchScreen} />
            <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
        </Stack.Navigator>
    );
};


export default StackSearchNavigator;
