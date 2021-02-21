import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function ChainsView({navigation})
{
    return(
        <View>
            <Text style={styles.Title}>Rusty</Text>
            <Text style={styles.text}>No outstanding requests with this user</Text>
            <View style = {styles.lineStyle} />
            <Text style= {styles.amount}>.008 ETH</Text>
            <View style = {styles.buttonGroup}>
                <TouchableOpacity style={styles.sendButton}>
                    <Text style={styles.sendText} onPress={()=>{navigation.navigate('TransactionSuccess')}}>Send</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.requestButton}>
                    <Text style={styles.requestText}>Request</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    Title:
    {
        alignSelf:"center",
        fontSize:30,
        textAlign:"center",
        marginBottom:10,
        paddingHorizontal:15
    },

    amount:
    {
        fontSize:40,
        textAlign:"center",
        margin:100
    },

    text:
    {
        fontSize:22,
        textAlign:"center",
        marginBottom:10
    },

    sendButton:
    {
        backgroundColor: "#6E2B7C",
        alignContent: "center",
        padding:20,
        borderRadius:50,
        marginBottom:20,
        alignSelf:"center",
        width:120,
    },
    
    sendText:
    {
        alignItems:"center",
        color:"#FFFFFF",
        fontSize: 20,
        textAlign:"center"
    },

    requestButton:
    {
        backgroundColor: "#6E2B7C",
        alignContent: "center",
        padding:20,
        borderRadius:50,
        marginBottom:20,
        alignSelf:"center",
        width:120
    },
    
    requestText:
    {
        alignItems:"center",
        color:"#FFFFFF",
        fontSize: 20,
        textAlign:"center",
    },

    lineStyle:{
        borderWidth: 0.5,
        borderColor:'black',
        marginBottom:15
   },

   buttonGroup:
   {
        flexDirection: 'row',
        justifyContent: 'space-around'
   }
})