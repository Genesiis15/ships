import React from 'react';
import FormLogin from '../../molecules/FormLogin/FormLogin';

export const Login = () => {
    return (

        <>
            <FormLogin onSubmit={(usuario, password) => { console.log(usuario, password) }} />
        </>
    )
}