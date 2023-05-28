import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Image } from "react-native";
import { theme } from "../theme";
import {
  CalendarDaysIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { MapPinIcon } from "react-native-heroicons/solid";

export default function HomeScreen() {
  const [showSearch, setShowSearch] = useState(false);
  const [location, setLocation] = useState([1, 2, 3]);

  const handleLocation = (loc) => {
    console.log(loc);
  };
  return (
    <View className='flex-1 relative'>
      <StatusBar style='light' />
      <Image
        blurRadius={70}
        source={require("../assets/images/bg.png")}
        className='h-full w-full absolute'
      />
      <SafeAreaView className='flex flex-1'>
        {/* Search Section  */}

        <View style={{ height: "7%" }} className='mx-4 mt-10 relative z-50'>
          <View
            className='flex-row items-center justify-end rounded-full'
            style={{
              backgroundColor: showSearch ? theme.bgWhite(0.2) : "transparent",
            }}
          >
            {showSearch ? (
              <TextInput
                placeholder='Search City'
                placeholderTextColor={"lightgrey"}
                className='pl-6 h-10 flex-1 text-base text-white'
              />
            ) : null}

            <TouchableOpacity
              onPress={() => setShowSearch(!showSearch)}
              style={{ backgroundColor: theme.bgWhite(0.3) }}
              className='rounded-full p-3 m-1'
            >
              <MagnifyingGlassIcon size='20' color='white' />
            </TouchableOpacity>
          </View>
          {location.length > 0 && showSearch ? (
            <View className='absolute w-full bg-gray-300 top-16 rounded-3xl '>
              {location.map((loc, index) => {
                let showBorder = index + 1 !== location.length;
                let borderClass = showBorder
                  ? "border-b-2 border-b-gray-400"
                  : "";
                return (
                  <TouchableOpacity
                    onPress={() => handleLocation(loc)}
                    key={index}
                    className={
                      "flex-row items-center border-0 p-3 px-4 mb-1 " +
                      borderClass
                    }
                  >
                    <MapPinIcon size={20} color='gray' />
                    <Text className='text-black text-lg ml-2'>
                      London, UnitedKindom
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          ) : null}
        </View>
        {/* forcast Section */}
        <View className='mx-4 justify-around flex-1 flex mb-2'>
          {/* Location */}
          <Text className='text-white text-2xl text-center font-bold'>
            London,
            <Text className='text-gray-300 text-lg font-semibold'>
              United Kindom
            </Text>
          </Text>
          {/* Weather Image  */}
          <View className='flex-row justify-center'>
            <Image
              source={require("../assets/images/partlycloudy.png")}
              className='w-52 h-52'
            />
          </View>
          {/* Degree Celcius */}
          <View className='space-y-2 mb-3'>
            <Text className='text-white text-6xl ml-5 text-center font-bold'>
              23&deg;C
            </Text>
            <Text className='text-white text-xl text-center tracking-widest'>
              Partly Cloudy
            </Text>
          </View>
          {/* Other Stats */}
          <View className='flex-row justify-between mx-4'>
            <View className='flex-row space-x-2 items-center'>
              <Image
                source={require("../assets/icons/wind.png")}
                className='h-6 w-6'
              />
              <Text className='text-white text-base font-semibold'>
                4.5km/h
              </Text>
            </View>
            <View className='flex-row space-x-2 items-center'>
              <Image
                source={require("../assets/icons/drop.png")}
                className='h-6 w-6'
              />
              <Text className='text-white text-base font-semibold'>23%</Text>
            </View>
            <View className='flex-row space-x-2 items-center'>
              <Image
                source={require("../assets/icons/sun.png")}
                className='h-6 w-6'
              />
              <Text className='text-white text-base font-semibold'>
                6:05 AM
              </Text>
            </View>
          </View>
        </View>
        {/* Forecast Section  */}
        <View className='mb-2 space-y-3'>
          <View className='flex-row items-center mx-5 space-x-2'>
            <CalendarDaysIcon size='22' color='white' />
            <Text className='text-white text-base'> Daily Forecast</Text>
          </View>
          <ScrollView
            horizontal
            contentContainerStyle={{ paddingHorizontal: 15 }}
            showsHorizontalScrollIndicator={false}
          >
            <View
              className='flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4'
              style={{ backgroundColor: theme.bgWhite(0.15) }}
            >
              <Image
                source={require("../assets/images/heavyrain.png")}
                className='h-11 w-11'
              />
              <Text className='text-white'>Monday</Text>
              <Text className='text-white text-xl font-semibold'>13&deg;C</Text>
            </View>
            <View
              className='flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4'
              style={{ backgroundColor: theme.bgWhite(0.15) }}
            >
              <Image
                source={require("../assets/images/heavyrain.png")}
                className='h-11 w-11'
              />
              <Text className='text-white'>Tuesday</Text>
              <Text className='text-white text-xl font-semibold'>13&deg;C</Text>
            </View>
            <View
              className='flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4'
              style={{ backgroundColor: theme.bgWhite(0.15) }}
            >
              <Image
                source={require("../assets/images/heavyrain.png")}
                className='h-11 w-11'
              />
              <Text className='text-white'>Wednesday</Text>
              <Text className='text-white text-xl font-semibold'>13&deg;C</Text>
            </View>
            <View
              className='flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4'
              style={{ backgroundColor: theme.bgWhite(0.15) }}
            >
              <Image
                source={require("../assets/images/heavyrain.png")}
                className='h-11 w-11'
              />
              <Text className='text-white'>Thursday</Text>
              <Text className='text-white text-xl font-semibold'>13&deg;C</Text>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
}
