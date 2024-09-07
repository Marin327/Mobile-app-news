import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const NotificationsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>No new notifications</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
    },
    text: {
        fontSize: 20,
        color: '#333',
        fontWeight: 'bold',
    },
});

export default NotificationsScreen;