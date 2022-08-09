import { StyleSheet } from 'react-native';
import { COLORS } from './constants';

export const globalStyles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20,
    },

    pokebolaBackground: {
        position: 'absolute',
        width: 300,
        height: 300,
        top: -100,
        right: -100,
        opacity: 0.2,
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        color: COLORS.black2,
    },
});
