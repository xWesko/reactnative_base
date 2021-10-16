import React from 'react';
import { 
    StyleSheet,
    Text,
    SafeAreaView,
    View
 } from 'react-native';
 import Header from '../componentes/Header';

const Pelicula = ({route, navigation }) => {

    const  { title, director, episode_id, producer, release_date } = route.params;
    return (
        <>
            <Header 
                navigation={ navigation } 
                bgColor='#3FEB62'
                title={title}
            />
            <SafeAreaView style={ styles.container }>
                <View style={ styles.info }>
                    <Text style={ styles.text }>Director: {director}</Text>
                    <Text style={ styles.text }>Episodio: {episode_id}</Text>
                    <Text style={ styles.text }>Productor: {producer}</Text>
                    <Text style={ styles.text }>Fecha de estreno: {release_date}</Text>
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    info: {
        paddingHorizontal: '5%',
        flexDirection: 'column',
        marginTop: 30,
    },
    text: {
        fontSize: 18,
        paddingVertical: 4
    }

});

export default Pelicula;
