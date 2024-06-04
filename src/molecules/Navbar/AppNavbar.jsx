import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import logoImage from '../../../assets/logo.png';

const AppNavbar = ({navigation}) => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <View style={styles.navbar}>
      {/* Logo */}
      <Image source={logoImage} style={styles.logo} />

      {/* Botón para mostrar el menú de despliegue */}
      <TouchableOpacity onPress={() => setMenuVisible(!menuVisible)}>
        <Text style={styles.menuIcon}>☰</Text>
      </TouchableOpacity>

      {/* Menú de despliegue */}
      {menuVisible && (
        <View style={styles.dropdownMenu}>
          <Text>Option 1</Text>
          <Text>Option 2</Text>
          <Text>Option 3</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  logo: {
    fontSize: 18,
  },
  menuIcon: {
    fontSize: 30,
  },
  dropdownMenu: {
    position: 'absolute',
    right: 20,
    top: 50,
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});

export default AppNavbar;
