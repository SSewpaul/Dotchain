import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function Welcome ({navigation})
{
    return(
        <View>
            <Text style={styles.Title}>Welcome to Dotchain</Text>
            <TouchableOpacity style={styles.buttonCreateChain} onPress={() => navigation.navigate('Deadline')}>
                <Text style={styles.createChainText}>Create Chain</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonJoinChain}  onPress={() => navigation.navigate('OwnerInfo')}>
                <Text style={styles.joinChainText}>Join Chain</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonCurrentChain} onPress={() => navigation.navigate('ChainsDisplay')}>
                <Text style={styles.currentChainText}>Current Chain</Text>
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

    buttonCreateChain:
    {
        backgroundColor: "#6E2B7C",
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
        color:"#FFFFFF",
        fontSize: 30,
        textAlign:"center"

    },
    buttonJoinChain:
    {
        backgroundColor: "#6E2B7C",
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
        color:"#FFFFFF",
        fontSize: 30,
        textAlign:"center"
    },
    buttonCurrentChain:
    {
        backgroundColor: "#6E2B7C",
        alignContent: "center",
        padding:30,
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