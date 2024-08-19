import React from 'react';
import {StyleSheet, Text,TouchableOpacity, SafeAreaView} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type AboutUsScreenProps = {
    navigation: StackNavigationProp<any, any>;
};

const AboutUsScreen: React.FC<AboutUsScreenProps> = ({ navigation }) => {
    return (
        <SafeAreaView  style={styles.container}>
            <Text style={styles.title}>Welcome to Our Online Market</Text>
            <Text style={styles.paragraph}>
                At Our Online Market, we are dedicated to bringing you the best products from local and international sellers right to your doorstep. Our platform is designed to provide you with a seamless shopping experience, offering a wide range of products from groceries and electronics to fashion and home decor.
            </Text>
            <Text style={styles.paragraph}>
                We believe in supporting small businesses and artisans by giving them a platform to reach a broader audience. By shopping with us, you are not only getting high-quality products but also contributing to the growth of these businesses.
            </Text>
            <Text style={styles.paragraph}>
                Our mission is to make shopping easier, more convenient, and enjoyable. With a focus on customer satisfaction, we ensure that every product listed on our market meets our strict quality standards. Our team is always here to help with any questions or concerns you may have.
            </Text>
            <Text style={styles.paragraph}>
                Thank you for choosing Our Online Market as your go-to shopping destination. We look forward to serving you!
            </Text>
            <Text style={styles.footer}>Happy Shopping!</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Back to settings</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 0,
        backgroundColor: '#f8f6f6',
        marginHorizontal:20
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    paragraph: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 15,
        color: '#333',
        textAlign: 'justify',
    },
    footer: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        textAlign: 'center',
        color: '#000',
        bottom:10
    },
    button: {
        padding: 15,
        backgroundColor: '#000',
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default AboutUsScreen;