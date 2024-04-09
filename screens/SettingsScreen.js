import React, { useContext, useState } from "react";
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons"
import { ThemeContext } from "../Context/ThemeContext";
import { colors } from "../Theme/theme";

const SettingsScreen = ({ navigation }) => {

    const {theme, updateTheme} = useContext(ThemeContext)
    let activeColors = colors[theme.mode]
    const [isActive, setIsActive] = useState(theme.mode === "dark");
    const handleModeChange = (mode) => {
        updateTheme({mode});
        setIsActive(mode === "dark");
    };

    return(
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            backgroundColor: activeColors.bg
        }}>

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
                    Settings
                </Text>
            </View>

            <View style={style.themeContain}>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="theme-light-dark" size={24} color={activeColors.font}  />
                </TouchableOpacity>
                <Text style={{
                    fontSize: 22,
                    fontWeight: 'bold',
                    marginLeft: 20, 
                    color: activeColors.font
                }}>
                    Themes
                </Text>
            </View>

            <Text style={{
                borderBottomWidth: 1,
                height: 2,
                width: 350,
                opacity: 0.5,
                marginTop: 15,
                backgroundColor: activeColors.font
            }}>
            </Text>

            <View style={{marginBottom: 550}}>
                <View style={style.radio}>
                    <Text style={{
                        fontSize: 20,
                        color: activeColors.font
                    }}>
                        Light Mode
                    </Text>
                    <TouchableOpacity onPress={() => handleModeChange("light")} style={[{
                        width: 20,
                        height: 20,
                        borderRadius: 10,
                        borderWidth: 2,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginLeft: 170,
                        borderColor: activeColors.font
                    }, !isActive ? {backgroundColor: activeColors.bg} : null]}>
                        { !isActive && <View style={{
                            width: 10,
                            height: 10,
                            borderRadius: 6,
                            backgroundColor: activeColors.font
                        }}></View> }
                    </TouchableOpacity>
                </View>

                <View style={style.radio}>
                    <Text style={{
                        fontSize: 20,
                        color: activeColors.font
                    }}>
                        Dark  Mode
                    </Text>
                    <TouchableOpacity onPress={() => handleModeChange("dark")} style={[{
                        width: 20,
                        height: 20,
                        borderRadius: 10,
                        borderWidth: 2,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginLeft: 170,
                        borderColor: activeColors.font
                    }, isActive ? {backgroundColor: activeColors.bg} : null]}>
                        { isActive && <View style={{
                            width: 10,
                            height: 10,
                            borderRadius: 6,
                            backgroundColor: activeColors.font
                        }}></View> }
                    </TouchableOpacity>
                </View>
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
    themeContain: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 50,
        marginRight: 210 
    },
    radio: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginTop: 10
    }
})


export default SettingsScreen