/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  View,
  Button,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';


function App(): React.JSX.Element {

  return (
    <View>
      <View style={styles.controlContainer}>
        <TextInput style={styles.input} placeholder='your course goal'/>
        <Button title='Add goal'/>
      </View>
      <View style={styles.listContainer}>
        <Text>list of goals...</Text>
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

  },
  input: {
    flexGrow: .8,
    borderWidth: 1,
    borderColor: "#f0f0f0"
  }
});

export default App;
