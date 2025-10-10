import { View, Text } from 'react-native';

const Battery = ({ number }) => {
  return (
    <View className="amber-300 my-2 flex w-full flex-col rounded-md border-2 border-amber-300 bg-white p-1 shadow-lg">
      <Text className="flex flex-row justify-between text-lg">Battery {number} status</Text>
      <div className="my-2 flex flex-row justify-between">
        <div className="text-md flex flex-col">Voltage</div>
        <div className="text-md flex flex-col">Current</div>
        <div className="text-md flex-col">Power</div>
      </div>
    </View>
  );
};

export default Battery;
