import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HeaderComp = () => {
  return (
    <View style={styles.titleRow}>
      <View>
        <Text style={styles.casio}>CASIO</Text>
        <Text>CALCULATOR</Text>
      </View>
      <View style={styles.boxes}>
        <Text style={styles.square} />
        <Text style={styles.square} />
        <Text style={styles.square} />
        <Text style={styles.square} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  casio: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 25,
  },
  boxes: {
    flexDirection: 'row',
    gap: 4,
  },
  square: {
    width: 20,
    height: 20,
    backgroundColor: 'gray',
    elevation: 6,
  },
});

export default HeaderComp;
