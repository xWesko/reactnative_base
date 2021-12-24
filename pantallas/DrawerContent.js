import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch
} from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconIonic from 'react-native-vector-icons/Ionicons';


const DrawerContent = (props) => {

  return(
    <Text style={{flex:1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection:'row',marginTop: 15}}>
                <Avatar.Image source={{ uri: 'https://i.imgur.com/dz7hRSz.png' }} size={50} />
                <View style={{marginLeft:15, flexDirection:'column'}}>
                  <Title style={styles.title}>Luis Hernández</Title>
                  <Caption style={styles.caption}>Administrador</Caption>
                </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem 
              icon={({color, size}) => (
                <IconMCI 
                  name="home-outline" 
                  color={color}
                  size={size}
                />
              )}
              label="Inicio"
              onPress={() => {props.navigation.navigate('Inicio')}}
            />
            <DrawerItem 
              icon={({color, size}) => (
                <IconMCI 
                  name="account-outline" 
                  color={color}
                  size={size}
                />
              )}
              label="Hola"
              onPress={() => {props.navigation.navigate('Hola')}}
            />
            <DrawerItem 
              icon={({color, size}) => (
                <IconIonic 
                  name="baseball-outline" 
                  color={color}
                  size={size}
                />
              )}
              label="No se que poner"
              // onPress={() => {props.navigation.navigate('BookmarkScreen')}}
            />
            <DrawerItem 
              icon={({color, size}) => (
                <IconMaterial 
                  name="support-agent" 
                  color={color}
                  size={size}
                />
              )}
              label="Soporte"
              // onPress={() => {props.navigation.navigate('SupportScreen')}}
            />
          </Drawer.Section>

        </View>
      </DrawerContentScrollView>

      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem 
          icon={({color, size}) => (
            <IconMCI 
              name="exit-to-app" 
              color={color}
              size={size}
            />
          )}
          label="Cerrar sesión"
          // onPress={() => { logout() } }
        />
      </Drawer.Section>
    </Text>
  );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
      marginBottom: 15,
      borderTopColor: '#f4f4f4',
      borderTopWidth: 1,
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
});

export default DrawerContent