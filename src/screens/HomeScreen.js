import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";


const HomeScreen = ({ navigation }) => {
  // console.log(props.navigation);
  return (
    <View>
      <Text style={styles.text}>Hi there</Text>
      <Button
        title="Go to components Demo"
        onPress={()=> navigation.navigate('Components')}
      />
      <Button
        title="Go to List Demo"
       onPress={()=> navigation.navigate('List')}
      />
      <Button
        title="Go to Image view"
       onPress={()=> navigation.navigate('ImageScreen')}
      />
       <Button
        title="Go to Counter"
       onPress={()=> navigation.navigate('Counter')}
      />
      <Button
        title="Go to Color Demo"
       onPress={()=> navigation.navigate('Color')}
      />
      <Button
        title="Go to Square Demo"
       onPress={()=> navigation.navigate('Square')}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
