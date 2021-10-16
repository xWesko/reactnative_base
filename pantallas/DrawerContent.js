import React from 'react';
import { View, StyleSheet, Alert, Linking } from 'react-native';
import { Drawer, } from 'react-native-paper';
import {  DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';


export function DrawerContent( props ) {
    
   

    return (
        <View style={{ flex: 1 }}>

            <DrawerContentScrollView {...props}>
                <View style={ styles.drawerContent }>
                    
                    <Drawer.Section style={styles.draweSection }>

                        <DrawerItem 
                            
                            label="Inicio"
                            onPress={ () => props.navigation.navigate('Inicio') }
                        />
                     
                        

                    </Drawer.Section>

                </View>
            </DrawerContentScrollView>
            
            <Drawer.Section style={ styles.bottomDrawerSection }>
                <DrawerItem 
                    icon={ ({color, size}) => (
                        <Icon name="information-outline" color={color} size={size} />
                     ) }
                    label="Acerca de"
                    onPress={ () =>  showInfoAlert() }
                />
            </Drawer.Section>

        </View>
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
        fontSize: 14,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 12,
        marginTop: -10
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
    draweSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },
    preference:  {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});