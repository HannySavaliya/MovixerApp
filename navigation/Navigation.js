import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import * as React from 'react';
import { StatusBar } from 'react-native';
import { AntDesign, Octicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

import SplashScreen from '../screens/SplashScreen';
import PlacesScreen from '../screens/PlacesScreen';
import AccountScreen from '../screens/AccountScreen';
import SettingsScreen from '../screens/SettingsScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import Signup from '../screens/Signup';
import Login from '../screens/Login';

import { colors } from '../Theme/theme';
import AuthFlow from '../Authentication/AuthFlow';
import { ThemeContext } from '../Context/ThemeContext';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomePage() {
    const {theme} = React.useContext(ThemeContext)
    let activeColors = colors[theme.mode]

    return(
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: activeColors.font,
            tabBarInactiveTintColor: activeColors.primary,
            tabBarStyle: {
                backgroundColor: activeColors.bg,
                color: activeColors.font
            }
        }}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({size, color}) => (
                        <AntDesign name="home" size={size} color={color} />
                    ),
                    headerStyle: {
                        backgroundColor: activeColors.bg, 
                    },
                    headerTitleStyle: {
                        color: activeColors.font
                    }
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({size, color}) => (
                        <Octicons name="person" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
        
        
    )
}


function Navigation() {
    const {theme} = React.useContext(ThemeContext)
    let activeColors = colors[theme.mode]

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{
                
            }}>
                <Stack.Screen name="SplashScreen" component={SplashScreen} options={{
                    headerShown: false,
                }}/>
                <Stack.Screen name="HomeScreen" component={HomePage} options={{
                    headerShown: false,
                    
                }}/>
                <Stack.Screen name="Places" component={PlacesScreen} options={{
                    headerStyle: {
                        backgroundColor: activeColors.bg, 
                    }
                }}/>
                <Stack.Screen name="AuthFlow" component={AuthFlow}/>
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
            <StatusBar style={theme.mode === "dark" ? "light" : "dark"}/>
        </NavigationContainer>
        
    )
}

export default Navigation

