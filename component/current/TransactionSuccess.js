import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

export default class SuccessPage extends Component
{
    render()
    {
        return(
            <View>
                <Text style={styles.Title}>You're all set!</Text>
                <Text style= {styles.Text}>Check the chains you've joined at the home screen</Text>
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
        marginBottom:30,
        paddingHorizontal:15
    },

    Text:
    {
        alignSelf:"center",
        fontSize:20,
        textAlign:"center",
        paddingHorizontal:15
    }
})