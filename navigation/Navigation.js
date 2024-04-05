import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import * as React from 'react';
import { AntDesign, Octicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import SplashScreen from '../screens/SplashScreen';
import PlacesScreen from '../screens/PlacesScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Signup from '../screens/Signup';
import AccountScreen from '../screens/AccountScreen';
import Login from '../screens/Login';
import ProfileScreen from '../screens/ProfileScreen';
import MovieScreen from '../screens/MovieScreen';
import TheaterScreen from '../screens/TheaterScreen';
import PaymentScreen from '../screens/PaymentScreen';




const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomePage() {
    return(
        <Tab.Navigator>
            <Tab.Screen
                name="Movixer"
                component={HomeScreen}
                options={{
                    // title: 'Home page',
                    tabBarIcon: ({size, color}) => (
                        <AntDesign name="home" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({size, color}) => (
                        <Octicons name="person" size={size} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}


function Navigation() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="SplashScreen" component={SplashScreen} options={{
                    headerShown: false
                }}/>
                <Stack.Screen name="HomeScreen" component={HomePage} options={{
                    headerShown: false
                }}/>
                <Stack.Screen name="Places" component={PlacesScreen}/>
                <Stack.Screen name="Movie" component={MovieScreen}/>
                <Stack.Screen name="Theater" component={TheaterScreen} />
                <Stack.Screen name="Payment" component={PaymentScreen} />
                <Stack.Screen name="Account" component={AccountScreen} options={{
                    headerShown: false
                }}/>
                <Stack.Screen name="Settings" component={SettingsScreen} options={{
                    headerShown: false
                }}/>
                <Stack.Screen name="EditProfile" component={EditProfileScreen} options={{
                    headerShown: false
                }}/>
                <Stack.Screen name="Signup" component={Signup} options={{
                    headerShown: false
                }}/>
                <Stack.Screen name="Login" component={Login} options={{
                    headerShown: false
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation

