import React, {useState} from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import getToken from './GetToken';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SendOptions = ({navigation}) => {

    const goToSend = () => {
        navigation.navigate('Send');
    }

    const goToCamera = () => {
        navigation.navigate('Camera');
    }

return(
    <View style={styles.container}>
        <TouchableOpacity onPress={goToCamera}>
            <View style={styles.button}>
                <Text style={styles.white}>Prendre une photo</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToSend}>
            <View style={styles.button}>
                <Text style={styles.white}>Envoyer une photo à partir de sa galerie</Text>
            </View>
        </TouchableOpacity>
    </View>
)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "yellow"
    },
    button: {
        height: 40,
        width: 300,
        maxWidth: '100%',
        margin: 12,
        borderWidth: 1,
        backgroundColor: 'dodgerblue',
        justifyContent: 'center',
        alignItems: 'center',
        textTransform: "uppercase"
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        backgroundColor: "white",
        padding: 10,
        borderRadius: 15
    },
    white: {
        color: 'white'
    },
    img: {
        height: 300,
        width: 300
    }
});

export default SendOptions;