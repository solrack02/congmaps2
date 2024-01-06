import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

import {
  Btn1,
  Btn2,
  stlCardForm,
  stlIpt1,
  stlIpt2,
  stlRow,
  stlTxtLight,
} from '../List/stlCards';
import { setData } from '../../../../../config/centralData';
import { setCard } from '../actions/setCard';
import { card_Pth_Form } from '../paths';

export const Card_Form = () => {
  const btnSave = () => setCard();

  const _pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    console.log({ result });
    const file = result.file;
    console.log({ file });
    // const newArr = [...condArr, file];
    const newArr = [file];

    setData({ path: `${card_Pth_Form}.iptChanges.imgCard`, val: newArr });
  };

  return (
    <View style={stlCardForm}>
      <Text style={{ fontSize: 14, fontWeight: '600' }}>Adicionar Cartão</Text>
      <TouchableOpacity style={Btn1} onPress={_pickDocument}>
        <Text style={stlTxtLight}>Add. Imagem</Text>
      </TouchableOpacity>
      <TextInput {...prps1} />
      <View style={stlRow}>
        {/* <TextInput {...prps2} />
        <TextInput {...prps3} /> */}
      </View>
      <TouchableOpacity style={Btn2} onPress={btnSave}>
        <Text style={stlTxtLight}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
};

type Ttype = 'cardNumber' | 'init';
const getTxt = (txt: string, type: Ttype) =>
  setData({ path: `${card_Pth_Form}.iptChanges.${type}`, val: txt });

const prps1 = {
  onChangeText: (txt: string) => getTxt(txt, 'cardNumber'),
  placeholder: 'Num. do Cartão',
  style: stlIpt1,
};

// const prps2 = {
//   onChangeText: (txt: string) => getTxt(txt, 'init'),
//   placeholder: 'Início',
//   style: stlIpt2,
// };

// const prps3 = {
//   onChangeText: (txt: string) => getTxt(txt, 'end'),
//   placeholder: 'Fim',
//   style: stlIpt2,
// };

// const pckr1 = {
//   onValueChange: (txt: string) => getTxt(txt, 'cycleID'),
//   placeholder: '...Selecione',
//   style: stlIpt1,
// };
