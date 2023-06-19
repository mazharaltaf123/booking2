import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native';
import Swiper from 'react-native-swiper';

const reviews = [
  { id: 1, author: 'Samantha Payne', content: '“Lorem ipsum dolor sit amet, consectetur adipiscing venenatis.”' },
  { id: 2, author: 'Jane Smith', content: 'Excellent service!' },
  { id: 3, author: 'Mike Johnson', content: 'Highly recommended!' },
];
const CustomDot = ({ active }) => (
    <View style={[styles.dot, active && styles.activeDot]} />
  );
const ReviewComponent = () => {
  return (
    <View style={styles.container}>
        <Text style={{color:"#172331", fontFamily:"Ralewat-SemiBold", fontSize: 16, marginBottom: 20}}>Review</Text>
        <Swiper
        style={styles.wrapper}
        loop={false}
        dot={<CustomDot />}
        activeDot={<CustomDot active />}
        paginationStyle={styles.pagination}
      >
        {reviews.map((review) => (
          <View key={review.id} style={styles.slide}>
            <View style={styles.avatarContainer}>
              <Text style={styles.avatar}>{review.author.charAt(0)}</Text>
            </View>
            <View style={styles.textContainer}>
                <View style={{flexDirection:"row", gap: 20}}>
              <Text style={styles.author}>{review.author}</Text>
                <View style={{flexDirection:"row", alignItems:"center", gap: 4, }}>
                    
                    <Image source={require("../assets/assets/star.png")}/>
                    <Text style={{color:"#172331", fontFamily:"Raleway-SemiBold", fontSize: 12}}>4.1</Text>
                    </View>
                </View>
              <Text style={styles.content}>{review.content}</Text>
            </View>
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    height: 200 ,
    position: "relative"
  },
  slide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    width: 65,
    height: 65,
    borderRadius: 35,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  avatar: {
    fontSize: 20,
    color: 'white',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  author: {
    fontSize: 16,
    fontFamily:"Raleway-SemiBold",
    marginBottom: 5,
    color:"#172331"
  },
  content: {
    fontSize: 16,
    textAlign: 'left',
    color: "#172331",
    fontFamily:"Raleway-Medium"
  },
  dot: {

    backgroundColor: "#000",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  activeDot: {
    
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    width: 12,
    height: 12,
    borderRadius: 6,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },

});

export default ReviewComponent;