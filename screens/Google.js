import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native'
import google from './assets/google.png'
// import { LinearTextGradient } from "react-native-linear-gradient";

const Google = () => {
    return (
        <View style={style.container}>
            <View style={style.bg}></View>
                <TouchableOpacity style={style.google}>
                    <Image style={style.googleIcon} source={google} />
                    <Text style={style.signuptext1}>Continue With Google</Text>
                </TouchableOpacity> 
            
            <Text style={style.line}></Text>
            {/*<LinearTextGradient
               
                locations={[0,1]}
                colors={["darkorange", "yellow"]}
                start={{ x:0 , y:0}}
                end={{ x:1 , y:0}}
            >
                <Text  style={style.heading}>Movixer</Text>
            </LinearTextGradient> 
            <Text style={style.heading}>Movixer</Text>
            <Text style={style.account}>Choose an Account</Text>
            <Text style={style.Movixer}>to continue to Movixer</Text>
            <Text>
                To continue, Google will share your name, email address, language
                preference, and profile picture with Movixer. Before using this app,
                you can review Movixer Privacy Policy and termas or services.
            </Text> */}
        </View>
    )
}
const style = StyleSheet.create({
    container :{
        display: 'flex',
        verticalAlign: 'center',
        alignItems: 'center',
    },
    bg:{
        backgroundColor: 'black',
        opacity: 0.2,
        height: 500,
        width: '90%',
        marginTop: 150,
        borderRadius: 15
    },
    google: {
        flexDirection: 'row',
        borderRadius: 10,
        justifyContent: "center",
        marginTop: 15,
        marginTop: -480,
        borderColor: 'black',
        marginRight: 100,
    },
    googleIcon: {
        width: 30,
        height: 30,
        marginRight : -40
    },
    signuptext1: {
        fontSize: 18,
        opacity: 0.5,
        color: "black",
        fontWeight: 'bold',
        marginLeft: 50,
    },
    line: {
        borderWidth: 1,
        borderColor: 'black'
    },
    // heading : {
    //     fontSize : 35,
    //     fontWeight : 'bold',
    //     marginLeft : 110,
    //     marginTop: 20
    // },
    // account : {
    //     fontSize : 20,
    //     marginLeft : 80
    // },
    // Movixer : {
    //     fontSize : 15,
    //     marginLeft : 95
    // }
   
})

export default Google;
