import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

export default function OwnerInfo({navigation})
{
    
        return(
            <View>
                <Text style={styles.Title}>Please enter the owner's address</Text>
                <Text style= {styles.Text}>Owner's address:</Text>
                <TextInput style={styles.PublicKey}  placeholder="64 Character Key"/>
                <TouchableOpacity style={styles.ContinueButton} onPress={() => navigation.navigate('Contribution')}>
                    <Text style={styles.Continue}>Continue</Text>
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
        marginBottom:90,
        paddingHorizontal:15
    },

    PublicKey:
    {
        alignSelf:"center",
        backgroundColor:"#FFFFFF",
        paddingHorizontal: 121,
        height:40,
        marginBottom:30
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
    },

    Text:
    {
        fontSize:20, 
        padding:5,
        marginLeft: 15
    }
})