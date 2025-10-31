import { View, Text } from 'react-native';
import React from 'react';
import FanSetter from './FanSetter';
import VoltageControl from './VoltageControl';
import FanStatus from './FanStatus';
import TempInput from './TempInput';
const FanSettings = ({
  fan1mode,
  fan2mode,
  endpoint,
  data,
  temperatureReading,
  fan1IsRunning,
  fan2IsRunning,
}) => {
  return (
    <View className="mt-2 flex rounded-xl border border-slate-700 bg-slate-800">
      <FanStatus
        temp1={data.t1}
        temp2={data.t2}
        tempReadings={temperatureReading}
        fan1IsRunning={fan1IsRunning}
        fan2IsRunning={fan2IsRunning}
      />
      <View className="my-2 flex w-full flex-col rounded-md px-3 py-2">
        <Text className="mx-auto flex flex-row justify-between text-lg text-indigo-300">
          Fan Settings
        </Text>
        <View className="mb-3 h-0.5 w-full border-b border-indigo-300"></View>
        <View className="flex flex-col justify-around">
          <FanSetter endpoint={endpoint} fanNumber={1} fanMode={fan1mode} />
          <FanSetter endpoint={endpoint} fanNumber={2} fanMode={fan2mode} />
        </View>
        <Text className="mx-auto mt-5 text-lg text-indigo-300">Temperature Settings</Text>
        <Text className="mx-auto mb-2 text-xs text-indigo-300">
          (Only works when fan mode is "Auto")
        </Text>
        <View className="mb-3 w-full border-b border-indigo-300"></View>
        <View className="flex flex-col">
          <TempInput fanNumber={1} start={1} temp={data.fan1StartUpTemp} endpoint={endpoint}/>
          <View className="my-1 border-b border-slate-700"></View>
          <TempInput fanNumber={1} start={0} temp={data.fan1ShutOffTemp} endpoint={endpoint}/>
          <View className="my-1 border-b border-slate-700"></View>
          <TempInput fanNumber={2} start={1} temp={data.fan2StartUpTemp} endpoint={endpoint}/>
          <View className="my-1 border-b border-slate-700"></View>
          <TempInput fanNumber={2} start={0} temp={data.fan1ShutOffTemp} endpoint={endpoint}/>
        </View>

        <VoltageControl data={data} endpoint={endpoint}/>
      </View>
    </View>
  );
};

export default FanSettings;
