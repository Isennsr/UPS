import { useState, useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';
import { CloudUpload } from 'lucide-react';

const VoltageInput = ({ ac, voltage, disconnect }) => {
  const [value, setValue] = useState(voltage);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (value != voltage) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [value, voltage]);

  useEffect(() => {
    setValue(voltage);
  }, [voltage]);

  console.log(voltage);
  return (
    <View className="flex flex-row justify-between">
      <Text className="flex flex-col px-2 text-gray-200">
        {ac ? 'AC' : 'Solar'} {disconnect ? 'Disconnect' : 'Reconnect'} Voltage:
      </Text>
      <View className="flex flex-col">
        <View className="flex w-full flex-row rounded bg-gray-600 p-1">
          <TextInput
            value={value}
            onChange={(e) => setValue(e.value)}
            className="flex max-w-5 flex-col text-center text-gray-200"
          />
          <Text className="flex flex-col text-gray-200">Volts</Text>
          {loading ? (
            <CloudUpload className="ml-1 h-4 w-4 animate-bounce text-green-300" />
          ) : (
            <View></View>
          )}
        </View>
      </View>
    </View>
  );
};

export default VoltageInput;
