import * as React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {blue, REM} from '../assets/constant';

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

export function SignUpPage() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Login</Text>
      </SafeAreaView>
    </>
  );
}
