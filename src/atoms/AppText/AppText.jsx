import React from 'react'
import { View, Text, Image } from 'react-native';


function AppText({ text = 'texto por defecto', size = 'md', color = '#C5C5C5'}) {
    const textStyle ={
        fontSize: size === 'sm' ? 12 : size === 'md' ? 16 : size === 'lg' ? 20 : 24,
        color: color,
    }

    const viewStyle ={
      marginBottom: 50,
    };

    const getText =() =>{
      switch (type) {
        case 'login':
          return text;
        case 'signup':
          return text;
        default: return text;
      }
    }
    return (
      <View style={viewStyle}>
         <Text style={textStyle}>{text}</Text>
      </View>
    );
  }
  

export default AppText;
