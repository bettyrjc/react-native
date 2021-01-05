import React, {useState} from 'react'
import { View, Text, StyleSheet, Button  } from 'react-native'

const CounteScreen = () => {
    const [counter, setCounter] = useState(0)
    return (
        <View>
            <Button title='Decrease' onPress={() => setCounter(counter + 1 )} />
            <Button title='Increase' onPress={() => setCounter(counter - 1)} />
            <Text>Current count: { counter}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 45
    },
   
})

export default CounteScreen
