import React from 'react';
import { 
    Text, 
    StyleSheet, 
    SafeAreaView,
    ActivityIndicator,
} from 'react-native';

const Loading = ( { color = '#999', text='Cargando...', size = 'large'  } ) => {
    return (
        <SafeAreaView style={ styles.container }>
            <ActivityIndicator color={color} size={size}  />
            <Text style={ styles.text }>{text}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignContent: 'center', 
        alignItems:'center', 
        backgroundColor: '#fff'
    },
    text: {
        color: '#999',
        marginTop: 10
    }
})

export default Loading
