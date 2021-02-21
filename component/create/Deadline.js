import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

export default function Deadline({navigation})
{
    
        return(
            <View>
                <Text style={styles.Title}>Please select deadline</Text>
                <Text style= {styles.Text}>Join Deadline:</Text>
                <TextInput style={styles.Start}  placeholder="MM/DD/YYYY"/>
                <Text style={styles.Text}>Close contract:</Text>
                <TextInput style={styles.Close} placeholder="MM/DD/YYYY"/>
                <TouchableOpacity style={styles.ContinueButton} onPress={() => navigation.navigate('OwnerInfo')}>
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

    Start:
    {
        alignSelf:"center",
        backgroundColor:"#FFFFFF",
        paddingHorizontal: 100,
        marginBottom: 30,
        height:40
    },

    Close:
    {
        alignSelf:"center",
        backgroundColor:"#FFFFFF",
        paddingHorizontal: 100,
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
        marginLeft:17
    }
})