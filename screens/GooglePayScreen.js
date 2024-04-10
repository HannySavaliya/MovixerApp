import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, ActivityIndicator } from "react-native";
import { Feather } from '@expo/vector-icons';

const GooglePayScreen = ({navigation, route}) => {
    const [upiPin, setUpiPin] = useState('');
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);
    const {amount, selectedSeats, mall, selectedDate, showtime, movieId, title, row} = route.params

    const handlePayment = () => {
        if (upiPin.length < 4 || upiPin.length > 6) {
            Alert.alert('Invalid UPI PIN', 'Please enter a 4 to 6-digit UPI PIN.');
            return;
        }

        setIsProcessingPayment(true);
        setTimeout(() => {
            setIsProcessingPayment(false);
            navigation.navigate('Success', {amount, selectedSeats, mall, selectedDate, showtime, movieId, title, row});
        }, 1000); 
    };

    return (
        <View style={style.container}>
            <Text style={{ fontSize: 20, fontWeight: '500', marginLeft: 15, marginTop: 7 }}>Pay Using UPI ID</Text>
            <View>
                <TouchableOpacity style={style.box}>
                    <Feather name="credit-card" size={24} color="black" style={style.icon}/>
                    <Text style={style.boxText}>Google Pay</Text>
                    <View>
                        <TextInput
                            style={style.card}
                            placeholder="Enter Your UPI PIN"
                            onChangeText={text => setUpiPin(text)}
                            secureTextEntry={true} 
                        />
                    </View>
                </TouchableOpacity>
            </View>
            <View>
                <View style={style.buttonContainer}>
                    <TouchableOpacity style={style.payButton} onPress={handlePayment} disabled={isProcessingPayment}>
                        {isProcessingPayment ? (
                            <ActivityIndicator size="small" color="black" />
                        ) : (
                            <Text style={style.payButtonText}>Pay Now</Text>
                        )}
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default GooglePayScreen;

const style = StyleSheet.create({
    container: {
        backgroundColor: "white",
        height: "100%",
        borderRadius: 6
    },
    box: {
        height: 100, 
        margin: 25,
        borderWidth: 1,
        padding: 12,
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center'
    },
    boxText: {
        marginBottom: 45,
        fontSize: 20,
        fontWeight: '500',
        marginLeft: 10
    },
    icon: {
        marginRight: 10,
        marginBottom: 45,
        marginRight: 5
    },
    card: {
        height: 40,
        width: 300,
        borderWidth: 1,
        marginTop: 35,
        borderRadius: 6,
        marginHorizontal: -105,
        padding: 8,
        
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    payButton: {
        backgroundColor: '#ffc40c',
        padding: 10,
        borderRadius: 5,
        width: '35%',
        marginLeft: 130
    },
    payButtonText: {
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
    }
});
