import { StyleSheet, Text, View } from 'react-native'
import React,  { useState } from 'react'
import BackBtn from '../../../assets/assets/icon-button.svg'
import Header from '../../../components/Header'
import { responsiveScreenHeight, responsiveScreenWidth, responsiveScreenFontSize } from 'react-native-responsive-dimensions'
import { Divider, TextInput } from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';
import CustomButtom from '../../../components/Button'

const MyAvailability = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

  return (
    <View style={styles.container}>
      <View style={{flexDirection:"row"}}>
      <Header
          image={<BackBtn/>}
          />
          <View style={ {textAlign:"center", alignSelf:"center", margin:"auto"}}>
          <Text style={styles.h1}>CreateAccount</Text>
          </View>
          </View>

          <View style={styles.my}>
            <Text style={styles.header}>Update your preferred working week days and time</Text>
          </View>
          <View style={styles.my4}>
          <TextInput
      mode="outlined"
      label="Week days"
      placeholder="This Week"
      right={<TextInput.Affix text="" />}
    />
          </View>
          <View style={styles.my4}>
            <View style={{flexDirection:"row", alignItems:"center", gap:10}}>
          <CheckBox
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(!toggleCheckBox)}
  />
  <Text style={styles.chechboxLabel}>Sunday</Text>
  </View>
  <Text style={styles.unavalable}>Unavailable</Text>
          </View>
          <View style={styles.my4}>
            <View style={{flexDirection:"row", alignItems:"center", gap:10}}>
          <CheckBox
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
  />
  <Text style={styles.chechboxLabel}>Monday</Text>
  </View>
  <View style={[{flexDirection:"row", gap: 10, marginTop: responsiveScreenHeight(1.5), width:responsiveScreenWidth(60), flexWrap: 'wrap'}]}>
    <View style={styles.timingcard}> 
        <Text style={styles.timingcardTxt}>9:00am</Text>
    </View>
    <View style={styles.line}/>
    <View style={styles.timingcard}>
        <Text style={styles.timingcardTxt}>9:30am</Text>
    </View>
    <View style={styles.timingcard}> 
        <Text style={styles.timingcardTxt}>9:00am</Text>
    </View>
    <View style={styles.line}/>
    <View style={styles.timingcard}>
        <Text style={styles.timingcardTxt}>9:30am</Text>
    </View>
  </View>
          </View>
          <View style={styles.my4}>
            <View style={{flexDirection:"row", alignItems:"center", gap:10}}>
          <CheckBox
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
  />
  <Text style={styles.chechboxLabel}>Tuesday</Text>
  </View>
  <View style={[{flexDirection:"row", gap: 10, marginTop: responsiveScreenHeight(1.5), width:responsiveScreenWidth(60), flexWrap: 'wrap'}]}>
    <View style={styles.timingcard}> 
        <Text style={styles.timingcardTxt}>9:00am</Text>
    </View>
    <View style={styles.line}/>
    <View style={styles.timingcard}>
        <Text style={styles.timingcardTxt}>9:30am</Text>
    </View>
    <View style={styles.timingcard}> 
        <Text style={styles.timingcardTxt}>9:00am</Text>
    </View>
    <View style={styles.line}/>
    <View style={styles.timingcard}>
        <Text style={styles.timingcardTxt}>9:30am</Text>
    </View>
  </View>
          </View>

          <View
          style={{
            position:"absolute",
            bottom : 10,
            width: '100%',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#4464D9',
            // padding: 10,
            height: responsiveScreenHeight(6.5),
            left: 20
          }}>
            
            <Text style={{fontSize: responsiveScreenFontSize(2),
    color: '#fff',
    fontFamily: 'PlusJakartaSans-Bold',}}>Save my availability </Text>
          </View>
    </View>
  )
}

export default MyAvailability

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor:"#fff",
        padding: 20
    },
    h1: {
        fontFamily: "Raleway-SemiBold",
        fontSize: 20,
        color: "#172331",
        marginHorizontal: responsiveScreenWidth(15)
      },
      my:{
        marginTop: responsiveScreenHeight(3)
      },
      my4:{
              paddingVertical:responsiveScreenHeight(3),
              borderBottomColor: "#F5F5F5",
              borderBottomWidth: 1,
      },
      header:{
        fontFamily:"Raleway-Regular",
        fontSize: 12,
        color:"#172331"
      },
      input:{
        borderColor: "#D8D5D3"
      },
      chechboxLabel:{
        color: "#172331",
        fontFamily: "Raleway-SemiBold",
        fontSize: 16
      },
      unavalable:{
        fontFamily:"Raleway-Regular",
        fontSize: 14,
        color: "#172331",
        marginTop: responsiveScreenHeight(1.5),
        lineHeight: 20
      },
      timingcard:{
        borderColor:"#D8D5D3",
        borderWidth:1,
        borderRadius:8,
        width:responsiveScreenWidth(20),
        height: responsiveScreenHeight(6),
        alignItems:"center",
        justifyContent:"center"
      },
      timingcardTxt:{
        fontFamily:"Raleway-Medium",
        fontSize: 10,
        color:"#172331"
      },
      line:{
        width: 5
      }
})