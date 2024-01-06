// ----------- import Packs
import { goTo } from '@morfos/routes';
import React from 'react';
import { Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { MapComp } from '../../common/Comps/MapComp';
import { useData } from '../../config/centralData';
import { Card_List } from '../Home/Comps/Cards/List';
import { Btn1, stlTxtLight } from '../Home/Comps/Cards/List/stlCards';

// ----------- import Internals

// ----------- import Internals

// ----------- export Component
export const A1_View = () => {
  // const kmlData = useData(ct => ct.projectData.cards.selected.kml);
  const [sttToggle, setToggle] = React.useState(true);

  // React.useEffect(() => {
  //   setData(kmlData);
  // }, [kmlData]);
  // ----------- set Data
  // const loader = useData(ct => ct.scInfo.A1.msg.loading);

  // ----------- set Actions
  // const gotoB2 = () => goTo('info-board')

  // ----------- set Return
  return (
    <>
      {/* <Card_List /> */}
      <TouchableOpacity style={Btn1} onPress={() => goTo('home')}>
        <Text style={stlTxtLight}>Voltar</Text>
      </TouchableOpacity>
      <MapComp />
      <TouchableOpacity onPress={() => setToggle(!sttToggle)}>
        <Text>Fechar</Text>
      </TouchableOpacity>
      {sttToggle && (
        <View style={stlSideBar}>
          <Card_List />
        </View>
      )}
    </>
  );
};

const stlSideBar: ViewStyle = {
  width: 320,
  height: '100%',
  shadowColor: '#000',
  shadowOpacity: 0.6,
  shadowRadius: 20,
  backgroundColor: 'white',
  padding: 20,
  position: 'absolute',
  right: 0,
  top: 0,
};
