import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
} from 'react-native';
import {
  responsiveScreenHeight,
  responsiveScreenFontSize
} from "react-native-responsive-dimensions";
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header/index'
import CustomButtom from '../components/Button'
import Logo from '../assets/assets/logo-81.svg'
const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigation = useNavigation();

  const handleIndexChanged = index => {
    setCurrentIndex(index);
  };


  const handlePress = ()=>{
     navigation.navigate("Intro")
  }
  return (
    <View style={styles.container}>
      
      <View
       style={styles.firstSection
       }>
      <Header
      handlePress={handlePress}
      title="Continue as a Doctor"
      image={<Logo/>}
      />
        <Swiper
        loop={false}
        onIndexChanged={handleIndexChanged}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
        >
        <View>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            height: responsiveScreenHeight(42)
          }}>
          <Image   source={require('../assets/assets/illustration.png')}  />
        </View>

        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto',
            height: responsiveScreenHeight(14)
          }}>
          <Text style={{ fontFamily: "Raleway-SemiBold", color: "#fff", fontSize: responsiveScreenFontSize(2), marginBottom: 5}}>Thousands of doctors</Text>
          <Text style={{fontFamily: "Raleway-Medium",  fontSize: responsiveScreenFontSize(1.4), color: "#fff", textAlign:"center", alignItems:"center", width:"60%", lineHeight: 16}}>
            Access thousands of doctors instantly. </Text>
            <Text style={{fontFamily: "Raleway-Medium", marginBottom: 20, fontSize: responsiveScreenFontSize(1.4), color: "#fff", textAlign:"center", alignItems:"center" , width:"75%", lineHeight: 16}}>
            You can easily contact with
            the doctors and contact for your needs.
          </Text>
        </View>
        </View>
        </Swiper>
        <View style={styles.dotsContainer}>
        <View style={[styles.dot, currentIndex === 0 && styles.activeDot]} />
        <View style={[styles.dot, currentIndex === 1 && styles.activeDot]} />
        <View style={[styles.dot, currentIndex === 2 && styles.activeDot]} />
      </View>
        
      </View>
      
      <View style={styles.lastSection}> 
        <Text style={{color: "#172331", width: "70%", fontFamily:"Raleway-Bold" , fontSize: 20, }}>Get Professional Doctor at One Click</Text>
        <CustomButtom
        title="Get Started"
        />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  firstSection: {
    backgroundColor: '#4464D9',
    height: responsiveScreenHeight(65),
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor:"linear-gradient(180deg, rgba(0, 0, 0, 0.6) 1.04%, rgba(0, 0, 0, 0) 27.93%, rgba(0, 0, 0, 0.8) 100%)"
  },
 
  lastSection:{
    marginTop: 20,
    justifyContent: "center",
    paddingHorizontal : 30
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginHorizontal: 5,
    opacity: 0.4,
  },
  activeDot: {
    backgroundColor: '#fff',
    opacity: 1
  },
});

export default Home;
