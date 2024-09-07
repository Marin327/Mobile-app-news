import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const FeedbackScreen = () => {
    const [feedback, setFeedback] = useState('');

    const submitFeedback = () => {
        console.log('Feedback submitted:', feedback);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Your Feedback:</Text>
            <TextInput
                style={styles.input}
                placeholder="Type your feedback here"
                onChangeText={(text) => setFeedback(text)}
            />
            <Button title="Submit Feedback" onPress={submitFeedback} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
});

export default FeedbackScreen;