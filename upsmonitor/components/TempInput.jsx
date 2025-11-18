import { useEffect, useState } from 'react';
import { CloudUpload } from 'lucide-react-native';
import { StyleSheet, View, Text, TextInput } from 'react-native';

const TempInput = ({ fanNumber, start, temp, endpoint }) => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(String(temp || ''));
  const handleTemp = async (valueString) => {
    const integerValue = parseInt(valueString, 10);

    if (isNaN(integerValue)) {
      console.error('Input is not a valid number. API call blocked.');
      setLoading(false);
      return;
    }

    const payload = {
      fan: fanNumber,
      start: start,
      temp: integerValue,
    };

    const urlEncodedBody = new URLSearchParams(payload).toString();
    try {
      setLoading(true);
      const response = await fetch(`${endpoint}/set/fan/temp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: urlEncodedBody,
      });

      if (!response.ok) {
        throw new Error(`POST failed with status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Successfully Posted:', result);
    } catch (error) {
      console.error('Error during POST:', error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (value !== String(temp || '')) {
      setLoading(true);
      handleTemp(value);
    } else {
      setLoading(false);
    }
  }, [value, temp, endpoint]);
  useEffect(() => {
    setValue(String(temp || ''));
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
          keyboardType="numeric"
          style={styles.textInput}
        />
        <Text className="text-gray-200">°c</Text>
        {loading ? (
          <CloudUpload className="ml-1 h-4 w-4 animate-bounce text-green-300" />
        ) : (
          <View />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    color: 'white',
    width: 20,
    textAlign: 'center',
    padding: 0,
  },
});

export default TempInput;
