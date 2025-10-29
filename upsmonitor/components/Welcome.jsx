import { View, Text } from 'react-native';
import { Loader2, Zap, BadgeCheck, RefreshCw } from 'lucide-react';

const Welcome = ({ loading, lastUpdated }) => {
  return (
    <View className="bg-sky-950">
      <View className="mx-auto h-20 w-full flex-row items-center justify-center text-center">
        <Zap className="mr-2 flex h-6 w-6 flex-col text-white" />
        <Text className="flex flex-col text-xl text-white">UPS Control Server</Text>
      </View>
      <View className="flex w-full flex-row justify-between bg-sky-700 p-2">
        <View className="flex flex-row items-center">
          <RefreshCw className="mr-1 h-4 w-4 text-white" />
          <Text className="flex-col text-white">Last Refresh: </Text>
          <Text className="text-indigo-200">
            {lastUpdated ? lastUpdated.toLocaleTimeString() : 'Never'}
          </Text>
        </View>
        <Text className="flex-col text-white">
          <View className="flex flex-row">
            Status:
            {loading ? (
              <View className="ml-1 flex flex-row items-center">
                <Text className="mr-1 flex flex-col text-yellow-400">Loading</Text>
                <Loader2 className="flex h-4 w-4 animate-spin flex-col text-yellow-400" />
              </View>
            ) : (
              <View className="ml-1 flex flex-row items-center">
                <Text className="mr-1 flex flex-col text-green-300">Live</Text>
                <BadgeCheck className="flex h-4 w-4 flex-col text-green-300" />
              </View>
            )}
          </View>
        </Text>
      </View>
    </View>
  );
};

export default Welcome;
