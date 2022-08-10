import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from '../screens/SearchScreen';
import StackNavigator from './StackNavigator';
import { COLORS } from '../theme/constants';
import { Platform } from 'react-native';

export type BottomTabParamsList = {
  SearchScreen: undefined;
  StackNavigator: undefined;
}

const Tab = createBottomTabNavigator<BottomTabParamsList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: COLORS.white,
      }}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.danger,
        tabBarLabelStyle: {
          marginBottom: (Platform.OS === 'ios') ? 0 : 10,
        },
        tabBarIconStyle: {
          display: 'none',
        },
      }}
    >

      <Tab.Screen name="StackNavigator" component={StackNavigator} />
      <Tab.Screen name="SearchScreen" component={SearchScreen} />

    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
