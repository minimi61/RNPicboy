import * as React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {blue, REM} from '../assets/constant';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100 * REM,
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
});

export function LoginPage() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text></Text>
        <Text style={styles.text}>Login</Text>
        <Text>
          <Icon name="rocket" size={30} color="#900" />
        </Text>
      </SafeAreaView>
    </>
  );
}
