import { JSX } from 'react'
import {View, StyleSheet } from 'react-native'
import { useEffect } from 'react'

import {router, useNavigation} from 'expo-router'

import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/icon'
import LogOutButton from '../../components/LogOutButton'

const handlePress = (): void => {
    router.push('/memo/create')
}

const Index = (): JSX.Element => {
    const navigation = useNavigation ()
    useEffect (() => {
        navigation.setOptions({
            headerRight: () => {return <LogOutButton />}
        })
    }, [])
    return (
        <View style={style.container}>
            <View>
                <MemoListItem/>
                <MemoListItem/>
                <MemoListItem/>
            </View>
            <CircleButton onPress={handlePress}>
                <Icon name='plus' size={40} color='#FFFFFF'/>
            </CircleButton>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFFF'
    }
})

export default Index