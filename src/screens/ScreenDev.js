import React from 'react';
import {Text,View,StyleSheet} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

const ScreenDev = ({feature}) =>{
    return <View style={Styles.container}>
        <View style={Styles.devContainer}>
        <MaterialIcon name="warning" size={50} color='#645CAA' />
         <Text style={{color:'#000',fontWeight:'bold'}}>{feature}</Text>
         <Text style={{color:'#000',fontWeight:'bold'}}>Feature under Development</Text>
        </View>
    </View>
}

export default ScreenDev;

const Styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    },
   devContainer:{
       alignItems:'center',
       backgroundColor:'#fff',
       shadowOpacity: 0.2,
       shadowOffset: { width: 0, height: 2},
       shadowRadius: 10,
       borderRadius:5,
       elevation:5,
       padding:5
   }
    
})