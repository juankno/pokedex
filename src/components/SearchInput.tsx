import React, { useEffect, useState } from 'react';
import { Platform, StyleProp, StyleSheet, TextInput, View, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import useDebounceValue from '../hooks/useDebounceValue';

interface Props {
    onDebounce: (value: string) => void;
    style?: StyleProp<ViewStyle>
}

const SearchInput = ({ style, onDebounce }: Props) => {

    const [textValue, setTextValue] = useState('');

    const { debouncedValue } = useDebounceValue(textValue);

    useEffect(() => {
        onDebounce(debouncedValue);
    }, [debouncedValue]);

    return (
        <View style={{
            ...styles.container,
            ...style as any,
        }}>
            <View style={styles.textBackground}>
                <TextInput
                    placeholder="Buscar pokemón"
                    style={styles.textInput}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={textValue}
                    onChangeText={setTextValue}
                />

                <Icon
                    name="search-outline"
                    color="gray"
                    size={30}
                />
            </View>
        </View>
    );
};

export default SearchInput;

const styles = StyleSheet.create({
    container: {
        // backgroundColor: COLORS.danger,
    },
    textBackground: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f3f1f3',
        borderRadius: 50,
        height: 40,
        paddingHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    textInput: {
        flex: 1,
        fontSize: 18,
        top: (Platform.OS === 'ios') ? 0 : 2,
    },
});
