import React from 'react';
import { FormRegister } from '../../molecules/FormRegister/FormRegister';

export const Registre = () => {
    return (
        <>
            <FormRegister onSubmit={(email, username, password, confirmPassword) => { console.log(email, username, password, confirmPassword) }} />
        </>
    )
}