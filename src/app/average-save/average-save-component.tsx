import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import FilterIcon from './assets/filter-icon';
import EditIcon from './assets/edit-icon copy';
import {LinearProgress, Text} from '@rneui/themed';

const SavingsComponent = () => {
  return (
    <View>
      <View style={styles.firstContainer}>
        <Text h5 style={{color: 'white'}}>
          Average Savings For 6 Months
        </Text>
        <Text
          h5
          style={{
            color: '#FFF',
            fontSize: 26,
            fontStyle: 'normal',
            fontWeight: '700',
          }}>
          $783,00
        </Text>
      </View>
      <View style={styles.secondContainer}>
        <View style={{justifyContent: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 80,
              borderBottomWidth: 1,
              borderColor: 'rgba(255, 255, 255, 0.15)',
              paddingBottom: 10,
            }}>
            <Text
              h5
              style={{
                fontSize: 20,
                fontWeight: '700',
                fontStyle: 'normal',
                lineHeight: 20,
              }}>
              Saving Plans
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <FilterIcon />
              <Text t4 style={{color: '#FFFFFFCC', paddingLeft: 7}}>
                Filters
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-between',
              paddingTop: 10,
              borderBottomWidth: 1,
              borderColor: 'rgba(255, 255, 255, 0.15)',
              paddingBottom: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View>
                <Text
                  h5
                  style={{
                    fontSize: 20,
                    fontWeight: '700',
                    fontStyle: 'normal',
                    lineHeight: 20,
                    color: '#FFFFFF',
                  }}>
                  Roof Replacement
                </Text>
                <Text t2 style={{marginTop: 2}}>
                  Monthly Saving Target: $250,00
                </Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <EditIcon />
                <TouchableOpacity
                  style={{
                    width: 59,
                    height: 34,
                    borderRadius: 100,
                    backgroundColor: '#FFFFFF26',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text t2>Add +</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text h5 style={{marginTop: 10}}>
                $16,200
              </Text>
              <Text h5 style={{}}>
                Target: $20,000
              </Text>
            </View>
            <View style={{marginTop: 8}}>
              <LinearProgress />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 13,
              }}>
              <View>
                <Text style={styles.secondTitle}>House Repairs</Text>
                <Text t5 h3Style={{fontSize: 14, lineHeight: 19, marginTop: 2}}>
                  Monthly Saving Target: $250,00
                </Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <EditIcon />
                <TouchableOpacity
                  style={{
                    width: 59,
                    height: 34,
                    borderRadius: 100,
                    backgroundColor: '#FFFFFF26',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text t2>Add +</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <Text h5 style={{}}>
                $2,150
              </Text>
              <Text h5 style={{}}>
                Target: $8,500
              </Text>
            </View>
            <View style={{marginTop: 8}}>
              <LinearProgress />
            </View>
          </View>
          <TouchableOpacity style={{alignItems: 'center'}}>
            <Text
              style={{
                marginTop: 20,
                textDecorationLine: 'underline',
                color: '#FFFFFF',
              }}>
              Add Saving Plan +
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  firstContainer: {
    position: 'absolute',
    width: 350,
    height: 98,
    flexShrink: 0,
    borderRadius: 24,
    backgroundColor: '#391090',
    padding: 20,
    zIndex: 1,
  },
  secondContainer: {
    width: 350,
    height: 366,
    borderRadius: 24,
    backgroundColor: '#6434CB',
    padding: 20,
    marginTop: 20,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
  },
  secondTitle: {
    fontSize: 20,
    fontWeight: '700',
    fontStyle: 'normal',
    lineHeight: 20,
    color: '#FFFFFF',
  },
  sum: {
    color: '#FFF',
    fontSize: 26,
    fontStyle: 'normal',
    fontWeight: '700',
  },
});

export default SavingsComponent;
