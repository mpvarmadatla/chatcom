import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GroupsBottomScreen from '../screens/BottomScreens/GroupsBottomScreen';
import CallBottomScreen from '../screens/BottomScreens/CallBottomScreen';
import CameraBottomScreen from '../screens/BottomScreens/CameraBottomScreen';
import ChatBottomScreen from '../screens/BottomScreens/ChatBottomScreen';
import AccountBottomScreen from '../screens/BottomScreens/AccontBottomScreen';

const BottomNavigationContainer = () =>{
    const Tab = createBottomTabNavigator()
    const options = {
        headerShown:false
    }
    return (
        <Tab.Navigator>
            <Tab.Screen name='Groups' component={GroupsBottomScreen} options={options} />
            <Tab.Screen name='Call'  component={CallBottomScreen} options={options}/>
            <Tab.Screen name='Camera' component={CameraBottomScreen}  options={options}/>
            <Tab.Screen name ='Chats'  component={ChatBottomScreen} options={options}/>
            <Tab.Screen name='Account' component={AccountBottomScreen} options={options}/>
        </Tab.Navigator>
    )
}

export default BottomNavigationContainer;