import React, { useContext } from 'react';
import {View, StyleSheet, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import { Context as AuthContext } from "../Context/AuthContext";

const SettingsScreen = ({navigation}) => {
  const { state, signout } = useContext(AuthContext);

  return (
      <SafeAreaView>
        <Text style={{ fontSize: 28, alignSelf: 'center' }}>Settings</Text>
        <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate('AboutUs')}
        >
          <Text style={styles.listText}>About us</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.logoutButton}
            onPress={signout}
        >
          <Text style={styles.listText}>Logout</Text>
        </TouchableOpacity>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logoutButton: {
    backgroundColor: '#000000',
    padding: 20,
    margin: 20,
    borderRadius: 6
  },
  listText: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center'
  }
});

export default SettingsScreen;