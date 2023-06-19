import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, Platform , Dimensions} from 'react-native';
import { Avatar, Divider } from 'react-native-paper';

const ReviewScreen = () => {
  const [rating, setRating] = useState(0);
  const [inputHeight, setInputHeight] = useState(10);
  const [post, setPost] = useState('');

  const handleRating = (selectedRating) => {
    setRating(selectedRating);
    console.log(selectedRating)
  };
  const handlePostChange = (text) => {
    
    if (text.length <= 250) {
        setPost(text);
      }
  };
  const navigation = useNavigation()
  const adjustInputHeight = () => {
    const { height } = Dimensions.get('window');
    setInputHeight(Math.min(height * 0.2, 250)); // Adjust the 0.3 factor to fit your desired percentage of the screen
  };
  useEffect(() => {
    adjustInputHeight();
  }, [post]);

  return (
    <KeyboardAvoidingView style={styles.container}
    behavior={Platform.OS === 'ios' ? 'padding' : null}
    keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 30}
    keyboardShouldPersistTaps="handled"
    >
         <View>

<TouchableOpacity style={{flexDirection:"row", gap: 10, alignItems:"center", marginVertical: 20}} onPress={() => {
        navigation.goBack();
      }}>
        <Image source={require('../../../assets/assets/icon-button.png')} />
          <Text style={styles.title}>Write a Review</Text>
      </TouchableOpacity>

      <View
        style={{
          gap: 20,
          justifyContent:"center",
          alignItems:"center",
          marginBottom: 20,
          borderWidth: 1,
          borderBottomColor: "#E7E7E7",
          paddingVertical: 20,
          borderColor:"transparent"
        }}>
        <Avatar.Image
          size={64}
          source={require('../../../assets/assets/doctorimg.png')}
        />
        <View style={{gap: 5}}>
          <View style={{flexDirection: 'row', alignItems: 'center',justifyContent:"center", gap: 2}}>
            <Text style={{color: '#172331', fontFamily: 'Raleway-Bold'}}>
              Dr Rahul
            </Text>
            <Image source={require('../../../assets/assets/verified.png')} />
          </View>
          <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
            <Text
              style={{
                color: '#172331',
                fontSize: 12,
                fontFamily: 'Raleway-SemiBold',
              }}>
              Physiotherapist
            </Text>
            <View style={styles.dotCircle} />
            <Text
              style={{
                color: '#172331',
                fontSize: 12,
                fontFamily: 'Raleway-SemiBold',
              }}>
              24 yrs exp
            </Text>
          </View>
         
        </View>
      </View>
      <View>
      <Text style={styles.textsm}>How was your experience?</Text>
      <View style={styles.starsContainer}>
        
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity
            key={star}
            style={styles.star}
            onPress={() => handleRating(star)}
          >
            <Image
              source={
                star <= rating
                  ? require('../../../assets/assets/starfill.png')
                  : require('../../../assets/assets/starempty.png')
              }
              style={styles.starImage}
            />
          </TouchableOpacity>
        ))}
      </View>
      </View>
      <View style={{flexDirection:"row", justifyContent:"space-between"}}>
        <Text style={styles.textsm}>Write a comment</Text>
        <Text>Max 250 words</Text>
      </View>
      <View>
      <TextInput
        style={[styles.postInput, { height: inputHeight }]}
        placeholder="Write your post..."
        onChangeText={handlePostChange}
        value={post}
        multiline={true}
      />
      </View>
      </View>
      <View style={{ width:"100%", alignSelf: 'flex-end' }} >
        <TouchableOpacity onPress={() => {
        navigation.navigate("DoctorDetail");
      }}>
          <View style={styles.button}>
            <Text style={{fontSize:16, color:"#fff", fontFamily:"PlusJakartaSans-Bold"}}>Submit Review</Text>
          </View>
        </TouchableOpacity>
      </View>
      
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: "#fff",
    padding: 20
  },
  title: {
    fontSize: 16,
    fontFamily:"Raleway-SemiBold",
    color:"#172331",
  },
  textsm:{
    color:"#172331",
    fontSize:14,
    fontFamily:"Raleway-Bold",
    marginBottom: 10
  },
  textmedium:{
    fontFamily:"Ralewat-Medium",
    fontSize:12,
    color: "#172331"
  },
  starsContainer: {
    flexDirection: 'row',
    marginVertical: 15
  },
  postInput:{
    color:"#172331",
    fontFamily:"Raleway-Medium",
    fontSize: 14,
    borderColor:"#E9ECF2",
    borderWidth: 1,
    borderRadius: 8
  },
  star: {
    marginHorizontal: 5,
  },
  starImage: {
    width: 24,
    height: 24,
  },
  submitButton: {
    marginTop: 20,
    backgroundColor: 'yellow',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  submitButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
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
    alignSelf: 'flex-end',
  },
});

export default ReviewScreen;