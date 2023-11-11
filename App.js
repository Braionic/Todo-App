import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput, KeyboardAvoidingView } from 'react-native';

export default function App() {
 const [formData, setFormData] = useState('')
const [todo, setTodo] = useState([])
 function tasks(){
  return {
    id: Date().now,
    todoText: formData,
    isCompleted: false
  }
 }
 function handlePress(){
  setTodo((oldval)=>{
    return [...oldval, tasks()]
  })
  setFormData('')
  console.log(todo[1]?.todoText)
 }
 const mytodo = todo.map((singletodo)=>{
  return (<View>
<Text keyExtractor={(singletodo) => singletodo.id}>{singletodo.todoText}</Text>
  </View>
  )
 })
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View>
      <Text style={styles.txt}>Todo App</Text>
      </View>
      <View style={styles.todoContainer}>
      <Text style={styles.todoText}>{formData}</Text>
      <Text style={styles.todoText}>{mytodo}</Text>
        <TextInput
        style={styles.myInput}
        onChangeText={(e)=>{setFormData(e)}}
        value={formData}
      />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Add Task</Text>
      </TouchableOpacity>
        
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  txt: {
    color: 'red',
    fontSize: 40,
    margin: 12
  },
  todoContainer:{
   
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  todoText: {
    //color: 'white',
    fontSize: 40
  },
  myInput: {
    borderWidth: 1,
    height: 40,
    width: '80%',
    borderRadius: 5,
    padding: 5
   
  },
  button: {
  alignItems: 'center',
  backgroundColor: 'green',
  padding: 10,
  marginTop: 10,
  },
  buttonText: {
    color: 'white'
  }
});
