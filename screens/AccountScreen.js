import React, { useContext } from "react";
import { Pressable, StyleSheet, Text, View,  TouchableOpacity } from "react-native";
import { AntDesign, Ionicons } from '@expo/vector-icons'; 
import { ThemeContext } from "../Context/ThemeContext";
import { colors } from "../Theme/theme";

const AccountScreen = ({ navigation }) => {
    const {theme} = useContext(ThemeContext)
    let activeColors = colors[theme.mode]
    return(
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            backgroundColor: activeColors.bg
        }}
        >

            <View style={style.headerContain}> 
                <Pressable onPress={() => navigation.navigate('Profile')}>
                    <AntDesign name="closecircle" size={24} color={activeColors.yellow} style={style.iconCancel} />
                </Pressable>
                <Text style={{
                    fontSize: 30,
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: activeColors.font
                }}>
                    Account
                </Text>
            </View>

            <Ionicons name="person-circle-outline" size={90} color={activeColors.primary} style={style.profilePic}/>
            <Text style={{
                marginTop: 10,
                fontSize: 20,
                fontWeight: 'bold',
                color: activeColors.font
            }}>
                Username
            </Text>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderWidth: 1,
                borderRadius: 15,
                height: 60,
                width: 350,
                marginTop: 40,
                borderColor: activeColors.font,
                marginBottom: 500
            }}>
                <Text style={{
                    fontSize: 18,
                    marginLeft: 20, 
                    color: activeColors.font
                }}>
                    Edit Profile
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
                    <AntDesign name="right" size={24} color={activeColors.font} style={style.iconArrow} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    headerContain: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 100,
        marginTop: 30
    },
    iconCancel: {
        marginRight: 70
    },
    profilePic: {
        marginTop: 30,
    },
    iconArrow: {
        marginLeft: 200,
    }  
})

export default AccountScreen