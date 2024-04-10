import React, { useContext, useLayoutEffect } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { PlaceContext } from '../PlaceContext';
import { Feather } from '@expo/vector-icons';
import { View, TextInput, Pressable, Text, ImageBackground, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const PlacesScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: '',
            headerLeft: () => (
                <Pressable style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                    <Ionicons name="arrow-back" size={24} color="black" onPress={() => navigation.navigate('Movixer')}/>
                    <Text style={{ fontSize: 15, letterSpacing: 1 }}>CHANGE LOCATION</Text>
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
        <View>
            <View style={{
                margin: 10,
                padding: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderColor: '#E0E0E0',
                borderWidth: 2,
                borderRadius: 30
            }}>
                <TextInput
                    placeholder='Search your city'
                    value={selectedCity}
                    onChangeText={setSelectedCity}
                />
                <Feather name="search" size={24} color="black" />
            </View>
            <View style={{ marginHorizontal: 20, flexDirection: "row", alignItems: 'center', justifyContent: 'space-between' }}>
                <Text>Selected Location</Text>
                <Text>{selectedCity}</Text>
            </View>
            <FlatList
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                data={Places}
                renderItem={({ item }) => (
                    <Pressable onPress={() => selectCity(item.place)}   style={{ marginVertical: 10, marginHorizontal: 20 }}>
                        <ImageBackground
                            imageStyle={{ borderRadius: 8 }}
                            style={{ width: 160, height: 100, opacity: 0.8  }}
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
