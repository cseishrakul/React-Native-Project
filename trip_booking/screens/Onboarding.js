import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity
} from 'react-native';
// import { LinearGradient } from "expo-linear-gradient";
import {COLORS, images, SIZES, FONTS} from '../constants';

const Onboarding = ({navigation}) => {
  return (<SafeAreaView style={styles.container}>
    <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <Image source={images.onboardingImage} resizeMode='contain' style={{
          width: '100%',
          height: '100%'
        }}/>
    </View>
    <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <View style={{
          alignItems: 'center',
          marginHorizontal: SIZES.padding
        }}>
        <Text style={{...FONTS.h2}}>Digital Ticket</Text>
        <Text style={{
              color:COLORS.gray,marginTop:SIZES.padding,textAlign:'center',...FONTS.body3
          }}
        >
          Lorem Ipsum is simply dummy text of the printing.. Lorem Ipsum has been the
        </Text>
      </View>
      <TouchableOpacity
        style={[styles.shadow,{marginTop:SIZES.padding*2,width:'70%',height:50,alignItems:'center',justifyContent:'center',backgroundColor:COLORS.primary,borderRadius:15}]}
        onPress={()=>navigation.navigate("Home")}
      >
        <Text style={{color:COLORS.white,...FONTS.h3}}>Start !</Text>

      </TouchableOpacity>
    </View>
  </SafeAreaView>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  shadow:{
    shadowColor:"#000",
    shadowOffset:{
      width:0,
      height:2
    },
    shadowOpacity:0.25,
    shadowRadius:3.84,
    elevation:5,

  }
});

export default Onboarding;
