import React from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';

const EventsList = ({ title, events }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <Text style={styles.resultsText}>Results: {events.length}</Text>
            <FlatList
                data={events}
                keyExtractor={(event) => event.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.itemContainer}>
                            <Image style={styles.imageStyle} source={{ uri: item.image_url }} />
                            <View style={styles.textContainer}>
                                <Text style={styles.eventName}>{item.name}</Text>
                                <Text style={styles.eventDescription}>{item.description}</Text>
                                <Text style={styles.eventLocation}>{item.location.display_address.join(', ')}</Text>
                                <Text style={styles.countText}>Attending: {item.attending_count}</Text>
                                <Text style={styles.countText}>Interested: {item.interested_count}</Text>
                                <Text style={[styles.freeText, { color: item.is_free ? 'green' : 'red' }]}>
                                    {item.is_free ? 'Free' : 'Paid'}
                                </Text>
                            </View>
                        </View>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#aea8a8',
        borderRadius: 5,
        margin: 10,
    },
    titleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    resultsText: {
        fontSize: 16,
        color: '#666',
        marginBottom: 10,
    },
    itemContainer: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        shadowRadius:10,
        shadowColor: '#000',
        shadowOpacity: 0.2,
    },
    imageStyle: {
        height: 80,
        width: 80,
        marginBottom:10,
        borderRadius: 10,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    eventName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    eventDescription: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
    },
    eventLocation: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
    },
    countText: {
        fontSize: 12,
        color: '#888',
        marginBottom: 5,
    },
    freeText: {
        fontSize: 12,
        fontWeight: 'bold',
    },
});

export default EventsList;