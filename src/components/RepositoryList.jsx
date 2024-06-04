import React from 'react'
import { Text, FlatList } from 'react-native'

import RepositoryItem from './RepositoryItem'
import { shipServices } from '../data/shipServices'

const RepositoryList =() =>{
    return (
        <FlatList 
        // FlatList para scroll 
        data={shipServices}
        ItemSeparatorComponent={()=> <Text> </Text>}
        // ItemSeparatorComponent no es la mejor forma pero dara 
        // un espacio entre cada array
        renderItem={({item: repo}) => (
            // Estamos recorriendo lo que se encuentra dentro de los azrray
        <RepositoryItem {...repo}/>
        // haciendo esto le pasamos todo lo del repo
        )}
        >
           
        </FlatList>
    )
}

export default RepositoryList