import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

export default class Contribution extends Component
{
    render()
    {
        return(
            <View>
                <Text style={styles.Title}>Please enter your intial contribution</Text>
                <Text style= {styles.Text}>Contribution:</Text>
                <TextInput style={styles.Contribution}  placeholder="XXXX ETH"/>
                <TouchableOpacity style={styles.ContinueButton}>
                    <Text style={styles.Continue}>Continue</Text>
                </TouchableOpacity>
            </View>
        )
    }
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
    
    Contribution:
    {
        alignSelf:"center",
        backgroundColor:"#FFFFFF",
        paddingHorizontal: 143,
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