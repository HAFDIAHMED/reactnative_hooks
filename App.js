import React, { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
function App(props) {
  const [count,setCount]=useState(0);
  function Counter(){
    return (
      setCount(count+1)

    );
  }
  return (
    <View style={styles.container}>
      <Text>hello {count} times</Text> 
      <Button 
      title="add count"
      onPress={()=>Counter()}
      />


    </View>
  );
}

export default App;
const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'

  }
})