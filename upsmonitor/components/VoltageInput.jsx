import { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { CloudUpload } from 'lucide-react-native';

const VoltageInput = ({ ac, voltage, disconnect, endpoint }) => {
  const [value, setValue] = useState(String(voltage || ''));
  const [loading, setLoading] = useState(false);

  const handleVoltage = async (valueString) => {
    const integerValue = parseInt(valueString, 10);

    if (isNaN(integerValue)) {
      console.error('Input is not a valid number. API call blocked.');
      setLoading(false);
      return;
    }

    const payload = {
      start: !disconnect,
      voltage: integerValue,
    };

    const urlEncodedBody = new URLSearchParams(payload).toString();
    try {
      setLoading(true);
      const response = await fetch(`${endpoint}/set/voltage`, {
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
    if (value !== String(voltage || '')) {
      setLoading(true);
      handleVoltage(value);
    } else {
      setLoading(false);
    }
  }, [value, voltage, endpoint]);

  useEffect(() => {
    // When the external 'voltage' prop changes, update the local state (convert to string)
    setValue(String(voltage || ''));
  }, [voltage]);

  return (
    <View className="flex flex-row justify-between">
      <Text className="flex flex-col px-2 text-gray-200">
        {ac ? 'AC' : 'Solar'} {disconnect ? 'Disconnect' : 'Reconnect'} Voltage:
      </Text>
      <View className="flex flex-col">
        <View className="flex w-full flex-row rounded bg-gray-600 p-1">
          <TextInput
            value={value}
            onChangeText={setValue}
            keyboardType="numeric"
            style={styles.textInput}
          />
          <Text className="flex flex-col text-gray-200">Volts</Text>
          {loading ? (
            <CloudUpload className="ml-1 h-4 w-4 animate-bounce text-green-300" />
          ) : (
            <View />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    color: 'white',
    width: 10,
    textAlign: 'center',
    padding: 0,
  },
});

export default VoltageInput;
