import React from "react";
import {Text, StyleSheet, View, TextInput} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
const SearchBar = ({term, onTermChange,onTermSubmit}) => {

    return<View style={styles.backGround}>
        <Ionicons name="search-outline" size={20} color="black" top={16} left={11} />
        <Text style={styles.Text}></Text>
        <TextInput
            autoCapitalize="none"
            value={term}
            onChangeText={newTerm=> onTermChange(newTerm)}
            placeholder="Search"  style={styles.Text}
            autoCorrect={false}
            onEndEditing={()=>onTermSubmit()}
        />

    </View>
}


const styles = StyleSheet.create({
    backGround: {
        margin:20,
        height: 50,
       backgroundColor: '#e4dede',
        borderRadius:10,
        flexDirection: 'row',
},
    Text:{
        fontSize:16,
        color:'#434343',
        fontStyle:'italic',
        right :145,
        flex : 1,
        width : 50

    }
})
export default SearchBar;
