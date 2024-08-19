import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, Text, FlatList, Image } from 'react-native';

const MarketListScreen = ({ navigation }) => {
    const [markets, setMarkets] = useState([]);

    useEffect(() => {
        const fetchMarket = async () => {
            try {
                const response = await fetch('https://api.yelp.com/v3/businesses/search?sort_by=best_match&location=san%20jose&limit=50', {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer A9E4O6me3isqIREK6Y4E3-8y6hvXD8Cnk7E5A8su9v3hLhNR5AnyE29ZYW1z5slRgR7SHwArjnA-6hvBEEBomGDCpwYT0lXc4EQdIWKeDJxYVMEEKgdPdNKYWZSnZnYx', // Replace with your actual token
                        'Content-Type': 'application/json'
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch markets');
                }

                const data = await response.json();
                setMarkets(data.businesses);

            } catch (error) {
                console.error('Error fetching markets:', error);
            }
        };

        fetchMarket();

    }, []);

    const renderMarket = useCallback(({ item }) => (
        <View style={styles.marketItem} onPress={() => navigation.navigate('MarketDetail', { id: item.id })}>
            <Image source={{ uri: item.image_url }} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.rating}>Rating: {item.rating} ({item.review_count} reviews)</Text>
                <Text style={styles.address}>{item.location.display_address}</Text>
                {item.price && <Text style={styles.price}>{item.price}</Text>}
            </View>
        </View>
    ), [navigation]);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Market</Text>
            </View>
            <FlatList
                data={markets}
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
});

export default MarketListScreen;