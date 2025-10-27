import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { useState } from 'react';
import FanSetter from './FanSetter';
import VoltageControl from './VoltageControl';

const FanSettings = () => {
  const [fan1Mode, setFan1Mode] = useState(1);
  const [fan2Mode, setFan2Mode] = useState(1);
  const [fan1Start, setFan1Start] = useState(25);
  const [fan1ShutOff, setFan1ShutOff] = useState(25);
  const [fan2Start, setFan2Start] = useState(25);
  const [fan2ShutOff, setFan2ShutOff] = useState(25);

  return (
    <View className="my-2 flex w-full flex-col rounded-md border-2 border-amber-300 bg-white px-3 py-2 shadow-lg">
      <Text className="mx-auto flex flex-row justify-between text-lg text-black">Fan Settings</Text>
      <View className="mb-3 h-0.5 w-full border-b-1 border-sky-950"></View>
      <View className="flex flex-row justify-around">
        <FanSetter fanNumber={1} fanMode={fan1Mode} fanSetter={setFan1Mode} />
        <FanSetter fanNumber={2} fanMode={fan2Mode} fanSetter={setFan2Mode} />
      </View>
      <Text className="mx-auto mt-10 mb-2 text-lg">Temperature Settings(auto Mode only)</Text>
      <View className="mb-3 w-full border-b-1 border-sky-950"></View>
      <View className="flex flex-row justify-around">
        <View className="flex flex-col">
          <Text className="flex flex-row text-xl">Fan 1:</Text>
          <View className="flex flex-row">
            <Text className="px-2"> Start Up temperature:</Text>
            <TextInput
              value={fan1Start}
              onChange={(e) => setFan1Start(e.value)}
              className="max-w-5 text-center"
            />
            <Text>°c</Text>
          </View>
          <View className="flex flex-row">
            <Text className="px-2"> Shut Off temperature:</Text>
            <TextInput
              value={fan1ShutOff}
              onChange={(e) => setFan1ShutOff(e.value)}
              className="max-w-5 text-center"
            />
            <Text>°c</Text>
          </View>
        </View>
        <View className="mb-5 flex flex-col">
          <Text className="flex flex-row text-xl">Fan 2:</Text>
          <View className="flex flex-row">
            <Text className="px-2">Start Up temperature:</Text>
            <TextInput
              value={fan2Start}
              onChange={(e) => setFan2Start(e.value)}
              className="max-w-5 text-center"
            />
            <Text>°c</Text>
          </View>
          <View className="flex flex-row">
            <Text className="px-2">Shut off temperature:</Text>
            <TextInput
              value={fan2ShutOff}
              onChange={(e) => setFan2ShutOff(e.value)}
              className="max-w-5 text-center"
            />
            <Text>°c</Text>
          </View>
        </View>

        {/* Add Voltage Control */}
      </View>

      <VoltageControl />
    </View>
  );
};

export default FanSettings;
