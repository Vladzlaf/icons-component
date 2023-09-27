import React from 'react';
import {View, StyleSheet} from 'react-native';
import IconComponent from '../icon-component/icon-comp';

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
      <IconComponent />
    </View>
  );
};

export default Home;
