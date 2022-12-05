import React from 'react';
import {View, Text} from 'react-native';
import {globalStyles} from '../styles/global';

export default function ReviewDetails({navigation}) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>{navigation.getParam('title')}</Text>
      <Text style={globalStyles.titleText}>
        {navigation.getParam('rating')}
      </Text>
      <Text style={globalStyles.titleText}>{navigation.getParam('body')}</Text>
    </View>
  );
}
