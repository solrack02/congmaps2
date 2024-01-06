import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import {
  Btn1,
  Btn2,
  stlCardForm,
  stlIpt1,
  stlIpt2,
  stlRow,
  stlTxtLight,
} from '../List/stlCards';
import { setData, useData } from '../../../../../config/centralData';
import { updtAssignments } from '../actions/updt2Assignments';
import { assignments_Pth_Form } from '../paths';
import { Picker } from '@react-native-picker/picker';

type Ttype = 'group' | 'init' | 'end' | 'cycleID' | 'card';

// ------------------ set Function
export const Assignments_Form_Updt = () => {
  const valueChanges = useData(
    ct => ct.projectData.assignments.form.iptChanges,
  );
  const editData = useData(ct => ct.projectData.currForm.assignEditData);
  const arrCycles = useData(ct => {
    const objCycles = ct.projectData.cycles.list;
    const newArr = Object.values(objCycles);
    newArr.unshift({ docId: '', cycle: 'Ciclo...' });
    return newArr;
  });

  console.log({ arrCycles });
  const btnSave = () => {
    console.log('EDITAR');
    updtAssignments();
  };

  const getTxt = (txt: string, type: Ttype) =>
    setData({ path: `${assignments_Pth_Form}.iptChanges.${type}`, val: txt });

  const prps1 = {
    onChangeText: (txt: string) => getTxt(txt, 'group'),
    placeholder: 'Grupo',
    defaultValue: valueChanges.group ?? editData?.group ?? '',

    style: stlIpt1,
  };

  const prps2 = {
    onChangeText: (txt: string) => getTxt(txt, 'init'),
    defaultValue: valueChanges.init ?? editData?.init ?? '',
    placeholder: 'Início',
    style: stlIpt2,
  };

  const prps3 = {
    onChangeText: (txt: string) => getTxt(txt, 'end'),
    defaultValue: valueChanges.end ?? editData?.end ?? '',
    placeholder: 'Fim',
    style: stlIpt2,
  };

  const pckr1 = {
    onValueChange: (txt: string) => getTxt(txt, 'cycleID'),
    selectedValue: valueChanges.cycleID ?? editData?.cycleID,
    placeholder: 'Ciclo...',
    style: stlIpt1,
  };

  const pckr1b = {
    onValueChange: (txt: string) => getTxt(txt, 'card'),
    selectedValue: editData?.card ?? '',

    placeholder: '...Selecione',
    style: stlIpt1,
  };

  const pckr1c = {
    onValueChange: (txt: string) => getTxt(txt, 'group'),
    selectedValue: editData?.group ?? '',

    placeholder: '...Selecione',
    style: stlIpt1,
  };

  return (
    <View style={stlCardForm}>
      <Text style={{ fontSize: 14, fontWeight: '600' }}>
        Atualizar Designações
      </Text>
      <Picker {...pckr1}>
        {arrCycles.map(i => {
          // console.log({ i });
          return <Picker.Item value={i.docId} label={i.cycle} />;
        })}
      </Picker>
      <Picker {...pckr1b}>
        <Picker.Item value={''} label={'Cartão...'} />
        <Picker.Item value={'01'} label={'Cartão 1'} />
        <Picker.Item value={'02'} label={'Cartão 2'} />
        <Picker.Item value={'03'} label={'Cartão 3'} />
        <Picker.Item value={'04'} label={'Cartão 4'} />
        <Picker.Item value={'05'} label={'Cartão 5'} />
        <Picker.Item value={'06'} label={'Cartão 6'} />
        <Picker.Item value={'07'} label={'Cartão 7'} />
        <Picker.Item value={'08'} label={'Cartão 8'} />
        <Picker.Item value={'09'} label={'Cartão 9'} />
        <Picker.Item value={'10'} label={'Cartão 10'} />
        <Picker.Item value={'11'} label={'Cartão 11'} />
        <Picker.Item value={'12'} label={'Cartão 12'} />
        <Picker.Item value={'13'} label={'Cartão 13'} />
        <Picker.Item value={'14'} label={'Cartão 14'} />
        <Picker.Item value={'15'} label={'Cartão 15'} />
        <Picker.Item value={'16'} label={'Cartão 16'} />
        <Picker.Item value={'17'} label={'Cartão 17'} />
        <Picker.Item value={'18'} label={'Cartão 18'} />
        <Picker.Item value={'19'} label={'Cartão 19'} />
        <Picker.Item value={'20'} label={'Cartão 20'} />
        <Picker.Item value={'21'} label={'Cartão 21'} />
        <Picker.Item value={'22'} label={'Cartão 22'} />
        <Picker.Item value={'23'} label={'Cartão 23'} />
        <Picker.Item value={'24'} label={'Cartão 24'} />
      </Picker>

      <Picker {...pckr1c}>
        <Picker.Item value={''} label={'Grupo...'} />
        <Picker.Item value={'Antonio'} label={'Antonio'} />
        <Picker.Item value={'A. Lindoia'} label={'A. Lindoia'} />
        <Picker.Item value={'Criselidia'} label={'Criselidia'} />
        <Picker.Item value={'Laranjeiras I'} label={'Laranjeiras I'} />
        <Picker.Item value={'Laranjeiras II'} label={'Laranjeiras II'} />
        <Picker.Item value={'Tijucas'} label={'Tijucas'} />
        <Picker.Item value={'Todos os Grupos'} label={'Todos os Grupos'} />
      </Picker>
      <TextInput {...prps1} />
      <View style={stlRow}>
        <TextInput {...prps2} />
        <TextInput {...prps3} />
      </View>
      <TouchableOpacity style={Btn2} onPress={btnSave}>
        <Text style={stlTxtLight}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
};
