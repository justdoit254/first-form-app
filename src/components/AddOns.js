import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Background from './Background';
import {SafeAreaView} from 'react-native-safe-area-context';
import GoBack from './GoBack';
import NextStep from './NextStep';
import Extra from './Extra';
import {useDispatch, useSelector} from 'react-redux';
import {
  changeCustomizableProfile,
  changeLargeStorage,
  changeOnlineServices,
  styleYourInfo,
  styleSelectPlan,
  styleAddOns,
  styleSummary,
} from '../store';

const AddOns = () => {
  const dispatch = useDispatch();
  const {onlineServices, largeStorage, customizableProfile, freq} = useSelector(
    state => {
      return {
        onlineServices: state.addOns.onlineServices,
        largeStorage: state.addOns.largeStorage,
        customizableProfile: state.addOns.customizableProfile,
        freq: state.selectPlan.freq,
      };
    },
  );

  const selectSummary = () => {
    dispatch(styleYourInfo(false));
    dispatch(styleSelectPlan(false));
    dispatch(styleAddOns(false));
    dispatch(styleSummary(true));
  };
  const selectSelectPlan = () => {
    dispatch(styleYourInfo(false));
    dispatch(styleSelectPlan(true));
    dispatch(styleAddOns(false));
    dispatch(styleSummary(false));
  };

  const handleOnlineServices = payload => {
    dispatch(changeOnlineServices(payload));
  };
  const handleLargeStorage = payload => {
    dispatch(changeLargeStorage(payload));
  };
  const handleCustomizableProfile = payload => {
    dispatch(changeCustomizableProfile(payload));
  };
  return (
    <SafeAreaView style={{backgroundColor: '#cffaff', height: '87%'}}>
      <Background />
      <View style={styles.container}>
        <Text style={styles.heading}>Pick add-ons</Text>
        <Text style={styles.info}>
          Add-ons help enhance your gaming experience.
        </Text>
        <View style={styles.add_ons}>
          <Extra
            service="Online Services"
            info="Access to multiplayer games"
            price={freq ? '$10/yr' : '$1/mo'}
            handleAddOns={handleOnlineServices}
            status={onlineServices}
            id="1"
          />
          <Extra
            service="Larger storage"
            info="Extra 1TB of cloud save          "
            price={freq ? '$20/yr' : '$2/mo'}
            handleAddOns={handleLargeStorage}
            status={largeStorage}
            id="2"
          />
          <Extra
            service="Customizable profile"
            info="Custom theme on your profile"
            price={freq ? '$20/yr' : '$2/mo'}
            handleAddOns={handleCustomizableProfile}
            status={customizableProfile}
            id="3"
          />
        </View>
      </View>
      <GoBack back="SelectPlan" selectGoBack={selectSelectPlan} />
      <NextStep next="Summary" selectNextStep={selectSummary} />
    </SafeAreaView>
  );
};

export default AddOns;

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
  add_ons: {
    marginTop: 15,
  },
});
