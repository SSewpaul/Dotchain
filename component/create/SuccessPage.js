import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

export default function SuccessPage({navigation})
{
    return(
        <View on>
            <Text style={styles.Title}>You're all set!</Text>
            <Text style= {styles.Text}>Check the chains you've joined at the home screen</Text>
            <TouchableOpacity style={styles.ContinueButton} onPress={() => navigation.navigate('Welcome')}>
                <Text style={styles.Continue}>Return Home</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles= StyleSheet.create({
    Title:
    {
        alignSelf:"center",
        fontSize:30,
        textAlign:"center",
        marginBottom:30,
        paddingHorizontal:15,
        marginTop:150
    },

    Text:
    {
        alignSelf:"center",
        fontSize:20,
        textAlign:"center",
        paddingHorizontal:15,
        paddingBottom:90
    },

    ContinueButton:
    {
        backgroundColor: "#6E2B7C",
        alignContent: "center",
        padding:20,
        borderRadius:50,
        marginBottom: 20,
        alignSelf:"center"
    },

    Continue:
    {
        alignItems:"center",
        color:"#FFFFFF",
        fontSize: 20,
        textAlign:"center"
    }
})