import { useEffect, useState } from 'react';
import { CloudUpload } from 'lucide-react';
import { View, Text, TextInput } from 'react-native';

const TempInput = ({ fanNumber, start, temp }) => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(temp);

  const handleTemp = async (value) => {
    const payload = {
      fan: fanNumber,
      start: start,
      temp: value,
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
    if (value != temp) {
      setLoading(true);
      handleTemp(value);
    } else {
      setLoading(false);
    }
  }, [value, temp]);

  useEffect(() => {
    setValue(temp);
  }, [temp]);

  return (
    <View className="flex flex-row items-center justify-between">
      <Text className="text-gray-200">
        Fan {fanNumber} {start ? 'Start Up' : 'Shut Off'} temperature:
      </Text>
      <View className="flex flex-row items-center rounded bg-slate-600 px-1 py-1">
        <TextInput
          value={value}
          onChangeText={setValue}
          className="max-w-6 text-center text-gray-200"
          keyboardType="numeric"
        />
        <Text className="text-gray-200">°c</Text>
        {loading ? (
          <CloudUpload className="ml-1 h-4 w-4 animate-bounce text-green-300" />
        ) : (
          <View></View>
        )}
      </View>
    </View>
  );
};

export default TempInput;
