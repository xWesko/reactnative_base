
/**
 * Luis Hernandez
 * 16 Octubre 2021
 */
import React from 'react';

//Importamos React native paper
import { DefaultTheme, Provider as PaperProvider, } from 'react-native-paper';

//Navegacion
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

//Pantallas
import Inicio from './pantallas/Inicio';
import Pelicula from './pantallas/Pelicula';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


//Definir tema
const theme = {
  ...DefaultTheme,
  colors: {
      ...DefaultTheme.colors,
      primary: '#CE0E2D',
      accent: "#03dac4",
      backdrop: "rgba(0, 0, 0, 0.5)",
      background: "#fff",
      disabled: "rgba(0, 0, 0, 0.26)",
      error: "#B00020",
      notification: "#f50057",
      onBackground: "#000000",
      onSurface: "#000000",
      placeholder: "rgba(0, 0, 0, 0.54)",
      primary: "#CE0E2D",
      surface: "#fff",
      text: "#231F20",
  },
};

const App = ( {navigation} ) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false,  }} drawerContent={props => <DrawerContent {...props} /> }>
        <Drawer.Screen name="Inicio" component={Inicio} />
        <Drawer.Screen name="Pelicula" component={Pelicula} />
      </Stack.Navigator>
    </NavigationContainer>
  );

};


export default App;
