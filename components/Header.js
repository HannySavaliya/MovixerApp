import { ImageBackground, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../Theme/theme'

const Header = () => {
    return (
        <View style={{ marginBottom: 55 }}>
            <ImageBackground
                style={style.imageBg}
                source={{
                    uri: "https://originserver-static1-uat.pvrcinemas.com/newweb/movies/thumb/374x226/HO00022376.jpg?v=4",
                }}
            >
                <Pressable style={style.main}>
                    <View style={style.headerContain}>
                        <View>
                            <Text style={style.text1}>Releasing in 1 Day</Text>
                            <Text style={style.text2}>CUSTODY</Text>
                            <Text style={style.text3}>U.A * TELUGU</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={style.bookBtn}>BOOK</Text>
                        </TouchableOpacity>
                    </View>
                </Pressable>
            </ImageBackground>
        </View>
    )
}
export default Header

const style = StyleSheet.create({
    imageBg: {
        height: 200, 
        width: 420, 
        resizeMode: "contain"
    },
    main: {
        height: 90, 
        backgroundColor: colors.bg, 
        padding: 10, 
        borderRadius: 5, 
        width: '90%', 
        top: 160, 
        marginLeft: 'auto', 
        marginRight: 'auto'
    },
    headerContain: {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between'
    },
    text1: {
        fontSize:15,
        fontWeight:'500'
    },
    text2: {
        marginVertical : 5, 
        fontSize : 16, 
        fontWeight : "700"
    },
    text3: {
        fontSize:15,
        color: colors.primary, 
        fontWeight : '500'
    },
    bookBtn: {
        backgroundColor : colors.yellow, 
        padding : 10, 
        borderRadius : 6, 
        marginRight : 10
    }
}) 
