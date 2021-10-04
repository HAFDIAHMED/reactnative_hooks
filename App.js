 import { useState } from 'react';
 import React from 'react';
 import { StatusBar } from 'expo-status-bar';
 import { StyleSheet, Text, View, Button ,TextInput} from 'react-native';

function Example() {
  // Declaración de una variable de estado que llamaremos "count"
  const [count, setCount] = useState(0);
  const [age,setAge]=useState(11);
  function addCout (){
    return (
      setCount(count +1)
    );
   
  }

  return (
    <View style={styles.container}>
      <Text>You clicked {count} times</Text>

      <Button 
      title="Click me"
      onPress={()=>addCout()}
     
      
       />
       <Text> enter your age here : </Text>
       
       <Text>You are {age} years old</Text>

        
      
    </View>
  );
}
export default Example;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',

    alignItems: 'center',
    justifyContent: 'center',
  },
})
