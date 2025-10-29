import { View, Text, TextInput } from 'react-native';

const TempInput = ({ fanNumber, start, temp }) => {
  return (
    <View className="flex flex-row justify-between">
      <Text className="text-gray-200">
        Fan {fanNumber} {start ? 'Start Up' : 'Shut Off'} temperature:
      </Text>
      <View className="flex flex-row rounded bg-slate-600 px-1">
        <TextInput
          value={temp}
          onChange={(e) => setFan1Start(e.value)}
          className="max-w-5 text-center text-gray-200"
        />
        <Text className="text-gray-200">°c</Text>
      </View>
    </View>
  );
};

export default TempInput;
