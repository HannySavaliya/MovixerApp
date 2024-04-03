import React from "react";
import { Pressable, StyleSheet, Text, View,  TouchableOpacity } from "react-native";
import { Ionicons, AntDesign } from '@expo/vector-icons'; 

const ProfileScreen = ({ navigation }) => {
    return(
        <View style={style.container}>
            
            <Text style={style.title}>My Profile</Text>

            <Ionicons name="person-circle-outline" size={90} color="grey" style={style.profilePic}/>
            <Text style={style.userName}>Username</Text>

            <View style={style.accountContain}>
                <View>
                    <View style={style.account}>
                        <Ionicons name="person-outline" size={20} color="black"/>
                        <Text style={style.subTitle}>Account</Text>
                    </View>
                    <Text style={style.sub1}>Edit Profile</Text>
                    <Text style={style.sub2}>Change password</Text>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('Account')}>
                    <AntDesign name="right" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <View style={style.accountContain}>
                <View>
                    <View style={style.account}>
                        <Ionicons name="settings-outline" size={20} color="black"/>
                        <Text style={style.subTitle}>Settings</Text>
                    </View>
                    <Text style={style.sub1}>Themes</Text>
                    <Text style={style.sub2}>Permissions</Text>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                    <AntDesign name="right" size={24} color="black" />
                </TouchableOpacity>
            </View>

        </View>
    )
}

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'    
    },
    title: {
        marginTop: 50,
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    profilePic: {
        marginTop: 40,
    },
    userName: {
        marginTop: 10,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    accountContain: {
        flexDirection: 'row',
        marginTop: 30,
        alignItems: 'center'
    },
    account: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 180
    },
    subTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 15
    },
    sub1: {
        opacity: 0.7,
        marginLeft: 35,
        marginTop: 10
    },
    sub2: {
        opacity: 0.7,
        marginLeft: 35
    },
})

export default ProfileScreen