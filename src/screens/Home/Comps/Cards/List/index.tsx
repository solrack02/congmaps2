import { InitFunction } from '@morfos/renders';
import { goTo } from '@morfos/routes';
import React from 'react';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { setData, useData } from '../../../../../config/centralData';
import { getCards } from '../actions/getCards';
import { stlCards, stlCardView, stlTxtLight } from './stlCards';

export const Card_List = () => {
  const loading = useData(ct => ct.projectData.cards.loading);
  const cards = useData(ct => ct.projectData.cards.list);

  const arrCards = Object.values(cards);

  const loopList = arrCards.map(i => {
    const btnCard = () => {
      setData({ path: 'projectData.cards.selected.kml', val: i.kmlUrl });
      // location.reload();
    };

    return (
      <TouchableOpacity onPress={btnCard}>
        <View style={stlCards}>
          <Text style={stlTxtLight}>{i.cardNumber}</Text>
        </View>
      </TouchableOpacity>
    );
  });

  return (
    <InitFunction setFunction={getCards}>
      <View>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <>
            <View style={stlCardView}>{loopList}</View>
          </>
        )}
      </View>
    </InitFunction>
  );
};
