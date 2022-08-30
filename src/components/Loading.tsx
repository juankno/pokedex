import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

const Loading = () => {
    return (
        <View style={styles.activityContainer}>
            <ActivityIndicator
                size={50}
                color="gray"
            />
            <Text>Cargando....</Text>
        </View>
    );
};

export default Loading;

const styles = StyleSheet.create({
    activityContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
