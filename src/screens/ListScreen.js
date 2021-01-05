import React from 'react'
import { Text, StyleSheet, FlatList, View } from 'react-native'

const ListComponent = () => {
    const friends = [
        {
            name: 'Betty',
            age:'23'     
        },
        {
            name: 'Lorena',
            age:'25'
        },
        {
            name: 'Jesús',
            age:'23'
        },
        {
            name: 'Ixchel',
            age:'23'
        },
           {
            name: 'Peter',
            age:'30'     
        },
        {
            name: 'David',
            age:'22'
        },
        {
            name: 'Luis',
            age:'23'
        },
        {
            name: 'Jose D',
            age:'23'

        },
    ]
    return (
        <FlatList
            // horizontal //ponerlo horizontal
            // showsHorizontalScrollIndicator={false} //ocultar la scrollbar
            keyExtractor={(friend)=> friend.name}
            data={friends}
            renderItem={({item}) => { 
                return (
                    <View style={styles.textStyle}>
                        <Text>Name: {item.name}</Text>
                        <Text>Age: {item.age}</Text>
                    </View>
                )
            }}
        />
    )
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 15
    },
})
export default ListComponent