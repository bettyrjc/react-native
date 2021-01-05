import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ComponentScreen = () => {
    let name = 'Betty!'
    return (
        <View >
            <Text style={styles.titleStyle}>
                Getting started with React native!
            </Text>
            <Text  style={styles.nameStyle}>My name is {name}</Text>
        </View>
    )
}
 
const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 45
    },
    nameStyle: {
        fontSize: 20
    }
})

export default ComponentScreen