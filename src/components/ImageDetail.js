import React from 'react'
import { View, Text, StyleSheet , Image} from 'react-native'

const ImageDetail = ({ title, imageSource, paragraph }) => {
    return (
        <View> 
            <Image source={imageSource}/>
            <Text>{title}</Text>
            <Text>{paragraph}</Text>
       </View>
    )
}

// const styles = StyleSheet.create({
//     titleStyle: {
//         fontSize: 45
//     },
   
// })

export default ImageDetail
