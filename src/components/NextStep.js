import {View, Button, StyleSheet, Alert, Pressable, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const NextStep = props => {
  const navigation = useNavigation();
  return (
    // <View style={styles.container}>
    //   <Button
    //     onPress={() => Alert.alert('Button is pressed')}
    //     title="Next Step"
    //     style={styles.button}
    //     color="#16166d"></Button>
    // </View>
    // Instead of button its better to use Pressable
    <Pressable
      onPress={() => {
        navigation.navigate(props.next);
        props.selectNextStep();
      }}
      style={styles.button}>
      <Text style={styles.text}>Next Step</Text>
    </Pressable>
  );
};

export default NextStep;

// top: 130,
// left: 260

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
