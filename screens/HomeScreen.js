import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Image } from "react-native";

export default function HomeScreen() {
  return (
    <View className='flex-1 relative'>
      <StatusBar style='light' />
      <Image
        blurRadius={70}
        source={require("../assets/images/heavyrain.png")}
        className='h-full w-full absolute bg-red-400'
      />
    </View>
  );
}
