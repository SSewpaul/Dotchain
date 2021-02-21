import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import 'react-native-gesture-handler';

export default function Initialization({navigation})
{
    const [name, setName] = useState('');
    const [key, setKey] = useState('');

    return(
            <View>
                <Text style={styles.Title}>Welcome to Dotchain, Please enter your information</Text>
                <Text style={styles.Text}>Public key:</Text>
                <TextInput style={styles.PublicKey} placeholder="64 character key" onChangeText={key => setKey(key)} defaultValue={key}/>
                <Text style={styles.Text}>Username:</Text>
                <TextInput style={styles.Username} placeholder="username" onChangeText={name => setName(name)} defaultValue={name}/>
                <TouchableOpacity style={styles.SubmitButton} onPress={()=>{navigation.navigate('Welcome')}}>
                    <Text style={styles.Submit}>Submit</Text>
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
        paddingHorizontal: 100,
        marginBottom: 30,
        height:40
    },

    Username:
    {
        alignSelf:"center",
        backgroundColor:"#FFFFFF",
        paddingHorizontal: 120,
        height:40,
        marginBottom:30
    },

    SubmitButton:
    {
        backgroundColor: "#6E2B7C",
        alignContent: "center",
        padding:20,
        borderRadius:50,
        marginBottom: 20,
        alignSelf:"center"
    },

    Submit:
    {
        alignItems:"center",
        color:"#FFFFFF",
        fontSize: 20,
        textAlign:"center"
    },

    Text:
    {
        fontSize:20,
        marginBottom:10,
        marginLeft: 45
    }
})