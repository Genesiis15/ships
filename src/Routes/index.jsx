import React from 'react'
import { View, StyleSheet, Image, Button, Alert, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginView } from '../views/LoginView/LoginView';
import { RegistreView } from '../views/RegistreView/RegistreView';
import AppNavbar from '../components/molecules/Navbar/AppNavbar';
import TemplateDashboard from '../components/Template/TemplateDashboard/TemplateDashboard';
import Layout from '../components/organims/Layout';


const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Presiona aquí"
        onPress={() => navigation.navigate('Details')}
      />
      {/* <AppText/> */}
    </View>
  );
}




function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detalles</Text>
    </View>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="login" component={LoginView} options={{ title: '' }} />
        <Stack.Screen name="dashboard" component={TemplateDashboard} options={{
          headerTitle: () => null,
          header: (props) => <Layout style={{ paddingTop: 50, backgroundColor: '#f5f5f5' }}><AppNavbar {...props} /></Layout>,
        }} />
        <Stack.Screen name="registre" component={RegistreView} options={{ title: '' }} />
        <Stack.Screen name="Details" component={DetailsScreen} />

      </Stack.Navigator>

    </NavigationContainer>
  );
}