import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GroupsBottomScreen from '../screens/BottomScreens/GroupsBottomScreen';
import CallBottomScreen from '../screens/BottomScreens/CallBottomScreen';
import CameraBottomScreen from '../screens/BottomScreens/CameraBottomScreen';
import ChatBottomScreen from '../screens/BottomScreens/ChatBottomScreen';
import AccountBottomScreen from '../screens/BottomScreens/AccontBottomScreen';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const BottomNavigationContainer = () =>{
    const Tab = createBottomTabNavigator()
    const options = {
        headerShown:false,
    }
    return (
        <Tab.Navigator>
            <Tab.Screen name='Groups'
             component={GroupsBottomScreen} 
             options={{...options,tabBarIcon: ({color,size}) =>(
                <MaterialIcon name="group" color={color} size={size}/>
            )}} />
            <Tab.Screen name='Call' 
             component={CallBottomScreen} 
             options={{...options,tabBarIcon: ({color,size}) =>(
                <MaterialIcon name="call" color={color} size={size}/>
            )}} />
            <Tab.Screen name='Camera'
             component={CameraBottomScreen}
             options={{...options,tabBarIcon: ({color,size}) =>(
                <MaterialIcon name="camera-alt" color={color} size={size}/>
            )}}/>
            <Tab.Screen name ='Chats' 
             component={ChatBottomScreen} 
             options={{...options,tabBarIcon: ({color,size}) =>(
                <MaterialIcon name="chat" color={color} size={size}/>
            )}}/>
            <Tab.Screen name='Account' 
            component={AccountBottomScreen}
            options={{...options,tabBarIcon: ({color,size}) =>(
                <MaterialIcon name="account-box" color={color} size={size}/>
            )}}/>
        </Tab.Navigator>
    )
}

export default BottomNavigationContainer;