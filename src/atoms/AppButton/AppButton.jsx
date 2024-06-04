import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';


const AppButton = ({ onPress, title, onSubmit, variant = 'default', size = 'md', backgroundColor , rest }) => {
    const handlePress = () => {
        onPress();
        if (onSubmit) {
          onSubmit();
        }
    };

  let buttonStyle = styles[variant];
  if (size === 'sm') {
    buttonStyle = {...buttonStyle, paddingHorizontal: 8, paddingVertical: 6, elevation: 6 };
  }
  let textStyle = styles.appButtonText;
  if (variant === 'outline' || variant === 'ghost' ) {
    textStyle = {...textStyle, color: '#4BAFC9'}; 
  }
  return (
    <TouchableOpacity
      {...rest}
      onPress={handlePress}
      style={[styles.appButtonContainer, buttonStyle, backgroundColor && { backgroundColor }]}
    >
      <Text style={[textStyle,  size === 'sm' && { fontSize: 14 }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    borderRadius: 9,
    paddingVertical: 10,
    paddingHorizontal: 12,

    justifyContent: 'center',
    alignItems: 'center',
    
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    
    
  },
  default: {
    backgroundColor: '#4BAFC9',
    
    height: 50
    
  },
  ghost: {
    backgroundColor: 'transparent',
    color: '#4BAFC9',
    height: 50
   
  },
  outline: {
    backgroundColor: 'transparent',
    borderColor: '#4BAFC9',
    borderWidth: 1,
    color: '#4BAFC9',
    height: 50
  },
});


export default AppButton;
