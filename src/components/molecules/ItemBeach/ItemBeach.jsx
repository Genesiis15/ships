import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import beach from '../../../../assets/beach.png'
import Imglocation from '../../../../assets/Imglocation.png'
import ships from '../../../../assets/ships.png'
import AppText from '../../atoms/AppText/AppText';

const ItemBeach = ({title, location, imagen, onPress}) => {
    return (

        <TouchableOpacity style={styles.outerContainer} onPress={onPress}>
            <View style={styles.imageContainer}>
                <Image source={{uri:imagen}}  width={100} height={100} />
            </View>
            <View style={styles.gap}>
                <View style={styles.flexBetween}>
                    <View style={styles.flex}>
                        <Image source={beach}  />
                        <AppText text={title} />
                    </View>
                    <Image source={ships}  />
                </View>
                <View style={styles.flex}>
                    <Image source={Imglocation}  />
                    <AppText  text={location}/>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    outerContainer: {
        width: '100%',
        gap:5,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 10,
        overflow: 'hidden',
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center'
    },

    imageContainer: {
        width: 90,
        height: 90,
        borderRadius: 9,
        overflow: 'hidden',
    },

    flex:{
        display: 'flex',
        flexDirection: 'row' ,
        width:'70%',
        alignItems:'center',
        gap:5
   
        
    },
    flexBetween:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    
    },
    gap:{
        display:'flex',
        flexDirection:'column',
        gap:10,
        flex: 1,
    }

});

export default ItemBeach;
