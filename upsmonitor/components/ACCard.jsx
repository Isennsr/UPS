import { View, Text } from 'react-native';
import { Activity } from 'lucide-react-native';

const ACCard = ({ data }) => {
  return (
    <View className="my-3 ml-3 flex w-1/2 flex-col rounded border-2 border-sky-800 bg-sky-900 p-2">
      <View className="flex flex-row items-center text-white">
        <Activity className="w-5" />
        <Text className="ml-2 text-xl text-white">AC Input Status:</Text>
      </View>
      <Text className="text-md mt-2 ml-3 text-white">
        {data.charging ? 'Connected' : 'Not connected'}
        Connected
      </Text>
    </View>
  );
};

export default ACCard;
