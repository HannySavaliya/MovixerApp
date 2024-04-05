import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PaymentScreen = ({ route }) => {
    const { selectedSeats, amount } = route.params;
    const navigation = useNavigation();
    const [cardNumber, setCardNumber] = useState('');
    const [totalprice , setTotalPrice] = useState ("")  
  

    const handlePayment = () => {
        Alert.alert('Payment Success', 'Your payment has been processed successfully', [
            { text: 'OK', onPress: () => navigation.navigate('HomeScreen') } // Navigate to home screen after payment success
        ]);
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight : 'bold' , marginBottom: 20 , marginBottom : 550 , marginRight : 240}}>Enter Card Details</Text>
            <TextInput
                style={{ height: 40, width: 300, marginBottom: 10, borderColor: 'gray', borderWidth: 1 , borderRadius : 5 }}
                placeholder="Card Number"
                value={cardNumber}
                onChangeText={text => setCardNumber(text)}
            />
             <TextInput
                style={{ height: 40, width: 300, marginBottom: 10, borderColor: 'gray', borderWidth: 1 }}
                placeholder="Total Amount"
                value={totalprice}
                onChangeText={text => setTotalPrice(text)}
            />
            <Button
                title="Pay Now"
                onPress={handlePayment}
            />
            <Text style={{ marginTop: 20 }}>Total Amount: ${amount}</Text>
        </View>
    );
};

export default PaymentScreen;
