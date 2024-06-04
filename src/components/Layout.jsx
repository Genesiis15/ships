import React from 'react'
import ModalBottom from "../molecules/ModalBottom/ModalBottom";
import { View } from 'react-native';
const Layout = ({children}) =>{
    return (
        <View style={{ paddingTop: 50, backgroundColor:'#f5f5f5'}}>
            {children}
            {/* <ModalBottom/> */}
        </View>
    )
}

export default Layout