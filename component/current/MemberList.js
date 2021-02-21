import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function MemberList({navigation})
{
        return(
            <View>
                <Text style={styles.Title}>Chain 1 Balance</Text>
                <Text style={styles.balance}>  .125 ETH ($289.40 USD)</Text>
                <View style = {styles.lineStyle} />
                <Text style= {styles.membersHeader}>Members</Text>
                <TouchableOpacity style={styles.buttonChain}>
                    <Text style={styles.currentChainText} onPress={()=>{navigation.navigate('MemberView')}}>Rusty</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonChain}>
                    <Text style={styles.currentChainText}>Nelly</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonChain}>
                    <Text style={styles.currentChainText}>B-Sport</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonChain}>
                    <Text style={styles.currentChainText}>Hi-jinx</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonChain}>
                    <Text style={styles.currentChainText}>Sharko</Text>
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
        marginBottom:10,
        paddingHorizontal:15
    },

    balance:
    {
        fontSize:22,
        textAlign:"center",
        marginBottom:10
    },

    membersHeader:
    {
        fontSize:22,
        textAlign:"center",
        marginBottom:10
    },

    buttonChain:
    {
        backgroundColor: "#6E2B7C",
        alignContent: "center",
        padding:20,
        borderRadius:50,
        marginBottom:20,
        alignSelf:"center",
        width:200
    },
    
    currentChainText:
    {
        alignItems:"center",
        color:"#FFFFFF",
        fontSize: 30,
        textAlign:"center"

    },

    lineStyle:{
        borderWidth: 0.5,
        borderColor:'black',
        marginBottom:15,
        borderLeftWidth: 350
   }
})