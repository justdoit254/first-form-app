import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import React from 'react';
import Background from './Background';
import {SafeAreaView} from 'react-native-safe-area-context';
import GoBack from './GoBack';
import Confirm from './Confirm';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  styleYourInfo,
  styleSelectPlan,
  styleAddOns,
  styleSummary,
} from '../store';

const Summary = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {
    freq,
    plan,
    onlineServices,
    largeStorage,
    customizableProfile,
    isCompleted,
  } = useSelector(state => {
    return {
      freq: state.selectPlan.freq,
      plan: state.selectPlan.plan,
      onlineServices: state.addOns.onlineServices,
      largeStorage: state.addOns.largeStorage,
      customizableProfile: state.addOns.customizableProfile,
      isCompleted: state.sideBar.completed,
    };
  });

  const selectAddOns = () => {
    dispatch(styleYourInfo(false));
    dispatch(styleSelectPlan(false));
    dispatch(styleAddOns(true));
    dispatch(styleSummary(false));
  };
  const selectSelectPlan = () => {
    dispatch(styleYourInfo(false));
    dispatch(styleSelectPlan(true));
    dispatch(styleAddOns(false));
    dispatch(styleSummary(false));
  };
  let price = 0;
  if (plan === 'Arcade') {
    price = 9;
  } else if (plan === 'Advanced') {
    price = 12;
  } else {
    price = 15;
  }
  let cost = price;
  if (onlineServices) {
    cost += 1;
  }
  if (largeStorage) {
    cost += 2;
  }
  if (customizableProfile) {
    cost += 2;
  }
  cost = freq ? cost * 10 : cost;
  price = freq ? price * 10 : price;
  return (
    <SafeAreaView style={{backgroundColor: '#cffaff', height: '87%'}}>
      <Background />
      {isCompleted ? (
        <View style={[styles.container, styles.completed]}>
          <Image
            source={require('../images/icon-thank-you.png')}
            style={styles.image}
          />
          <Text style={styles.heading}>Thank you!</Text>
          <Text
            style={[
              styles.info,
              {textAlign: 'center', lineHeight: 24, paddingTop: 10},
            ]}>
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, feel free to email us at
            support@loregaming.com
          </Text>
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.heading}>Finishing up</Text>
          <Text style={styles.info}>
            Double-check everything looks OK before confirming.
          </Text>
          <View style={styles.summary}>
            <View style={styles.top}>
              <View style={styles.plan}>
                <Text style={styles.name}>
                  {plan} ({freq ? 'Yearly' : 'Monthly'})
                </Text>
                <Pressable
                  onPress={() => {
                    navigation.navigate('SelectPlan');
                    selectSelectPlan();
                  }}
                  style={styles.button}>
                  <Text style={styles.text}>Change</Text>
                </Pressable>
              </View>
              <View>
                <Text style={styles.price}>
                  ${price}/{freq ? 'yr' : 'mo'}
                </Text>
              </View>
            </View>
            <View style={styles.bottom}>
              {onlineServices && (
                <View style={styles.add_ons}>
                  <Text style={styles.service_name}>Online service</Text>
                  <Text style={styles.service_price}>
                    +${freq ? 10 : 1}/{freq ? 'yr' : 'mo'}
                  </Text>
                </View>
              )}
              {largeStorage && (
                <View style={styles.add_ons}>
                  <Text style={styles.service_name}>Larger storage</Text>
                  <Text style={styles.service_price}>
                    +${freq ? 20 : 2}/{freq ? 'yr' : 'mo'}
                  </Text>
                </View>
              )}
              {customizableProfile && (
                <View style={styles.add_ons}>
                  <Text style={styles.service_name}>Customizable profile</Text>
                  <Text style={styles.service_price}>
                    +${freq ? 20 : 2}/{freq ? 'yr' : 'mo'}
                  </Text>
                </View>
              )}
            </View>
          </View>
          <View style={styles.total}>
            <Text style={styles.service_name}>
              Total (per {freq ? 'year' : 'month'})
            </Text>
            <Text style={styles.total_price}>
              +${cost}/{freq ? 'yr' : 'mo'}
            </Text>
          </View>
        </View>
      )}
      {!isCompleted && <GoBack back="AddOns" selectGoBack={selectAddOns} />}
      {!isCompleted && <Confirm />}
    </SafeAreaView>
  );
};

export default Summary;

const styles = StyleSheet.create({
  container: {
    width: '92%',
    backgroundColor: 'white',
    top: -84,
    marginLeft: '4%',
    padding: 30,
    borderRadius: 15,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
  },
  info: {
    color: 'darkgray',
    fontSize: 18,
    marginTop: 3,
  },
  summary: {
    backgroundColor: '#e2dede63',
    borderRadius: 9,
    marginTop: 20,
    padding: 8,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: StyleSheet.hairlineWidth,
    padding: 10,
  },
  plan: {},
  name: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {},
  text: {
    color: 'darkgray',
    fontSize: 16,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  price: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bottom: {
    marginTop: 15,
    padding: 10,
  },
  add_ons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  service_name: {
    color: 'darkgray',
    fontSize: 18,
    fontWeight: '600',
  },
  service_price: {
    color: 'black',
    fontSize: 17,
    fontWeight: '500',
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    paddingLeft: 18,
  },
  total_price: {
    fontSize: 20,
    fontWeight: 'bold',
    right: 16,
    color: '#16166d',
  },
  completed: {
    alignItems: 'center',
    padding: 50,
  },
  image: {
    width: 70,
    height: 70,
    marginBottom: 15,
  },
});
