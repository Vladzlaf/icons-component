import React from 'react';
import {StyleSheet, View} from 'react-native';
import IncomeComponent from '../income/income';
import PlannedComponent from '../planned/planned-compnent';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 30,
    padding: 30,
    backgroundColor: '#000',
    height: '100%',
  },
});

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <IncomeComponent />
      <PlannedComponent />
    </View>
  );
};

export default Home;
