import React, {useState,useContext} from 'react';
import {View, StyleSheet, Text, Button, TextInput, TouchableOpacity, SafeAreaView} from 'react-native';
import {Context as AuthContext} from "../Context/AuthContext";

const SignupScreen = ({ navigation }) => {
    const {state,signup} = useContext(AuthContext);
    const [passwordVisible, setPasswordVisible] = useState(false);
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
    return (
    <SafeAreaView>
      <Text style={styles.textTitle}>Thank You for Joining Our Market!</Text>
        <TextInput  style={styles.emailField}
                    placeholderTextColor="white"
                    placeholder ='Enter your email address'
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={email}
                    onChangeText={setEmail}>

        </TextInput>
        <TextInput  style={styles.passwordField}
                    placeholderTextColor="white"
                    placeholder ='Enter your password'
                    secureTextEntry={!passwordVisible}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={password}
        onChangeText={setPassword}>
        </TextInput>
        <TouchableOpacity
            style={styles.toggleButton}
            onPress={() => setPasswordVisible(!passwordVisible)}
        >
            <Text style={styles.toggleButtonText}>
                {passwordVisible ? 'Hide' : 'Show'}
            </Text>
    </TouchableOpacity>
{state.errorMessage?<Text style={styles.errorText}>{state.errorMessage}</Text>:null }
        <TouchableOpacity style={styles.loginButton}
                          onPress={() => {signup({ email, password });

        }} >
            <Text style={styles.loginText}>Register</Text>
        </TouchableOpacity>
    <Text style={styles.registerText}>Already have account ?</Text>
    <TouchableOpacity style={styles.registerBtn}  onPress={() => navigation.navigate('Signin')}>
        <Text style={styles.regText}>Login Now</Text>
    </TouchableOpacity>
</SafeAreaView>

  );
};

const styles = StyleSheet.create({
    textTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        shadowOpacity:0.2,
        alignSelf:'center',
        marginVertical:50,
        margin:7
    },
    emailField:{
        backgroundColor:'#cccbcb',
        color:'#000000',
        padding:20,
        margin:20,

    },
    passwordField:{
        backgroundColor:'#cccbcb',
        color:'#000',
        padding:20,
        margin:20,
        bottom:30
    },
    toggleButton: {
        marginLeft: 10,
        padding: 10,
        justifyContent: 'center',
        left:280,
        bottom:95
    },
    toggleButtonText: {
        color: '#0b66dc',
        fontWeight: 'bold',
    },
    registerText:{
        left:45,
        top:76
    },
    registerBtn:{
        left:210,
        top:59
    },
    regText:{
        color:'#0b66dc'
    },
    loginButton:{
        backgroundColor:'#000',
        padding:20,
        margin:20,
        borderRadius:6,

    },
    loginText:{
        color:'white',
        fontWeight:'bold',
        alignSelf:'center',

    },
    errorText:{
        color:'red',
        alignSelf:'flex-end',
        bottom:70,
        right:10
    }
});

export default SignupScreen;
