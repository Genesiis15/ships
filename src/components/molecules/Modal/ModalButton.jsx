import React, { useState } from 'react';
import { View, Modal, Text, Button } from 'react-native';

const ModalButton =({children, isVisible, setVisible })=>{
    
    return (
        
        <View>
            <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={() => {
                setVisible(!isVisible);
            }}
            >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: '100%', backgroundColor: 'white', height: '77%' }}>
             
           
          {children} 
          </View>
            </View>
            </Modal>
        </View>
    )
}

export default ModalButton;