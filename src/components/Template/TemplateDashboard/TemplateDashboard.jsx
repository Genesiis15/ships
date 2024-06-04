// import React, {useState, useRef} from 'react'
// import AppText from '../../../atoms/AppText/AppText'
// import { Login } from '../../../organims/Login/Login'
// import { Animated, PanResponder, View, Text, StyleSheet } from 'react-native';


// const TemplateDashboard = () =>{
//     return (
//         <View style={{ padding: 50 }}>
//          <Text>Hola</Text>
//          <Dropdown/>
//         </View>
//     )
// }
// const Dropdown = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const translateY = useRef(new Animated.Value(0)).current; // Cambiado a Animated.Value

// const panResponder = useRef(
//   PanResponder.create({
//     onStartShouldSetPanResponder: () => true,
//     onPanResponderMove: Animated.event([null, { dy: translateY }], { useNativeDriver: false }),
//     onPanResponderRelease: () => {
//       if (translateY.y._value > 50) {
//         Animated.spring(translateY, {
//           toValue: 0, // Corrección aquí
//           useNativeDriver: false,
//         }).start();
//       }
//       setIsOpen(true);
//     },
//   })
// ).current;


//     return (
//       <View style={[styles.container, isOpen? styles.open : styles.closed]}>
//         <Animated.View
//           ref={panResponder.panHandlers}
//           style={[
//             styles.content,
//             {
//               transform: [{ translateY }],
//             },
//           ]}
//         >
//           <Text>Contenido del desplegable</Text>
//         </Animated.View>
//       </View>
//     );
//   };
  
//   const styles = StyleSheet.create({
//     container: {
//       overflow: 'hidden',
//       height: 200,
//       backgroundColor: '#f5f5f5',
//     },
//     content: {
//       backgroundColor: '#fff',
//       padding: 20,
//     },
//     open: {
//       height: 300,
//     },
//     closed: {
//       height: 200,
//     },
//   });
  

// export default TemplateDashboard

import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';

const App = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 10.474891869400004, 
          longitude: -66.15988377528276,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
   ...StyleSheet.absoluteFillObject,
  },
});

export default App;
