import { View, Text } from 'react-native';
import React from 'react';
const FanSetter = ({ fanMode, fanNumber }) => {
  return (
    <View className="flex flex-col">
      <Text className="flex flex-row">Fan{fanNumber}:</Text>
      <View className="flex flex-row rounded border-1 border-gray-600">
        <View
          className={`${fanMode == 1 ? 'bg-blue-500' : 'bg-white'} flex w-11 flex-col px-1 text-center`}>
          Auto
        </View>
        <View
          className={`${fanMode == 2 ? 'bg-green-500' : 'bg-white'} flex w-11 flex-col px-1 text-center`}>
          On
        </View>
        <View
          className={`${fanMode == 3 ? 'bg-red-500' : 'bg-white'} flex w-11 flex-col px-1 text-center`}>
          Off
        </View>
      </View>
    </View>
  );
};

export default FanSetter;
