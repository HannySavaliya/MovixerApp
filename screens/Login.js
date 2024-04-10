import { useFormik } from 'formik';
import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { colors } from '../Theme/theme';
import CheckBox from 'react-native-check-box';
import { LOGIN_SCHEMA } from '../utils/formikValidation';
import * as SecureStore from 'expo-secure-store';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserData, userFind } from '../movixerSlice';
import getCredentials from '../Authentication/AuthService';
import { ThemeContext } from '../Context/ThemeContext';


const Login = ({ navigation }) => {

    const [isChecked, setChecked] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const data=useSelector((state)=> state.movie.finduser)

    const {theme} = useContext(ThemeContext)
    let activeColors = colors[theme.mode]

    const dispatch = useDispatch();

    useEffect (() => {
        getCredentials()
    }, [])
    
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: LOGIN_SCHEMA,
        onSubmit: () =>{
            try {
                dispatch(loginUserData())
                .then(async(e) => {
                    if(e?.meta?.requestStatus === "fulfilled"){
                        dispatch(userFind({email : formik.values.email, password : formik.values.password}))
                        console.log(data,'=======dataLogin');
                        if (data) {
                            await SecureStore.setItemAsync('data', JSON.stringify(data));
                            navigation.navigate('Home')
                        }
                        else{
                            Alert.alert('Data not found')
                            formik.resetForm();
                        }
                    }  
                })
            } catch (error) {
                console.error(error);
                Alert.alert('An error occurred');
            }
        }
    });

    return (
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            backgroundColor: activeColors.bg
        }}>
            <Ionicons 
                name="arrow-back-outline" 
                size={24} 
                color={activeColors.font} 
                onPress={() => navigation.navigate('SplashScreen')}
                style={style.arrowBack}    
            />

            <Text style={{
                fontSize: 36,
                fontWeight: 'bold',
                marginTop: 50,
                color: activeColors.font
            }}>
                Login
            </Text>

            <View style={style.inputContainer}>
                <TextInput
                    placeholder="Email"
                    placeholderTextColor={activeColors.primary}
                    value={formik.values.email}
                    onChangeText={formik.handleChange('email')}
                    style={[{
                        borderWidth: 1,
                        borderRadius: 4,
                        padding: 10,
                        marginBottom: 20,
                        width: '100%',
                        borderColor: activeColors.font,
                        color: activeColors.font
                    }, formik.errors.email ? style.errorBorder : null]}
                />
                {formik.errors.email && <Text style={style.errorText}>{formik.errors.email}</Text>}

                <View style={style.passwordContainer}>
                    <TextInput
                    placeholder="Password"
                    placeholderTextColor={activeColors.primary}
                    secureTextEntry={!showPassword}
                    value={formik.values.password}
                    onChangeText={formik.handleChange('password')}
                    style={[{
                        flex: 1,
                        borderWidth: 1,
                        borderTopColor: activeColors.primary,
                        borderRadius: 4,
                        height: 50,
                        marginBottom: 20,
                        paddingLeft: 10,
                        borderColor: activeColors.font,
                        color: activeColors.font
                    }, formik.errors.password ? style.errorBorder : null]}
                    />
                     <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <View style={{
                            width: 20,
                            height: 20,
                            marginLeft: -40,
                            marginTop: -20
                        }}>
                            {showPassword ? <Feather name="eye" size={20} color={activeColors.font} />  :
                            <Feather name="eye-off" size={20} color={activeColors.font} /> }
                        </View>
                    </TouchableOpacity> 
                </View>
                    {formik.errors.password && <Text style={style.errorText}>{formik.errors.password}</Text>}
            </View>

            <View style={style.remember}>
                <CheckBox 
                    isChecked={isChecked} 
                    onClick={() => setChecked(!isChecked)}
                    style={style.checkbox}
                    checkBoxColor={colors.primary} 
                />
                <TouchableOpacity>
                    <Text style={{marginRight: 95, color: activeColors.font, marginLeft: 5}}>Remember me</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{marginLeft: 20, color: activeColors.font}}>Forgot password?</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={style.button} onPress={formik.handleSubmit}>
                <Text style={style.buttonText}>Login</Text>
            </TouchableOpacity>

            <View style={style.options}>
                <Text style={{
                    color: activeColors.primary, 
                    fontSize: 15,
                    marginRight: 10,
                    marginTop: 20,
                }}>
                    Don't have an account?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                    <Text style={{
                        color: activeColors.font,
                        marginTop: 20,
                        fontWeight: 'bold'
                    }}>
                        Sign up
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={style.lineParent}>
                <View style={{
                    flex: 1,
                    borderBottomWidth: 1,
                    opacity: 0.4,
                    marginLeft : 50,
                    backgroundColor: activeColors.font
                }}/>
                <Text style={{
                    paddingHorizontal: 10,
                    textAlign: 'center',
                    color: activeColors.font
                }}>
                    or
                </Text>
                <View style={{
                    flex: 1,
                    borderBottomWidth: 1,
                    opacity: 0.4,
                    marginRight: 50,
                    backgroundColor: activeColors.font
                }}/>
            </View>

            <TouchableOpacity>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderWidth: 1,
                    padding: 10,
                    width: 345,
                    borderRadius: 5,
                    marginTop: 50,
                    borderColor: activeColors.font,
                }}>
                    <Image
                        style={style.icon}
                        source={require("../assets/google.png")}
                    />
                    <Text style={{
                        fontSize: 15,
                        marginLeft: 18,
                        color: activeColors.font
                    }}>
                        Continue With Google
                    </Text>
                </View>  
            </TouchableOpacity> 

        </View>
    );
};

const style = StyleSheet.create({
    arrowBack: {
        marginRight: 350,
        marginTop: -220
    },
    inputContainer: {
        width: '85%',
        marginTop: 50
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center'
      },
    errorText: {
        color: 'red',
        marginBottom: 20,
        marginTop: -20
    },
    errorBorder: {
        borderColor: 'red'
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    remember: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: -10
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
    lineParent: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30
    },
    icon: {
        width: 25,
        height: 25,
        marginLeft: 60
    },
});

export default Login;
