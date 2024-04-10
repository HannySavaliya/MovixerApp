import {StyleSheet,Text,View,SafeAreaView,Pressable,Dimensions,Image, TouchableOpacity} from "react-native";
import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../Theme/theme";
import { ThemeContext } from "../Context/ThemeContext";
  

  
const MovieCard = ({ item }) => {
  const navigation = useNavigation();
  const {theme} = useContext(ThemeContext)
  let activeColors = colors[theme.mode]

  return (
    <SafeAreaView>
      <Pressable style={style.cardContain}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/original/${item?.poster_path}`,
          }}
          style={style.image}
        />

        <View>
          <Text style={style.title}>{item.title.substr(0, 20)}</Text>
          <Text style={style.language}>U/A • {item.original_language}</Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("Movie",{
            title: item.title,
            movieId: item.id
          })}
          style={style.button}
        >
          <Text style={{textAlign:"center",fontSize:15,fontWeight:"500"}}>BOOK</Text>
        </TouchableOpacity>
      </Pressable>
    </SafeAreaView>
  );
};
  
export default MovieCard;
 
const style = StyleSheet.create({
  cardContain: {
    flex: 1,
    borderRadius: 5,
    marginHorizontal: 17,
    marginVertical: 10,
    justifyContent: "center",
    height: Dimensions.get("window").height / 2.5,
    width: (Dimensions.get("window").width - 80) / 2,
  },
  image: {
    width: "100%",
    height: "70%",
    resizeMode: "contain",
    borderRadius: 7,
  },
  title: {
    marginTop: 6, 
    fontSize: 15, 
    fontWeight: "400" 
  },
  language: {
    marginTop: 4,
    fontSize: 15,
    fontWeight: "400",
    color: colors.primary,
  },
  button: {
    backgroundColor: colors.yellow,
    padding: 10,
    borderRadius: 6,
    marginRight: 10,
    width: 100,
    marginTop:10
  }
});