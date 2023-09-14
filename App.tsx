import React, {useState} from 'react';
import HeaderComp from './Component/HeaderComp';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const COLOR = {
  orange: 'orange',
  blue: '#398ad7',
  yellow: '#FBEC50',
  lightBlue: '#A5DEF2',
};

const POSITION = {
  low: 20,
  high: 80,
};

const App = () => {
  const [displayValue, setDisplayValue] = useState<string>('0');
  const [storeValue, setStoreValue] = useState<string[]>([]);
  const [operator, setOperator] = useState<string | null>(null);
  const [firstValue, setFirstValue] = useState<string>('');

  const handelTap = (num: number | string) => {
    if (displayValue === '0') {
      setDisplayValue(num.toString());
    } else {
      setDisplayValue(displayValue + num);
    }
    setStoreValue([...storeValue, num.toString()]);
  };

  const handleOperatorInput = (op: string) => {
    setOperator(op);
    setFirstValue(displayValue);
    setDisplayValue('0');
    setStoreValue([...storeValue, op]);
  };

  const handleEqual = () => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);

    if (operator === '+') {
      setDisplayValue((num1 + num2).toString());
    } else if (operator === '-') {
      setDisplayValue((num1 - num2).toString());
    } else if (operator === '*') {
      setDisplayValue((num1 * num2).toString());
    } else if (operator === '/') {
      setDisplayValue((num1 / num2).toString());
    } else if (operator === '%') {
      setDisplayValue((num1 / 100).toString());
    }

    setOperator(null);
    setFirstValue('');
  };

  const handleClear = () => {
    setDisplayValue('0');
    setOperator(null);
    setFirstValue('');
    setStoreValue([]);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <HeaderComp />
      <View style={styles.container}>
        <Text style={[styles.text, {bottom: POSITION.high}]}>{storeValue}</Text>
        <Text style={styles.text}>{displayValue}</Text>
        <Text style={styles.line} />
        <Text
          style={[
            styles.line,
            {backgroundColor: COLOR.lightBlue, bottom: POSITION.low},
          ]}
        />
      </View>
      <View style={styles.bottonContainer}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={handleClear}>
            <Text style={[styles.bottonText, {color: COLOR.blue}]}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={[styles.bottonText, {color: COLOR.blue}]}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleOperatorInput('%')}>
            <Text style={[styles.bottonText, {color: COLOR.blue}]}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleOperatorInput('/')}>
            <Text style={[styles.bottonText, {color: COLOR.orange}]}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handelTap(7)}>
            <Text style={styles.bottonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handelTap(8)}>
            <Text style={styles.bottonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handelTap(9)}>
            <Text style={styles.bottonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleOperatorInput('*')}>
            <Text style={[styles.bottonText, {color: COLOR.orange}]}>x</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handelTap(4)}>
            <Text style={styles.bottonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handelTap(5)}>
            <Text style={styles.bottonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handelTap(6)}>
            <Text style={styles.bottonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleOperatorInput('-')}>
            <Text style={[styles.bottonText, {color: COLOR.orange}]}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handelTap(1)}>
            <Text style={styles.bottonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handelTap(2)}>
            <Text style={styles.bottonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handelTap(3)}>
            <Text style={styles.bottonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleOperatorInput('+')}>
            <Text style={[styles.bottonText, {color: COLOR.orange}]}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handelTap(0)}>
            <Text style={styles.bottonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handelTap('.')}>
            <Text style={styles.bottonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleEqual}>
            <Text style={[styles.bottonText, {color: COLOR.orange}]}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  line: {
    position: 'absolute',
    bottom: 0,
    flex: 1,
    width: '100%',
    height: 20,
    backgroundColor: COLOR.yellow,
    opacity: 0.4,
  },
  mainContainer: {
    margin: 10,
    marginTop: 30,
  },
  container: {
    elevation: 6,
    marginTop: 45,
    width: 'auto',
    height: 200,
    borderColor: 'black',
    borderWidth: 4,
    backgroundColor: '#D5E3F0',
    position: 'relative',
    overflow: 'hidden',
    borderTopLeftRadius: 60,
  },
  text: {
    position: 'absolute',
    fontWeight: 'bold',
    color: 'black',
    bottom: 40,
    right: 10,
    fontSize: 32,
  },
  bottonContainer: {
    marginTop: 45,
    margin: 10,
  },
  button: {
    elevation: 6,
    height: 65,
    flex: 1,
    backgroundColor: '#C1D5F0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  row: {
    flexDirection: 'row',
    gap: 25,
    marginBottom: 25,
  },
  bottonText: {
    fontSize: 34,
    color: '#333',
    fontWeight: 'bold',
  },
  bottonYellow: {
    color: 'yellow',
  },
});

export default App;
