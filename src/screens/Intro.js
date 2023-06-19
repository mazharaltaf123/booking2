import React, {useState} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import Header from '../components/Header/index';
import Logo from '../assets/assets/logo-81.svg';
import CustomButtom from '../components/Button/index';
import {
  responsiveScreenHeight,
  responsiveScreenFontSize
} from "react-native-responsive-dimensions";

const Intro = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigation = useNavigation();

  const handleIndexChanged = index => {
    setCurrentIndex(index);
  };

  const handlePress = () => {
    console.log('pressed');
  };
  const onPress = () => {
    navigation.navigate('Authentication');
  };
  return (
    <View>
      <View style={styles.firstSection}>
        <Image
          resizeMethod={'auto'}
          style={styles.image}
          source={require('../assets/assets/bg.png')}
        />
        <View style={{padding: 20}}>
          <Header
            image={<Logo />}
            title="Skip"
            handlePress={handlePress}
            style={[styles.textBlack, styles.btn]}
          />
        </View>
        <Swiper
          loop={false}
          onIndexChanged={handleIndexChanged}
          dot={<View style={styles.dot} />}
          activeDot={<View style={styles.activeDot} />}>
          <View style={{position: 'absolute', bottom: 10, left: 30}}>
            <Text
              style={{
                fontFamily: 'Raleway-Bold',
                color: '#fff',
                fontSize: 16,
                marginBottom: 5,
              }}>
              Thousands of doctors
            </Text>
            <Text
              style={{
                fontFamily: 'Raleway-Medium',
                fontSize: 12,
                color: '#fff',
                width: '40%',
                lineHeight: 16,
              }}>
              Access thousands of doctors instantly. You can easily contact with
              the doctors and contact for your needs.
            </Text>
          </View>
        </Swiper>
        <View style={styles.dotsContainer}>
          <View style={[styles.dot, currentIndex === 0 && styles.activeDot]} />
          <View style={[styles.dot, currentIndex === 1 && styles.activeDot]} />
          <View style={[styles.dot, currentIndex === 2 && styles.activeDot]} />
        </View>
      </View>
      <View style={styles.lastSection}>
        <Text
          style={{
            color: '#172331',
            width: '70%',
            fontFamily: 'Raleway-Bold',
            fontSize: 20,
          }}>
          Get Professional Doctor at One Click
        </Text>
        <CustomButtom title="Get Started" />
        <CustomButtom
          style={[styles.btnTransparent, styles.btnPrimaryColor]}
          onPress={onPress}
          title="Doctor Login"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  firstSection: {
    height: responsiveScreenHeight(65),
    backgroundColor: '#000',
    zIndex: 1,
  },
  btnTransparent: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    marginTop: 5,
  },
  btnPrimaryColor: {
    color: '#4464D9',
    fontFamily: 'Raleway-SemiBold',
    fontSize: responsiveScreenFontSize(2),
  },
  btn: {
    backgroundColor: '#fff',
    opacity: 0.6,
    borderRadius: 20,
    padding: 10,
  },
  textBlack: {
    color: '#000',
    fontFamily: 'Raleway-SemiBold',
  },
  lastSection: {
    marginTop: 10,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  image: {
    width: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    resizeMode: 'cover',
    height: '100%',
    alignSelf: 'center',
    zIndex: -1,
  },
  dotsContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 30,
    marginBottom: 20,
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
    opacity: 1,
  },
});

export default Intro;
