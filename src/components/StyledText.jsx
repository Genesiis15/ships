import React from 'react'
import {Text, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        color: 'grey'
    },
    bold: {
        fontWeight: 'bold'
    },
    blue: {
        color: 'blue'
    },
    big: {
        fontSize: 20
    },
    small: {
        fontSize: 10
    }
})

export default function StyledText ({blue, bold, children, big, small }){
const textStyles = [
    styles.text,
    blue && styles.blue,
    bold && styles.bold,
    big && styles.big,
    small && styles.small
]
// Aqui es donde se componen los estilos en react native

    return(
        <Text style={textStyles}>
        {/* // de donde sale este textStyles, lo creamos nosotros con este nombre y sera
        // una red porque la prop de styel no solo puede recibir un objeto, 
        // puede recibir un array donde puede tener un monton de estilos y asi componetizar
        
        // Lo que va a renderizar es el children  */}
        {children}</Text>
    )
}

// Aqui  tenemos los estilos y ahora creamos nuestro componente de ui que sea grande
// o pequeno

