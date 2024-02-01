/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  View,
  Button,
  StyleSheet,
  Text,
  TextInput,
  FlatList,
} from 'react-native';


function App() {
  const [goalText, setGoalText] = useState('');
  const [goals, setGoals] = useState([]);

  function addGoalText() {
    setGoals((currentGoals) => [...currentGoals, {text: goalText, id: Math.random().toString()}]);
  }
  return (
    <View>
      <View style={styles.controlContainer}>
        <TextInput 
          style={styles.input} 
          placeholder='your course goal' 
          onChangeText={newText => setGoalText(newText)}
        />
        <Button title='Add goal' onPress={addGoalText}/>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            )
          }}
          keyExtractor={(item, index) => {
            return item.id
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  )
  
}

const styles = StyleSheet.create({
  controlContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    paddingVertical: 20,
  },
  listContainer: {
    padding: 8,
  },
  input: {
    flexGrow: .8,
    borderWidth: 1,
    borderColor: "#f0f0f0"
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5483f0',
  },
  goalText: {
    color: 'white',
  }
});

export default App;
