import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Pressable,
  Alert,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  styleYourInfo,
  styleSelectPlan,
  styleAddOns,
  styleSummary,
} from '../store';
// import SVGImg from '../images/bg-sidebar-mobile.svg';

const Background = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {yourInfo, selectPlan, addOns, summary, plan, name, email, phone} =
    useSelector(state => {
      return {
        yourInfo: state.sideBar.yourInfo,
        selectPlan: state.sideBar.selectPlan,
        addOns: state.sideBar.addOns,
        summary: state.sideBar.summary,
        plan: state.selectPlan.plan,
        name: state.yourInfo.name,
        email: state.yourInfo.email,
        phone: state.yourInfo.phone,
      };
    });
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
  const selectAddOns = () => {
    dispatch(styleYourInfo(false));
    dispatch(styleSelectPlan(false));
    dispatch(styleAddOns(true));
    dispatch(styleSummary(false));
  };
  const selectSummary = () => {
    dispatch(styleYourInfo(false));
    dispatch(styleSelectPlan(false));
    dispatch(styleAddOns(false));
    dispatch(styleSummary(true));
  };
  return (
    <View>
      {/* <SVGImg /> */}
      {/* <Image source={SVGImg} style={styles.image} /> */}

      <ImageBackground
        source={require('../images/bg-sidebar-mobile.png')}
        style={styles.image}>
        <View style={styles.selectors}>
          <Pressable
            style={[
              styles.numbers,
              yourInfo ? styles.selectedNumbers : styles.unSelectedNumbers,
            ]}
            onPress={() => {
              navigation.navigate('YourInfo');
              selectYourInfo();
            }}>
            <Text
              style={[
                styles.number,
                yourInfo ? styles.selectedNumber : styles.unSelectedNumber,
              ]}>
              1
            </Text>
          </Pressable>
          <Pressable
            style={[
              styles.numbers,
              selectPlan ? styles.selectedNumbers : styles.unSelectedNumbers,
            ]}
            onPress={() => {
              // navigation.navigate('SelectPlan');
              // selectSelectPlan();
              handleYourInfo();
            }}>
            <Text
              style={[
                styles.number,
                selectPlan ? styles.selectedNumber : styles.unSelectedNumber,
              ]}>
              2
            </Text>
          </Pressable>
          <Pressable
            style={[
              styles.numbers,
              addOns ? styles.selectedNumbers : styles.unSelectedNumbers,
            ]}
            onPress={() => {
              navigation.navigate(plan ? 'AddOns' : 'SelectPlan');
              {
                plan ? selectAddOns() : Alert.alert('Please select a plan');
              }
            }}>
            <Text
              style={[
                styles.number,
                addOns ? styles.selectedNumber : styles.unSelectedNumber,
              ]}>
              3
            </Text>
          </Pressable>
          <Pressable
            style={[
              styles.numbers,
              summary ? styles.selectedNumbers : styles.unSelectedNumbers,
            ]}
            onPress={() => {
              navigation.navigate('Summary');
              selectSummary();
            }}>
            <Text
              style={[
                styles.number,
                summary ? styles.selectedNumber : styles.unSelectedNumber,
              ]}>
              4
            </Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Background;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 425,
    height: 200,
  },
  selectors: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 35,
    marginLeft: 100,
    width: '45%',
  },
  numbers: {
    borderRadius: 100000000,
    paddingVertical: 7,
    paddingHorizontal: 14,
    marginRight: 15,
  },
  unSelectedNumbers: {
    borderWidth: 1.5,
    borderStyle: 'solid',
    borderColor: 'white',
  },
  selectedNumbers: {
    backgroundColor: 'aqua',
    borderWidth: 1.5,
    borderStyle: 'solid',
    borderColor: 'aqua',
    // border: "0.1px solid aqua",
  },
  number: {
    fontSize: 18,
    fontWeight: '600',
  },
  unSelectedNumber: {
    color: 'white',
  },
  selectedNumber: {
    color: 'black',
  },
});
