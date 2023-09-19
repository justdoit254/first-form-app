import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Switch,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Background from './Background';
import NextStep from './NextStep';
import Plan from './Plan';
import GoBack from './GoBack';
import {useDispatch, useSelector} from 'react-redux';
import {
  changeFreq,
  changePlan,
  styleYourInfo,
  styleSelectPlan,
  styleAddOns,
  styleSummary,
} from '../store';

const SelectPlan = () => {
  const dispatch = useDispatch();
  const {freq, plan} = useSelector(state => {
    return {
      freq: state.selectPlan.freq,
      plan: state.selectPlan.plan,
    };
  });
  const selectAddOns = () => {
    dispatch(styleYourInfo(false));
    dispatch(styleSelectPlan(false));
    dispatch(styleAddOns(true));
    dispatch(styleSummary(false));
  };
  const selectYourInfo = () => {
    dispatch(styleYourInfo(true));
    dispatch(styleSelectPlan(false));
    dispatch(styleAddOns(false));
    dispatch(styleSummary(false));
  };
  const selectSelectPlan = () => {
    dispatch(styleYourInfo(false));
    dispatch(styleSelectPlan(true));
    dispatch(styleAddOns(false));
    dispatch(styleSummary(false));
  };
  const handleFreqChange = event => {
    // dispatch(changeFreq(event.target.checked)); It doesn't work here
    dispatch(changeFreq(!freq));
  };
  const handleSelectPlan = plan => {
    dispatch(changePlan(plan));
  };
  return (
    <SafeAreaView style={{backgroundColor: '#cffaff', height: '87%'}}>
      <Background />
      <View style={styles.container}>
        <Text style={styles.heading}>Select your plan</Text>
        <Text style={styles.info}>
          You have the option of monthly and yearly billing.
        </Text>
        <View style={styles.plans}>
          <Plan
            // image="require('../images/icon-arcade.png')" NOTE --> This is wrong way, below one is right
            image={require('../images/icon-arcade.png')}
            plan="Arcade"
            price={freq ? '$90/yr' : '$9/mo'}
            offer={freq}
            handleSelectPlan={handleSelectPlan}
            name={plan}
          />
          <Plan
            // image="require('../images/icon-arcade.png')" NOTE --> This is wrong way, below one is right
            image={require('../images/icon-advanced.png')}
            plan="Advanced"
            price={freq ? '$120/yr' : '$12/mo'}
            offer={freq}
            handleSelectPlan={handleSelectPlan}
            name={plan}
          />
          <Plan
            // image="require('../images/icon-arcade.png')" NOTE --> This is wrong way, below one is right
            image={require('../images/icon-pro.png')}
            plan="Pro"
            price={freq ? '$150/yr' : '$15/mo'}
            offer={freq}
            handleSelectPlan={handleSelectPlan}
            name={plan}
          />
        </View>
        <View style={styles.freq}>
          <Text style={styles.monthly}>Monthly</Text>
          <Switch
            trackColor={{false: '#16166d', true: '#00c853'}}
            thumbColor={freq ? '#f4f3f4' : '#f4f3f4'} //May be used later, right now both the colors are same
            ios_backgroundColor="#3e3e3e"
            onChange={handleFreqChange}
            value={freq}
            style={{transform: [{scaleX: 1.3}, {scaleY: 1.2}]}}
          />
          <Text style={styles.yearly}>Yearly</Text>
        </View>
      </View>
      <GoBack back="YourInfo" selectGoBack={selectYourInfo} />
      <NextStep
        next={plan === '' ? 'SelectPlan' : 'AddOns'}
        selectNextStep={plan ? selectAddOns : selectSelectPlan}
      />
    </SafeAreaView>
  );
};

export default SelectPlan;

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
    marginRight: 20,
  },
  plans: {
    marginTop: 15,
  },
  freq: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e2dede63',
    // backgroundColor: '#f2f3f4',
    padding: 12,
    marginTop: 15,
    paddingHorizontal: 60,
  },
  monthly: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
    marginRight: 25,
  },
  yearly: {
    color: '#323232',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 25,
  },
  toggle: {
    width: 10,
  },
});
