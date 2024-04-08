import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import HelloWorldScreen from './src/presentation/screens/HelloWorldScreen';
import CounterScreen from './src/presentation/screens/CounterScreen';
import {PaperProvider} from 'react-native-paper';
import CounterM3Screen from './src/presentation/screens/CounterM3Screen';
import IonIcon from 'react-native-vector-icons/Ionicons';
import BoxObjectModelScreem from './src/presentation/screens/BoxObjectModelScreem';

export default function App() {
  return (
    <PaperProvider settings={{
      icon:(props)=> <IonIcon {...props}/>
    }}>
      <SafeAreaView style={{flex: 1}}>
        {/* <HelloWorldScreen name='Otniel Lascano'/> */}
        {/* <CounterScreen /> */}
        {/* <CounterM3Screen/> */}
        <BoxObjectModelScreem/>
      </SafeAreaView>
    </PaperProvider>
  );
}
