import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { stlCards, stlTxtLight } from './stlCards';

export const Assignments_List = () => {
  const loopList = [1, 2, 3].map(i => {
    const btnCard = () => {};

    return (
      <TouchableOpacity onPress={btnCard}>
        <View style={stlCards}>
          <Text style={stlTxtLight}>{i}</Text>
        </View>
      </TouchableOpacity>
    );
  });

  return <View style={{ flexDirection: 'row' }}>{loopList}</View>;
};
