import React from 'react'
import { Text, StyleSheet } from 'react-native'

const Hola = () => {
  return (
    <Text style={ estilos.texto }>
        ASDSADSADSASDSA
    </Text>
  )
}

const estilos = StyleSheet.create({
  texto: {
    color: 'red',
    textAlign: 'center',
    marginTop: 40
  }

});

export default Hola
