import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Head from '../../../components/doctor/Header'
import AddIcon from '../../../assets/assets/add.svg'
import { responsiveScreenHeight } from 'react-native-responsive-dimensions'
import Slots from '../../../components/availibility/Slots'
import { useNavigation } from '@react-navigation/native'

const Availibility = () => {
    const navigation = useNavigation()
    const handlePress = ()=>{
        navigation.navigate("MyAvailability")
    }
  return (
    <View style={styles.container}>
      <Head
      title="Schedule"
     image={<AddIcon/>}
     availabibility="Add Availabibility"
      />

      <View style={styles.my}>
        <Text style={styles.textsm}>Update your preferred working week days and time</Text>
      </View>
      <View style={styles.my}>
   <Slots
   date="Monday, Tuesday, "
   slots="2 Slots"
   handlePress={handlePress}
   />
   <Slots
   date="Wednesday"
   slots="5 Slots"
   />
   <Slots
   date="Thursday, Friday, Saturday"
   slots="4 Slots"
   />
      </View>
    </View>
  )
}

export default Availibility

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#fff",
        padding: 20
    },
    my:{
           marginTop: responsiveScreenHeight(4)
    },
    textsm:{
        color: "#000",
        fontFamily:"Raleway-Regular",
        fontSize: 12
    }
})