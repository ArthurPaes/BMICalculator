import React, {useState} from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

export default function App() {
  let [weight, setWeight] = useState(0);
  let [height, setHeight] = useState(0);
  let [result, setResult] = useState('');
  let [resultText, setResultText] = useState('');

  function calculate() {
    result = weight / (height * height);
    setResult(result);

    if (result <= 18.5) {
      setResultText('Underweight');
    }
    if (result >= 18.5 && result <= 24.9) {
      setResultText('Normal Weight');
    }
    if (result >= 25 && result <= 29.9) {
      setResultText('Overweight');
    }
    if (result >= 30) {
      setResultText('Obesity');
    }
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Weight"
            keyboardType="numeric"
            style={styles.input}
            onChangeText={(weightInput) => {
              setWeight(weightInput);
            }}
          />
          <TextInput
            placeholder="Height"
            keyboardType="numeric"
            style={styles.input}
            onChangeText={(heightInput) => {
              setHeight(heightInput);
            }}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            calculate();
          }}>
          <Text style={styles.buttonText}>Calculate</Text>
        </TouchableOpacity>
        <Text style={styles.results}>{result}</Text>
        <Text style={[styles.results, {fontSize: 35}]}>{resultText}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  inputContainer: {
    flexDirection: 'row',
  },
  input: {
    height: 80,
    textAlign: 'center',
    width: '50%',
    fontSize: 50,
    marginTop: 24,
  },
  button: {
    backgroundColor: '#40E0D0',
  },
  buttonText: {
    textAlign: 'center',
    padding: 30,
    fontSize: 25,
    color: 'black',
  },
  results: {
    textAlign: 'center',
    color: 'lightgray',
    fontSize: 65,
    padding: 15,
  },
});
