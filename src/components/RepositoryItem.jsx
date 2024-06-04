import React from 'react'
import {View,  StyleSheet, Image, Button } from 'react-native'
import StyledText from './StyledText.jsx'

const RepositoryItem = (props) =>(
    <View key={props.id} style={styles.container} >
                <Image src={props.image.imageUrl} style={{width:50, height:20}}/>
                <StyledText big bold>Id:{props.id}</StyledText>
                <StyledText blue>Nombre:{props.shipName}</StyledText>
                <StyledText blod>Descripcion:{props.description}</StyledText>
                <StyledText blue>Lenguaje:{props.language}</StyledText>
                <StyledText small>hola:{props.stargazersCount}</StyledText>
                <StyledText small>chao:{props.forksCount}</StyledText>
                <StyledText small>aqqqui:{props.reviewCount}</StyledText>
                <Button
            title="Presiona aquí"
            onPress={() => {
                // Aquí puedes manejar el evento de clic del botón
                console.log('Botón presionado');
            }}
        />
                </View>

                
)

    const styles = StyleSheet.create({
        container: {
            padding: 20,
            paddingBottom: 5,
            paddingTop: 5
        }
     
    })


export default RepositoryItem

// En ReactNative se puede estilar con los Style, pero no es la manera correcta
// y puedes simular una hojas de estilo de la web y las haces fueras del componente
// utilizando StyleSheet