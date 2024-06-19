import React from 'react'
import AppText from '../../../components/atoms/AppText/AppText'
import { Login } from '../../../components/organims/Login/Login'
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