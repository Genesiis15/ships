import React from 'react';
import {Text} from 'react-native';
import FormLogin from '../../molecules/FormLogin/FormLogin';

export const Login =() =>{
    return (
        
        <>
       <FormLogin onSubmit={(usuario, password)=>{console.log('padre', usuario, password)}}/>
        </>
    )
}