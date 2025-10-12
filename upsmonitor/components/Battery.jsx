import { View, Text } from 'react-native';
// Note: We'll assume you have a file named ProgressBarRN.jsx
// which is the React Native compatible version of the progress bar.
import ProgressBar from './ProgressBar.jsx';

const Battery = ({ number }) => {
  return (
    <View className="my-2 flex w-full flex-col rounded-md border-2 border-amber-300 bg-white px-3 shadow-lg">
      <Text className="flex flex-row justify-between text-lg">Battery {number} status</Text>

      <View className="my-2 flex flex-row justify-between">
        <View className="text-md flex flex-col items-center">
          {/* Using the React Native version of ProgressBar */}
          <ProgressBar
            value={25}
            min={21}
            max={29.4}
            stroke={12}
            size={100}
            // className prop is for View/Text, less common on components unless forwarded
          />

          <Text className="mt-2 flex flex-col">Voltage(Volts)</Text>
        </View>

        <View className="text-md flex flex-col items-center">
          <ProgressBar value={1} min={0} max={40} stroke={12} size={100} />
          <Text className="mt-2 flex flex-row">Current(Amps)</Text>
        </View>

        <View className="text-md flex flex-col items-center">
          <ProgressBar value={400} min={0} max={1000} stroke={12} size={100} />
          <Text className="mt-2 flex text-center">Power(Watts)</Text>
        </View>
      </View>
    </View>
  );
};

export default Battery;
