import React from 'react';
import {
  SafeAreaView,
} from 'react-native';

import { Text } from './src/components/Text/Text';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text
        preset="headingLarge"
        style={{ fontFamily: 'Satoshi-Black' }}
      >
        Hello World!
      </Text>
      <Text
        preset="headingLarge"
      >
        Hello World!
      </Text>
      </SafeAreaView>
  );
}

export default App;
