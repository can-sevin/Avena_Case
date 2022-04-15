import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
const App = () => {
  const [text, setText] = useState<string>('');
  const [first, setFirst] = useState<number>(0);
  const [second, setSecond] = useState<number>(0);
  const [third, setThird] = useState<number>(0);
  const [forth, setForth] = useState<number>(0);
  const [minus, setMinus] = useState<string>('');

  useEffect(() => {
    setFirst(Math.floor(Math.random() * 10));
    setSecond(Math.floor(Math.random() * 10));
    while (first === second) {
      setSecond(Math.floor(Math.random() * 10));
    }
    setThird(Math.floor(Math.random() * 10));
    while (first === third || second === third) {
      setThird(Math.floor(Math.random() * 10));
    }
    setForth(Math.floor(Math.random() * 10));
    while (first === forth || second === forth || third === forth) {
      setForth(Math.floor(Math.random() * 10));
    }
  }, []);

  const checkNumber = () => {
    if (text.charAt(0) === first.toString()) {
      setMinus('+');
    } else if (
      first.toString() === text.charAt(0) ||
      first.toString() === text.charAt(1) ||
      first.toString() === text.charAt(2) ||
      first.toString() === text.charAt(3)
    ) {
      setMinus('-');
    }
    if (text.charAt(1) === second.toString()) {
      setMinus(minus + '+');
    } else if (
      second.toString() === text.charAt(0) ||
      second.toString() === text.charAt(1) ||
      second.toString() === text.charAt(2) ||
      second.toString() === text.charAt(3)
    ) {
      setMinus(minus + '-');
    }
    if (text.charAt(2) === third.toString()) {
      setMinus(minus + '+');
    } else if (
      third.toString() === text.charAt(0) ||
      third.toString() === text.charAt(1) ||
      third.toString() === text.charAt(2) ||
      third.toString() === text.charAt(3)
    ) {
      setMinus(minus + '-');
    }
    if (text.charAt(3) === forth.toString()) {
      setMinus(minus + '+');
    } else if (
      forth.toString() === text.charAt(0) ||
      forth.toString() === text.charAt(1) ||
      forth.toString() === text.charAt(2) ||
      forth.toString() === text.charAt(3)
    ) {
      setMinus(minus + '-');
    }
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.view_input}>
        <TextInput
          onChangeText={txt => {
            setText(txt);
          }}
          value={text}
          style={styles.txt_input}
        />
        <TouchableOpacity
          style={styles.btn_input}
          onPress={() => checkNumber()}>
          <Text>OK</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom_view}>
        <View style={styles.bottom_view_view}>
          <Text>{text}</Text>
          <Text>{minus}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-evenly',
  },
  view_input: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  txt_input: {
    width: 300,
    height: 40,
    borderWidth: 1,
  },
  btn_input: {
    borderWidth: 1,
    height: 36,
    width: 36,
  },
  bottom_view: {
    borderWidth: 1,
    height: 300,
    width: 300,
  },
  bottom_view_view: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 24,
  },
});

export default App;
