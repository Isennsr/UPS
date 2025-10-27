import { View, Text } from 'react-native';
import React from 'react';
const FanSetter = ({ fanMode, fanNumber, fanSetter }) => {
  return (
    <View className="flex flex-col">
      <Text className="flex flex-row">Fan{fanNumber}:</Text>
      <View className="flex flex-row rounded border-1 border-gray-600">
        <View
          className={`${fanMode == 1 ? 'bg-blue-500' : 'bg-white'} flex w-11 cursor-pointer flex-col px-1 text-center transition-all duration-400 ease-in-out`}
          onTouchStart={() => fanSetter(1)}>
          Auto
        </View>
        <View
          className={`${fanMode == 2 ? 'bg-green-500' : 'bg-white'} flex w-11 flex-col px-1 text-center transition-all duration-400 ease-in-out`}
          onTouchStart={() => fanSetter(2)}>
          On
        </View>
        <View
          className={`${fanMode == 3 ? 'bg-red-500' : 'bg-white'} flex w-11 flex-col px-1 text-center transition-all duration-400 ease-in-out`}
          onTouchStart={() => fanSetter(3)}>
          Off
        </View>
      </View>
    </View>
  );
};

export default FanSetter;
