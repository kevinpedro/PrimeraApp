import React, { useState } from 'react'
import { View, Text,  StyleSheet } from 'react-native';
import { Fab } from '../components/Fab';

export const ContadorScreen = () => {

    const [contador, setcontador] = useState(10)

  return (
    <View style={ style.container }>
        <Text style= { style.title }>
            Contador {contador}</Text>


        <Fab
            title='-1'
            position='bl'
            onPress={() => setcontador(contador - 1)}></Fab>
        <Fab
            title='+1'
            onPress={() => setcontador(contador + 1)}></Fab>


    </View>
  )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
        top: -15
    },
    
})
