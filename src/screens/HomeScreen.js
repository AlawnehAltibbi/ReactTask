import React from 'react';
import {View, Text, StyleSheet, Button, TextInput, TouchableOpacity, Image} from 'react-native'
const HomeScreen = ({navigation}) => {
    return <View style={styles.container}>
        <Image
            style={styles.image}
            source={{ uri: 'https://cdn.pixabay.com/photo/2016/11/07/13/04/yoga-1805784_1280.png' }} // Example image URL
        />
        <TouchableOpacity style={styles.ProductsBtn} onPress={() => {
            navigation.navigate('Search');
        }}>
            <Text style={styles.Text}>
                Search for products
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.EventsBtn} onPress={() => {
            navigation.navigate('Events');
        }}>
            <Text style={styles.Text}>
                Search for Events
            </Text>
        </TouchableOpacity>
    </View>
}
const styles = StyleSheet.create({
    container: {
       flex: 1,
        padding: 20,


    },
    image:{
 height: 250,
       width:400,
        right:40

    },
    ProductsBtn:{
        padding:20,
        backgroundColor:'#631c87',
        borderRadius:50,
        shadowOpacity:0.4


    },
    EventsBtn:{
        padding:20,
        backgroundColor:'#d5601e',
        borderRadius:50,
        top:20,
        shadowOpacity:0.4,
    },
    Text:{
        fontSize:16,
        fontWeight:'bold',
        color:'#fffbfb',
        shadowOpacity:0.3
    }
})
export default HomeScreen;