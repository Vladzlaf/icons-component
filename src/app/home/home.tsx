import React from 'react';
import {View, StyleSheet} from 'react-native';
import IconsComponent from '../icon-component/icon-component';

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
      <IconsComponent />
    </View>
  );
};

export default Home;
