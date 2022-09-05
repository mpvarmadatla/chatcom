import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigationContainer from './BottomNavigationContainer';

const NavigationMainContainer = () =>{
    const Stack = createNativeStackNavigator();
       return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={BottomNavigationContainer} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
       )
}

export default NavigationMainContainer;