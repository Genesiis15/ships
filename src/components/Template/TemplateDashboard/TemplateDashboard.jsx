import React from 'react';
import { StyleSheet, View } from 'react-native';
import Main from '../../organims/Main/Main';
import ListBeach from '../../organims/ListBeach/ListBeach';

const TemplateDashboard = () => {


  return (
    <View style={styles.container}>
      <Main />
      <ListBeach />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default TemplateDashboard;

