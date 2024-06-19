import React from 'react'
import { View, Text, Image } from 'react-native';


function AppText({ text = 'texto por defecto', size = 'md', color = '#C5C5C5'}) {
    const textStyle ={
        fontSize: size === 'sm' ? 12 : size === 'md' ? 16 : size === 'lg' ? 20 : 24,
        color: color,
    }
    return (
      <View>
         <Text style={textStyle}>{text}</Text>
      </View>
    );
  }
  

export default AppText;
