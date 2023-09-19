import {StyleSheet, Alert, Pressable, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const GoBack = props => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate(props.back);
        props.selectGoBack();
      }}
      style={styles.button}>
      <Text style={styles.text}>Go Back</Text>
    </Pressable>
  );
};

export default GoBack;

// top: 130,
// left: 260

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 768,
    left: 15,
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingVertical: 15,
    // paddingHorizontal: 30,
    // elevation: 3,
  },
  text: {
    color: 'darkgray',
    fontSize: 20,
    fontWeight: '600',
  },
});
