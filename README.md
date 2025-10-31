# UPS
### This project utilizes and ESP32 to:
* Display UPS battery pack voltage level, current draw, and total power drawn/provided.
* Set Fan mode, and temprature parameters.
* Set AC charger connect/disconnect voltage.

### Backend:
#### ESP32 wifi Hotspot providing Rest API using following libraries:
* AsyncTCP by ESP32Async
* ESPAsyncWebServer by ESP32Async
* ArduinoJson

### FrontEnd:
* ReactNative
* Tailwind css
#### Why React Native?
can be built for Android and IOS.

## How FrontEnd looks?
<img width="471" height="919" alt="Screenshot 2025-10-30 042020" src="https://github.com/user-attachments/assets/9b4ccc89-aba5-4396-9817-753c95cbe138" />
<img width="465" height="903" alt="Screenshot 2025-10-30 042040" src="https://github.com/user-attachments/assets/cd9b7139-976f-4e44-b209-5311fac787fa" />


## Installing
#### Requirements
```bash
sudo npx expo install nativewind@preview react-native-css react-native-reanimated react-native-safe-area-context
sudo npx expo install --dev tailwindcss @tailwindcss/postcss postcss
sudo npm install lucide-react-native
sudo npx expo install react-native-svg
sudo nom install
```
