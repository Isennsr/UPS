import { View, Text, TextInput } from 'react-native';
import { useState } from 'react';

const VoltageControl = () => {
  const [acInDisconnect, setAcInDisconnect] = useState(29);
  const [acInResconnect, setAcInReconnect] = useState(25);
  return (
    <View className="flex flex-col">
      <Text className="mx-auto flex flex-row text-lg text-indigo-300"> Voltage Settings:</Text>
      <View className="mb-3 flex w-full flex-row border-b-1 border-indigo-300"></View>
      <Text className="mb-2 flex flex-row text-xl text-gray-200">AC IN Voltage Settings</Text>
      <View className="flex flex-col">
        <View className="flex flex-row justify-between">
          <Text className="flex flex-col px-2 text-gray-200">AC Disconnect Voltage:</Text>
          <View className="flex flex-col">
            <View className="flex w-full flex-row">
              <TextInput
                value={acInDisconnect}
                onChange={(e) => setAcInDisconnect(e.value)}
                className="flex max-w-5 flex-col text-center text-gray-200"
              />
              <Text className="flex flex-col text-gray-200">Volts</Text>
            </View>
          </View>
        </View>
        <View className="my-1 border-b border-slate-700"></View>
        <View className="flex flex-row justify-between">
          <Text className="px-2 text-gray-200">AC Reconnect Voltage:</Text>
          <View className="flex flex-col">
            <View className="flex flex-row">
              <TextInput
                value={acInResconnect}
                onChange={(e) => setAcInReconnect(e.value)}
                className="max-w-5 text-center text-gray-200"
              />
              <Text className="text-gray-200">Volts</Text>
            </View>
          </View>
        </View>
      </View>

      <Text className="mt-5 mb-2 flex flex-row text-xl text-gray-200">Solar Input Settings</Text>

      <View>
        <View className="flex flex-row justify-between">
          <Text className="px-2 text-gray-200">Solar Reconnect Voltage:</Text>
          <View className="flex flex-col">
            <View className="flex flex-row">
              <TextInput
                value={acInResconnect}
                onChange={(e) => setAcInReconnect(e.value)}
                className="max-w-5 text-center text-gray-200"
              />
              <Text className="text-gray-200">Volts</Text>
            </View>
          </View>
        </View>
      </View>
      <View className="my-1 border-b border-slate-700"></View>
      <View>
        <View className="flex flex-row justify-between">
          <Text className="px-2 text-gray-200">Solar Disconnect Voltage:</Text>
          <View className="flex flex-col">
            <View className="flex flex-row">
              <TextInput
                value={acInResconnect}
                onChange={(e) => setAcInReconnect(e.value)}
                className="max-w-5 text-center text-gray-200"
              />
              <Text className="text-gray-200">Volts</Text>
            </View>
          </View>
        </View>
      </View>

      <Text className="mx-auto my-2 flex flex-row text-xs text-red-500">
        Solar not Implemented yet:
      </Text>
    </View>
  );
};

export default VoltageControl;
