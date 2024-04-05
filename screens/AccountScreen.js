import React from "react";
import { Pressable, StyleSheet, Text, View,  TouchableOpacity } from "react-native";
import { AntDesign, Ionicons } from '@expo/vector-icons'; 

const AccountScreen = ({ navigation }) => {
    return(
        <View style={style.container}>

            <View style={style.headerContain}> 
                <Pressable onPress={() => navigation.navigate('Profile')}>
                    <AntDesign name="closecircle" size={24} color="#FFAF45" style={style.iconCancel} />
                </Pressable>
                <Text style={style.title}>Account</Text>
            </View>

            <Ionicons name="person-circle-outline" size={90} color="grey" style={style.profilePic}/>
            <Text style={style.userName}>Username</Text>

            <View style={style.editContain}>
                <Text style={style.edit}>Edit Profile</Text>
                <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
                    <AntDesign name="right" size={24} color="black" style={style.iconArrow} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerContain: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 100,
        marginTop: 30
    },
    iconCancel: {
        marginRight: 70
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    profilePic: {
        marginTop: 30,
    },
    userName: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    editContain: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 15,
        height: 60,
        width: 350,
        marginTop: 40
    },
    edit: {
        fontSize: 18,
        marginLeft: 20, 
    },
    iconArrow: {
        marginLeft: 200,
    }  
})

export default AccountScreen
