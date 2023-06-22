import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import {
    responsiveScreenHeight,
    responsiveScreenFontSize
  } from "react-native-responsive-dimensions";

const InputField = ({handleChange, onChangeFocus, value, placeholder, keyboardType, editable, style,selectTextOnFocus, image}) => {


  return (
    <View style={[styles.inputFiedls, style]}>
    <TextInput  
     style={{fontFamily:"Raleway-Medium", fontSize:responsiveScreenFontSize(1.5),  color:"#172331"}} placeholder={placeholder} 
    onChangeText={handleChange}
    onFocus={onChangeFocus}
    value={value}
    editable={editable}
    selectTextOnFocus={selectTextOnFocus}
    // onChange={handleChange}
    secureTextEntry={false}
    keyboardType={keyboardType}/>
    {image && <View style={styles.image}>{image}</View>}
    </View>
  )
}

export default InputField

const styles = StyleSheet.create({
    inputFiedls:{
        fontFamily: "Raleway-Medium",
        backgroundColor:  "#fff",
        borderColor: "#EBEBEB",
        borderWidth: 1,
        paddingHorizontal: 4,
        marginBottom: responsiveScreenHeight(1.5),
        borderRadius: 8,
        height: responsiveScreenHeight(5.5),
        color:"#172331", 
       },
       image:{
        position:"absolute",
        right: 10,
        top: "25%",
       }
})