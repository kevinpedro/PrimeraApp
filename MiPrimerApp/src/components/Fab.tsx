import React from 'react'
import { Text,  View, StyleSheet, TouchableNativeFeedback, Platform, TouchableOpacity} from 'react-native';

interface Props {
    title: string,
    position?: 'br' | 'bl',
    onPress: () => void,
}

export const Fab = ({title, onPress, position = 'br'}: Props) => { 

    const ios = () => {

        return (
            <TouchableOpacity
            activeOpacity={ 0.8 }
            onPress={onPress}
            style = { [
                style.fabLocation,
                (position === 'bl' ? style.left : style.right)    
            ] }
                >
                    <View style = {style.fab}>
                        <Text style= {style.text}>
                        { title }
                        </Text>
                    </View>
        
                </TouchableOpacity>
        )

    }

    const android = () => {
        return (
            <View   style = { [
                style.fabLocation,
                (position === 'bl' ? style.left : style.right)    
            ] }>
                <TouchableNativeFeedback
                    onPress={onPress}
                    background = { TouchableNativeFeedback.Ripple('#28425B', false, 30)}
                >
                    <View style = {style.fab}>
                        <Text style= {style.text}>
                        { title }
                        </Text>
                    </View>
        
                </TouchableNativeFeedback>
            </View>
        )
    }


  return (Platform.OS === 'ios') ? ios() : android();
}


const style = StyleSheet.create ({
    fabLocation: {
        position: 'absolute',
        bottom: 25,
    },
    right: {
        right: 25
    },
    left: {
        left: 25
    },

    fab:{
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,

        elevation: 8,
    },
    text: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})