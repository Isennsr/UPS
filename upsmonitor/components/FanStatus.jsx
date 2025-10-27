import { View, Text } from 'react-native';
import { useState } from 'react';

// --- Utility function to determine highlight colors based on temperature ---
const getThresholdColor = (temp) => {
  const t = parseFloat(temp) || 0;

  if (t > 30) {
    // Greater than 30: Red
    return {
      bg: 'bg-red-500',
      text: 'text-white', // Use white text for contrast on dark background
    };
  } else if (t >= 20) {
    // 20 up to 30: Yellow/Amber
    return {
      bg: 'bg-yellow-400',
      text: 'text-black', // Use black text for contrast on light background
    };
  } else {
    // Less than 20: Green
    return {
      bg: 'bg-green-500',
      text: 'text-white', // Use white text for contrast on dark background
    };
  }
};

// -----------------------------------------------------------------------

const FanStatus = ({ temp1, temp2 }) => {
  // Setting up states
  const [fan1, setFan1] = useState(true);
  const [fan2, setFan2] = useState(false);

  // Get color classes for each sensor reading independently
  const colors1 = getThresholdColor(temp1);
  const colors2 = getThresholdColor(temp2);

  // Dynamic classes for the highlighted reading (value + 'c')
  const highlightClasses1 = `px-1 rounded ${colors1.bg} ${colors1.text}`;
  const highlightClasses2 = `px-1 rounded ${colors2.bg} ${colors2.text}`;

  return (
    <View className="my-2 flex w-full flex-col rounded-md border-2 border-amber-300 bg-white px-3 shadow-lg">
      <Text className="flex flex-row justify-around  text-lg text-black">Fan Status</Text>

      <View className="flex flex-row justify-around">
        <View className="flex flex-col py-4">
          {/* Sensor 1 Reading */}
          <View className="mb-1 flex flex-row">
            <Text>Sensor 1 reading: </Text>
            <Text className={highlightClasses1}>{temp1}°c</Text>
          </View>

          {/* Sensor 2 Reading */}
          <View className="flex flex-row">
            <Text>Sensor 2 reading: </Text>
            <Text className={highlightClasses2}>{temp2}°c</Text>
          </View>
        </View>

        <View className="flex flex-col py-4 text-lg text-black">
          <View className="mb-1 flex flex-row">
            <Text>Fan1 State: </Text>
            <Text className={fan1 ? 'rounded bg-green-400 px-1' : 'rounded bg-red-400 px-1'}>
              {fan1 ? 'On' : 'Off'}
            </Text>
          </View>
          <View className="flex flex-row">
            <Text>Fan2 State: </Text>
            <Text className={fan2 ? 'rounded bg-green-400 px-1' : 'rounded bg-red-400 px-1'}>
              {fan2 ? 'On' : 'Off'}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FanStatus;
