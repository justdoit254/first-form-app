import {View, Text, TextInput, StyleSheet, Alert} from 'react-native';
import React from 'react';
import Background from './Background';
import {SafeAreaView} from 'react-native-safe-area-context';
import NextStep from './NextStep';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  changeName,
  changeEmail,
  changePhone,
  changeIsYourInfoValid,
  styleYourInfo,
  styleSelectPlan,
  styleAddOns,
  styleSummary,
} from '../store';

const YourInfo = () => {
  const navigation = useNavigation();
  const darkgray = 'darkgray';
  const dispatch = useDispatch();
  const {name, email, phone} = useSelector(state => {
    return {
      name: state.yourInfo.name,
      email: state.yourInfo.email,
      phone: state.yourInfo.phone,
    };
  });

  const selectSelectPlan = () => {
    dispatch(styleYourInfo(false));
    dispatch(styleSelectPlan(true));
    dispatch(styleAddOns(false));
    dispatch(styleSummary(false));
  };

  const handleNameChange = name => {
    dispatch(changeName(name));
  };
  const handleEmailChange = email => {
    dispatch(changeEmail(email));
  };
  const handlePhoneChange = phone => {
    dispatch(changePhone(phone));
  };

  const handleYourInfo = () => {
    if (name === '') {
      Alert.alert('Enter your name');
      return;
    }
    if (email === '') {
      Alert.alert('Enter the email address');
      return;
    }
    let emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Enter valid email address');
      return;
    }
    if (phone === '') {
      Alert.alert('Enter the phone number');
      return;
    }
    const phoneRegex = /^\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/;
    if (phoneRegex.test(phone) === false) {
      Alert.alert('Enter valid phone number');
      return;
    }
    navigation.navigate('SelectPlan');
    selectSelectPlan();
    return true;
  };

  return (
    <SafeAreaView style={{backgroundColor: '#cffaff', height: '87%'}}>
      <Background />
      <View style={styles.container}>
        <Text style={styles.heading}>Personal info</Text>
        <Text style={styles.info}>
          Please provide your name, email address and phone number.
        </Text>
        <View style={styles.form}>
          <View style={styles.entry}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              placeholder="e.g. Stephen King"
              placeholderTextColor={darkgray}
              style={styles.field}
              value={name}
              onChangeText={handleNameChange}
            />
          </View>
          <View style={styles.entry}>
            <Text style={styles.label}>Email Address</Text>
            <TextInput
              placeholder="e.g. stephenking@lorem.com"
              placeholderTextColor={darkgray}
              style={styles.field}
              value={email}
              onChangeText={handleEmailChange}
            />
          </View>
          <View style={styles.entry}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              placeholder="e.g. +1 234 567 890"
              placeholderTextColor={darkgray}
              style={styles.field}
              keyboardType="phone-pad"
              value={phone}
              onChangeText={handlePhoneChange}
            />
          </View>
        </View>
      </View>
      <NextStep next="YourInfo" selectNextStep={handleYourInfo} />
    </SafeAreaView>
  );
};

export default YourInfo;

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
  form: {
    marginTop: 15,
  },
  entry: {
    // borderWidth: 1,
    marginTop: 5,
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    color: 'black',
  },
  field: {
    borderWidth: 0.3,
    borderColor: 'gray',
    borderRadius: 3,
    padding: 10,
    marginTop: 3,
  },
});
