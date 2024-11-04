import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import globalStyles from '../assets/styles/Styles';
import logo from '../assets/images/kierttisTitle.png';

const CustomBottomBar = () => {

    const navigation = useNavigation(); 

  return (
    <View style={globalStyles.bottomBar}>
      <TouchableOpacity style={globalStyles.iconButton} >
        <MaterialIcons name="home" size={40} color="#ffffff" onPress={() => { navigation.navigate('Home'); }}/>
      </TouchableOpacity>

      <TouchableOpacity style={globalStyles.iconButton} onPress={() => { navigation.navigate('ItemsMain'); }} >
        <Image source={logo} style={globalStyles.findItems} />
      </TouchableOpacity>

      <TouchableOpacity style={globalStyles.iconButton} >
        <MaterialIcons name="person" size={40} color="#ffffff" onPress={() => { navigation.navigate('AccountMain'); }}/>
      </TouchableOpacity>
    </View>
  );
};

export default CustomBottomBar;
