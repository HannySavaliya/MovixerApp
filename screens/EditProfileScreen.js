import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { AntDesign, Ionicons } from '@expo/vector-icons'; 
import { useFormik } from "formik";
import { REGISTRATION_SCHEMA } from "../utils/formikValidation";

const EditProfileScreen = ({ navigation }) =>{

    const [isWomen, setIsWomen] = useState(false)
    const [isYes, setIsYes] = useState(false)

    const handleIdentityChange = (identity) => {
        setIsWomen(identity);
    };

    const formik = useFormik({
        initialValues: {
            mobileNumber: '',
            fullname: '',
            email: '',
            birthday: '',
            married: ''
        },
        validationSchema: REGISTRATION_SCHEMA, 
        onSubmit: (values) =>{
            console.log(values);
        }
    });

    return(
        <View style={style.container}>
            <View style={style.headerContain}> 
                <TouchableOpacity onPress={() => navigation.navigate('Account')}>
                    <AntDesign name="closecircle" size={24} color="#FFAF45" style={style.iconCancel} />
                </TouchableOpacity>
                <Text style={style.title}>Edit Profile</Text>
            </View>

            <Ionicons name="person-circle-outline" size={90} color="grey" style={style.profilePic}/>
            <Text style={style.addPhoto}>Add Photo</Text>

            <View style={style.inputContainer}>

                <Text style={{fontSize: 18}}>Mobile Number</Text>
                <TextInput
                    style={style.input}
                    value={formik.values.mobileNumber}
                    placeholder="Add Mobile Number "
                />

                <Text style={{fontSize: 18}}>Email Address</Text>
                <TextInput
                    placeholder="email"
                    value={formik.values.email}
                    onChangeText={formik.handleChange('email')}
                    style={[style.input, formik.errors.email ? style.errorBorder : '']}
                />
                {formik.errors.email && <Text style={{color: 'red'}}>{formik.errors.email}</Text>}

                <Text style={{fontSize: 18, marginTop: 20, fontWeight: "bold"}}>Personal Details</Text>

                <Text style={{fontSize: 15, marginTop: 20}}>Full Name</Text>
                <TextInput
                    placeholder="Enter full name here"
                    value={formik.values.fullname}
                    onChangeText={formik.handleChange('fullname')}
                    style={[style.input, formik.errors.fullname ? style.errorBorder : '']}
                />
                {formik.errors.fullname && <Text style={{color: 'red'}}>{formik.errors.fullname}</Text>}
                
                <Text style={{fontSize: 15, marginTop: 15}}>Birthday (Optional)</Text>
                <TextInput
                    style={style.input}
                    value={formik.values.birthday}
                    placeholder="DD/MM/YY"
                />

                <Text style={{fontSize: 15, marginTop: 15}}>Identity (Optional)</Text>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                    <View style={style.identity}>
                        <TouchableOpacity onPress={() => handleIdentityChange(false)} style={[ !isWomen ? style.selected : null]}>
                            <Text style={{textAlign: 'center'}}>Women</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={style.identity}>
                        <TouchableOpacity onPress={() => handleIdentityChange(true)} style={[ isWomen ? style.selected : null]}>
                            <Text style={{textAlign: 'center'}}>Men</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <Text style={{fontSize: 15, marginTop: 20}}>Married (Optional)</Text>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                    <View style={style.identity}>
                        <TouchableOpacity onPress={() => handleIdentityChange(false)} style={[ !isYes ? style.selected : null]}>
                            <Text style={{textAlign: 'center'}}>Yes</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={style.identity}>
                        <TouchableOpacity onPress={() => handleIdentityChange(true)} style={[ isYes ? style.selected : null]}>
                            <Text style={{textAlign: 'center'}}>No</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                

            </View>

            <TouchableOpacity  onPress={formik.handleSubmit}>
                <Text style={style.updateBtn}>Update</Text>
            </TouchableOpacity>
            
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
    profilePic: {
        marginTop: 10,
    },
    addPhoto: {
        marginTop: 5,
        fontSize: 15,
        color: 'grey'
    },
    inputContainer: {
        width: '90%',
        marginTop: 10
    },
    input: {
        borderWidth: 1,
        borderRadius: 4,
        padding: 5,
        marginBottom: 20,
        marginTop: 8,
        paddingLeft: 20
    },
    errorBorder: {
        borderColor: 'red'
    },
    updateBtn: {
        marginTop: 50,
        width: 200,
        fontSize: 17,
        backgroundColor: '#FFAF45',
        borderRadius: 10,
        textAlign: 'center',
        paddingVertical: 5
    },
    identity: {
        borderWidth: 1,
        borderRadius: 7,
        padding: 7,
        width: 80,
        marginRight: 20
    }
})

export default EditProfileScreen