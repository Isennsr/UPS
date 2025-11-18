import { View, Text } from 'react-native';
import { Power } from 'lucide-react-native';

const PowerCard = ({ data }) => {
  return (
    <View className="my-3 flex w-1/2 flex-col rounded border-2 border-sky-800 bg-slate-800 p-2">
      <View className="flex flex-row items-center">
        <Power className="w-5 text-white" />
        <Text className="ml-2 text-xl text-white">Power</Text>
      </View>
      <Text className="text-md mt-2 ml-3 text-white">
        {Math.round(data.vBat * data.IBat1 + data.vBat * data.IBat2)} Watts
      </Text>
    </View>
  );
};

export default PowerCard;
