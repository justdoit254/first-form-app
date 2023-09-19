import {View, Button, StyleSheet, Alert, Pressable, Text} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {styleCompleted} from '../store';

const Confirm = () => {
  const dispatch = useDispatch();
  return (
    <Pressable
      onPress={() => dispatch(styleCompleted(true))}
      style={styles.button}>
      <Text style={styles.text}>Confirm</Text>
    </Pressable>
  );
};

export default Confirm;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#16166d',
    borderRadius: 7,
    position: 'absolute',
    top: 755,
    right: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 30,
    elevation: 3,
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
});
