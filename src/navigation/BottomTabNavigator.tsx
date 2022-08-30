import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS } from '../theme/constants';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import StackNavigator from './StackNavigator';
import StackSearchNavigator from './SearchStackNavigator';

export type BottomTabParamsList = {
  SearchNavigator: undefined;
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
        tabBarActiveTintColor: COLORS.successDark,
        tabBarLabelStyle: {
          marginBottom: (Platform.OS === 'ios') ? 0 : 10,
          color: COLORS.black,
        },
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
          borderWidth: 0,
          elevation: 0,
          height: (Platform.OS === 'ios') ? 80 : 60,
        },
      }}
    >

      <Tab.Screen
        name="StackNavigator"
        component={StackNavigator}
        options={{
          tabBarLabel: 'Listado',
          tabBarIcon: ({ color }) => (
            <Icon
              name="list-outline"
              size={25}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SearchNavigator"
        component={StackSearchNavigator}
        options={{
          tabBarLabel: 'Buscar',
          tabBarIcon: ({ color }) => (
            <Icon
              name="search-outline"
              size={25}
              color={color}
            />
          ),
        }}
      />

    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
