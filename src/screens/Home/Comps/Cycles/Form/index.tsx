import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { setData } from '../../../../../config/centralData';
import {
  Btn2,
  stlIpt1,
  stlIpt2,
  stlRow,
  stlTxtLight,
} from '../../Cards/List/stlCards';
import { setCycles } from '../actions/setCycles';
import { cycles_Pth_Form } from '../paths';
import { stlCardForm } from '../../Assigns/List/stlCards';

export const Cycles_Form = () => {
  const btnSave = () => setCycles();

  return (
    <View style={stlCardForm}>
      <Text style={{ fontSize: 14, fontWeight: '600' }}>
        Adicionar Ciclo de Cobertura de Território (Folha)
      </Text>
      <TextInput {...prps1} />
      <View style={stlRow}>
        <TextInput {...prps2} />
        <TextInput {...prps3} />
      </View>
      <TextInput {...prps4} />
      <TouchableOpacity style={Btn2} onPress={btnSave}>
        <Text style={stlTxtLight}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
};

type Ttype = 'cycle' | 'init' | 'end' | 'year';
const getTxt = (txt: string, type: Ttype) =>
  setData({ path: `${cycles_Pth_Form}.iptChanges.${type}`, val: txt });

const prps1 = {
  onChangeText: (txt: string) => getTxt(txt, 'cycle'),
  placeholder: 'Nome do Ciclo',
  style: { ...stlIpt1, width: 200 },
};

const prps2 = {
  onChangeText: (txt: string) => getTxt(txt, 'init'),
  placeholder: 'Início',
  style: { ...stlIpt2, width: 100 },
};

const prps3 = {
  onChangeText: (txt: string) => getTxt(txt, 'end'),
  placeholder: 'Fim',
  style: { ...stlIpt2, width: 100 },
};

const prps4 = {
  onChangeText: (txt: string) => getTxt(txt, 'year'),
  placeholder: 'Ano',
  style: { ...stlIpt2, width: 100 },
};
