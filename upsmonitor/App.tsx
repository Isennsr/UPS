import Welcome from 'components/Welcome';
import Battery from 'components/Battery';
import FanSettings from 'components/FanSettings';
import FanStatus from 'components/FanStatus';
import './global.css';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import Footer from 'components/Footer';
import { useFonts, JustAnotherHand_400Regular } from '@expo-google-fonts/just-another-hand';

export default function App() {
  const [fontsLoaded] = useFonts({
    // Give the font a simple name for internal use
    JustAnotherHand: JustAnotherHand_400Regular,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <ScrollView className="font-hand flex w-full flex-col bg-sky-950">
      <Welcome />
      <View className="mx-2 flex flex-col">
        <Battery number={1} />
        <Battery number={2} />
        <FanStatus temp1={25} temp2={31} />
        <FanSettings />
      </View>
      <Footer />
    </ScrollView>
  );
}
