import React, { useContext, useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
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
                    <Ionicons name="arrow-back" size={24} color="black" />
                    <Text style={{ fontSize: 15, letterSpacing: 1 }}>CHANGE LOCATION</Text>
                </Pressable>
            )
        });
    }, [navigation]);

    const { selectedCity, setSelectedCity } = useContext(PlaceContext);

    const Places = [
        {
            id: '0',
            place: "Delhi-NCR",
            image: "https://res.klook.com/image/upload/fl_lossy.progressive,w_800,c_fill,q_85/Mobile/City/sgviiv0tnd227kbzvylg.jpg"
        },
        {
            id: '1',
            place: "Bangalore",
            image: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Bangalore_India.jpg"
        },
        {
            id: '2',
            place: "Chennai",
            image: "https://static.toiimg.com/photo/49355017.cms"
        },
        {
            id: '3',
            place: "Kolkata",
            image: "https://cdn.britannica.com/91/110191-050-7BCFD56B/Victoria-Memorial-Hall-Kolkata-India.jpg"
        },
        {
            id: '4',
            place: "Gujarat",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/GauravPath1.jpg/400px-GauravPath1.jpg"
        },
        {
            id: '5',
            place: "Mumbai",
            image: "https://images.news18.com/ibnlive/uploads/2023/12/mumbai-2023-12-109f481696f61e8ce2858eae4f4ec64f.jpg"
        },
        {
            id: '6',
            place: "Hydrabad",
            image: "https://assets.architecturaldigest.in/photos/60083d241b516d492c3aaaa1/16:9/w_2560%2Cc_limit/hyderabad-eid-ramzan-hyderabad-tou-guide_1-1366x768.jpg"
        },
        {
            id: '7',
            place: "Jaipur",
            image: "https://res.klook.com/image/upload/c_fill,w_750,h_560/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/dhki3aasuwbkispdl35h.jpg"
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
                            style={{ width: 160, height: 100, opacity: 0.8 }}
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
