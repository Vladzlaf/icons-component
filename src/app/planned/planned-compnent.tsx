import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {LinearProgress, Text} from '@rneui/themed';
import EditWhiteIcon from '../average-save/assets/edit-white-icon copy';
import EditBlueIcon from '../average-save/assets/edit-blue-icon';

const PlannedComponent = () => {
  return (
    <View>
      <View style={styles.firstContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
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
              Food & Drink
            </Text>
            <Text
              t4
              style={{
                color: '#FFFFFFCC',
                fontSize: 12,
                fontStyle: 'normal',
                lineHeight: 16,
              }}>
              $704 Last month
            </Text>
          </View>
          <View>
            <Text
              t8
              style={{
                color: '#FFF',
                fontSize: 18,
                fontStyle: 'normal',
                lineHeight: 19,
                textAlign: 'right',
              }}>
              $872
            </Text>
            <View
              style={{
                justifyContent: 'flex-end',
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 8,
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
        <View>
          <LinearProgress style={{height: 1}} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
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
              Food & Drink
            </Text>
            <Text
              t4
              style={{
                color: '#FFFFFFCC',
                fontSize: 12,
                fontStyle: 'normal',
                lineHeight: 16,
              }}>
              $704 Last month
            </Text>
          </View>
          <View>
            <Text
              t8
              style={{
                color: '#FFF',
                fontSize: 18,
                fontStyle: 'normal',
                lineHeight: 19,
                textAlign: 'right',
              }}>
              $872
            </Text>
            <View
              style={{
                justifyContent: 'flex-end',
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 8,
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
        <View>
          <LinearProgress style={{height: 1}} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
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
              Food & Drink
            </Text>
            <Text
              t4
              style={{
                color: '#FFFFFFCC',
                fontSize: 12,
                fontStyle: 'normal',
                lineHeight: 16,
              }}>
              $704 Last month
            </Text>
          </View>
          <View>
            <Text
              t8
              style={{
                color: '#FFF',
                fontSize: 18,
                fontStyle: 'normal',
                lineHeight: 19,
                textAlign: 'right',
              }}>
              $872
            </Text>
            <View
              style={{
                justifyContent: 'flex-end',
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 8,
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
        <TouchableOpacity
          style={{
            width: 326,
            height: 48,
            borderRadius: 24,
            backgroundColor: '#A285E0',
            justifyContent: 'center',
            marginBottom: 16,
          }}>
          <Text h6 style={{fontSize: 16, lineHeight: 18, color: '#FFF'}}>
            +Add a Category
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.secondContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            marginTop: 74,
          }}>
          <View>
            <Text
              t8
              style={{
                color: '#6434CB',
                fontSize: 16,
                fontStyle: 'normal',
                lineHeight: 21,
                textAlign: 'left',
                marginTop: 8,
              }}>
              Everything Else
            </Text>
            <Text
              t4
              style={{
                color: '#6434CB',
                fontSize: 12,
                fontStyle: 'normal',
                lineHeight: 16,
              }}>
              $5,631 Last month
            </Text>
          </View>
          <View>
            <Text
              t8
              style={{
                color: '#6434CB',
                fontSize: 18,
                fontStyle: 'normal',
                lineHeight: 19,
                textAlign: 'right',
              }}>
              $872
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
                <EditBlueIcon />
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                  t4
                  style={{
                    color: '#6434CB',
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  firstContainer: {
    width: 350,
    flexDirection: 'column',
    borderRadius: 24,
    backgroundColor: '#6434CB',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 16,
    zIndex: 1,
    gap: 10,
    alignItems: 'center',
  },
  secondContainer: {
    position: 'absolute',
    bottom: -72,
    width: 350,
    flexDirection: 'row',
    borderRadius: 24,
    backgroundColor: '#C0A3FF',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 16,
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

export default PlannedComponent;
