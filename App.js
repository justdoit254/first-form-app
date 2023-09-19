import {View, StyleSheet} from 'react-native';
import React from 'react';
import YourInfo from './src/components/YourInfo';
import SelectPlan from './src/components/SelectPlan';
import AddOns from './src/components/AddOns';
import Summary from './src/components/Summary';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="YourInfo">
        <Stack.Screen
          name="YourInfo"
          component={YourInfo}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SelectPlan"
          component={SelectPlan}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddOns"
          component={AddOns}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Summary"
          component={Summary}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.bg}>
    //   <YourInfo />
    //   {/* <SelectPlan /> */}
    //   {/* <AddOns /> */}
    //   {/* <Summary /> */}
    // </View>
  );
};

export default App;

const styles = StyleSheet.create({
  bg: {
    backgroundColor: 'blue',
    // backgroundColor: '#cffaff',
    height: '87%',
  },
});
