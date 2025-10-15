import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { useState } from 'react';
import FanSetter from './FanSetter';

const FanSettings = () => {
  const [fan1Mode, setFan1Mode] = useState(1);
  const [fan2Mode, setFan2Mode] = useState(1);
  const [fan1Start, setFan1Start] = useState(25);
  const [fan1ShutOff, setFan1ShutOff] = useState(25);
  const [fan2Start, setFan2Start] = useState(25);
  const [fan2ShutOff, setFan2ShutOff] = useState(25);

  return (
    <View className="my-2 flex w-full flex-col rounded-md border-2 border-amber-300 bg-white px-3 py-2 shadow-lg">
      <Text className="flex flex-row justify-between text-lg text-black">Fan Settings</Text>

      <View className="flex flex-row justify-around">
        <FanSetter fanNumber={1} fanMode={fan1Mode} />
        <FanSetter fanNumber={2} fanMode={fan2Mode} />
      </View>
      <Text className="my-2 text-xl">Auto Settings:</Text>
      <View className="flex flex-row justify-around">
        <View className="flex flex-col">
          <Text className="flex flex-row px-2">ShutOff temperature:</Text>
          <Text className="flex flex-row px-2">StartUp temperature:</Text>
        </View>
        <View className="flex flex-col">
          <View className="flex flex-row">
            <Text className="px-2">ShutOff temperature:</Text>
            <TextInput value={fan1Start} onChange={(e) => setFan1Start(e.value)} />
          </View>
          <View className="flex flex-row">
            <Text className="px-2">StartUp temperature:</Text>
            <TextInput value={fan2ShutOff} onChange={(e) => setFan2ShutOff(e.value)} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default FanSettings;
