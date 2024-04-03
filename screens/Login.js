import { useFormik } from 'formik';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../Theme/theme';
// import ShowImg from './assets/show.png';
// import HideImg from './assets/eye.png'; 

const Login = ({ navigation }) => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: (values) =>{
            console.log(values);
        }
    });
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={style.container}>
            <Ionicons 
                name="arrow-back-outline" 
                size={24} 
                color="black" 
                onPress={() => navigation.navigate('SplashScreen')}
                style={style.arrowBack}    
            />

            <Text style={style.login}>Login</Text>

            <View style={style.inputContainer}>
                <TextInput
                    style={style.input}
                    placeholder="Email"
                    placeholderTextColor={colors.primary}
                    value={formik.values.email}
                    onChangeText={formik.handleChange('email')}
                />
                <View style={style.passwordContainer}>
                    <TextInput
                        style={style.passwordInput}
                        placeholder="Password"
                        secureTextEntry={!showPassword}
                        value={formik.values.password}
                        onChangeText={formik.handleChange('password')}
                    />
                     {/* <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Image source={showPassword ? ShowImg : HideImg} style={style.showHideIcon}/>
                    </TouchableOpacity>  */}
                </View>
            </View>

            <View style={style.remember}>
                <TouchableOpacity>
                    <Text style={{marginRight: 100}}>Remember me</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Forgot password?</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={style.button} onPress={formik.handleSubmit}>
                <Text style={style.buttonText}>Login</Text>
            </TouchableOpacity>

            <View style={style.options}>
                <Text style={style.text}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                    <Text style={style.signup}>Sign up</Text>
                </TouchableOpacity>
            </View>

            <View style={style.lineParent}>
                <View style={style.groupItem} />
                <Text style={style.or}>or</Text>
                <View style={style.groupItem1} />
            </View>

            <TouchableOpacity>
                <View style={style.Google}>
                    <Image
                        style={style.icon}
                        source={require("../assets/google.png")}
                    />
                    <Text style={style.signuptext1}>Continue With Google</Text>
                </View>  
            </TouchableOpacity> 

        </View>
    );
};

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    arrowBack: {
        marginRight: 350,
        marginTop: 35
    },
    login: {
        fontSize: 36,
        fontWeight: 'bold',
        marginTop: 50,
    },
    inputContainer: {
        width: '85%',
        marginTop: 50
    },
    input: {
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        marginBottom: 20,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center'
      },
    passwordInput: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 4,
        height: 50,
        marginBottom: 10,
        paddingLeft: 10
    },
    // showHideIcon: {
    //     width: 20,
    //     height: 20,
    //     marginLeft: -40,
    //     marginBottom: 10
    // },
    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: 'center',
    },
    remember: {
        flexDirection: 'row',
        marginLeft: 20
    },
    button: {
        backgroundColor: colors.yellow,
        borderRadius: 20,
        padding: 10,
        width: '50%',
        alignItems: 'center',
        marginTop: 40
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    options: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    text: {
        fontSize: 15,
        marginRight: 10,
        marginTop: 20,
    },
    signup: {
        marginTop: 20,
        fontWeight: 'bold'
    },
    lineParent: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30
    },
    groupItem: {
        flex: 1,
        borderBottomWidth: 1,
        opacity: 0.4,
        marginLeft : 50,
    },
    groupItem1: {
        flex: 1,
        borderBottomWidth: 1,
        opacity: 0.4,
        marginRight: 50,
    },
    or: {
        paddingHorizontal: 10,
        textAlign: 'center'
    },
    Google: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        padding: 10,
        width: 345,
        borderRadius: 5,
        marginTop: 50
    },
    signuptext1: {
        fontSize: 15,
        marginTop: 5,
        marginLeft: 18,
    },
    icon: {
        width: 25,
        height: 25,
        marginLeft: 60
    },
});

export default Login;
