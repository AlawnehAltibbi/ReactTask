import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { navigationRef } from './src/navigationRef';
import MarketListScreen from "./src/screens/MarketListScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import MainScreen from "./src/screens/MainScreen";
import { Provider as AuthProvider } from './src/Context/AuthContext';
import AboutUsScreen from "./src/screens/AboutUsScreen";
import marketListScreen from "./src/screens/MarketListScreen";
import MarketByPriceScreen from "./src/screens/MarketByPriceScreen";

const MarketStack = createNativeStackNavigator();

function MarketStackNavigator() {
    return (
        <MarketStack.Navigator initialRouteName="MarketList" screenOptions={{ headerShown: false }}>
            <MarketStack.Screen name="MarketList" component={MarketListScreen} />

        </MarketStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

function TabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName="Market"
            screenOptions={{
                tabBarActiveTintColor: '#87dbfa',
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
            }}
        >
            <Tab.Screen name="Market by price" component={MarketByPriceScreen}/>
            <Tab.Screen name="Market" component={marketListScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
}

const MainStack = createNativeStackNavigator();

function MainStackNavigator() {
    return (
        <MainStack.Navigator initialRouteName="Main">
            <MainStack.Screen name="Signin" component={SigninScreen} options={{ headerShown: false }} />
            <MainStack.Screen name="AboutUs" component={AboutUsScreen} options={{ headerShown: false }} />
            <MainStack.Screen name="SignUp" component={SignupScreen} options={{ headerShown: false }} />
            <MainStack.Screen name="Main" component={MainScreen} options={{ headerLeft: null, title: 'Market' }} />
            <MainStack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
        </MainStack.Navigator>
    );
}

const App = () => {
    return (
        <AuthProvider>
            <NavigationContainer ref={navigationRef}>
                <MainStackNavigator />
            </NavigationContainer>
        </AuthProvider>
    );
};

export default App;