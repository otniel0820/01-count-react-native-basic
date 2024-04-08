import {View, Text} from 'react-native';
import React, {useState} from 'react';
import { globalStyles } from '../theme/global.styles';
import { FAB } from 'react-native-paper';
import Icon from "react-native-vector-icons/Ionicons";


export default function CounterM3Screen() {
  const [count, setCount] = useState(0);
  
  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.title}>{count}</Text>
      
      <FAB
      icon={'add-outline'}
      style={globalStyles.fab}
      onPress={()=> setCount(count + 1)}
      onLongPress={()=> setCount(0)}
      />
    </View>
  );
}


