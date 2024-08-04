import React from 'react';
import {Text, View, StyleSheet, FlatList, Image} from 'react-native';

const ResultsList = ({ title, results }) => {
    return (
        <View>
            <Text style={styles.titleStyle}>  {title}</Text>
            <Text> Results: {results.length}</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={results}
                keyExtractor={(result) => result.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.itemContainer}>
                            <Image style={styles.imageStyle} source={{uri: item.image_url}} />
                            <Text style={styles.textList}> Name:{item.name} </Text>
                            <Text style={styles.textList}> Address:{item.location.address1}</Text>
                            <Text style={styles.textList}> Phone:{item.display_phone}</Text>
                                <Text style={styles.textList}>Price: {item.price}</Text>
                        </View>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',


    },
    itemContainer: {
        flex: 1,
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        flexDirection: 'column',

    },
    textList:{
        fontSize:12,
        fontWeight:'bold',
        shadowOpacity:0.2
    },
    imageStyle:{
        height:100,
        width:200,
        borderRadius:10
    }



});

export default ResultsList;