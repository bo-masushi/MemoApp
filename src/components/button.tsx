import { JSX } from 'react'
import {Text, TouchableOpacity, StyleSheet } from 'react-native'


interface Props{
    Label: string
    onPress?: () => void
}

const Button =(props: Props): JSX.Element => {
    const {Label,onPress } = props
    return (
        <TouchableOpacity onPress={onPress} style={styles.botton}>
            <Text style={styles.bottonLabel}>{Label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create ({
    botton: {
        backgroundColor: '#467FD3',
        borderRadius:4,
        alignSelf:'flex-start',
        marginBottom: 24
    },
    bottonLabel: {
        fontSize: 16,
        lineHeight: 32,
        color:'#ffffff',
        paddingVertical: 8,
        paddingHorizontal: 24
    }

})

export default Button