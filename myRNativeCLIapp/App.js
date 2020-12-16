import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import fonts from './src/config/fonts';

const App = () => {
    return (
        <View>
            <Text style={styles.text}>I am here!!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 28,
        fontFamily: fonts.vincHand,
        padding: 40,
    },
});

export default App;
