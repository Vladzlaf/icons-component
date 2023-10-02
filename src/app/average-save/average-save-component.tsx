import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import FilterIcon from './assets/filter-icon';
import {LinearProgress, Text} from '@rneui/themed';
import EditWhiteIcon from './assets/edit-white-icon copy';

const SavingsComponent = () => {
  return (
    <View>
      <View style={styles.firstContainer}>
        <Text t2 style={{color: '#FFFFFFCC'}}>
          Average Savings For 6 Months
        </Text>
        <Text
          h6
          style={{
            color: '#FFF',
            fontSize: 26,
            fontStyle: 'normal',
            lineHeight: 26,
            textAlign: 'left',
            marginTop: 14,
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
              borderBottomWidth: 1,
              borderColor: 'rgba(255, 255, 255, 0.15)',
            }}>
            <Text
              h6
              style={{
                fontSize: 20,
                lineHeight: 20,
                color: '#FFFFFF',
                marginTop: 83,
                marginBottom: 8,
              }}>
              Saving Plans
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 83,
              }}>
              <TouchableOpacity>
                <FilterIcon />
              </TouchableOpacity>
              <Text
                t4
                style={{color: '#FFFFFFCC', paddingLeft: 7, lineHeight: 18}}>
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
                    fontSize: 16,
                    fontStyle: 'normal',
                    lineHeight: 16,
                  }}>
                  Roof Replacement
                </Text>
                <Text t2 style={{marginTop: 2, fontSize: 12}}>
                  Monthly Saving Target: $250,00
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 12}}>
                <TouchableOpacity>
                  <EditWhiteIcon />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: 59,
                    height: 34,
                    borderRadius: 100,
                    backgroundColor: '#FFFFFF26',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text t2 style={{fontSize: 14}}>
                    Add +
                  </Text>
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
              <Text h5 style={{fontSize: 14}}>
                $16,200
              </Text>
              <Text h5 style={{fontSize: 14}}>
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
                <Text
                  h5
                  style={{
                    fontSize: 16,
                    fontStyle: 'normal',
                    lineHeight: 16,
                  }}>
                  House Repairs
                </Text>
                <Text t2 style={{marginTop: 2, fontSize: 12}}>
                  Monthly Saving Target: $250,00
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 12}}>
                <TouchableOpacity>
                  <EditWhiteIcon />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: 59,
                    height: 34,
                    borderRadius: 100,
                    backgroundColor: '#FFFFFF26',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text t2 style={{fontSize: 14}}>
                    Add +
                  </Text>
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
              <Text h5 style={{fontSize: 14}}>
                $2,150
              </Text>
              <Text h5 style={{fontSize: 14}}>
                Target: $8,500
              </Text>
            </View>
            <View style={{marginTop: 8}}>
              <LinearProgress />
            </View>
          </View>
          <TouchableOpacity style={{alignItems: 'center'}}>
            <Text
              h5
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
    top: -31,
    width: 350,
    flexShrink: 0,
    borderRadius: 24,
    backgroundColor: '#391090',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 19,
    zIndex: 1,
  },
  secondContainer: {
    width: 350,
    borderRadius: 24,
    backgroundColor: '#6434CB',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 16,
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
