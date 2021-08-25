import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput, Button, ScrollView, Image, ImageBackground } from 'react-native';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import getToken from './GetToken';
import { ActivityIndicator } from 'react-native';

export default function SnapScreen({navigation, route}) {

    const [token, setToken] = useState(null);
    const [ListSnap, setListSnap] = useState(null);
    const [loading, setLoading] = useState(true);
    var snaps= [];
    var snapsContainer= [];
    
    const { CurrentSnap, Duration } = route.params;
    console.log("Current picture")
    console.log(CurrentSnap)
    return (
        <ImageBackground 
            style={styles.img}
            source={{uri: CurrentSnap}}
        >
        <View style={{ flex: 1, position: 'absolute', top: 0, left: 300, right: 0, bottom: 550, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.text}>{Duration}</Text>
        </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({

    container: {
        flexGrow: 1,
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
        width: '100%',
        height: '100%'
    },
    text: {
        fontSize: 25,
        position: 'absolute',
        color: 'white'
    }
})