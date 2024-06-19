import React from 'react';
import {Text} from 'react-native';
import { FormRegister } from '../../molecules/FormRegister/FormRegister';


export const Registre =() =>{
    return (
        
        <>
       <FormRegister onSubmit={(email, username, password, confirmPassword )=>{console.log('Registro Padre', email, username, password, confirmPassword)}}/>
        </>
    )
}