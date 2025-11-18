import { View, Text } from 'react-native';
import PowerCard from './PowerCard';
import ACCard from './ACCard';

const Cards = ({ data }) => {
  return (
    <View className="mx-3 flex flex-row justify-center">
      <PowerCard data={data} />
      <ACCard data={data} />
    </View>
  );
};

export default Cards;
