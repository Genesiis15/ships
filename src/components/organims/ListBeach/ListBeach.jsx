import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import ModalButton from '../../molecules/Modal/ModalButton';
import AppButton from '../../atoms/AppButton/AppButton';
import ItemBeach from '../../molecules/ItemBeach/ItemBeach';
import { loadBeaches } from '../../../services/beachesServices';



const ListBeach = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const [beaches, setBeaches] = useState([])

  useEffect(() => {
    loadBeaches().then(res => { setBeaches(res) }).catch(error => { console.log(error) })
  }, [])
  return (

    <View style={styles.card}>
      <View style={styles.bottomButton}>
        <AppButton title={'Selecciona tu destino'} onPress={() => setModalVisible(true)} />
      </View>
      {/* Estructura de la modal */}
      <ModalButton isVisible={modalVisible} setVisible={setModalVisible}>
        <FlatList
          data={beaches}

          renderItem={({ item }) => {
            return <View style={{ marginBottom: 10, paddingHorizontal: 10 }}>

              <ItemBeach
                imagen={item.images[0].imageName}
                location={item.location}
                title={item.name}
                onPress={() => { }} />
            </View>
          }
          } />

        <AppButton title="Cerrar" onPress={() => setModalVisible(!modalVisible)} />
      </ModalButton>
    </View>
  )
}

const styles = StyleSheet.create({
  bottomButton: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    width: '100%',
    padding: 20,
    paddingBottom: 40,
    backgroundColor: 'white'
  },


  card: {

  }

});
export default ListBeach;