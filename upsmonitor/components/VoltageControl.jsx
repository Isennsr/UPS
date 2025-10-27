import { View, Text, TextInput } from 'react-native';
import { useState } from 'react';

const VoltageControl = () => {
  const [acInDisconnect, setAcInDisconnect] = useState(29);
  const [acInResconnect, setAcInReconnect] = useState(25);
  return (
    <View className="flex flex-col">
      <Text className="mx-auto flex flex-row text-lg"> Voltage Settings:</Text>
      <View className="mb-3 flex w-full flex-row border-b-1 border-sky-950"></View>
      <Text className="mb-2 flex flex-row text-xl">AC IN Voltage Settings</Text>
      <View className="flex flex-row justify-around">
        <View className="flex flex-col">
          <View className="flex flex-row">
            <Text className="px-2">AC Disconnect Voltage:</Text>
            <TextInput
              value={acInDisconnect}
              onChange={(e) => setAcInDisconnect(e.value)}
              className="max-w-5 text-center"
            />
          </View>
        </View>
        <View className="flex flex-col">
          <View className="flex flex-row">
            <Text className="px-2">AC Reconnect Voltage:</Text>
            <TextInput
              value={acInResconnect}
              onChange={(e) => setAcInReconnect(e.value)}
              className="max-w-5 text-center"
            />
          </View>
        </View>
      </View>

      <Text className="my-2 flex flex-row text-xl">Solar Input Settings</Text>
      <Text className="mx-auto mb-2 flex flex-row text-sm text-red-500">Not Implemented yet.</Text>
    </View>
  );
};

export default VoltageControl;
