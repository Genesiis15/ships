import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheetModal from '@gorhom/bottom-sheet';
const ModalBottom = () => {
  // ref
  const bottomSheetModalRef = useRef(null);
  const snapPoints = ['25%', '50%', '100%'];
  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <PanGestureHandler>
      <BottomSheetModal
        snapPoints={snapPoints}
        ref={bottomSheetModalRef}
      >
        <View>
          <Text>Contenido del Modal</Text>
        </View>
      </BottomSheetModal>
    </PanGestureHandler>
  </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: 'grey',
    },
    contentContainer: {
      flex: 1,
      alignItems: 'center',
    },
  });
  

export default ModalBottom;