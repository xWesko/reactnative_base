import React from 'react';
import { 
    StatusBar, 
    Platformm, 
    StyleSheet 
} from 'react-native';
import { Appbar } from 'react-native-paper';

const Header = ( { navigation, title='Titulo', bgColor='#fff',} ) =>{

    return(
        <>
        <StatusBar 
            barStyle={ Platform.OS === 'android' ? 'light-content' : 'dark-content'  } 
        />
        <Appbar.Header style={{ backgroundColor: bgColor }}>
            <Appbar.BackAction onPress={() => { navigation.goBack() }} />
            <Appbar.Content titleStyle={styles.title}  title={title}  />
        </Appbar.Header>
        </>
    );
}

const styles = StyleSheet.create({
    title: {
        textTransform: 'uppercase', 
        fontWeight: 'bold',
        fontSize: 16
    }
})

export default Header;