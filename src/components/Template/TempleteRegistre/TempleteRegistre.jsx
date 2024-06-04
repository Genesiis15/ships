import React from 'react'
import AppText from '../../../atoms/AppText/AppText'
import {View} from 'react-native';
import { Registre } from '../../../organims/Registre/Registre';


const TemplateRegistre = () =>{
    return (
        <View style={{ padding: 50 }}>
           <AppText text="Crear Cuenta" size="" color="#C5C5C5" type='signup'/>
           <Registre/>
        </View>
    )
}

export default TemplateRegistre