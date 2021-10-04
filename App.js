import React, { useEffect, useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
function App(props) {
  const [count,setCount]=useState(0);
  const [age,setAge]=useState(23);
  const [task,setTask]=useState("task 0");
  const [tasks,setTasks]=useState(["task 1"]);

  useEffect(() => {
    console.log(tasks.length);
  });
 
  function Counter(){
    return (
      setCount(count+1)

    );
  }
  function addTask(){
    return (
      setTasks([...tasks,task]),
      setTask(null)
    );

  }
  const Tache=(name) =>{

    return (
      <View>
        <Text>{name.text}</Text>
      </View>
    );
  }
  
  return (
    <View style={styles.container}>
      <Text>Add your task:</Text> 
      <TextInput
      placeholder={"task"}
      onChangeText={task=>setTask(task)}
      //value={task}

      />
      <Button 
      title="add task"
      onPress={()=>addTask()}   
      />
     <Tache text="ana lawala"/>
      
      
      


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