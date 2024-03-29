import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import {COLORS,SIZES,images,icons,FONTS}from '../constants/';

const OptionItem = ({icon,bgColor,label,onPress}) => {
  return (
    <TouchableOpacity
      style={{flex:1,alignItems:'center',justifyContent:'center'}}
      onPress={onPress}
    >
      <View
        style={[styles.shadow, {width:50,height:50,alignItems:'center',justifyContent:'center',borderRadius:15,backgroundColor:'#5884ff'}]}
        colors={bgColor}
      >
        <Image
          source={icon}
          resizeMode="cover"
          style={{
            tintColor:COLORS.white,
            width:30,
            height:30
          }}
        />
      </View>
      <Text style={{marginTop:SIZES.base,color:COLORS.gray,...FONTS.body3,}}>{label}</Text>
    </TouchableOpacity>
  );
}

const Home = ({navigation}) => {
  // Dummy data
  const [destinations,setDestinations] = React.useState([
    {
      id:0,
      name:'Ski Villa',
      img:images.skiVilla
    },
    {
      id:1,
      name:'Climbing Hills',
      img:images.climbingHills
    },
    {
      id:2,
      name:'Frozen Hills',
      img:images.frozenHills
    },
    {
      id:0,
      name:'Beach',
      img:images.beach
    },
  ])

  // render
  function renderDestination(item,index){
    var destinationStyle = {}
    if(index == 0){
      destinationStyle={marginLeft:SIZES.padding}
    }

    return(
      <TouchableOpacity
        style={{justifyContent:'center',marginHorizontal:SIZES.base,...destinationStyle}}
        onPress={()=> {navigation.navigate("DestinationDetail")}}
      >
        <Image
          source={item.img}
          resizeMode="cover"
          style={{
            width:SIZES.width * 0.28,
            height:'82%',
            borderRadius:15
          }}

        />
        <Text style={{marginTop:SIZES.base/2,...FONTS.h4}}>{item.name}</Text>
      </TouchableOpacity>
    )
  }

  return(
    <View style={styles.container}>
      {/* Banner */}
      <View style={{flex:1,paddingHorizontal:SIZES.padding}}>
        <Image
          source={images.homeBanner}
          resizeMode="cover"
          style={{
            width:'100%',
            height:'90%',
            borderRadius:15,
          }}
        />
      </View>
      {/* Options */}
      <View style={{flex:1,justifyContent:'center'}}>
        <View style={{flexDirection:'row',marginTop:10,paddingHorizontal:SIZES.base}}>
          <OptionItem
            icon={icons.airplane}
            bgColor={['#46aeff','#5884ff']}
            label="Flight"
            onPress={()=>{console.log("Flight")}}
          />
          <OptionItem
            icon={icons.train}
            bgColor={['#46aeff','#ffff']}
            label="Train"
            onPress={()=>{console.log("Train")}}
          />
          <OptionItem
            icon={icons.bus}
            bgColor={['#46aeff','#ffff']}
            label="Bus"
            onPress={()=>{console.log("Bus")}}
          />
          <OptionItem
            icon={icons.taxi}
            bgColor={['#46aeff','#ffff']}
            label="Texi"
            onPress={()=>{console.log("Taxi")}}
          />
        </View>
        <View style={{flexDirection:'row',paddingHorizontal:SIZES.base}}>
          <OptionItem
            icon={icons.bed}
            bgColor={['#46aeff','#5884ff']}
            label="Hotel"
            onPress={()=>{console.log("Hotel")}}
          />
          <OptionItem
            icon={icons.eat}
            bgColor={['#46aeff','#ffff']}
            label="Eats"
            onPress={()=>{console.log("eats")}}
          />
          <OptionItem
            icon={icons.compass}
            bgColor={['#46aeff','#ffff']}
            label="Adventure"
            onPress={()=>{console.log("Adventure")}}
          />
          <OptionItem
            icon={icons.event}
            bgColor={['#46aeff','#ffff']}
            label="Event"
            onPress={()=>{console.log("Event")}}
          />

        </View>
      </View>
      {/* Destination */}
      <View style={{flex:1}}>
        <Text style={{marginTop:15,marginHorizontal:SIZES.padding,...FONTS.h3}}>Destination</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={destinations}
          keyExtractor={item=>item.id.toString()}
          renderItem={({item, index})=>renderDestination(item,index)}
        />
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
    shadowColor:"#000",
    shadowOffset:{
      width:0,
      height:2,
    },
    shadowOpacity:0.25,
    shadowRadius:3.84,
    elevation:5,
  }
});

export default Home;
