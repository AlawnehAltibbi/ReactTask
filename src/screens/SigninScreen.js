import React, { useContext, useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { Context as AuthContext } from "../Context/AuthContext";

const SigninScreen = ({ navigation }) => {
  const { state, signin } = useContext(AuthContext);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailInputRef = useRef(null);

  useEffect(() => {
    if (emailInputRef.current) {
      emailInputRef.current.setNativeProps({ text: 'alawneh@testing.com' });
      setEmail('alawneh@testing.com');
    }
  }, []);

  return (
      <View>
        <Text style={styles.textTitle}>Welcome back! Glad to see you Again!</Text>

        <TextInput
            style={styles.emailField}
            placeholderTextColor="white"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder='Enter your email address'
            value={email}
            onChangeText={setEmail}
            ref={emailInputRef}
        />

        <TextInput
            style={styles.passwordField}
            placeholderTextColor="white"
            placeholder='Enter your password'
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={!passwordVisible}
            value={password}
            onChangeText={setPassword}
        />

        <TouchableOpacity
            style={styles.toggleButton}
            onPress={() => setPasswordVisible(!passwordVisible)}
        >
          <Text style={styles.toggleButtonText}>
            {passwordVisible ? 'Hide' : 'Show'}
          </Text>
        </TouchableOpacity>
        {state.errorMessage ? (
            <Text style={styles.errorText}>{state.errorMessage}</Text>
        ) : (
            <Text style={styles.errorText}> </Text>
        )}
        <TouchableOpacity
            style={styles.loginButton}
            onPress={() => signin({ email, password })}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.registerText}>Don't have an account yet?</Text>

        <TouchableOpacity
            style={styles.registerBtn}
            onPress={() => navigation.navigate('SignUp')}
        >
          <Text style={styles.regText}>Register Now</Text>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    shadowOpacity: 0.2,
    alignSelf: 'center',
    marginVertical: 50
  },
  emailField: {
    backgroundColor: '#cccbcb',
    color: '#000000',
    padding: 20,
    margin: 20,
  },
  passwordField: {
    backgroundColor: '#cccbcb',
    color: '#000000',
    padding: 20,
    margin: 20,
    bottom: 30
  },
  loginButton: {
    backgroundColor: '#000000',
    padding: 20,
    margin: 20,
    borderRadius: 6
  },
  loginText: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  registerText: {
    left: 45,
    top: 76
  },
  registerBtn: {
    left: 225,
    top: 59
  },
  regText: {
    color: '#0b66dc'
  },
  toggleButton: {
    marginLeft: 10,
    padding: 10,
    justifyContent: 'center',
    left: 280,
    bottom: 95
  },
  toggleButtonText: {
    color: '#0b66dc',
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    alignSelf: 'center',
    marginTop: 10,
    bottom:80,
    left: 25,
  },
});

export default SigninScreen;