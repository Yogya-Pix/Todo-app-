import React, {useState} from 'react';
import {StyleSheet,Text,View,FlatList,Alert,TouchableWithoutFeedback,Keyboard} from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoitem';
import AddTodo from './components/addTodo';
// import SandBox from './components/sandbox';

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'buy coffee', key: '1'},
    {text: 'create an app', key: '2'},
    {text: 'play valorant', key: '3'},
  ]);

  const pressHandler = key => {
    setTodos(prevTodo => {
      return prevTodo.filter(todo => todo.key != key);
    });
  };

  const submitHandler = text => {
    if (text.length >= 3) {
      setTodos(prevTodo => {
        return [
          {text: text, key: Math.random().toString()},
          // the ... allows us to copy the elements of an existing array or object into a new array or object
          ...prevTodo,
        ];
      });
    } else {
      Alert.alert('OOPS', 'Todos must be atlest 3 characters long', [
        {text: 'Understood', onPress: () => console.log('alert closed')},
      ]);
    }
  };

  return (
    // <SandBox />
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log('dismissed keyboard');
      }}>
      <View style={styles.container}>
        {/* header */}
        {/* here the header is being imported from the header.js file we have created basically we have nested the header componenet into the main js file*/}
        <Header />
        <View style={styles.content}>
          {/* todo form */}
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({item}) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});

// import React, { useState } from 'react'
// import {StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native'

// export default function app(){
//   const [people, setPeople] = useState([
//     {name: 'shaun', age:1},
//     {name: 'yoshi', age:2},
//     {name: 'mario', age:3},
//     {name: 'luigi', age:4},
//     {name: 'peach', age:5},
//     {name: 'toad', age:6},
//     {name: 'bowser', age:7},
//     {name: 'luigi', age:8},
//     {name: 'peach', age:9},
//     {name: 'toad', age:10},
//   ])

//   const pressHandler  = (age) =>{
//     console.log(age);
//     setPeople((prevPeople)=>{
//       return prevPeople.filter(person => person.age != age)
//     });
//   }

//   return(
//     <View style = {styles.container}>

//       <FlatList
//         // keyExtractor={(item) => item.age}   this will allow me to use another argument as a key
//       //  numColumns={2}  this will multiple items to a single column
//         data = {people}
//         renderItem = {({item}) =>(
//           <TouchableOpacity onPress={() => pressHandler(item.age)}>
//             <Text style = {styles.items}>{item.name}</Text>
//           </TouchableOpacity>
//         )}

//       />

//       {/* <ScrollView>
//       {people.map(items => (
//           <View key={items.age}>
//             <Text style = {styles.items}>{items.name}</Text>
//           </View>
//       )
//       )}
//       </ScrollView> */}
//     </View>
//   );
//   }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     paddingTop: 40,
//     paddingHorizontal: 20,
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
//   boldfont: {
//     fontWeight: 'bold',
//   },
//   btncontainer: {
//     margin: 20,
//   },
//   input: {
//     margin: 10,
//     padding: 8,
//     borderColor: 'grey',
//     borderWidth:1,
//     width: 200,
//   },
//   items: {
//     marginTop: 24,
//     padding: 30,
//     backgroundColor: 'pink',
//     fontsize: 24,
//     marginHorizontal: 10,

//   }
// })

// // taking user input

//   // const [name,  setName] = useState('yogya');
//   // const [age, setAge] = useState(19);

//   // return(
//   //   <View style = {styles.container}>
//   //     <Text>enter your name here: </Text>
//   //     <TextInput style = {styles.input}
//   //     placeholder = 'e.g. Ram Sharma' onChangeText = {(val) => setName(val)} />

//   //     <Text>enter your age here: </Text>
//   //     <TextInput keyboardType='numeric' style = {styles.input}
//   //     placeholder = 'e.g. 23' onChangeText = {(val) => setAge(val)} />

//   //     <Text>name: {name}, age: {age}</Text>
//   //   </View>

// **useState is used to initialize an Object
// eg::
// const [people,  setPeople] = useState(ram)
// here ram is the name of the people
