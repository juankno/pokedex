import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/StackNavigator';
import { COLORS } from '../theme/constants';
import { globalStyles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = StackScreenProps<RootStackParamList, 'HomeScreen'>;

const HomeScreen = ({ navigation }: Props) => {

    const { top } = useSafeAreaInsets();

    return (
        <>
            <Image
                source={require('../assets/pokebola.png')}
                style={globalStyles.pokebolaBackground}
            />

            <Text style={{
                ...globalStyles.title,
                ...globalStyles.globalMargin,
                top: top + 20,
            }}>
                Pokedex
            </Text>
        </>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({

});
