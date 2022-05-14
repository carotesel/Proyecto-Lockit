import react from 'react';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 

// screens 
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import StackScreen from "./screens/StackScreen";
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return(
        <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{
            tabBarActiveTintColor:'#DF4F1A'
        }}
        >   
            <Tab.Screen 
            name="Home" 
            component={HomeScreen}
            options={{
                tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="magnify" size={35} color={color} />
                ), 
            }}
            />

            <Tab.Screen 
            name="Settings" 
            component={SettingsScreen}
            options={{
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="locker" size={35} color={color} /> 
                ), 
            }}
            />  
            
            <Tab.Screen 
            name="Profile" 
            component={ProfileScreen} 
            options={{
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="person-outline" size={30} color={color}/>
                ), 
            }}
            />
        </Tab.Navigator>
    );
}

export default function Navigation(){
    return(
        <NavigationContainer> 
            <MyTabs />
        </NavigationContainer>
    )
}