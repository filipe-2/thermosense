import { useState } from 'react';
import 'react-native-gesture-handler';

import { Splash } from './src/screens/misc/Splash';
import { preventAutoHideAsync } from 'expo-splash-screen';

import Routes from './src/routes';

preventAutoHideAsync();

export default function App() {
  // States
  const [splashCompleted, setSplashCompleted] = useState(false);

  return (
    splashCompleted
      ? <Routes />
      : <Splash onCompleted={setSplashCompleted} />
  );
}