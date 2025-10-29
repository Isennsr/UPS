import { View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import React from 'react';
import { LoaderCircle } from 'lucide-react';
const FanSetter = ({ fanMode, fanNumber, endpoint }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFanMode = async (mode) => {
    const payloadIndex = 'fan' + fanNumber + 'Mode';
    const payload = {
      [payloadIndex]: mode,
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
        console.error('API Error Response:', errorText);
        throw new Error(`POST failed with status: ${response.status}`);
      }
      // The result will be the object you sent, plus the new 'id'
      const result = await response.json();
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
            className={`${fanMode == 1 ? 'bg-blue-600 inset-shadow-xs inset-shadow-gray-800' : 'bg-gray-600 hover:bg-gray-500'} text-centertransition-all flex w-12 cursor-pointer flex-col rounded-l p-1 px-1 duration-400 ease-in-out`}
            onTouchStart={() => handleFanMode(1)}>
            Auto
          </View>
          <View
            className={`${fanMode == 2 ? 'bg-green-600 shadow-inner inset-shadow-xs inset-shadow-gray-800' : 'bg-gray-600 hover:bg-gray-500'} flex w-12 cursor-pointer flex-col p-1 px-1 text-center transition-all duration-400 ease-in-out`}
            onTouchStart={() => handleFanMode(2)}>
            On
          </View>
          <View
            className={`${fanMode == 3 ? 'bg-red-600 inset-shadow-xs inset-shadow-gray-800' : 'bg-gray-600 hover:bg-gray-500'} flex w-12 cursor-pointer flex-col rounded-r p-1 px-1 text-center transition-all duration-400 ease-in-out`}
            onTouchStart={() => handleFanMode(3)}>
            Off
          </View>
          {loading ? (
            <LoaderCircle className="ml-1 animate-spin text-rose-300 duration-2000" />
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
