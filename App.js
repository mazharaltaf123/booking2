import 'react-native-gesture-handler';
import * as React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  Platform, NativeModules
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import SplashScreen from './src/screens/SplashScreen';
import Intro from './src/screens/Intro';
import MobileAuthentication from './src/screens/MobileAuthentication';
import OTPScreen from './src/screens/OTPVerify';
import AccountScreen from './src/screens/CreateAccount';
import HomePage from './src/screens/HomePage';
import CustomTabNavigator from './src/components/NavigationTab';
import Specialist from './src/screens/SpecialistList';
import DoctorBooking from './src/screens/DoctorBooking';
import DoctorDetail from './src/screens/DoctorDetail';
import AmountPay from './src/screens/AmountPay';
import BookingDone from './src/screens/BookingDone';
import MyProfile from './src/screens/MyProfile';
import Schedule from './src/screens/Appointment/Appointment';
import ReviewScreen from './src/screens/Appointment/Review/ReviewScreen';
import DoctorLogin from './src/screens/Auth/DoctorLogin';
import DoctorHomePage from './src/screens/Doctor/HomePage';
import Availibility from './src/screens/Doctor/Availibility';
import MyAvailability from './src/screens/Doctor/Availibility/MyAvailability';
import TotalVisits from './src/screens/Doctor/Visits';
import VisitDetails from './src/screens/Doctor/Visits/VisitDetails';
import { Provider } from 'react-redux';
import store from './src/screens/Redux/store';
import { useSelector } from 'react-redux';
import MyReviews from './src/screens/Doctor/Reviews';


function App(){
  const Stack = createStackNavigator();
  const { StatusBarManager } = NativeModules;
  return (
    <Provider store={store}>
    <NavigationContainer >
      <Stack.Navigator screenOptions={{
    headerShown: false
  }} initialRouteName="MyReviews">
    <Stack.Screen  name="Home" component={Home} />
    <Stack.Screen  name="DoctorLogin" component={DoctorLogin} />
    <Stack.Screen  name="DoctorHome" component={DoctorHomePage} />
    <Stack.Screen  name="Availibility" component={Availibility} />
    <Stack.Screen  name="visits" component={TotalVisits} />
    <Stack.Screen  name="MyReviews" component={MyReviews} />
    <Stack.Screen  name="visitsDetails" component={VisitDetails} />
    <Stack.Screen  name="MyAvailability" component={MyAvailability} />
    <Stack.Screen  name="SplashScreen" component={SplashScreen} />
    <Stack.Screen  name="Intro" component={Intro} />
    <Stack.Screen  name="Authentication" component={MobileAuthentication} />
      <Stack.Screen  name="OTPVerify" component={OTPScreen} />
      <Stack.Screen  name="CreateAccount" component={AccountScreen} />
      <Stack.Screen  name="HomePage" component={CustomTabNavigator} />
      <Stack.Screen  name="BookingDone" component={BookingDone} />
      <Stack.Screen  name="Profile" component={MyProfile} />
      <Stack.Screen  name="Schedule" component={Schedule} />
      <Stack.Screen  name="Review" component={ReviewScreen} />
      <Stack.Screen  name="Specialist" component={DoctorBooking} />
      <Stack.Screen  name="DoctorDetail" component={DoctorDetail} />
      <Stack.Screen  name="AmountPayment" component={AmountPay} />
    </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}


export default App;
