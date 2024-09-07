import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const HelpScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>How can we help you?</Text>
            <Button
                title="Contact Support"
                onPress={() => navigation.navigate('Contact')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        marginBottom: 20,
    },
});

export default HelpScreen;