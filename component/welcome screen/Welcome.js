import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class Welcome extends Component
{
    render()
    {
        return(
            <View>
                <Text style={styles.Title}>Welcome to Dotchain</Text>
                <TouchableOpacity style={styles.buttonCreateChain}>
                    <Text style={styles.createChainText}>Create Chain</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonJoinChain}>
                    <Text style={styles.joinChainText}>Join Chain</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonCurrentChain}>
                    <Text style={styles.currentChainText}>Current Chain</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    Title:
    {
        alignSelf:"center",
        fontSize:60,
        textAlign:"center",
        marginBottom:90

    },

    buttonCreateChain:
    {
        backgroundColor: "#DAF7A6",
        alignContent: "center",
        paddingVertical:30,
        paddingHorizontal:35,
        borderRadius:50,
        marginBottom: 20,
        alignSelf:"center"
    },
    createChainText:
    {
        alignItems:"center",
        color:"#273746",
        fontSize: 30,
        textAlign:"center"

    },
    buttonJoinChain:
    {
        backgroundColor: "#DAF7A6",
        alignContent: "center",
        paddingVertical:30,
        paddingHorizontal:50,
        borderRadius:50,
        marginBottom:20,
        textAlign:"center",
        alignSelf:"center"
    },
    joinChainText:
    {
        alignItems:"center",
        color:"#273746",
        fontSize: 30,
        textAlign:"center"
    },
    buttonCurrentChain:
    {
        backgroundColor: "#DAF7A6",
        alignContent: "center",
        padding:30,
        borderRadius:50,
        marginBottom:20,
        alignSelf:"center"
    },
    currentChainText:
    {
        alignItems:"center",
        color:"#273746",
        fontSize: 30,
        textAlign:"center"

    }
})