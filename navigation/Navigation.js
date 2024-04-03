import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { AntDesign, Octicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../screens/SplashScreen';
import PlacesScreen from '../screens/PlacesScreen';
import AccountScreen from '../screens/AccountScreen';
import SettingsScreen from '../screens/SettingsScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import Signup from '../screens/Signup';
import Login from '../screens/Login';

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

