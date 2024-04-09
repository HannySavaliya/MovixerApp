import { useFormik } from "formik";
import { TextInput, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from "react-redux";
import { addUsersData } from "../movixerSlice";
import * as SecureStore from 'expo-secure-store';
import { colors } from "../Theme/theme";
import { REGISTRATION_SCHEMA } from "../utils/formikValidation";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const Signup = ({ navigation }) => {
    const {theme} = useContext(ThemeContext)
    let activeColors = colors[theme.mode]
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.movie.loading);

    const formik = useFormik({
        initialValues: {
            fullname: '',
            email: '',
            password: '',
            confirmPassword: '',
            mobileNumber: '',
        },
        validationSchema: REGISTRATION_SCHEMA, 
        onSubmit: async(values) => {
            await SecureStore.setItemAsync('email', values.email)
            await SecureStore.setItemAsync('confirmPassword', values.confirmPassword)
            await SecureStore.setItemAsync('password', values.password)
            await SecureStore.setItemAsync('fullname', values.fullname)
            await SecureStore.setItemAsync('mobileNumber', values.mobileNumber)
            dispatch(addUsersData(values)).then(data => {
                console.log("===data===");
                console.log(data);
            })
            navigation.navigate('Home')
        }
    });

    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            backgroundColor: activeColors.bg
        }}>
            <Ionicons 
                name="arrow-back-outline" 
                size={24} 
                color={activeColors.font} 
                onPress={() => navigation.navigate('SplashScreen')}
                style={styles.arrowBack}
            />

            <Text style={{
                fontSize: 36,
                fontWeight: 'bold',
                marginTop: 50,
                color: activeColors.font
            }}>
                Sign up
            </Text>

            <View style={styles.inputContainer}>
                <TextInput 
                    value={formik.values.fullname}
                    placeholder="Full Name"
                    placeholderTextColor={activeColors.primary}
                    onChangeText={formik.handleChange('fullname')}
                    style={[{
                        borderWidth: 1,
                        borderRadius: 4,
                        padding: 10,
                        marginBottom: 20,
                        width: '100%',
                        borderColor: activeColors.font,
                        color: activeColors.font
                    }, formik.errors.fullname ? styles.errorBorder : null]}
                />
                {formik.errors.fullname && <Text style={styles.errorText}>{formik.errors.fullname}</Text>}

                <TextInput
                    value={formik.values.email}
                    placeholder="Email"
                    placeholderTextColor={activeColors.primary}
                    onChangeText={formik.handleChange('email')}
                    style={[{
                        borderWidth: 1,
                        borderRadius: 4,
                        padding: 10,
                        marginBottom: 20,
                        width: '100%',
                        borderColor: activeColors.font,
                        color: activeColors.font
                    }, formik.errors.email ? styles.errorBorder : null]}
                />
                {formik.errors.email && <Text style={styles.errorText}>{formik.errors.email}</Text>}

                <TextInput
                    value={formik.values.password}
                    placeholder="Password"
                    placeholderTextColor={activeColors.primary}
                    onChangeText={formik.handleChange('password')}
                    secureTextEntry={true}
                    style={[{
                        borderWidth: 1,
                        borderRadius: 4,
                        padding: 10,
                        marginBottom: 20,
                        width: '100%',
                        borderColor: activeColors.font,
                        color: activeColors.font
                    }, formik.errors.password ? styles.errorBorder : null]}
                />
                {formik.errors.password && <Text style={styles.errorText}>{formik.errors.password}</Text>}

                <TextInput
                    value={formik.values.confirmPassword}
                    placeholder="Confirm Password"
                    placeholderTextColor={activeColors.primary}
                    onChangeText={formik.handleChange('confirmPassword')}
                    secureTextEntry={true}
                    style={[{
                        borderWidth: 1,
                        borderRadius: 4,
                        padding: 10,
                        marginBottom: 20,
                        width: '100%',
                        borderColor: activeColors.font,
                        color: activeColors.font
                    }, formik.errors.confirmPassword ? styles.errorBorder : null]}
                />
                {formik.errors.confirmPassword && <Text style={styles.errorText}>{formik.errors.confirmPassword}</Text>}

                <TextInput
                    value={formik.values.mobileNumber}
                    placeholder="Add Mobile Number"
                    placeholderTextColor={activeColors.primary}
                    onChangeText={formik.handleChange('mobileNumber')}
                    style={[{
                        borderWidth: 1,
                        borderRadius: 4,
                        padding: 10,
                        marginBottom: 20,
                        width: '100%',
                        borderColor: activeColors.font,
                        color: activeColors.font
                    }, formik.errors.mobileNumber ? styles.errorBorder : null]}
                />
                {formik.errors.mobileNumber && <Text style={styles.errorText}>{formik.errors.mobileNumber}</Text>}

            </View>
                    
            <TouchableOpacity style={styles.button} onPress={formik.handleSubmit}>
                <Text style={styles.buttonText}>Sign up</Text>
            </TouchableOpacity>

            <View style={styles.options}>
                <Text style={styles.text}>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={{
                        marginTop: 30,
                        fontWeight: 'bold',
                        marginLeft: 5,
                        color: activeColors.font
                    }}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        
        </View>
    )
}

const styles = StyleSheet.create({
    arrowBack: {
        marginRight: 350,
        marginTop: -200
    },
    inputContainer: {
        width: '85%',
        marginTop: 50
    },
    button: {
        backgroundColor: colors.yellow,
        borderRadius: 20,
        padding: 10,
        width: '50%',
        alignItems: 'center',
        marginTop: 20
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    text: {
        color: colors.primary,
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 30,
    },
    options: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    errorText: {
        color: 'red',
        marginBottom: 20,
        marginTop: -20
    },
    errorBorder: {
        borderColor: 'red'
    }
});

export default Signup;



