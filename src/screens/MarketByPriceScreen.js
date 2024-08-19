import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import useMarketData from "../CustomHook/useMarketData";
const MarketListScreen = ({ navigation }) => {
    const [priceCategory, setPriceCategory] = useState('');

    const filteredMarkets = useMarketData(priceCategory);

    const renderMarket = ({ item }) => (
        <View style={styles.marketItem} onPress={() => navigation.navigate('MarketDetail', { id: item.id })}>
            <Image source={{ uri: item.image_url }} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.name}>{item.name}</Text>
                   <Text style={styles.rating}>Rating: {item.rating} ({item.review_count} reviews)</Text>
                  <Text style={styles.address}>{item.location.display_address}</Text>
                <Text style={styles.price}>{item.price}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Market by Price</Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => setPriceCategory('$')}>
                    <Text style={styles.buttonText}>$</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => setPriceCategory('$$')}>
                    <Text style={styles.buttonText}>$$</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => setPriceCategory('$$$')}>
                    <Text style={styles.buttonText}>$$$</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => setPriceCategory('$$$$')}>
                    <Text style={styles.buttonText}>$$$$</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={filteredMarkets}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderMarket}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#adddfa',
        padding: 10,
    },
    marketItem: {
        flexDirection: 'row',
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#f8f8f8',
        borderRadius: 8,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 8,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    rating: {
        fontSize: 14,
        color: '#555',
        marginVertical: 4,
    },
    address: {
        fontSize: 14,
        color: '#777',
    },
    price: {
        fontSize: 14,
        color: '#333',
        marginTop: 4,
    },
    headerText: {
        alignSelf: 'center',
        marginTop: 70,
        fontSize: 28,
        fontWeight: "bold",
        bottom: 35,
        fontStyle: 'italic'
    },
    header: {
        backgroundColor: '#f8f8f8',
        borderRadius: 10,
        marginVertical: 30,
        marginHorizontal: 60,
        shadowOpacity: 0.4,
        shadowOffset: { width: 0, height: -10 },
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#007BFF',
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default MarketListScreen;