import React, { useEffect, useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
function App(props) {
  const [count,setCount]=useState(0);
  const [age,setAge]=useState(23);

  useEffect(() => {
    console.log(`Hello I'm ${count}`);
  });
 
  function Counter(){
    return (
      setCount(count+1)

    );
  }
  
  return (
    <View style={styles.container}>
      <Text>you pushed {count} times</Text> 
      <Button 
      title="add count"
      onPress={()=>Counter()}
      />
      <Text>Enter your age:</Text>
      <TextInput
      placeholder={"Age"}
      onChangeText={age=>setAge(age)}
      value={age}

      />
      <Text>you are {age} years old</Text>


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