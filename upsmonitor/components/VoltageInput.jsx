import { useState, useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';
import { CloudUpload } from 'lucide-react-native';

const VoltageInput = ({ ac, voltage, disconnect }) => {
  const [value, setValue] = useState(voltage);
  const [loading, setLoading] = useState(false);

  const handleVoltage = async (value) => {
    const payload = {
      start: !disconnect,
      voltage: value,
    };

    const urlEncodedBody = new URLSearchParams(payload).toString();
    try {
      setLoading(true);
      const response = await fetch(`${endpoint}/set/fan/mode`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: urlEncodedBody,
      });

      if (!response.ok) {
        throw new Error(`POST failed with status: ${response.status}`);
        console.error('API Error Response:', errorText);
        throw new Error(`POST failed with status: ${response.status}`);
      }

      // The result will be the object you sent, plus the new 'id'
      const result = await response.json();
      console.log('Successfully Posted:', result);
      // fanSetter(mode);
    } catch (error) {
      console.error('Error during POST:', error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (value != voltage) {
      setLoading(true);
      handleVoltage(value);
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
