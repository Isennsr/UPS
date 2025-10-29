import { View, Text, TextInput } from 'react-native';
import { useState } from 'react';
import VoltageInput from './VoltageInput';

const VoltageControl = ({ data }) => {
  const [acInResconnect, setAcInReconnect] = useState(25);
  return (
    <View className="flex flex-col">
      <Text className="mx-auto flex flex-row text-lg text-indigo-300"> Voltage Settings:</Text>
      <View className="mb-3 flex w-full flex-row border-b-1 border-indigo-300"></View>
      <Text className="mb-2 flex flex-row text-xl text-gray-200">AC IN Voltage Settings</Text>
      <View className="flex flex-col">
        <VoltageInput ac={true} disconnect={true} voltage={data.acChargeStopVoltage} />
        <View className="my-1 border-b border-slate-700"></View>
        <VoltageInput ac={true} disconnect={false} voltage={data.acChargeStartVoltage} />
      </View>
      <Text className="mt-5 mb-2 flex flex-row text-xl text-gray-200">Solar Input Settings</Text>
      <VoltageInput ac={false} disconnect={true} voltage={0} />
      <View className="my-1 border-b border-slate-700"></View>
      <VoltageInput ac={false} disconnect={false} voltage={0} />
      <Text className="mx-auto my-2 flex flex-row text-xs text-red-500">
        Solar not Implemented yet:
      </Text>
    </View>
  );
};

export default VoltageControl;
