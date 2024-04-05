import React, { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { AntDesign, Ionicons } from '@expo/vector-icons'; 
import { useFormik } from "formik";
import { REGISTRATION_SCHEMA } from "../utils/formikValidation";
import { colors } from "../Theme/theme";

const EditProfileScreen = ({ navigation }) =>{

    const [isWomen, setIsWomen] = useState(false)
    const [isYes, setIsYes] = useState(false)

    const handleWomenChange = () => {
        setIsWomen(true);
    };
    
    const handleMenChange = () => {
        setIsWomen(false);
    };

    const handleYesChange = () => {
        setIsYes(true);
    };
    
    const handleNoChange = () => {
        setIsYes(false);
    };

    const formik = useFormik({
        initialValues: {
            mobileNumber: '',
            email: '',
            fullname: '',
            birthday: '',
        },
        validationSchema: REGISTRATION_SCHEMA, 
        onSubmit: (values) =>{
            console.log(values);
        }
    });

    return(
        <ScrollView>
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
                        value={formik.values.mobileNumber}
                        onChangeText={formik.handleChange('mobileNumber')}
                        placeholder="Add Mobile Number "
                        style={[style.input, formik.errors.mobileNumber ? style.errorBorder : '']}
                    />
                    {formik.errors.mobileNumber && <Text style={{color: 'red',marginBottom: 20}}>{formik.errors.mobileNumber}</Text>}

                    <Text style={{fontSize: 18, marginTop: 10}}>Email Address</Text>
                    <TextInput
                        placeholder="email"
                        value={formik.values.email}
                        onChangeText={formik.handleChange('email')}
                        style={[style.input, formik.errors.email ? style.errorBorder : '']}
                    />
                    {formik.errors.email && <Text style={{color: 'red',marginBottom: 20}}>{formik.errors.email}</Text>}

                    <Text style={{fontSize: 18, marginTop: 20, fontWeight: "bold"}}>Personal Details</Text>

                    <Text style={{fontSize: 15, marginTop: 20}}>Full Name</Text>
                    <TextInput
                        placeholder="Enter full name here"
                        value={formik.values.fullname}
                        onChangeText={formik.handleChange('fullname')}
                        style={[style.input, formik.errors.fullname ? style.errorBorder : '']}
                    />
                    {formik.errors.fullname && <Text style={{color: 'red', marginBottom: 10}}>{formik.errors.fullname}</Text>}
                    
                    <Text style={{fontSize: 15, marginTop: 15}}>Birthday (Optional)</Text>
                    <TextInput
                        value={formik.values.birthday}
                        onChangeText={formik.handleChange('birthday')}
                        placeholder="DD/MM/YY"
                        style={[style.input, formik.errors.birthday ? style.errorBorder : '']}
                    />
                    {formik.errors.birthday && <Text style={{color: 'red', marginBottom: 10}}>{formik.errors.birthday}</Text>}
                    
                    <Text style={{ fontSize: 15, marginTop: 15 }}>Identity (Optional)</Text>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <View style={isWomen ? [style.identity, style.selected] : style.identity}>
                            <TouchableOpacity onPress={handleWomenChange}>
                                <Text style={{ textAlign: 'center' }}>Women</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={!isWomen ? [style.identity, style.selected] : style.identity}>
                            <TouchableOpacity onPress={handleMenChange}>
                                <Text style={{ textAlign: 'center' }}>Men</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Text style={{fontSize: 15, marginTop: 20}}>Married (Optional)</Text>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <View style={isYes ? [style.identity, style.selected] : style.identity}>
                            <TouchableOpacity onPress={handleYesChange}>
                                <Text style={{ textAlign: 'center' }}>Yes</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={!isYes ? [style.identity, style.selected] : style.identity}>
                            <TouchableOpacity onPress={handleNoChange}>
                                <Text style={{ textAlign: 'center' }}>No</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                </View>

                <TouchableOpacity  onPress={formik.handleSubmit}>
                    <Text style={style.saveBtn}>Save Changes</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>    
        
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
        marginTop: 8,
        paddingLeft: 20
    },
    errorBorder: {
        borderColor: colors.error
    },
    saveBtn: {
        marginTop: 50,
        width: 200,
        fontSize: 17,
        backgroundColor: colors.yellow,
        borderRadius: 10,
        textAlign: 'center',
        paddingVertical: 6,
        marginBottom: 50,
        justifyContent: 'center'
    },
    identity: {
        borderWidth: 1,
        borderRadius: 7,
        padding: 7,
        width: 80,
        marginRight: 20
    },
    selected: {
        backgroundColor: colors.yellow,
    }
})

export default EditProfileScreen