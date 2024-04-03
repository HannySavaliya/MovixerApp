// import React, { useEffect, useLayoutEffect, useState , useContext } from 'react';
// import { Pressable, FlatList, StyleSheet, Text, View, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { useDispatch, useSelector } from 'react-redux';
// import { getMovieData } from '../movixerSlice';
// import Header from '../components/Header';
// import { Ionicons } from '@expo/vector-icons';
// import { Foundation } from '@expo/vector-icons';
// import { BottomModal } from "react-native-modals";
// import { ModalFooter } from "react-native-modals";
// import { ModalTitle } from "react-native-modals";
// import { SlideAnimation } from "react-native-modals";
// import { ModalContent } from "react-native-modals";
// import { Animated } from 'react-native';
// import { PlaceContext } from '../PlaceContext';


// const HomeScreen = () => {
//   const navigation = useNavigation();
//   const dispatch = useDispatch();
  
//   const { selectedCity, setSelectedCity } = useContext(PlaceContext);
//   const moveAnimation = new Animated.Value(0);
//   const loading = useSelector((state) => state.movie.loading);
//   const movieData = useSelector((state) => state.movie.movieData);


//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedFilters, setSelectedFilters] = useState({
//     languages: [],
//     genres: []
//   });
//   useEffect(() => {
//     Animated.loop(
//       Animated.timing(moveAnimation, {
//         toValue: -30,
//         duration: 2000,
//         useNativeDriver: true,
//       })
//     ).start();
//     dispatch(getMovieData());
//   }, [selectedCity]);

 

//   useLayoutEffect(() => {
//     navigation.setOptions({
//       headerLeft: () => <Text>Hello Movixer</Text>,
//       headerStyle: {
//         backgroundColor: '#F5F5F5',
//         shadowColor: 'transparent',
//         shadowOpacity: 0.3,
//         shadowOffset: { width: -1, height: 1 },
//         shadowRadius: 3,
//       },
//       headerRight: () => (
//         <Pressable
//           style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
//         >
//           <Ionicons name="notifications-outline" size={24} color="black" />
//           <Ionicons
//             onPress={() => navigation.navigate("Places")}
//             name="ios-location-outline"
//             size={24}
//             color="black"
//           />

//           <Pressable onPress={() => navigation.navigate("Places")}>
//             <Animated.Text
//               style={[
//                 style.text,
//                 { transform: [{ translateX: moveAnimation }] },
//               ]}
//             >
//               <Text>{selectedCity}</Text>
//             </Animated.Text>
//           </Pressable>
//         </Pressable>
//       ),
//     });
//   });

//   const applyFilter = () => {
//     // Implement your filter logic here
//     console.log("Apply filter:", selectedFilters);
//     // Close the modal after applying filter
//     setModalVisible(false);
//     // Apply your filter logic to movieData
//     // Example: const filteredData = movieData.filter(item => selectedFilters.languages.includes(item.language) && selectedFilters.genres.includes(item.genre));
//     // Update your state with filtered data
//     // Example: setSortedData(filteredData);
//   };

//   const languages = [
//     {
//       id: "0",
//       language: "English",
//     },
//     {
//       id: "10",
//       language: "Kannada",
//     },
//     {
//       id: "1",
//       language: "Telugu",
//     },
//     {
//       id: "2",
//       language: "Hindi",
//     },
//     {
//       id: "3",
//       language: "Tamil",
//     },
//     {
//       id: "5",
//       language: "Malayalam",
//     },
//   ];
  
//   const genres = [
//     {
//       id: "0",
//       genre: "Horror",
//     },
//     {
//       id: "1",
//       genre: "Comedy",
//     },
//     {
//       id: "2",
//       genre: "Action",
//     },
//     {
//       id: "3",
//       genre: "Romance",
//     },
//     {
//       id: "5",
//       genre: "Thriller",
//     },
//     {
//       id: "6",
//       genre: "Drama",
//     },
//   ];

//   return (
//     <View style={style.container}>
//       {loading ? (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//           <ActivityIndicator size="large" color="black" />
//         </View>
//       ) : (
//         <>
//           <FlatList
//             numColumns={2}
//             columnWrapperStyle={{ justifyContent: "space-between" }}
//             ListHeaderComponent={Header}
//             data={movieData}
//             renderItem={({ item }) => (
//               <View style={{ margin: 8 }}>
//                 <Image source={{ uri: item.Poster }} style={{ width: 180, height: 250 }} />
//                 <Text style={style.Title}>{item.Title}</Text>
//                 <Text style={style.year}>{item.Year}</Text>
//                 <TouchableOpacity
//                   onPress={() => navigation.navigate("Movie", {
//                     title: item.Title // Make sure to use item.Title instead of item.title
//                   })}
//                   style={style.bookBtn}
//                 >
//                   <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>BOOK</Text>
//                 </TouchableOpacity>
//               </View>
//             )}
//           />
//           <Pressable
//             onPress={() => setModalVisible(!modalVisible)}
//             style={style.modalVisible}
//           >
//             <Foundation name="filter" size={24} color="black" />
//           </Pressable>
//           <BottomModal
//             onBackdropPress={() => setModalVisible(!modalVisible)}
//             swipeDirection={["up", "down"]}
//             swipeThreshold={200}
//             footer={
//               <ModalFooter>
//                 <Pressable
//                   onPress={() => applyFilter()}
//                   style={style.modalFooter}
//                 >
//                   <Text>Apply</Text>
//                 </Pressable>
//               </ModalFooter>
//             }
//             modalTitle={<ModalTitle title="Filters" />}
//             modalAnimation={new SlideAnimation({ slideFrom: "bottom" })}
//             visible={modalVisible}
//             onHardwareBackPress={() => setModalVisible(!modalVisible)}
//             onTouchOutside={() => setModalVisible(!modalVisible)}
//           >
//             <ModalContent style={{ width: "100%", height: 280 }}>
//               <Text style={style.modalcontentText}>Language</Text>
//               <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
//                 {languages.map((item, index) => (
//                   <Pressable
//                     key={item.id}
//                     onPress={() => {
//                       const updatedLanguages = selectedFilters.languages.includes(item.language)
//                         ? selectedFilters.languages.filter(lang => lang !== item.language)
//                         : [...selectedFilters.languages, item.language];
//                       setSelectedFilters({ ...selectedFilters, languages: updatedLanguages });
//                     }}
//                     style={{
//                       margin: 10,
//                       backgroundColor: selectedFilters.languages.includes(item.language) ? "orange" : "#ffffff",
//                       paddingVertical: 5,
//                       paddingHorizontal: 11,
//                       borderRadius: 25,
//                       borderColor: "#C8C8C8",
//                     }}
//                   >
//                     <Text style={{ color: selectedFilters.languages.includes(item.language) ? "white" : "black", fontWeight: "500" }}>{item.language}</Text>
//                   </Pressable>
//                 ))}
//               </View>
//               <Text style={style.modalcontentText}>Genres</Text>
//               <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
//                 {genres.map((item, index) => (
//                   <Pressable
//                     key={item.id}
//                     onPress={() => {
//                       const updatedGenres = selectedFilters.genres.includes(item.genre)
//                         ? selectedFilters.genres.filter(genre => genre !== item.genre)
//                         : [...selectedFilters.genres, item.genre];
//                       setSelectedFilters({ ...selectedFilters, genres: updatedGenres });
//                     }}
//                     style={{
//                       margin: 10,
//                       backgroundColor: selectedFilters.genres.includes(item.genre) ? "orange" : "#ffffff",
//                       paddingVertical: 5,
//                       paddingHorizontal: 11,
//                       borderRadius: 25,
//                       borderColor: "#C8C8C8",
//                     }}
//                   >
//                     <Text style={{ color: selectedFilters.genres.includes(item.genre) ? "white" : "black", fontWeight: "500" }}>{item.genre}</Text>
//                   </Pressable>
//                 ))}
//               </View>
//             </ModalContent>
//           </BottomModal>
//         </>
//       )}
//     </View>
//   );
// };

// export default HomeScreen;

// const style = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingHorizontal: 10,
//     paddingTop: 10,
//   },
//   headerRight: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 4
//   },
//   Title: {
//     marginTop: 8,
//     fontWeight: 'bold',
//     fontSize: 16,
//     flexWrap: 'wrap'
//   },
//   bookBtn: {
//     backgroundColor: '#ffc40c',
//     padding: 10,
//     borderRadius: 6,
//     width: 100,
//     marginTop: 10
//   },
//   year: {
//     marginTop: 2,
//     fontSize: 12,
//     color: 'gray'
//   },
//   modalVisible: {
//     position: "absolute",
//     bottom: 10,
//     backgroundColor: "#ffc40c",
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     right: 20,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   modalFooter: {
//     paddingRight: 10,
//     marginLeft: "auto",
//     marginRight: "auto",
//     marginVertical: 10,
//     marginBottom: 30,
//   },
//   modalcontentText: {
//     paddingVertical: 5,
//     fontSize: 15,
//     fontWeight: "500",
//     marginTop: 10,
//   },
// });


import React, { useEffect, useLayoutEffect, useContext, useState } from 'react';
import { Pressable, FlatList, StyleSheet, Text, View, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieData } from '../movixerSlice';
import Header from '../components/Header';
import { Ionicons } from '@expo/vector-icons';

import { Foundation } from '@expo/vector-icons';
import { BottomModal } from "react-native-modals";
import { ModalFooter } from "react-native-modals";
import { ModalTitle } from "react-native-modals";
import { SlideAnimation } from "react-native-modals";
import { ModalContent } from "react-native-modals";
import { Animated } from 'react-native';
import { PlaceContext } from '../PlaceContext';

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { selectedCity, setSelectedCity } = useContext(PlaceContext);
  const moveAnimation = new Animated.Value(0);
  const loading = useSelector((state) => state.movie.loading);
  const movieData = useSelector((state) => state.movie.movieData);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    languages: [],
    genres: []
  });

  useEffect(() => {
    Animated.loop(
      Animated.timing(moveAnimation, {
        toValue: -30,
        duration: 2000,
        useNativeDriver: true,
      })
    ).start();
    dispatch(getMovieData());
  }, [selectedCity]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <Text>Hello Movixer</Text>,
      headerStyle: {
        backgroundColor: '#F5F5F5',
        shadowColor: 'transparent',
        shadowOpacity: 0.3,
        shadowOffset: { width: -1, height: 1 },
        shadowRadius: 3,
      },
      headerRight: () => (
        <Pressable
          style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
        >
          <Ionicons name="notifications-outline" size={24} color="black" />
          <Ionicons onPress={() => navigation.navigate("Places")} name="location-outline" size={24} color="black" />

          <Pressable onPress={() => navigation.navigate("Places")}>
            <Animated.Text
              style={[
                style.text,
                { transform: [{ translateX: moveAnimation }] },
              ]}
            >
              <Text>{selectedCity}</Text>
            </Animated.Text>
          </Pressable>
        </Pressable>
      ),
    });
  });

  const applyFilter = () => {
    console.log("Apply filter:", selectedFilters);
    setModalVisible(false);
  };

  const languages = [
    {
      id: "0",
      language: "English",
    },
    // Add other languages
  ];
  
  const genres = [
    {
      id: "0",
      genre: "Horror",
    },
    // Add other genres
  ];

  return (
    <View style={style.container}>
      {loading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="black" />
        </View>
      ) : (
        <>
          <FlatList
            numColumns={2}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            ListHeaderComponent={Header}
            data={movieData}
            renderItem={({ item }) => (
              <View style={{ margin: 8 }}>
                <Image source={{ uri: item.Poster }} style={{ width: 180, height: 250 }} />
                <Text style={style.Title}>{item.Title}</Text>
                <Text style={style.year}>{item.Year}</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Movie", {
                    title: item.Title
                  })}
                  style={style.bookBtn}
                >
                  <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>BOOK</Text>
                </TouchableOpacity>
              </View>
            )}
          />
          <Pressable
            onPress={() => setModalVisible(!modalVisible)}
            style={style.modalVisible}
          >
            <Foundation name="filter" size={24} color="black" />
          </Pressable>
          <BottomModal
            onBackdropPress={() => setModalVisible(!modalVisible)}
            swipeDirection={["up", "down"]}
            swipeThreshold={200}
            footer={
              <ModalFooter>
                <Pressable
                  onPress={() => applyFilter()}
                  style={style.modalFooter}
                >
                  <Text>Apply</Text>
                </Pressable>
              </ModalFooter>
            }
            modalTitle={<ModalTitle title="Filters" />}
            modalAnimation={new SlideAnimation({ slideFrom: "bottom" })}
            visible={modalVisible}
            onHardwareBackPress={() => setModalVisible(!modalVisible)}
            onTouchOutside={() => setModalVisible(!modalVisible)}
          >
            <ModalContent style={{ width: "100%", height: 280 }}>
              <Text style={style.modalcontentText}>Language</Text>
              <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                {languages.map((item, index) => (
                  <Pressable
                    key={item.id}
                    onPress={() => {
                      const updatedLanguages = selectedFilters.languages.includes(item.language)
                        ? selectedFilters.languages.filter(lang => lang !== item.language)
                        : [...selectedFilters.languages, item.language];
                      setSelectedFilters({ ...selectedFilters, languages: updatedLanguages });
                    }}
                    style={{
                      margin: 10,
                      backgroundColor: selectedFilters.languages.includes(item.language) ? "orange" : "#ffffff",
                      paddingVertical: 5,
                      paddingHorizontal: 11,
                      borderRadius: 25,
                      borderColor: "#C8C8C8",
                    }}
                  >
                    <Text style={{ color: selectedFilters.languages.includes(item.language) ? "white" : "black", fontWeight: "500" }}>{item.language}</Text>
                  </Pressable>
                ))}
              </View>
              <Text style={style.modalcontentText}>Genres</Text>
              <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                {genres.map((item, index) => (
                  <Pressable
                    key={item.id}
                    onPress={() => {
                      const updatedGenres = selectedFilters.genres.includes(item.genre)
                        ? selectedFilters.genres.filter(genre => genre !== item.genre)
                        : [...selectedFilters.genres, item.genre];
                      setSelectedFilters({ ...selectedFilters, genres: updatedGenres });
                    }}
                    style={{
                      margin: 10,
                      backgroundColor: selectedFilters.genres.includes(item.genre) ? "orange" : "#ffffff",
                      paddingVertical: 5,
                      paddingHorizontal: 11,
                      borderRadius: 25,
                      borderColor: "#C8C8C8",
                    }}
                  >
                    <Text style={{ color: selectedFilters.genres.includes(item.genre) ? "white" : "black", fontWeight: "500" }}>{item.genre}</Text>
                  </Pressable>
                ))}
              </View>
            </ModalContent>
          </BottomModal>
        </>
      )}
    </View>
  );
};

export default HomeScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4
  },
  Title: {
    marginTop: 8,
    fontWeight: 'bold',
    fontSize: 16,
    flexWrap: 'wrap'
  },
  bookBtn: {
    backgroundColor: '#ffc40c',
    padding: 10,
    borderRadius: 6,
    width: 100,
    marginTop: 10
  },
  year: {
    marginTop: 2,
    fontSize: 12,
    color: 'gray'
  },
  modalVisible: {
    position: "absolute",
    bottom: 10,
    backgroundColor: "#ffc40c",
    width: 60,
    height: 60,
    borderRadius: 30,
    right: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  modalFooter: {
    paddingRight: 10,
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: 10,
    marginBottom: 30,
  },
  modalcontentText: {
    paddingVertical: 5,
    fontSize: 15,
    fontWeight: "500",
    marginTop: 10,
  },
});





