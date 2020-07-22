import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// import { Container } from './styles';

const Main = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}> E seja feliz! </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'red',
  },
});

export default Main;
