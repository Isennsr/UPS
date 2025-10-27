import { View, Text } from 'react-native';
import { Loader2, Zap } from 'lucide-react';

const Welcome = ({ loading }) => {
  return (
    <View>
      <View className="mx-auto h-20 w-full flex-row items-center justify-center text-center">
        <Zap className="mr-2 flex h-6 w-6 flex-col text-white" />
        <Text className="flex flex-col text-xl text-white">UPS Control Server</Text>
      </View>
      <View className="flex w-full flex-row justify-between bg-sky-700 p-2">
        <Text className="flex-col text-white">Last Refresh: </Text>
        <Text className="flex-col text-white">
          <View className="flex flex-row">
            Status:
            {loading ? (
              <Text className="ml-1 text-green-300">Live</Text>
            ) : (
              <View className="ml-1 flex flex-row items-center">
                <Text className="mr-1 flex flex-col text-yellow-400">Loading</Text>
                <Loader2 className="flex h-2 w-2 animate-spin flex-col text-yellow-400" />
              </View>
            )}
          </View>
        </Text>
      </View>
    </View>
  );
};

export default Welcome;
