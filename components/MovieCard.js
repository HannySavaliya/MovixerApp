import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

const MovieCard = ({ item }) => {


  return (
    <TouchableOpacity>
      <View style={{ margin: 8 }}>
        <Image source={{ uri: item.image}} style={{ width: 250, height: 300}} />
        <Text style={{ marginTop: 8, fontWeight: 'bold', fontSize: 16 }}>
          {item.movie}
        </Text>
        <Text style={{ marginTop: 2, fontSize: 12, color: 'gray' }}>
          {item.rating}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;
