import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoard from '../screens/OnBoard';
import Home from '../screens/Home';
import Result from '../screens/Pharmacy/Result';
import PlantUpload from '../screens/Pharmacy/PlantUpload';
import Pharmacy from '../screens/Pharmacy/Pharmacy';

import BodyTemperature from '../screens/Iot/BodyTemperature';
import BloodOxygen from '../screens/Iot/BloodOxygen';
import HeartRate from '../screens/Iot/HeartRate';
import BloodPressure from '../screens/Iot/BloodPressure';
import IotHome from '../screens/Iot/IotHome';
import Chat from '../screens/Chat/Chat';

import Details from '../screens/HealthTips/Details';
import Meal from '../screens/HealthTips/Meal';
import Ex from '../screens/HealthTips/Ex';

import {TapGestureHandler} from 'react-native-gesture-handler';

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OnBoard"
        screenOptions={{
          headerShown: TapGestureHandler,
        }}>
        <Stack.Screen
          name="Home"
          options={{headerShown: false}}
          component={Home}
        />
        <Stack.Screen
          name="OnBoard"
          options={{headerShown: false}}
          component={OnBoard}
        />
        <Stack.Screen
          name="PlantUpload"
          options={{headerShown: false}}
          component={PlantUpload}
        />
        <Stack.Screen
          name="Result"
          options={{headerShown: false}}
          component={Result}
        />
        <Stack.Screen
          name="pharmacy"
          options={{headerShown: false}}
          component={Pharmacy}
        />
        <Stack.Screen
          name="HeartRate"
          options={{headerShown: false}}
          component={HeartRate}
        />
        <Stack.Screen
          name="BodyTemperature"
          options={{headerShown: false}}
          component={BodyTemperature}
        />
        <Stack.Screen
          name="BloodPressure"
          options={{headerShown: false}}
          component={BloodPressure}
        />
        <Stack.Screen
          name="BloodOxygen"
          options={{headerShown: false}}
          component={BloodOxygen}
        />
        <Stack.Screen
          name="Chat"
          options={{headerShown: false}}
          component={Chat}
        />
        <Stack.Screen
          name="IotHome"
          options={{headerShown: false}}
          component={IotHome}
        />
        <Stack.Screen
          name="Details"
          options={{headerShown: false}}
          component={Details}
        />
        <Stack.Screen
          name="Meal"
          options={{headerShown: false}}
          component={Meal}
        />
        <Stack.Screen name="Ex" options={{headerShown: false}} component={Ex} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
