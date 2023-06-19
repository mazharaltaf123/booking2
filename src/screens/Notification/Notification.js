import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import ArrowIcon from '../../assets/assets/Vector.svg'
import NotBanKing from '../../assets/assets/credit_card.svg'
import Upi from '../../assets/assets/upi.svg'
import Paytm from '../../assets/assets/paytm.svg'
import GooglePlay from '../../assets/assets/googleplay.svg'
import CreditCard from '../../assets/assets/credit.svg'
import PhonePE from '../../assets/assets/phonepe.svg'
import COD from '../../assets/assets/creditBill.svg'
import { Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


const Notification = () => {
 const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
       <Text style={styles.head}>Notification</Text>

       <View style={styles.bottomborder}>
        <Text style={styles.textsm}>Today, March 25, 2022</Text>
       </View>
      <View >
        <View style={styles.cardContainer}>
            <CreditCard/>
            <View>
            <Text style={styles.cardTitle}>Appointment Alarm</Text>
            <Text style={styles.textxs}>Your appointment will be start after 30 minutes.
Stay with app and take care.</Text>
            </View>
        </View>
        <View style={styles.cardContainer}>
            <NotBanKing/>
            <View>
            <Text style={styles.cardTitle}>Appointment Alarm</Text>
            <Text style={styles.textxs}>Your appointment will be start after 30 minutes.
Stay with app and take care.</Text>
            </View>
        </View>
        <View style={styles.cardContainer}>
            <Paytm/>
            <View>
            <Text style={styles.cardTitle}>Appointment Alarm</Text>
            <Text style={styles.textxs}>Your appointment will be start after 30 minutes.
Stay with app and take care.</Text>
            </View>
        </View>
        <View style={styles.cardContainer}>
            <Upi/>
            <View>
            <Text style={styles.cardTitle}>Appointment Alarm</Text>
            <Text style={styles.textxs}>Your appointment will be start after 30 minutes.
Stay with app and take care.</Text>
            </View>
        </View>
        <View style={styles.cardContainer}>
            <GooglePlay/>
            <View>
            <Text style={styles.cardTitle}>Appointment Alarm</Text>
            <Text style={styles.textxs}>Your appointment will be start after 30 minutes.
Stay with app and take care.</Text>
            </View>
        </View>
        <View style={styles.cardContainer}>
            <PhonePE/>
            <View>
            <Text style={styles.cardTitle}>Appointment Alarm</Text>
            <Text style={styles.textxs}>Your appointment will be start after 30 minutes.
Stay with app and take care.</Text>
            </View>
        </View>
        
        </View>
        </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 20,
    flex: 1
  },
  head:{
    color: '#172331',
    fontSize: 24,
    fontFamily: 'Raleway-SemiBold',
  },
  bottomborder:{
    borderBottomColor: "#E7E7E7",
    borderBottomWidth: 1,
    paddingVertical: 10,
    marginVertical: 10
  },
  textsm:{
  color:"#172331",
  fontFamily: "Raleway-Medium",
  fontSize: 12
  },
  textxs:{
    color: "#66708F",
    fontFamily:"Raleway-Medium",
    fontSize: 12,
  },
  cardContainer:{
    borderBottomColor:"#E7E7E7", borderWidth: 1, borderColor:"transparent",  paddingVertical:10, flexDirection:"row", alignItems:"center", gap: 15
  },
  cardTitle:{
    fontFamily: "Raleway-SemiBold",
    fontSize: 14,
    color: "#172331"
  },
  button: {
    backgroundColor: "#4464D9",
    width: "100%",
    height: 48,
    color: "#fff",
    borderRadius: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    fontFamily: "PlusJakartaSans-ExtraBold",
  },
});

export default Notification;