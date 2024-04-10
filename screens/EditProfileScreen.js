import React, { useContext, useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { AntDesign, Ionicons } from '@expo/vector-icons'; 
import { useFormik } from "formik";
import * as SecureStore from 'expo-secure-store';
import { EDIT_PROFILE_SCHEMA } from "../utils/formikValidation";
import { colors } from "../Theme/theme";
import { useDispatch, useSelector } from "react-redux";
import { updateUserData } from "../movixerSlice";
import { ThemeContext } from "../Context/ThemeContext";

const EditProfileScreen = ({ navigation }) =>{
    const {theme} = useContext(ThemeContext)
    let activeColors = colors[theme.mode]

    const dispatch = useDispatch();
    const data = useSelector((state) => state.movie.data)
    
    useEffect(() => {
        getStoreData();
    }, [])


    const formik = useFormik({
        initialValues: {
            mobileNumber: '',
            email: '',
            fullname: '',
        },
        validationSchema: EDIT_PROFILE_SCHEMA, 
        onSubmit: async(values) =>{
            try {
                await SecureStore.setItemAsync('email', values.email)
                await SecureStore.setItemAsync('mobileNumber', values.mobileNumber)
                await SecureStore.setItemAsync('fullname', values.fullname)
                let updatedData =  dispatch(updateUserData({id : data.id, ...values}));
                console.log(updatedData);
                navigation.navigate('Profile');
            } catch (error) {
                console.error('Error updating user data:', error);
            }
        }
    });

    const getStoreData = async () => {
        try {
            let email = await SecureStore.getItemAsync('email');
            let fullname = await SecureStore.getItemAsync('fullname');
            let mobileNumber = await SecureStore.getItemAsync('mobileNumber');
            formik.setFieldValue('email', email);
            formik.setFieldValue('fullname', fullname);
            formik.setFieldValue('mobileNumber', mobileNumber);
        } catch (error) {
            console.error('Error retrieving data from SecureStore:', error);
        }
    }

    return(
        <ScrollView>
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                backgroundColor: activeColors.bg
            }}>

                <View style={style.headerContain}> 
                    <TouchableOpacity onPress={() => navigation.navigate('Account')}>
                        <AntDesign name="closecircle" size={24} color={activeColors.yellow} style={style.iconCancel} />
                    </TouchableOpacity>
                    <Text style={{
                        fontSize: 30,
                        textAlign: 'center',
                        fontWeight: 'bold',
                        color: activeColors.font
                    }}>Edit Profile</Text>
                </View>

                <Ionicons name="person-circle-outline" size={90} color={activeColors.primary} style={style.profilePic}/>
                <Text style={style.addPhoto}>Add Photo</Text>


                <View style={style.inputContainer}>

                    <Text style={{fontSize: 18, color: activeColors.font}}>Mobile Number</Text>
                    <TextInput
                        value={formik.values.mobileNumber}
                        placeholder="Add Mobile Number"
                        placeholderTextColor={activeColors.font}
                        onChangeText={formik.handleChange('mobileNumber')}
                        style={[{
                            borderWidth: 1,
                            borderRadius: 4,
                            padding: 5,
                            marginTop: 8,
                            paddingLeft: 20,
                            borderColor: activeColors.font,
                            color: activeColors.font
                        }, formik.errors.mobileNumber ? style.errorBorder : '']}
                    />
                    {formik.errors.mobileNumber && <Text style={{color: 'red',marginBottom: 10}}>{formik.errors.mobileNumber}</Text>}

                    <Text style={{fontSize: 18, marginTop: 10, color: activeColors.font}}>Email Address</Text>
                    <TextInput
                        placeholder="email"
                        placeholderTextColor={activeColors.font}
                        value={formik.values.email}
                        onChangeText={formik.handleChange('email')}
                        style={[{
                            borderWidth: 1,
                            borderRadius: 4,
                            padding: 5,
                            marginTop: 8,
                            paddingLeft: 20,
                            borderColor: activeColors.font,
                            color: activeColors.font
                        }, formik.errors.email ? style.errorBorder : '']}
                    />
                    {formik.errors.email && <Text style={{color: 'red',marginBottom: 10}}>{formik.errors.email}</Text>}

                    <Text style={{fontSize: 18, marginTop: 10, color: activeColors.font}}>Full Name</Text>
                    <TextInput
                        placeholder="Enter full name here"
                        placeholderTextColor={activeColors.font}
                        value={formik.values.fullname}
                        onChangeText={formik.handleChange('fullname')}
                        style={[{
                            borderWidth: 1,
                            borderRadius: 4,
                            padding: 5,
                            marginTop: 8,
                            paddingLeft: 20,
                            borderColor: activeColors.font,
                            color: activeColors.font
                        }, formik.errors.fullname ? style.errorBorder : '']}
                    />
                    {formik.errors.fullname && <Text style={{color: 'red', marginBottom: 10}}>{formik.errors.fullname}</Text>}
                    
                </View>

                <TouchableOpacity  onPress={formik.handleSubmit}>
                    <Text style={{
                        marginTop: 50,
                        width: 200,
                        fontSize: 17,
                        backgroundColor: activeColors.yellow,
                        borderRadius: 10,
                        textAlign: 'center',
                        paddingVertical: 6,
                        marginBottom: 320,
                        justifyContent: 'center'
                    }}>Save Changes</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>    
        
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
    profilePic: {
        marginTop: 30,
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
    errorBorder: {
        borderColor: colors.error
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

export default EditProfileScreen;
