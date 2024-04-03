import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons"

const SettingsScreen = ({ navigation }) => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleModeChange = (mode) => {
        setIsDarkMode(mode);
    };

    return(
        <View style={style.container}>

            <View style={style.headerContain}> 
                <Pressable onPress={() => navigation.navigate('Profile')}>
                    <AntDesign name="closecircle" size={24} color="#FFAF45" style={style.iconCancel} />
                </Pressable>
                <Text style={style.title}>Settings</Text>
            </View>

            <View style={style.themeContain}>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="theme-light-dark" size={24} color="black"  />
                </TouchableOpacity>
                <Text style={style.themes}>Themes</Text>
            </View>

            <Text style={style.line}></Text>

            <View >
                <View style={style.radio}>
                    <Text style={style.label}>Light Mode</Text>
                    <TouchableOpacity onPress={() => handleModeChange(false)} style={[style.radioButton, !isDarkMode ? style.selected : null]}>
                        { !isDarkMode && <View style={style.radioDot}></View> }
                    </TouchableOpacity>
                </View>

                <View style={style.radio}>
                    <Text style={style.label}>Dark Mode</Text>
                    <TouchableOpacity onPress={() => handleModeChange(true)} style={[style.radioButton, isDarkMode ? style.selected : null]}>
                        { isDarkMode && <View style={style.radioDot}></View> }
                    </TouchableOpacity>
                </View>
            </View>
            
        </View>
        
    )
}


const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'   
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
    themeContain: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 50,
        marginRight: 210 
    },
    themes: {
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 20, 
    },
    line: {
        borderBottomWidth: 1,
        height: 25,
        width: 350,
        opacity: 0.5,
        marginTop: -10
    },
    radio: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginTop: 10
    },
    radioButton: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 170
    },
    selected: {
        backgroundColor: 'black', 
    },
    radioDot: {
        width: 10,
        height: 10,
        borderRadius: 6,
        backgroundColor: 'white', 
    },
    label: {
        fontSize: 20,
    },
})


export default SettingsScreen