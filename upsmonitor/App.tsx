import Welcome from 'components/Welcome';
import Battery from 'components/Battery';
import FanSettings from 'components/FanSettings';
import './global.css';
import { View, ScrollView, Text } from 'react-native';
import Footer from 'components/Footer';
import { useState, useEffect } from 'react';

import { Loader2 } from 'lucide-react-native';

const API_ENDPOINT = 'http://192.168.4.1';

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const [temperatureReading, setTemperatureReading] = useState([true, true]);
  const [lastUpdated, setLastUpdated] = useState<Date>(null);

  const fetchDataAndSetState = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_ENDPOINT}/data`, { cache: 'no-store' });

      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }
      const json = await response.json();

      let targetData = json;

      // Check if we have sensor reading
      if (targetData.t1 < -50) {
        setTemperatureReading((prevReading) => {
          const newReading = [...prevReading];
          newReading[0] = false;
          return newReading;
        });
      }
      if (targetData.t2 < -50) {
        setTemperatureReading((prevReading) => {
          const newReading = [...prevReading];
          newReading[1] = false;
          return newReading;
        });
      }

      setData(targetData);
      setLastUpdated(new Date());
    } catch (e) {
      if (e instanceof Error) {
        setError(new Error(`Failed to connect to ESP32: ${e.message}`));
      } else if (typeof e === 'string') {
        setError(new Error(`Failed to connect to ESP32: ${e}`));
      } else {
        setError(new Error('Failed to connect to ESP32: An unknown error occurred.'));
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // 1. Call the async function here.
    fetchDataAndSetState();

    // 2. We can also add the 5-second polling loop here, as requested earlier.
    const intervalId = setInterval(fetchDataAndSetState, 5000);

    // 3. Return a cleanup function to clear the interval when the component unmounts.
    return () => clearInterval(intervalId);

    // The dependency array is empty because fetchDataAndSetState is stable (not recreated on every render).
  }, []);

  return (
    <ScrollView
      className="flex w-full flex-col bg-black font-sans"
      contentContainerStyle={{ flexGrow: 1 }}>
      <Welcome loading={loading} lastUpdated={lastUpdated} />
      <View className="flex-1">
        {data ? (
          <View className="mx-2 flex flex-col">
            <Battery number={1} voltage={data.vBat} current={data.IBat1} />
            <Battery number={2} voltage={data.vBat} current={data.IBat2} />
            <FanSettings
              endpoint={API_ENDPOINT}
              fan1mode={data.fan1Mode}
              fan2mode={data.fan2Mode}
              fan1IsRunning={data.fan1IsRunning}
              fan2IsRunning={data.fan2IsRunning}
              data={data}
              temperatureReading={temperatureReading}
            />
          </View>
        ) : loading ? (
          <View
            className="relative m-3 rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
            role="alert">
            <Text className="font-bold">Error!</Text>
            <Text className="ml-2 block sm:inline">{error}</Text>
          </View>
        ) : (
          <View className="flex flex-col items-center justify-center p-10">
            <Loader2 className="h-8 w-8 animate-spin text-indigo-500" />
            <Text className="mt-4 text-gray-600">Loading data...</Text>
          </View>
        )}
      </View>
      <Footer />
    </ScrollView>
  );
}
