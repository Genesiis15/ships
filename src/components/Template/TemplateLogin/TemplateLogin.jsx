import React from 'react'
import AppText from '../../../atoms/AppText/AppText'
import { Login } from '../../../organims/Login/Login'
import {View} from 'react-native';



const TemplateLogin = () =>{
    return (
        <View style={{ padding: 50 }}>
           <AppText text="Inicia Sesion" size="" color="#C5C5C5" type='login'/>
            <Login/>
        </View>
    )
}

export default TemplateLogin