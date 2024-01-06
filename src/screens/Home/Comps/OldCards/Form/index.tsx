import React from 'react';
import { stlCardForm, stlIpt1 } from '../../Assigns/List/stlCards';
import { Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { LoopCards } from './LoopCards';
import { stlBtnBack } from '../../../../Print/A2_View';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';
import { useData } from '../../../../../config/centralData';
import { toTime } from '../../../../Print/Comps/AssignmentsList';

export const Schedule_Form = () => {
  // const btnSave = () => setAssignments();
  // const dateNow = new Date();

  const [sttPick, setPick]: any = React.useState();
  const [sttValues, setValues]: any = React.useState();
  const arrCycles = useData(ct => {
    const objCycles = ct.projectData.cycles.list;
    const newArr = Object.values(objCycles);
    newArr.unshift({ docId: '', cycle: '...Selecione' });
    return newArr;
  });
  const allDates = useData(ct => {
    const objDates: any = {};
    const arrCards = Object.values(ct.projectData.cards.list);
    arrCards.forEach((currCard: any) => {
      const cycleUpdtData = currCard['JUzJw35eYp94bdk6herx'];

      const crdNb = currCard.cardNumber;
      const condCard1 =
        crdNb === '01' ||
        crdNb === '02' ||
        crdNb === '08' ||
        crdNb === '10' ||
        crdNb === '11' ||
        crdNb === '18' ||
        crdNb === '19' ||
        crdNb === '20';
      const condCard2 = currCard.state === 'closed';
      const cardPass = !condCard1 && condCard2;
      const condEndDate = cycleUpdtData && cycleUpdtData.lastDate;
      // Object.values(currCard).forEach(e => {
      //   const condEndDate = e.lastDate;

      if (!!condEndDate) {
        if (cardPass) objDates[currCard.cardNumber] = toTime(condEndDate);
      } else {
        if (cardPass) objDates[currCard.cardNumber] = 0;
      }
    });

    return objDates;
  });
  const arrDates = Object.entries(allDates);
  arrDates.sort((a: any, b: any) => a[1] - b[1]);

  const getTxt = (txt: string) => {
    setPick(txt);
    setStorage('currCycle', txt);
  };

  const getData2 = async (path: string) => {
    try {
      const value = await AsyncStorage.getItem(path);
      if (value !== null) {
        setValues(value);
      }
    } catch (error) {}
  };

  getData2('currCycle');

  const condValuePicker = sttPick ?? sttValues;

  const pckr1b = {
    onValueChange: (txt: string) => getTxt(txt),
    selectedValue: condValuePicker,
    placeholder: '...Selecione',
    style: [stlIpt1, { width: 220, marginBottom: 60 }],
  };

  const nextCards = arrDates.map(i => (
    <View
      style={{
        marginRight: 10,
        width: 34,
        height: 34,
        borderWidth: 2,
        borderColor: '#333',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>{i[0]}</Text>
    </View>
  ));

  return (
    <View style={stlCardForm}>
      <View>
        <Picker {...pckr1b}>
          {arrCycles.map(i => {
            // console.log({ i });
            return <Picker.Item value={i.docId} label={i.cycle} />;
          })}
        </Picker>
      </View>
      <View style={stlRow}>
        {arrGroupDays.map(weekday => {
          return (
            <View style={stlContainer}>
              <Text>{weekday}</Text>
              <LoopCards weekday={weekday} />
            </View>
          );
        })}
      </View>
      <View style={stlRow}>
        <TouchableOpacity style={stlBtnBack} onPress={btnClear}>
          <Text style={{ color: 'white' }}>Limpar</Text>
        </TouchableOpacity>
      </View>
      <Text>Mais Antigos</Text>
      <View style={stlRow}>
        <View style={{ flexDirection: 'row' }}>{nextCards}</View>
      </View>
    </View>
  );
};

export const arrGroupDays = [
  'Segunda (Manhã)',
  'Segunda (Tarde)',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sábado',
  'Domingo (saída 1)',
  'Domingo (saída 2)',
  'Domingo (saída 3)',
  'Domingo (saída 4)',
  'Domingo (saída 5)',
];

export const getAllStorage = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const value = await AsyncStorage.multiGet(keys);

    if (value !== null) {
      // value previously stored
      // console.log({ value });
    }
  } catch (error) {
    console.log({ error });
    // error reading value
  }
};

export const getData = async (path: string) => {
  try {
    const value = await AsyncStorage.getItem(path);
    if (value !== null) {
      // value previously stored
      // console.log({ value: value[0][0] });
      return value;
    }
  } catch (error) {
    console.log({ error });
    // error reading value
  }
};

export const setStorage = async (propName: string, dataStorage: any) => {
  await AsyncStorage.setItem(propName, dataStorage);
};

export const clearData = async () => {
  try {
    const value = await AsyncStorage.clear();
    if (value !== null) {
      // value previously stored
      // console.log({ value });
    }
  } catch (error) {
    console.log({ error });
    // error reading value
  }
};

const btnClear = () => clearData();

const stlRow: ViewStyle = { flexDirection: 'row', flexWrap: 'wrap' };
const stlContainer = {
  backgroundColor: 'white',
  marginBottom: 60,
  paddingHorizontal: 10,
  width: 200,
};
