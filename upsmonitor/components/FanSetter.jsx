import { View, Text } from 'react-native';
import { useState } from 'react';
import React from 'react';
import { LoaderCircle } from 'lucide-react-native';
const FanSetter = ({ fanMode, fanNumber, endpoint }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFanMode = async (mode) => {
    const payload = {
      fan: fanNumber,
      mode: mode,
    };
    const urlEncodedBody = new URLSearchParams(payload).toString();
    try {
      setLoading(true);
      const response = await fetch(`${endpoint}/set/fan/mode`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: urlEncodedBody,
      });

      if (!response.ok) {
        throw new Error(`POST failed with status: ${response.status}`);
      }
      const result = await response.json();
      console.log(result);
      setLoading(false);
      setError(false);
    } catch (error) {
      console.error('Error during POST:', error.message);
      setLoading(false);
      setError(true);
    }
  };

  return (
    <View>
      <View className="my-1 flex flex-row items-center justify-between">
        <Text className="flex flex-row text-gray-200">Fan{fanNumber}:</Text>
        <View className="flex flex-row items-center rounded text-white">
          <View
            className={`${fanMode == 1 ? 'inset-shadow-xs inset-shadow-gray-800 bg-blue-600' : 'bg-gray-600 hover:bg-gray-500'} text-centertransition-all duration-400 flex w-12 cursor-pointer flex-col rounded-l p-1 px-1 ease-in-out`}
            onTouchStart={() => handleFanMode(1)}>
            Auto
          </View>
          <View
            className={`${fanMode == 2 ? 'inset-shadow-xs inset-shadow-gray-800 bg-green-600 shadow-inner' : 'bg-gray-600 hover:bg-gray-500'} duration-400 flex w-12 cursor-pointer flex-col p-1 px-1 text-center transition-all ease-in-out`}
            onTouchStart={() => handleFanMode(2)}>
            On
          </View>
          <View
            className={`${fanMode == 3 ? 'inset-shadow-xs inset-shadow-gray-800 bg-red-600' : 'bg-gray-600 hover:bg-gray-500'} duration-400 flex w-12 cursor-pointer flex-col rounded-r p-1 px-1 text-center transition-all ease-in-out`}
            onTouchStart={() => handleFanMode(3)}>
            Off
          </View>
          {loading ? (
            <LoaderCircle className="duration-2000 ml-1 animate-spin text-rose-300" />
          ) : (
            <View></View>
          )}
        </View>
      </View>
      {fanNumber == 1 ? <View className="my-1 border-b border-slate-700"></View> : <View></View>}
      {error ? (
        <Text className="text-xs text-red-400">Error: Could not change fan mode.</Text>
      ) : (
        <View></View>
      )}
    </View>
  );
};

export default FanSetter;
