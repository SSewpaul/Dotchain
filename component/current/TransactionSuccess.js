import React, {Component} from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';

export default class TransactionSuccess extends Component
{
    render()
    {
        return(
            <View>
                <Text style={styles.Title}>You're all set!</Text>
                <Image style={styles.checkmark} source={require("../../assets/ok-1.png")}/>
                <Text style= {styles.Text}>Transaction pending</Text>
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
        //paddingHorizontal:15,
        paddingTop:90
    },

    Text:
    {
        alignSelf:"center",
        fontSize:20,
        textAlign:"center",
        paddingHorizontal:15
    },

    checkmark:
    {
        alignSelf:"center"
    }

})