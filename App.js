import React from 'react';

//Navegacion
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


//Pantallas
import Inicio from './pantallas/Inicio';
import Pelicula from './pantallas/Pelicula';
import Hola from './pantallas/Hola';
import DrawerContent from './pantallas/DrawerContent';

const Drawer = createDrawerNavigator();

const userToken = '1234';


const App = ( {navigation} ) => {
  return (
    <NavigationContainer>
    {
      userToken !== null ? (
        <Drawer.Navigator drawerContent={ props => <DrawerContent { ...props } /> }>
          <Drawer.Screen name="Inicio" component={Inicio} />
          <Drawer.Screen name="Pelicula" component={Pelicula} />
          <Drawer.Screen name="Hola" component={Hola} />
        </Drawer.Navigator>
      ) : 
      (
        <Drawer.Navigator >
        <Drawer.Screen name="Hola" component={Hola} />
      </Drawer.Navigator>
      )
    }
    </NavigationContainer>
  );

};


export default App;
