import {View, Text, Pressable, Alert, Image, StyleSheet} from 'react-native';
import React from 'react';

const Plan = props => {
  return (
    <Pressable
      onPress={() => props.handleSelectPlan(props.plan)}
      style={[
        styles.container,
        props.name === props.plan ? styles.selectedPlan : styles.unSelectedPlan,
      ]}>
      <View>
        {/* Its better to pass the url of image with require */}
        <Image source={props.image} style={styles.image} />
      </View>
      <View style={styles.info}>
        <Text style={styles.plan}>{props.plan}</Text>
        <Text style={styles.price}>{props.price}</Text>
        {props.offer && <Text style={styles.offer}>2 months free</Text>}
      </View>
    </Pressable>
  );
};

export default Plan;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderRadius: 9,
    padding: 18,
    marginTop: 10,
  },
  unSelectedPlan: {
    borderColor: 'gray',
  },
  selectedPlan: {
    backgroundColor: '#F0F0F0',
    borderColor: '#16166d',
  },
  image: {
    width: 50,
    height: 50,
  },
  info: {
    marginLeft: 15,
  },
  plan: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  price: {
    fontSize: 15,
    fontWeight: '500',
    color: 'darkgray',
    marginTop: 3,
  },
  offer: {
    color: 'black',
    marginTop: 3,
  },
});
