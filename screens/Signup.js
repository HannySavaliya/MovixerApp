import { useFormik } from "formik";
import { TextInput, View, StyleSheet, Text, TouchableOpacity  } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { colors } from "../Theme/theme";

const Signup = ({ navigation }) => {
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            password: ''
        },
        validate : (values)  => {
            const errors = {}
            let nameRex = /[a-zA-Z]+/
            let nameRex1  = /[a-zA-Z0-9@.]+/
            if(!values.firstname) {
            errors.firstname = "Please Enter FirstName"
            }else if (!nameRex.test(values.firstname)) {
            errors.firstname = "Please Enter Valid Character"
            }
            if(!values.lastname) {
            errors.lastname = "Please Enter LastName"
            }else if (!nameRex.test(values.lastname)) {
            errors.lastname = "Please Enter Valid Character"
            }
            if(!values.email) {
            errors.email = "Please Enter Valid E-mail "
            }else if (!nameRex1.test(values.email)) {
            errors.email = "Please Enter Valid E-mail"
            }
            if(!values.password) {
            errors.password = "Please Enter Correct Password"
            }
            return errors
        },
        onSubmit: (values) => {
            console.log(values);
           
        }
    })
    console.log(formik.values);
    return (
        <View style={style.container}>
            <Ionicons 
                name="arrow-back-outline" 
                size={24} 
                color="black" 
                onPress={() => navigation.navigate('SplashScreen')}
                style={style.arrowBack}
            />

            <Text style={style.title}>Sign up</Text>

            <View style={style.inputContainer}>
                <TextInput 
                    value={formik.values.firstname}
                    placeholder="Firstname...."
                    onChangeText={formik.handleChange('firstname')}
                    style={[style.input , formik.errors.firstname ? style.errorborder : '']}
                />
                {formik.errors.firstname && <Text style={{color : 'red' , marginBottom : 20}}>{formik.errors.firstname}</Text>}

                <TextInput
                    value={formik.values.lastname}
                    placeholder="Lastname...."
                    onChangeText={formik.handleChange('lastname')}
                    style={[style.input , formik.errors.lastname ? style.errorborder : '']}
                />
                {formik.errors.lastname && <Text style={{color : 'red' , marginBottom : 20}}>{formik.errors.lastname}</Text>}

                <TextInput
                    style={[style.input , formik.errors.email ? style.errorborder : '']}
                    value={formik.values.email}
                    placeholder="Email...."
                    onChangeText={formik.handleChange('email')}
                />
                {formik.errors.email && <Text style={{color : 'red' , marginBottom : 20}}>{formik.errors.email}</Text>}

                <TextInput
                    style={[style.input , formik.errors.password ? style.errorborder : '']}
                    value={formik.values.password}
                    placeholder="Password...."
                    onChangeText={formik.handleChange('password')}
                    secureTextEntry={true}
                />
                {formik.errors.password && <Text style={{color : 'red', marginBottom : 20}}>{formik.errors.password}</Text>}

            </View>
            
            <TouchableOpacity style={style.button} onPress={() => navigation.navigate('HomeScreen')}>
                <Text style={style.buttonText}>Sign up</Text>
            </TouchableOpacity>

            <View style={style.options}>
                <Text style={style.text}>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={style.login}>Login</Text>
                </TouchableOpacity>
            </View>
        
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    arrowBack: {
        marginRight: 350,
        marginTop: 35
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        marginTop: 50,
    },
    // checkboxContainer: {
    //     flexDirection: 'row',
    //     marginBottom: 20,
    // },
    // checkbox: {
    //     alignSelf: 'center',
    // },
    inputContainer: {
        width: '85%',
        marginTop: 50
    },
    input: {
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        marginBottom: 20,
        width: '100%',
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
    login: {
        marginTop: 30,
        fontWeight: 'bold',
        marginLeft: 5
    },
    options: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    errorborder : {
        borderColor : colors.error
    }
})

export default Signup
