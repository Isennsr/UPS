import { View, Text } from 'react-native';

const Welcome = () => {
  return (
    <View className="mx-auto h-20 w-full flex-col items-center justify-center border-b-3 border-amber-500 text-center">
      <Text className="flex flex-row text-xl text-amber-500">UPS Control Server</Text>
    </View>
  );
};

export default Welcome;
