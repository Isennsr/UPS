import Welcome from 'components/Welcome';
import Battery from 'components/Battery';
import FanSettings from 'components/FanSettings';
import FanStatus from 'components/FanStatus';
import './global.css';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import Footer from 'components/Footer';
import { useFonts, JustAnotherHand_400Regular } from '@expo-google-fonts/just-another-hand';
import { useState, useEffect } from 'react';

import { RefreshCw, Loader2, Zap } from 'lucide-react';

const API_ENDPOINT = 'http://localhost:3000';

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const [temperatureReading, setTemperatureReading] = useState([true, true]);

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

  console.log(data);
  return (
    <ScrollView
      className="font-hand flex w-full flex-col bg-black"
      contentContainerStyle={{ flexGrow: 1 }}>
      <Welcome loading={loading} />
      <View className="flex-1">
        {data ? (
          <View className="mx-2 flex flex-col">
            <Battery number={1} voltage={data.vBat} current={data.IBat1} />
            <Battery number={2} voltage={data.vBat} current={data.IBat2} />
            <FanSettings
              endpoint={API_ENDPOINT}
              fan1mode={data.fan1Mode}
              fan2mode={data.fan2Mode}
              data={data}
              temperatureReading={temperatureReading}
            />
          </View>
        ) : loading ? (
          <div
            className="relative m-3 rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
            role="alert">
            <strong className="font-bold">Error!</strong>
            <span className="ml-2 block sm:inline">{error}</span>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-10">
            <Loader2 className="h-8 w-8 animate-spin text-indigo-500" />
            <p className="mt-4 text-gray-600">Loading data...</p>
          </div>
        )}
      </View>
      <Footer />
    </ScrollView>
  );
}
