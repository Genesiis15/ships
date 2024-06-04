import React, { useState } from 'react';
import AppInput from '../../atoms/AppInput/AppInput';
import AppButton from '../../atoms/AppButton/AppButton';

export const FormRegister = ({ onSubmit }) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = () => {
        onSubmit(email, username, password, confirmPassword)
    };


    return (
        <>

            <AppInput variant='text'
                placeholder={'Ingresar Email'}
                value={email} onChange={setEmail} />
            <AppInput variant='text'
                placeholder={'Ingresar Usuario'}
                value={username} onChange={setUsername} />
            <AppInput variant='password'
                placeholder={'Contraseña'}
                value={password} onChange={setPassword} secureTextEntry />
            <AppInput variant='password'
                placeholder={'Repetir Contraseña'}
                value={confirmPassword} onChange={setConfirmPassword} secureTextEntry />
            <AppButton title="Registrarme"
                variant="default"
                onPress={handleSubmit} />

        </>

    )
}