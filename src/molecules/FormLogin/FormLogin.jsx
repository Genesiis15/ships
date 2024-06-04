import React, {useState} from 'react';
import {Text, View} from 'react-native'
import AppInput from '../../atoms/AppInput/AppInput';
import AppButton from '../../atoms/AppButton/AppButton';
import AppText from '../../atoms/AppText/AppText';
import { useNavigation } from '@react-navigation/native';

const FormLogin =({onSubmit}) =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handlePress = () => {
        onSubmit(username, password);
        navigation.navigate('dashboard');
      };
    const getData = (value, type) => {
        if (type === 'text') {
            setUsername(value);
        }else if (type === 'password'){
            setPassword(value)
        }
      };

    const handleSubmit =() =>{
        onSubmit(username, password)
    }

    const navigation = useNavigation();
    const handleCreateAccountPress = () => {
        navigation.navigate('registre'); 
    };
    return (
        <View>
            <AppInput onChange={(value) => getData(value, 'text')} 
                      variant='text' 
                      placeholder={'Usuario'} />
            <AppInput onChange={(value) => getData(value, 'password')} 
                      variant='password' 
                      placeholder={'Contraseña'} />
        <View style={{ marginTop: 50, marginBottom: 12}}>
            <AppButton  onPress={handlePress} title="Inicia Sesión" 
                      variant="default" 
                      onSubmit={handleSubmit} />
        </View>
            <AppButton onPress={handleCreateAccountPress} 
                       title="Crear Cuenta" 
                       variant="outline" />
        </View>
    )
};




export default FormLogin


