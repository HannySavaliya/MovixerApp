import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { AntDesign, Octicons } from '@expo/vector-icons';

import PlacesScreen from "../screens/PlacesScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";

const ProfileStack = createStackNavigator();

const HomeStack = createNativeStackNavigator()

function HomeStackScreens() {
    return (
        <HomeStack.Navigator initialRouteName="SplashScreen">
            <HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{title:""}} />
            <HomeStack.Screen name="Places" component={PlacesScreen} />
        </HomeStack.Navigator>
    )
}

function ProfileStackScreens() {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
        </ProfileStack.Navigator>
    )
}


const Tab = createBottomTabNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                tabBarActiveTintColor: 'black'
            }}>
                <Tab.Screen name="Home" component={HomeStackScreens} options={{
                    headerShown: false,
                    tabBarIcon: ({size, color}) => (
                        <AntDesign name="home" size={size} color={color} />
                    )
                }}/>
                <Tab.Screen name="Profile" component={ProfileStackScreens} options={{
                    headerShown: false,
                    tabBarIcon: ({size, color}) => (
                        <Octicons name="person" size={size} color={color} />
                    )
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
export default Navigation

