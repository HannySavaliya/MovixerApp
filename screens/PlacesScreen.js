import React, { useContext, useLayoutEffect } from 'react';
import { Ionicons, AntDesign, Feather } from '@expo/vector-icons';
import { View, TextInput, Pressable, Text, ImageBackground, FlatList } from 'react-native';
import { PlaceContext } from '../Context/PlaceContext';
import { ThemeContext } from '../Context/ThemeContext';
import { colors } from '../Theme/theme';

const PlacesScreen = ({navigation}) => {
    const {theme} = useContext(ThemeContext)
    let activeColors = colors[theme.mode]

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: '',
            headerLeft: () => (
                <Pressable style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                    <Ionicons name="arrow-back" size={24} color={activeColors.font} onPress={() => navigation.navigate('Home')}/>
                    <Text style={{ fontSize: 15, letterSpacing: 1, color: activeColors.font }}>CHANGE LOCATION</Text>
                </Pressable>
            )
        });
    }, [navigation]);

    const { selectedCity, setSelectedCity } = useContext(PlaceContext);

    const Places = [  
        {
            id: "0",
            place: "Bangalore",
            image:
              "https://images.pexels.com/photos/739987/pexels-photo-739987.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
            id: "1",
            place: "Ahmedabad",
            image:
              "https://images.pexels.com/photos/6813041/pexels-photo-6813041.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
            id: "2",
            place: "Chennai",
            image:
              "https://images.pexels.com/photos/10070972/pexels-photo-10070972.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
            id: "3",
            place: "Delhi - NCR",
            image:
              "https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
            id: "4",
            place: "Hyderabad",
            image:
              "https://images.pexels.com/photos/11321242/pexels-photo-11321242.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
            id: "5",
            place: "Kolkata",
            image:
              "https://images.pexels.com/photos/2846217/pexels-photo-2846217.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
            id: "6",
            place: "Jaipur",
            image:
              "https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
            id: "7",
            place: "Lucknow",
            image:
              "https://images.pexels.com/photos/15351642/pexels-photo-15351642.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
    ];
    
    const selectCity =  (city) => {
        setSelectedCity(city);
       setTimeout(() => {
              navigation.navigate("HomeScreen")
       },800)
    }

    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            backgroundColor: activeColors.bg
        }}>
            <View style={{
                margin: 10,
                padding: 10,
                width: 370,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderColor: activeColors.primary,
                borderWidth: 2,
                borderRadius: 30
            }}>
                <TextInput
                    placeholder='Search your city'
                    placeholderTextColor={activeColors.font}
                    value={selectedCity}
                    style={{color: activeColors.font}}
                    onChangeText={setSelectedCity}
                />
                <Feather name="search" size={24} color={activeColors.font} />
            </View>
            
            <FlatList
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                data={Places}
                renderItem={({ item }) => (
                    <Pressable onPress={() => selectCity(item.place)}   style={{ marginVertical: 10, marginHorizontal: 20 }}>
                        <ImageBackground
                            imageStyle={{ borderRadius: 8 }}
                            style={{ width: 160, height: 100, opacity: 0.9 }}
                            source={{ uri: item.image }}
                        >
                            {selectedCity === item.place && (
                                <View style={{flex:1,marginLeft : 7,marginTop : 7,alignContent:'flex-start'}}>
                                    <AntDesign name="checkcircle" size={24} color="white" />
                                </View>
                            )}
                            <View style={{ flex: 1, marginLeft: 10, marginBottom: 7, justifyContent: 'flex-end' }}>
                                <Text style={{ color: 'white', fontSize: 16, fontWeight: "700" }}>{item.place}</Text>
                            </View>
                        </ImageBackground>

                    </Pressable>
                )}
            />
        </View>
    );
};

export default PlacesScreen;
