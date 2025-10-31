import { View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { FanIcon } from 'lucide-react-native';

// --- Utility function to determine highlight colors based on temperature ---
const getThresholdColor = (temp) => {
  const t = parseFloat(temp) || 0;

  if (t > 30) {
    // Greater than 30: Red
    return {
      bg: 'bg-red-500',
      text: 'text-white', // Use white text for contrast on dark background
    };
  } else if (t >= 27) {
    // 20 up to 30: Yellow/Amber
    return {
      bg: 'bg-yellow-400',
      text: 'text-black', // Use black text for contrast on light background
    };
  } else {
    // Less than 20: Green
    return {
      bg: 'bg-green-500',
      text: 'text-black', // Use white text for contrast on dark background
    };
  }
};

// -----------------------------------------------------------------------

const FanStatus = ({ temp1, temp2, tempReadings, fan1IsRunning, fan2IsRunning }) => {
  // Setting up states
  const [fan1, setFan1] = useState(fan1IsRunning);
  const [fan2, setFan2] = useState(fan2IsRunning);

  // Get color classes for each sensor reading independently
  const [colors1, setColors1] = useState(getThresholdColor(temp1));
  const [colors2, setColors2] = useState(getThresholdColor(temp2));

  // Dynamic classes for the highlighted reading (value + 'c')
  const highlightClasses1 = `px-1 rounded ${colors1.bg} ${colors1.text}`;
  const highlightClasses2 = `px-1 rounded ${colors2.bg} ${colors2.text}`;

  useEffect(() => {
    setFan1(fan1IsRunning);
    setFan2(fan2IsRunning);
  }, [fan1IsRunning, fan2IsRunning]);
  return (
    <View className="flex w-full flex-col rounded-md px-3">
      <Text className="flex flex-row justify-around text-lg text-indigo-300">Fan Status</Text>

      <View className="mb-3 flex w-full flex-row border-b-1 border-indigo-300"></View>
      <View className="flex flex-col justify-around">
        <View className="my-1 flex flex-col">
          {/* Sensor 1 Reading */}
          <View className="mb-1 flex flex-row justify-between">
            <Text className="text-gray-200">Sensor 1 reading: </Text>
            {tempReadings[0] ? (
              <Text className={highlightClasses1}>{temp1}°c</Text>
            ) : (
              <Text className="rounded bg-purple-500 px-1">No Data</Text>
            )}
          </View>
          <View className="mb-1 border-b border-slate-700"></View>
          {/* Sensor 2 Reading */}
          <View className="flex flex-row justify-between">
            <Text className="text-gray-200">Sensor 2 reading: </Text>
            {tempReadings[1] ? (
              <Text className={highlightClasses2}>{temp2}°c</Text>
            ) : (
              <Text className="rounded bg-purple-500 px-1">No Data</Text>
            )}
          </View>
        </View>
        <View className="mb-1 border-b border-slate-700"></View>
        <View className="flex flex-col text-lg text-black">
          <View className="mb-1 flex flex-row justify-between">
            <Text className="text-gray-200">Fan1 State: </Text>
            <View
              className={
                fan1
                  ? 'flex flex-row items-center rounded bg-green-400 px-1'
                  : 'flex flex-row items-center rounded bg-red-400 px-1'
              }>
              {fan1 ? <Text>On</Text> : <Text>Off</Text>}
              {fan1 ? (
                <FanIcon className="ml-1 flex h-3 w-3 animate-spin flex-col" />
              ) : (
                <FanIcon className="ml-1 flex h-3 w-3 flex-col" />
              )}
            </View>
          </View>
          <View className="mb-1 border-b border-slate-700"></View>
          <View className="flex flex-row justify-between">
            <Text className="text-gray-200">Fan2 State: </Text>
            <View
              className={
                fan2
                  ? 'flex flex-row items-center rounded bg-green-400 px-1'
                  : 'flex flex-row items-center rounded bg-red-400 px-1'
              }>
              {fan2 ? <Text>On</Text> : <Text>Off</Text>}
              {fan2 ? (
                <FanIcon className="ml-1 flex h-3 w-3 animate-spin flex-col" />
              ) : (
                <FanIcon className="ml-1 flex h-3 w-3 flex-col" />
              )}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FanStatus;
