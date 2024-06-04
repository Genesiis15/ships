import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function AppInput({ onChange, label, variant = 'text', placeholder }) {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const handlePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };


    return (
        <>
            {variant === 'text' && (
                <TextInput onChangeText={onChange} placeholder={placeholder} style={styles.input} />
            )}
            {variant === 'password' && (
                <View style={styles.input}>
                    <TextInput
                    
                        onChangeText={onChange}
                        placeholder={placeholder}
                        secureTextEntry={!passwordVisible}
                        style={{ height: '100%' }}
                    />
                    <TouchableOpacity onPress={handlePasswordVisibility} style={styles.iconContainer}>
                        <Icon
                            name={passwordVisible ? "visibility" : "visibility-off"}
                            size={15}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                </View>
            )}
        </>
    )

}

const styles = StyleSheet.create({
    input: {
        height: 50,
        borderColor: '#CCCCCC',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 12,
        paddingLeft: 5,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },

    iconContainer: {
        paddingRight: 10,
    },

    icon:{
        color: '#4B4B4B'
    },

    label: {
        color: '#333333',
        marginBottom: 5,
    },
});

export default AppInput;