import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {COLORS,FONTS,SIZES,images,icons}from '../constants/';

const StarReview = ({rate}) => {
  var starComponents = [];
  var fullStar = Math.floor(rate)
  var noStar = Math.floor(5-rate)
  var halfStar = 5 - fullStar - noStar

  // Full Star
  for(var i =0; i < fullStar; i++){
    starComponents.push(
      <Image
        key={`full-${i}`}
        source={icons.starFull}
        resizeMode="cover"
        style={{
          width:20,
          height:20,
        }}

      />
    )
  }

  // Half Star
  for(var i =0; i < halfStar; i++){
    starComponents.push(
      <Image
        key={`full-${i}`}
        source={icons.starHalf}
        resizeMode="cover"
        style={{
          width:20,
          height:20,
        }}

      />
    )
  }

  // No Start
  for(var i =0; i < noStar; i++){
    starComponents.push(
      <Image
        key={`full-${i}`}
        source={icons.starEmpty}
        resizeMode="cover"
        style={{
          width:20,
          height:20,
        }}

      />
    )
  }


  return(
    <View style={{flexDirection:'row',alignItems:'center'}}>
      {starComponents}
      <Text style={{marginLeft:SIZES.base,color:COLORS.gray,...FONTS.h3}}>{rate}</Text>
    </View>
  )
}

const IconLabel = ({icon,label}) => {
  return (
    <View style={{alignItems:'center'}}>
      <Image
        source={icon}
        resizeMode="cover"
        style={{
          width:50,
          height:50
        }}
      />
    <Text style={{marginTop:SIZES.padding,color:COLORS.gray,...FONTS.h3}}>{label}</Text>
    </View>
  );
}

const DestinationDetail = ({navigation}) => {
  return(
    <View style={styles.container}>
      {/*Header*/}
      <View style={{flex:2}}>
        <Image
          source={images.skiVillaBanner}
          resizeMode="cover"
          style={{
            width:'100%',
            height:'80%'
          }}
        />
        <View
          style={[{
            position:'absolute',
            bottom:'1%',
            left:'5%',
            right:'5%',
            borderRadius:15,
            padding:SIZES.padding,
            backgroundColor:COLORS.white,

          },styles.shadow]}
        >
          <View style={{flexDirection:'row'}}>
            <View style={styles.shadow}>
              <Image
                source={images.skiVilla}
                resizeMode="cover"
                style={{
                  width:70,
                  height:70,
                  borderRadius:15
                }}
              />
            </View>
            <View style={{marginHorizontal:SIZES.padding,justifyContent:'space-around'}}>
              <Text style={{...FONTS.h3}}>Ski Villa</Text>
              <Text style={{color:COLORS.gray,...FONTS.body3}}>France</Text>

              <StarReview
                rate={3.5}
              />

            </View>
          </View>
          <View style={{}}>
            <Text style={{color:COLORS.gray}}>Lorem Ipsum is simply dummy text of the printing.. Lorem Ipsum has been the</Text>
          </View>
        </View>
        {/* Header Button */}
        <View
          style={{
            position:'absolute',
            top:50,
            right:20,
            left:20,
            flexDirection:'row'
          }}
        >
          <View style={{flex:1,}}>
            <TouchableOpacity
              onPress={()=>{navigation.navigate("Home")}}
            >
              <Image
                source={icons.back}
                resizeMode="cover"
                style={{
                  width:30,
                  height:30
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{flex:1,alignItems:'flex-end'}}>
            <TouchableOpacity
              onPrss={()=>{console.log("Pressed")}}
            >
              <Image
                source={icons.menu}
                resizeMode="cover"
                style={{
                  width:30,
                  height:30
                }}
              />
            </TouchableOpacity>
          </View>

        </View>
      </View>
      {/*Body*/}
      <View style={{flex:1.5}}>
        {/*Icons*/}
        <View
          style={{flexDirection:'row',marginTop:SIZES.base,paddingHorizontal:SIZES.padding * 2,justifyContent:'space-between'}}
        >
          <IconLabel
            icon={icons.villa}
            label="Villa"
          />
          <IconLabel
            icon={icons.parking}
            label="Parking"
          />
          <IconLabel
            icon={icons.wind}
            label="4 °C"
          />
        </View>
        {/*About*/}
        <View style={{marginHorizontal:SIZES.padding}}>
          <Text style={{...FONTS.h2}}>About</Text>
          <Text style={{marginTop:SIZES.radius,color:COLORS.gray,...FONTS.body3}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Text>
        </View>
      </View>
      {/*Footer*/}
      <View style={{flex:.5, paddingHorizontal:SIZES.padding}}>
        <View style={{width:'100%',height:70,borderRadius:15,backgroundColor:'#e8e3e3'}}>
          <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
            <View style={{flex:1,marginHorizontal:SIZES.padding,justifyContent:'center'}}>
              <Text style={{...FONTS.h1}}>$1000</Text>
            </View>
            <TouchableOpacity
              style={{width:130,height:'80%',marginHorizontal:SIZES.radius}}
              onPress={()=>{console.log("booked")}}
            >
              <View
                style={{flex:1,alignItems:'center',justifyContent:'center',borderRadius:10,backgroundColor:'#859dd6'}}
              >
                <Text style={{color:COLORS.white,...FONTS.h2}}>Booking</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:COLORS.white
  },
  shadow:{
    shadowColor:'#000',
    shadowOffset:{
      width:0,
      height:2
    },
    shadowOpacity:0.35,
    shadowRadius:3.84,
    elevation:5,
  }
});

export default DestinationDetail;
