import {View, Text, Pressable, Alert, Image, StyleSheet} from 'react-native';
import React from 'react';

const Extra = props => {
  return (
    <Pressable
      onPress={() => props.handleAddOns(!props.status)}
      style={[
        styles.container,
        props.status ? styles.selectedAddOns : styles.unSelectedAddOns,
      ]}>
      <View
        style={[
          styles.checkbox,
          props.status ? styles.checkbox_on : styles.checkbox_off,
        ]}>
        <Image
          source={require('../images/icon-checkmark.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.extra}>
        <Text style={styles.service}>{props.service}</Text>
        <Text style={styles.info}>{props.info}</Text>
      </View>
      <View>
        <Text style={styles.price}>{props.price}</Text>
      </View>
    </Pressable>
  );
};

export default Extra;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderRadius: 9,
    padding: 18,
    marginTop: 10,
    overflow: 'hidden',
  },
  unSelectedAddOns: {
    borderColor: 'gray',
  },
  selectedAddOns: {
    backgroundColor: '#F0F0F0',
    borderColor: '#16166d',
  },
  checkbox: {
    width: 28,
    height: 28,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderStyle: 'solid',
    borderRadius: 5,
  },
  checkbox_on: {
    backgroundColor: '#16166d',
  },
  checkbox_off: {
    backgroundColor: 'white',
  },
  image: {
    width: 20,
    height: 15,
    alignSelf: 'center',
    marginVertical: 6,
  },
  extra: {
    marginLeft: 15,
  },
  service: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  info: {
    fontSize: 14,
    fontWeight: '500',
    color: 'darkgray',
  },
  price: {
    color: '#a5a0dd',
    fontSize: 15,
    fontWeight: '500',
    left: 10,
  },
  manual_align: {
    left: 20,
  },
});
