import { View, Text } from 'react-native';
import React from 'react';
const FanSetter = ({ fanMode, fanNumber, fanSetter, endpoint }) => {
  const handleFanMode = async (mode) => {
    const payloadIndex = 'fan' + fanNumber + 'Mode';
    const payload = {
      [payloadIndex]: mode,
    };
    const urlEncodedBody = new URLSearchParams(payload).toString();
    try {
      const response = await fetch(`${endpoint}/set/fan/mode`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: urlEncodedBody,
      });

      if (!response.ok) {
        throw new Error(`POST failed with status: ${response.status}`);
        console.error('API Error Response:', errorText);
        throw new Error(`POST failed with status: ${response.status}`);
      }

      // The result will be the object you sent, plus the new 'id'
      const result = await response.json();
      console.log('Successfully Posted:', result);
      fanSetter(mode);
    } catch (error) {
      console.error('Error during POST:', error.message);
    }
  };

  return (
    <View className="flex flex-col">
      <Text className="flex flex-row">Fan{fanNumber}:</Text>
      <View className="flex flex-row rounded border-1 border-gray-600">
        <View
          className={`${fanMode == 1 ? 'bg-blue-500' : 'bg-white'} flex w-11 cursor-pointer flex-col px-1 text-center transition-all duration-400 ease-in-out`}
          onTouchStart={() => handleFanMode(1)}>
          Auto
        </View>
        <View
          className={`${fanMode == 2 ? 'bg-green-500' : 'bg-white'} flex w-11 flex-col px-1 text-center transition-all duration-400 ease-in-out`}
          onTouchStart={() => handleFanMode(2)}>
          On
        </View>
        <View
          className={`${fanMode == 3 ? 'bg-red-500' : 'bg-white'} flex w-11 flex-col px-1 text-center transition-all duration-400 ease-in-out`}
          onTouchStart={() => handleFanMode(3)}>
          Off
        </View>
      </View>
    </View>
  );
};

export default FanSetter;
