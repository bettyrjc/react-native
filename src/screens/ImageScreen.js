import React from 'react'
import { View, Text, StyleSheet  } from 'react-native'

import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title='Forest' imageSource={require('../components/images/forest.jpg')} paragraph='lorem impsum'  />
            <ImageDetail title='Beach' imageSource={require('../components/images/beach.jpg')} paragraph='lorem impsum'/>
            <ImageDetail title='Mountain' imageSource={require('../components/images/mountain.jpg')} paragraph='lorem impsum'/>
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

export default ImageScreen
