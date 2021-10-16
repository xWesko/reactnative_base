import React, { useEffect, useState } from 'react';
import { 
    Text, 
    StyleSheet, 
    View, 
    SafeAreaView,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/AntDesign';

import Loading from '../componentes/Loading';
import {environment} from '../env'; 
 
const Inicio = ( { navigation } ) => {


    const { base_url } = environment;


    const [ data, setData ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    const getData = async () => {
        const resp = await axios.get(`${base_url}/films/`);
        setData(resp.data);
        setLoading(false);
    }


    console.log(data);

    useEffect( () => {
        let mounted = true;

        if( mounted ) {
            getData()
        }

        return () => {
            mounted = false;
        }
    }, [])


    if ( loading ) { return <Loading />   } 

    return(
        <SafeAreaView style={ styles.container }>

            <Text style={ styles.title }>Lista de peliculas</Text>

            { data.results.map( (item, index) => (
                <TouchableOpacity key={index} onPress={ () => navigation.navigate('Pelicula', item) }>
                    <View style={ styles.item }>
                        <Text style={ styles.text }>{item.title}</Text>
                        <Icon name="infocirlce" color="#353534" size={20} />
                    </View>
                </TouchableOpacity>
            ) ) }
            
        </SafeAreaView>
    )
    
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    title:{
        textAlign: 'center',
        fontSize: 30,
        marginVertical: 15,
        fontWeight: 'bold'
    },
    text: {
        fontSize: 16,
        color: '#353534',
    }, 
    item:{
        paddingHorizontal: 10,
        backgroundColor: '#3FEB62',
        marginVertical: 5,
        marginHorizontal: 30,
        paddingVertical: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'flex-start',
    }
})

export default Inicio;