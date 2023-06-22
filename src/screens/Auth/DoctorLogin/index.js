import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet , Image, Picker } from 'react-native';
import { Avatar, RadioButton } from 'react-native-paper';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useNavigation } from "@react-navigation/native";
import InputField from '../../../components/InputFiels';
import CustomButtom from '../../../components/Button';
import Header from '../../../components/Header';
import BackBtn from '../../../assets/assets/icon-button.svg'
import DropdownIcon from '../../../assets/assets/arrow_drop_down.svg'
import Location from '../../../assets/assets/my_location.svg'
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';

const ProgressBarWithGap = ({ totalSteps, currentStep }) => {
  return (
    <View style={styles.progressBarContainer}>
      {Array.from({ length: totalSteps }, (_, index) => (
        <View
          key={index}
          style={[
            styles.progressBarSegment,
            index < currentStep ? styles.progressBarSegmentActive : null,
            index === currentStep ? styles.progressBarSegmentCurrent : null,
          ]}
        />
      ))}
    </View>
  );
};

const DoctorLogin = () => {
    const [avatar, setAvatar] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigation = useNavigation();

  const handleImageUpload = () => {
    launchImageLibrary({ mediaType: 'photo' }, response => {
      if (!response.didCancel && !response.errorCode) {
        setAvatar(response.uri);
        
      }
    });
  };
  const handlePress= ()=>{
    navigation.goBack();
  }

  const handleCameraUpload = () => {
    launchCamera({ mediaType: 'photo' }, response => {
      if (!response.didCancel && !response.errorCode) {
        setAvatar(response.uri);
      }
    });
  };
  const [step, setStep] = useState(1);
  const totalSteps = 2;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      // Submit form data
      console.log('Form submitted');
    }
  };

  const options = ['Option 1', 'Option 2', 'Option 3'];

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const selectOption = (option) => {
    setSelectedValue(option);
    setDropdownVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={{height:responsiveScreenHeight(70)}}>
    <View style={{flexDirection:"row"}}>
      <Header
          image={<BackBtn/>}
          handlePress={handlePress}
          />
          <View style={ {textAlign:"center", alignSelf:"center", margin:"auto"}}>
          <Text style={styles.h1}>CreateAccount</Text>
          </View>
          </View>
      <ProgressBarWithGap totalSteps={totalSteps} currentStep={step - 1} />
      <Text style={styles.inputLabel}>{step === 1 ? 'Personal Detals' : 'Professional Details'}</Text>
      {/* Render form inputs based on the current step */}
      {/* ... */}
      {step === 1 &&  <View>
      <TouchableOpacity style={styles.avatarContainer} onPress={handleImageUpload}>
       
        <View onPress={handleCameraUpload}>
            <Avatar.Image size={responsiveScreenWidth(16)} source={require("../../../assets/assets/avatar.png")}/>
            <Image style={{position: "absolute", bottom:2, right:0}} source={require("../../../assets/assets/cameraIcon.png")}/>
        </View>
      </TouchableOpacity>
     
      <View>
     <Text style={styles.inputLabel}>First Name</Text>
      <InputField
        placeholder="First Name"
        value={firstName}
        handleChange={text => setFirstName(text)}
      />
      </View>
      <View>
        <Text style={styles.inputLabel}>Last Name</Text>
      <InputField
        placeholder="Last Name"
        value={lastName}
        handleChange={text => setLastName(text)}
      />
      
      </View>
      <View>
        <Text style={styles.inputLabel}>Phone No.</Text>
        <InputField
        placeholder="Last Name"
        value="+91 9540826565"
        editable={true}
        selectTextOnFocus={false}
        style={{backgroundColor:"#EBEBEB", userSelect:'none',}}
      />
      </View>
      <View>
        <Text style={styles.inputLabel}>Email</Text>
        <InputField
         placeholder="Email"
         value={email}
         handleChange={text => setEmail(text)}
         keyboardType="email-address"
        />
     
      </View>
      <View style={styles.genderContainer}>
        
        <Text style={styles.inputLabel}>Gender:</Text>
        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
        <View style={styles.radioContainer}>
          <RadioButton
            value="male"
            color={'#4464D9'}
            status={gender === 'male' ? 'checked' : 'unchecked'}
            onPress={() => setGender('male')}
          />
          <Text style={{color: gender==="male" ? "#172331" : "#aaa", fontFamily:"Raleway-Bold" , fontSize: 14}}>Male</Text>
        </View>
        <View style={styles.radioContainer}>
          <RadioButton
          color={'#4464D9'}
            value="female"
            status={gender === 'female' ? 'checked' : 'unchecked'}
            onPress={() => setGender('female')}
          />
          <Text style={{color: gender==="female" ? "#172331" : "#aaa", fontFamily:"Raleway-Bold" , fontSize: 14}}>Female</Text>
        </View>
        <View style={styles.radioContainer}>
          <RadioButton
          color={'#4464D9'}
            value="other"
            status={gender === 'other' ? 'checked' : 'unchecked'}
            onPress={() => setGender('other')}
          />
          <Text style={{color: gender==="other" ? "#172331" : "#aaa", fontFamily:"Raleway-Bold" , fontSize: 14}}>Other</Text>
        </View>
       
        
        </View>
        
      </View>
      </View> }
      {step ===2 && <View>
          <Text style={styles.inputLabel}>Profession Type</Text>
        <View  style={styles.inputSelect}>
        <TouchableOpacity onPress={toggleDropdown} >
        <Text  style={{fontFamily:"Raleway-Medium",   color:"#172331"}}>{selectedValue || 'Select an option'}</Text>
       <DropdownIcon style={{position:"absolute", right: 5, top:"30%"}}/>
      </TouchableOpacity> 
      {dropdownVisible && (
        <View style={{position:"absolute", right:0, bottom:0, borderColor: "#EBEBEB"}}>
          {options.map((option, index) => (
            <TouchableOpacity key={index} onPress={() => selectOption(option)}>
              <Text style={{fontFamily:"Raleway-Medium", fontSize:responsiveScreenFontSize(1.5),  color:"#172331"}}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      </View>
      <View>
        <Text style={styles.inputLabel}>Where you work (Hospital/ Clinic)</Text>
        <InputField
         placeholder="Name"
         value={email}
         handleChange={text => setEmail(text)}
         keyboardType="default"
        />
     
      </View>
      <View>
        <Text style={styles.inputLabel}>Experience (yrs)</Text>
        <InputField
         placeholder="0"
         value={email}
         handleChange={text => setEmail(text)}
         keyboardType="default"
        />
     
      </View>
      <View>
        <Text style={styles.inputLabel}>Fee (in INR)</Text>
        <InputField
         placeholder="0"
         value={email}
         handleChange={text => setEmail(text)}
         keyboardType="default"
        />
     
      </View>
      <View>
        <Text style={styles.inputLabel}>My Address</Text>
        <InputField
         placeholder="Address"
         value={email}
         handleChange={text => setEmail(text)}
         keyboardType="default"
         image={<Location/>}
        />
     
      </View>
      
        </View>}
      </View>
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>{step < totalSteps ? 'Next' : 'Submit'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:"#fff"
  },
  progressBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  progressBarSegment: {
    flex: 1,
    height: 5,
    backgroundColor: '#ccc',
    marginRight: 5,
    marginTop: 10
  },
  progressBarSegmentActive: {
    backgroundColor: '#4464D9',
  },
  progressBarSegmentCurrent: {
    backgroundColor: '#4464D9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  // button: {
  //   backgroundColor: '#4464D9',
  //   paddingVertical: 10,
  //   paddingHorizontal: 20,
  //   borderRadius: 5,
  //   marginTop: responsiveScreenHeight(12),
  // },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  h1: {
    fontFamily: "Raleway-SemiBold",
    fontSize: 20,
    color: "#172331",
    marginHorizontal: responsiveScreenWidth(15)
  },
  avatarContainer: {
    alignItems: 'flex-start',
    marginBottom: 20,
    marginTop: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  avatarText: {
    fontSize: 16,
    marginTop: 10,
  },
  cameraButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center',
  },
  cameraButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputLabel:{
   fontFamily: "Raleway-SemiBold",
   fontSize: 14,
   color: "#172331",
   marginBottom: responsiveScreenHeight(0.5)

  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#EBEBEB',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  genderContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  genderLabel: {
    marginRight: 10,
    fontSize: 16,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  radioLabel: {
    fontSize: 16,
    fontFamily: "Raleway-SemiBold",
    color:"#172331"
  },
  button: {
    backgroundColor: "#4464D9",
    width: "100%",
    height: responsiveScreenHeight(6),
    color: "#fff",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    fontFamily: "PlusJakartaSans-ExtraBold",
    marginTop: responsiveScreenHeight(10)
  },
  colorWhite: {
    fontFamily: "PlusJakartaSans-ExtraBold",
    color: "#fff",
    textAlign: "center",
  },
  inputSelect:{
    fontFamily: "Raleway-Medium",
        backgroundColor:  "#fff",
        borderColor: "#EBEBEB",
        borderWidth: 1,
        paddingHorizontal: 4,
        marginBottom: responsiveScreenHeight(1.5),
        borderRadius: 8,
        height: responsiveScreenHeight(5.5),
        color:"#172331", 
        alignContent:"center",
        justifyContent:"center"
  }
});

export default DoctorLogin;