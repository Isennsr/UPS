import { View, Text } from 'react-native';
import { Loader2, Zap, BadgeCheck, RefreshCw } from 'lucide-react';

const Welcome = ({ loading, lastUpdated }) => {
  return (
    <View className="bg-sky-950">
      {/* Header/Title Section */}
      <View className="mx-auto h-20 w-full flex-row items-center justify-center text-center">
        <Zap className="mr-2 h-6 w-6 text-white" />
        <Text className="text-xl text-white">UPS Control Server</Text>
      </View>

      {/* Status/Refresh Bar */}
      <View className="flex w-full flex-row justify-between bg-sky-700 p-2">
        {/* Last Refresh */}
        <View className="flex flex-row items-center">
          <RefreshCw className="mr-1 h-4 w-4 text-white" />
          <Text className="text-white">Last Refresh: </Text>
          <Text className="text-indigo-200">
            {lastUpdated ? lastUpdated.toLocaleTimeString() : 'Never'}
          </Text>
        </View>

        {/* Status Indicator (FIXED: Uses View for layout, Text for styling) */}
        <View className="flex flex-row items-center">
          <Text className="text-white">Status:</Text>

          {loading ? (
            // Loading State: View inside View is correct
            <View className="ml-1 flex flex-row items-center">
              <Text className="mr-1 text-yellow-400">Loading</Text>
              <Loader2 className="h-4 w-4 animate-spin text-yellow-400" />
            </View>
          ) : (
            // Live State: View inside View is correct
            <View className="ml-1 flex flex-row items-center">
              <Text className="mr-1 text-green-300">Live</Text>
              <BadgeCheck className="h-4 w-4 text-green-300" />
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default Welcome;
