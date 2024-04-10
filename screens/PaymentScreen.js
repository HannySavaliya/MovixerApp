import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const PaymentScreen = ({route, navigation}) => {
        const { selectedSeats, amount, mall,showtime, selectedDate, movieId,title,selectedDay, selectedSeatRow, row } = route.params;

    return (
        <View style={style.container}>
            <View>
                <Text style={style.text}>Cards, UPI & More</Text>
            </View>
            <TouchableOpacity style={style.box} onPress={() => navigation.navigate('PaymentCardScreen', {amount, selectedSeats, mall, selectedDate, showtime, movieId, title, row})}>
                <Feather name="credit-card" size={24} color="black" style={style.icon} />
                <Text style={style.boxText}>Cards</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.box} onPress={() => navigation.navigate('GooglePayScreen', {amount, selectedSeats, mall, selectedDate, showtime, movieId, title, row})}>
                <FontAwesome5 name="google-pay" size={24} color="black" style={style.icon} />
                <Text style={style.boxText}>Google Pay</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PaymentScreen;

const style = StyleSheet.create({
    container: {
        backgroundColor: "white",
        height: "100%",
        borderRadius: 6
    },
    text: {
        fontSize: 20,
        fontWeight: '500',
        marginLeft: 15,
        marginTop: 8,
        marginBottom : 15
    
    },
    box: {
        margin: 25,
        marginTop : 5,
        borderWidth: 1,
        padding: 12,
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center'
    },
    boxText: {
        fontSize: 20,
        fontWeight: '500',
        marginLeft: 10
    },
    icon: {
        marginRight: 10
    }
});
