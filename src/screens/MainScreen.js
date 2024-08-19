import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
const MainScreen = ({navigation}) => {
    return(
        <View style={styles.container1}>
            <Image style={styles.image} source={{uri: 'https://w0.peakpx.com/wallpaper/1007/354/HD-wallpaper-floral-background-for-iphone-cute-blue-floral.jpg'}}/>
            <TouchableOpacity style={styles.signInBtn} onPress={() => navigation.navigate('Signin')}>
                <Text style={styles.signInText}>SignIn</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signUpBtn} onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.signInText}>SignUP</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container1: {
   backgroundColor:"#ffffff",
        flex:1
    },
    image:{
        width: 400,
        height: 300,
        right:10,
        top:40
    },
    signInText:{
        color:"white",
        alignSelf:"center",
        fontWeight:'bold'
    },
    signInBtn:{
        margin:80,
        padding:20,
        backgroundColor:"#000",
        top:30,
        borderRadius:6

    },
    signUpBtn:{
        margin:80,
        padding:20,
        backgroundColor:"#000",
        bottom:120 ,
        borderRadius:6
    }
})
export default MainScreen;