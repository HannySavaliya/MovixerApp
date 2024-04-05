import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, View, Text, Pressable, ScrollView, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const TheaterScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [selectedSeats, setSelectedSeats] = useState({});
    const [rows, setRows] = useState([
        {
            row: 'A',
            seats: [
                { seat: '1', bookingStatus: false },
                { seat: '2', bookingStatus: false },
                { seat: '3', bookingStatus: false },
                { seat: '4', bookingStatus: false },
                { seat: '5', bookingStatus: false },
                { seat: '6', bookingStatus: false },
                { seat: '7', bookingStatus: false },
            ],
        },
        {
            row: 'B',
            seats: [
                { seat: '1', bookingStatus: false },
                { seat: '2', bookingStatus: false },
                { seat: '3', bookingStatus: false },
                { seat: '4', bookingStatus: false },
                { seat: '5', bookingStatus: false },
                { seat: '6', bookingStatus: false },
                { seat: '7', bookingStatus: false },
            ],
        },
        {
            row: 'C',
            seats: [
                { seat: '1', bookingStatus: false },
                { seat: '2', bookingStatus: false },
                { seat: '3', bookingStatus: false },
                { seat: '4', bookingStatus: false },
                { seat: '5', bookingStatus: false },
                { seat: '6', bookingStatus: false },
                { seat: '7', bookingStatus: false },
            ],
        },
        {
            row: 'D',
            seats: [
                { seat: '1', bookingStatus: false },
                { seat: '2', bookingStatus: false },
                { seat: '3', bookingStatus: false },
                { seat: '4', bookingStatus: false },
                { seat: '5', bookingStatus: false },
                { seat: '6', bookingStatus: false },
                { seat: '7', bookingStatus: false },
            ],
        },
        {
            row: 'E',
            seats: [
                { seat: '1', bookingStatus: false },
                { seat: '2', bookingStatus: false },
                { seat: '3', bookingStatus: false },
                { seat: '4', bookingStatus: false },
                { seat: '5', bookingStatus: false },
                { seat: '6', bookingStatus: false },
                { seat: '7', bookingStatus: false },
            ],
        },
    ]);

    const mallName = route.params?.mall?.name || '';

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Pressable
                    style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons name="arrow-back" size={24} color="black" />
                    <Text>{mallName}</Text>
                </Pressable>
            ),
            headerStyle: {
                backgroundColor: '#F5F5F5',
                shadowColor: 'transparent',
                shadowOpacity: 0.3,
                shadowOffset: { width: -1, height: 1 },
                shadowRadius: 3,
            },
        });
    }, [navigation, mallName]);

    const handleSeatPress = (row, seat) => {
        const isSelected = Object.values(selectedSeats).some(
            (selectedSeat) => selectedSeat.row === row && selectedSeat.seat === seat
        );

        if (isSelected) {
            setSelectedSeats((prevState) => {
                const updatedState = { ...prevState };
                delete updatedState[`${row}-${seat}`];
                return updatedState;
            });
        } else {
            setSelectedSeats((prevState) => ({
                ...prevState,
                [`${row}-${seat}`]: { row, seat },
            }));
        }
    };

    const toggleSelectedStyle = (row, seat) => {
        const isSelected = Object.values(selectedSeats).some(
            (selectedSeat) => selectedSeat.row === row && selectedSeat.seat === seat
        );

        if (isSelected) {
            return styles.selectedSeatYellow;
        } else if (seat.bookingStatus === 'disabled') {
            return styles.selectedSeat;
        } else {
            return null;
        }
    };

    const handlePayPress = () => {
        // Calculate total amount
        const amount = Object.values(selectedSeats).length * 100;
        // Navigate to payment screen with selected seats data and total amount
        navigation.navigate('Payment', { selectedSeats, amount });
    };

    const renderSeats = ({ item }) => {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                <View style={{ width: 30, marginRight: 10 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 10 }}>{item.row}</Text>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={{ flexDirection: 'row' }}>
                        {item.seats.map((seat) => (
                            <Pressable
                                key={`${item.row}-${seat.seat}`}
                                style={[styles.seat, toggleSelectedStyle(item.row, seat)]}
                                disabled={seat.bookingStatus === 'disabled'}
                                onPress={() => handleSeatPress(item.row, seat.seat)}
                            >
                                <Text>{seat.seat}</Text>
                            </Pressable>
                        ))}
                    </View>
                </ScrollView>
            </View>
        );
    };

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View>
                <Text style={styles.text}>SCREEN THIS WAY</Text>
                <Text style={styles.classic}>CLASSIC {240}</Text>
                <FlatList
                    data={rows}
                    renderItem={renderSeats}
                    keyExtractor={(item) => item.row}
                />
                <View style={styles.legendContainer}>
                    <View>
                        <FontAwesome name="square" size={24} color="#ffc40c" />
                        <Text style={styles.legendText}>Selected</Text>
                    </View>
                    <View>
                        <FontAwesome name="square" size={24} color="white" />
                        <Text style={styles.legendText}>Vacant</Text>
                    </View>
                    <View>
                        <FontAwesome name="square" size={24} color="grey" />
                        <Text style={styles.legendText}>Booked</Text>
                    </View>
                </View>
                <Pressable
                    style={{
                        marginTop: 50,
                        backgroundColor: '#E0E0E0',
                        padding: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                    onPress={handlePayPress}
                >
                    <Text>{`Selected Seats (${Object.values(selectedSeats).length})`}</Text>
                    <Text>{`PAY ${Object.values(selectedSeats).length * 100}`}</Text>
                </Pressable>
            </View>
        </View>
    );
    
};

export default TheaterScreen;

const styles = StyleSheet.create({
    text: {
        margin: 10,
        textAlign: 'center',
        fontSize: 15,
    },
    classic: {
        margin: 10,
        textAlign: 'center',
        fontSize: 15,
        color: 'grey',
        marginBottom: 20,
    },
    seat: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#C0C0C0',
    },
    selectedSeat: {
        backgroundColor: 'grey',
        borderColor: 'transparent',
    },
    selectedSeatYellow: {
        backgroundColor: '#ffc40c',
        borderColor: 'transparent',
    },
    legendContainer: {
        backgroundColor: '#D8D8D8',
        padding: 10,
        marginTop: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    legendText: {
        textAlign: 'center',
    },
});



