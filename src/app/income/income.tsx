import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from '@rneui/themed';
import EditWhiteIcon from '../average-save/assets/edit-white-icon copy';

const IncomeComponent = () => {
  return (
    <View>
      <View style={styles.firstContainer}>
        <View>
          <Text
            t8
            style={{
              color: '#FFF',
              fontSize: 16,
              fontStyle: 'normal',
              lineHeight: 21,
              textAlign: 'left',
            }}>
            Monthly Income
          </Text>
          <Text
            t4
            style={{
              color: '#FFFFFFCC',
              fontSize: 12,
              fontStyle: 'normal',
              lineHeight: 16,
            }}>
            $11,852 Last month
          </Text>
        </View>
        <View>
          <Text
            t8
            style={{
              color: '#FFF',
              fontSize: 18,
              fontStyle: 'normal',
              lineHeight: 18,
              textAlign: 'left',
            }}>
            $12,200
          </Text>
          <View
            style={{
              justifyContent: 'flex-end',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 8,
              paddingBottom: 16,
            }}>
            <TouchableOpacity>
              <EditWhiteIcon />
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                t4
                style={{
                  color: '#FFFFFFCC',
                  fontSize: 14,
                  fontStyle: 'normal',
                  lineHeight: 18,
                  marginLeft: 6,
                }}>
                Edit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.secondContainer}>
        <View style={{justifyContent: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              t4
              style={{
                lineHeight: 18,
                color: '#391090',
                fontSize: 14,
                marginTop: 74,
              }}>
              You have{' '}
              <Text
                h6
                style={{
                  lineHeight: 18,
                  color: '#391090',
                  fontSize: 14,
                }}>
                $8,821
              </Text>{' '}
              remaining after bills
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  firstContainer: {
    position: 'absolute',
    top: -10,
    width: 350,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 24,
    backgroundColor: '#6434CB',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 16,
    zIndex: 1,
  },
  secondContainer: {
    width: 350,
    borderRadius: 24,
    backgroundColor: '#C0A3FF',
    paddingBottom: 10,
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

export default IncomeComponent;
