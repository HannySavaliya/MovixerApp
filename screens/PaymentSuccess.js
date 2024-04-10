import React, { useRef, useEffect } from 'react';
import { Text, View, StyleSheet, Image, Animated, TouchableOpacity } from 'react-native';
import successImg from "../assets/Success.png"

const Success = ({ navigation,route }) => {
  const scaleValue = useRef(new Animated.Value(0)).current;
  const {amount,selectedSeats, mall, selectedDate, showtime,movieId, title, row} = route.params

  useEffect(() => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        navigation.navigate('Ticket', {amount,selectedSeats, mall, selectedDate, showtime,movieId, title, row});
      }, 3000);
    });
  }, []); 

  return (
    <View style={style.container}>
      <Animated.Image
        source={successImg}
        style={[style.image, { transform: [{ scale: scaleValue }] }]}
      />
      <Text style={style.text}>Payment successfully</Text>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>${amount}</Text>
    </View>
  );
}

export default Success;

const style = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: 'center',
    alignItems: 'center', 
    width: "100%",
    height: "100%",
    position: 'relative', 
  },
  image: {
    width: 100, 
    height: 100,
  },
  text:{
    fontSize: 25,
    color: "black",
    fontWeight: '900',
    marginTop: 15
  }
});
