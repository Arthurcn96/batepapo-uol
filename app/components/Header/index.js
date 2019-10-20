import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const HeaderSection = ({title}) => (
  <View style={styles.header}>
    <Text>{title}</Text>
  </View>
);

export default HeaderSection;

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    backgroundColor: '#2a3350',
    alignItems: 'center',
    justifyContent: 'center',
    height: 33,
    width:"100%",
  },
});
