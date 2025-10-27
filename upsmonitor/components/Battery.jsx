import { View, Text } from 'react-native';
import ProgressBar from './ProgressBar.jsx';
import { BatteryMedium, BatteryFull, BatteryCharging, BatteryLow } from 'lucide-react';

const Battery = ({ number, voltage, current }) => {
  // --- Battery State Logic ---
  // Constants for a typical 24V system (adjust these if your system is 12V or 48V)
  const VOLTAGE_HIGH = 28.0;
  const VOLTAGE_MEDIUM = 24.0;
  const CURRENT_THRESHOLD = 0.5; // Current above this means charging

  let IconComponent;
  let iconColorClass;

  // 1. Priority Check: Is the battery actively charging (current > 0)?
  if (current > CURRENT_THRESHOLD) {
    IconComponent = BatteryCharging;
    iconColorClass = 'text-green-500';
  }
  // 2. Voltage Check (Only if not charging or current is low/negative)
  else if (voltage >= VOLTAGE_HIGH) {
    IconComponent = BatteryFull;
    iconColorClass = 'text-green-400';
  } else if (voltage >= VOLTAGE_MEDIUM) {
    IconComponent = BatteryMedium;
    iconColorClass = 'text-yellow-500';
  } else {
    // Battery is low
    IconComponent = BatteryLow;
    iconColorClass = 'text-red-500';
  }

  // We use this variable to render the correct component
  const DynamicIcon = IconComponent;
  // --- End Battery State Logic ---

  return (
    <View className="my-2 flex w-full flex-col rounded-md bg-gray-50 px-3 shadow-lg">
      <View className="flex flex-row items-center">
        {/* Dynamic Icon is rendered here, applying the determined color class */}
        <DynamicIcon className={`flex h-8 w-8 flex-col pr-1 ${iconColorClass}`} />
        <Text className="flex flex-col justify-between text-lg">Battery {number} status</Text>
      </View>

      <View className="my-2 flex flex-row justify-between">
        <View className="text-md flex flex-col items-center">
          <ProgressBar value={voltage} min={21} max={29.4} stroke={12} size={100} />

          <Text className="mt-2 flex flex-col">Voltage(Volts)</Text>
        </View>

        <View className="text-md flex flex-col items-center">
          <ProgressBar value={current} min={0} max={20} stroke={12} size={100} />
          <Text className="mt-2 flex flex-row">Current(Amps)</Text>
        </View>

        <View className="text-md flex flex-col items-center">
          <ProgressBar value={voltage * current} min={0} max={1000} stroke={12} size={100} />
          <Text className="mt-2 flex text-center">Power(Watts)</Text>
        </View>
      </View>
    </View>
  );
};

export default Battery;
