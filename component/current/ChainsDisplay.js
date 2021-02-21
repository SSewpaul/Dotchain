import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class ChainsDisplay extends Component
{
    render()
    {
        return(
            <View>
                <Text style={styles.Title}>Current chains</Text>
                <TouchableOpacity style={styles.buttonChain}>
                    <Text style={styles.currentChainText}>Chain 1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonChain}>
                    <Text style={styles.currentChainText}>Chain 2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonChain}>
                    <Text style={styles.currentChainText}>Chain 3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonChain}>
                    <Text style={styles.currentChainText}>Chain 4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonChain}>
                    <Text style={styles.currentChainText}>Chain 5</Text>
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
        marginBottom:70,
        paddingHorizontal:15
    },

    buttonChain:
    {
        backgroundColor: "#6E2B7C",
        alignContent: "center",
        padding:20,
        borderRadius:50,
        marginBottom:20,
        alignSelf:"center"
    },
    
    currentChainText:
    {
        alignItems:"center",
        color:"#FFFFFF",
        fontSize: 30,
        textAlign:"center"

    }
})