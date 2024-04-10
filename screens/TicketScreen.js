import React from "react";
import { StyleSheet, TextInput, View, Text, TouchableOpacity, Image } from "react-native";
import QRcode from '../assets/QR code.png';
import { Colors } from "react-native/Libraries/NewAppScreen";
import { colors } from "../Theme/theme";


const TicketScreen = ({ navigation, route }) => {

    const { selectedSeats = {}, mall = "", showtime = "", selectedDate = "", movieId = "", title, selectedDay = "", row = "", selectedSeatColumn = "" } = route.params || {};
    const amount = Object.values(selectedSeats).length * 100;
    const seats = Object.values(...selectedSeats)
    const totalSeats = Object.values(selectedSeats).length

    return (
        <View style={style.container}>
            <View style={{ margin: 10 }}>
                <Text style={{ fontSize: 17, fontWeight: '600', color: 'grey' }}>MALL NAME</Text>
                <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 5 }}>{mall}</Text>
                <View style={style.groupItem} />
            </View>

            <View style={{ margin: 10 }}>
                <Text style={{ fontSize: 17, fontWeight: '600', color: 'grey' }}>DATE AND TIME</Text>
                <Text style={{ fontSize: 17, fontWeight: '500' }}>{selectedDate}</Text>
                <Text style={{ fontSize: 17, fontWeight: '500' }}>{showtime}</Text>
                <View style={style.groupItem} />
            </View>

            <View style={{ margin: 10 }}>
                <Text style={{ fontSize: 17, fontWeight: '600', color: 'grey' }}>TICKETS</Text>
                <Text style={{ fontSize: 20, fontWeight: '500' }}>{totalSeats}</Text>
                <Text style={{ fontSize: 17, fontWeight: '600', color: 'grey' }}>SEATS</Text>
                <Text style={{ fontSize: 20, fontWeight: '500' }}>{seats}</Text>
                <View style={style.groupItem} />

            </View>

            <View style={{ margin: 10, height: '23%', borderWidth: 1, borderRadius: 6, backgroundColor: colors.yellow, borderColor: 'white' }}>
                <Text style={{ fontSize: 17, fontWeight: '600', color: 'grey', margin: 10 }}>MOVIE TITLE</Text>
                <Text style={{ fontSize: 17, fontWeight: '500', marginLeft: 10 }}>{title}</Text>
                <Text style={{ fontSize: 17, fontWeight: '600', color: 'grey', margin: 10 }}>TOTAL AMOUNT</Text>
                <Text style={{ fontSize: 17, fontWeight: '500' , marginLeft: 10 }}>{`Total Amount: $${amount}`}</Text>
            </View>

            <View style={style.qrCodeContainer}>
                <Image
                    source={QRcode}
                    style={style.qrCodeImage}
                />
            </View>

            <View>
                <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style={style.backButton}>
                    <Text style={style.backButtonText}>Return</Text>
                </TouchableOpacity>
            </View>


        </View>

    );
};

const style = StyleSheet.create({
    container: {
        backgroundColor: "white",
        height: "90%",
        margin: 10,
        borderRadius: 6
    },
    backButton: {
        backgroundColor: colors.yellow,
        padding: 10,
        borderRadius: 5,
        width: '60%',
        marginTop: 35,
        marginLeft: 80
    },
    backButtonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    groupItem: {
        flex: 1,
        borderBottomWidth: 1,
        opacity: 0.3,
        marginTop: 15
    },
    qrCodeContainer: {
        alignItems: 'center',
        marginTop: -110,
    },
    qrCodeImage: {
        width: 150,
        height: 150,
        marginTop: 130,
    },
});

export default TicketScreen;
