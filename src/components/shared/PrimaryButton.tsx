import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';


interface Props {
    label: string;
    onPress?: () => void;
    onLongPress?: () => void;
}

const PrimaryButton = ({label, onPress, onLongPress}:Props) => {
  return (
    <View>
      <Pressable
      onPress = {onPress}
      onLongPress = {onLongPress}
      style={({ pressed}) => [
        styles.button,
        pressed && styles.buttonPress
      ]}
      >
        <Text style={styles.textButton}>{label}</Text>
      </Pressable>
    </View>
  );
};


export default PrimaryButton;

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#5856D6',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 10,
    },
    textButton: {
      color: 'white',
    },
    buttonPress: {
      backgroundColor: '#4C9BF5'
    }
  });
