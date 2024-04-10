import React, { useContext } from "react";
import { StyleSheet, Text, View,  TouchableOpacity } from "react-native";
import { Ionicons, AntDesign, Octicons, MaterialIcons } from '@expo/vector-icons'; 
import { ThemeContext } from "../Context/ThemeContext";
import { colors } from "../Theme/theme";

const ProfileScreen = ({ navigation }) => {
    const {theme} = useContext(ThemeContext)
    let activeColors = colors[theme.mode]

    return(
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            backgroundColor: activeColors.bg 
        }}>
            
            <Text style={{
                fontSize: 30,
                textAlign: 'center',
                fontWeight: 'bold',
                color: activeColors.font
            }}>
                My Profile
            </Text>

            <Ionicons name="person-circle-outline" size={90} color={activeColors.primary} style={style.profilePic}/>
            <Text style={{
                marginTop: 10,
                textAlign: 'center',
                fontSize: 20,
                fontWeight: 'bold',
                color: activeColors.font
            }}>
                fullname
            </Text>

            <View style={style.accountContain}>
                <View>
                    <View style={style.account}>
                        <Ionicons name="person-outline" size={20} color={activeColors.font}/>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 20,
                            marginLeft: 15,
                            color: activeColors.font
                        }}>
                            Account
                        </Text>
                    </View>
                    <Text style={{
                        opacity: 0.7,
                        marginLeft: 35,
                        marginTop: 10,
                        color: activeColors.font
                    }}>
                        Edit Profile
                    </Text>
                    <Text style={{
                         opacity: 0.7,
                         marginLeft: 35,
                         color: activeColors.font
                    }}>
                        Change password
                    </Text>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('Account')}>
                    <AntDesign name="right" size={24} color={activeColors.font} />
                </TouchableOpacity>
            </View>

            <View style={style.accountContain}>
                <View>
                    <View style={style.account}>
                        <Ionicons name="settings-outline" size={20} color={activeColors.font}/>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 20,
                            marginLeft: 15,
                            color: activeColors.font
                        }}>
                            Settings
                        </Text>
                    </View>
                    <Text style={{
                        opacity: 0.7,
                        marginLeft: 35,
                        marginTop: 10,
                        color: activeColors.font
                    }}>
                        Themes
                    </Text>
                    <Text style={{
                         opacity: 0.7,
                         marginLeft: 35,
                         color: activeColors.font
                    }}>
                        Permissions
                    </Text>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                    <AntDesign name="right" size={24} color={activeColors.font} />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={style.signout} onPress={() => navigation.navigate('SplashScreen')}>
                <Octicons name="sign-out" size={24} color={activeColors.font} />
                <Text style={{fontSize:17, fontWeight: 'bold', marginLeft: 15, color: activeColors.font}}>Log Out</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.createAccount} onPress={() => navigation.navigate('Signup')}>
                <MaterialIcons name="person-outline" size={26} color={activeColors.font}/>
                <Text style={{fontSize: 17, fontWeight: 'bold', marginLeft: 15, color: activeColors.font}}>Create a new Account</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    profilePic: {
        marginTop: 40,
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
    signout: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
        marginRight: 200
    },
    createAccount: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginRight: 100,
        marginBottom: 200
    }
})

export default ProfileScreen