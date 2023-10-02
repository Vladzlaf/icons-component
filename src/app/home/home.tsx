import React from 'react';
import {StyleSheet, View} from 'react-native';
import SavingsComponent from '../average-save/average-save-component';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 30,
    backgroundColor: '#000',
    height: '100%',
  },
});

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <SavingsComponent />
    </View>
  );
};

export default Home;
