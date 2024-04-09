import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { colors } from '../Theme/theme';

const SplashScreen = ({ navigation }) => {
    return (
        <View style={style.container}>
            <Image
                style={style.logo}
                contentFit="cover"
                source={require("../assets/Movixer-Logo.png")}
            />
            <Text style={style.title}>Movixer</Text>
            <TouchableOpacity style={style.signup} onPress={() => navigation.navigate('Signup')}>
                <Text style={style.text}>Signup</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.login} onPress={() => navigation.navigate('Login')}>
                <Text style={style.text}>Login</Text>
            </TouchableOpacity>
        </View>
    );
}

export default SplashScreen;

const style = StyleSheet.create({
    container: {
        backgroundColor: colors.yellow,
        justifyContent: 'center',
        alignItems: 'center', 
        width: "100%",
        height: "100%"
    },
    logo: {
        marginLeft: -66,
        top: 250,
        width: 132,
        height: 132,
        left: "50%",
        position: "absolute",
    },
    title:{
        fontSize: 40,
        color: colors.font,
        fontWeight: '900',
        marginTop: 300
    },
    signup: {
        padding: 12,
        width: 350,
        backgroundColor: colors.secondary,
        borderRadius: 50,
        marginTop: 200
    },
    login: {
        padding: 12,
        width: 350,
        backgroundColor: colors.secondary,
        borderRadius: 50,
        marginTop: 20
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    }
});





// import React, { useEffect } from 'react';
// import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import { colors } from '../Theme/theme';

// const SplashScreen = ({navigation}) => {
//     return (
//         <View style={style.container}>
//             <Image
//                 style={style.logo}
//                 contentFit="cover"
//                 source={require("../assets/Movixer-Logo.png")}
//             />
//             <Text style={style.title}>Movixer</Text>
//             <TouchableOpacity style={style.signup} onPress={() => navigation.navigate('Signup')}>
//                 <Text style={style.text}>Signup</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={style.login} onPress={() => navigation.navigate('Login')}>
//                 <Text style={style.text}>Login</Text>
//             </TouchableOpacity>
//         </View>
        
//     );
// }

// export default SplashScreen;

// const style = StyleSheet.create({
//     container: {
//         backgroundColor: colors.yellow,
//         justifyContent: 'center',
//         alignItems: 'center', 
//         width: "100%",
//         height: "100%"
//     },
//     logo: {
//         marginLeft: -66,
//         top: 250,
//         width: 132,
//         height: 132,
//         left: "50%",
//         position: "absolute",
//     },
//     title:{
//         fontSize: 40,
//         color: colors.font,
//         fontWeight: '900',
//         marginTop: 300
//     },
//     signup: {
//         padding: 12,
//         width: 350,
//         backgroundColor: colors.secondary,
//         borderRadius: 50,
//         marginTop: 200
//     },
//     login: {
//         padding: 12,
//         width: 350,
//         backgroundColor: colors.secondary,
//         borderRadius: 50,
//         marginTop: 20
//     },
//     text: {
//         textAlign: 'center',
//         fontSize: 20,
//         fontWeight: 'bold'
//     }
// })
