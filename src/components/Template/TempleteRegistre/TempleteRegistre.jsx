import React from 'react'
import AppText from '../../../components/atoms/AppText/AppText'
import {View} from 'react-native';
import { Registre } from '../../../components/organims/Registre/Registre';


const TemplateRegistre = () =>{
    return (
        <View style={{ padding: 50 }}>
           <AppText text="Crear Cuenta" size="" color="#C5C5C5" type='signup'/>
           <Registre/>
        </View>
    )
}

export default TemplateRegistre