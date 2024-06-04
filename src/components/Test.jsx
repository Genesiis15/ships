import React, { useState } from 'react'
import { View, StyleSheet, Image, Button, Alert, Text } from 'react-native'


const Test = ({ navigation }) => {
  const handlePress = () => {
    console.log('Botón presionado');
  };
  
  const [data, setData] = useState('');
  const [password, setPassword] = useState('');
  const getData = (value) => {
    console.log(value)
  }
  return (
    <View style={{ padding: 50 }}>
      {/* <AppText text="Login" size="" color="primary" /> */}
      {/* <AppInput onChange={getData} variant='password' placeholder={'Contraseña'}/>
      <Button
        title="Presiona"
        onPress={() => navigation.navigate('Home')
        }
      /> */}
      {/* <AppButton onPress={handlePress} title="Inicia Sesión" variant="ghost" /> */}
      {/* <Login/> */}
    {/* <FormLogin onSubmit={(usuario, password)=>{console.log('padre', usuario, password)}}/> */}
    </View>
  )
}


export default Test



