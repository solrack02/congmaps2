import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import {
  Btn1,
  Btn2,
  stlCardForm,
  stlIpt1,
  stlIpt2,
  stlRow,
  stlTxtLight,
} from "../List/stlCards";
import { setData, useData } from "../../../../../config/centralData";
import { assignments_Pth_Form } from "../paths";
import { Picker } from "@react-native-picker/picker";
import { setAssignments } from "../actions/setAssignments";

type Ttype = "group" | "init" | "end" | "cycleID" | "card";

// ------------------ set Function
export const Assignments_Form_Set = () => {
  const arrCycles = useData((ct) => {
    const objCycles = ct.projectData.cycles.list;
    const newArr = Object.values(objCycles);
    newArr.unshift({ docId: "", cycle: "...Selecione" });
    return newArr;
  });

  const btnSave = () => setAssignments();

  const getTxt = (txt: string, type: Ttype) =>
    setData({ path: `${assignments_Pth_Form}.iptChanges.${type}`, val: txt });

  const prps1 = {
    onChangeText: (txt: string) => getTxt(txt, "group"),
    placeholder: "Grupo",

    style: stlIpt1,
  };

  const prps2 = {
    onChangeText: (txt: string) => getTxt(txt, "init"),
    placeholder: "Início",
    style: stlIpt2,
  };

  const prps3 = {
    onChangeText: (txt: string) => getTxt(txt, "end"),
    placeholder: "Fim",
    style: stlIpt2,
  };

  const pckr1 = {
    onValueChange: (txt: string) => getTxt(txt, "cycleID"),
    placeholder: "...Selecione",
    style: stlIpt1,
  };

  const pckr1b = {
    onValueChange: (txt: string) => getTxt(txt, "card"),
    placeholder: "...Selecione",
    style: stlIpt1,
  };

  const pckr1c = {
    onValueChange: (txt: string) => getTxt(txt, "group"),

    placeholder: "...Selecione",
    style: stlIpt1,
  };

  return (
    <View style={stlCardForm}>
      <Text style={{ fontSize: 14, fontWeight: "600" }}>Nova Designação</Text>
      <Picker {...pckr1}>
        <Picker.Item value={""} label={"Selecione...."} />
        {arrCycles.map((i, idx) => {
          return <Picker.Item key={idx} value={i.docId} label={i.cycle} />;
        })}
      </Picker>
      <Picker {...pckr1b}>
        <Picker.Item value={""} label={"Selecione..."} />
        <Picker.Item value={"01"} label={"Cartão 1"} />
        <Picker.Item value={"02"} label={"Cartão 2"} />
        <Picker.Item value={"03"} label={"Cartão 3"} />
        <Picker.Item value={"04"} label={"Cartão 4"} />
        <Picker.Item value={"05"} label={"Cartão 5"} />
        <Picker.Item value={"06"} label={"Cartão 6"} />
        <Picker.Item value={"07"} label={"Cartão 7"} />
        <Picker.Item value={"08"} label={"Cartão 8"} />
        <Picker.Item value={"09"} label={"Cartão 9"} />
        <Picker.Item value={"10"} label={"Cartão 10"} />
        <Picker.Item value={"11"} label={"Cartão 11"} />
        <Picker.Item value={"12"} label={"Cartão 12"} />
        <Picker.Item value={"13"} label={"Cartão 13"} />
        <Picker.Item value={"14"} label={"Cartão 14"} />
        <Picker.Item value={"15"} label={"Cartão 15"} />
        <Picker.Item value={"16"} label={"Cartão 16"} />
        <Picker.Item value={"17"} label={"Cartão 17"} />
        <Picker.Item value={"18"} label={"Cartão 18"} />
        <Picker.Item value={"19"} label={"Cartão 19"} />
        <Picker.Item value={"20"} label={"Cartão 20"} />
        <Picker.Item value={"21"} label={"Cartão 21"} />
        <Picker.Item value={"22"} label={"Cartão 22"} />
        <Picker.Item value={"23"} label={"Cartão 23"} />
        <Picker.Item value={"24"} label={"Cartão 24"} />
      </Picker>

      <Picker {...pckr1c}>
        <Picker.Item value={""} label={"Grupo..."} />

        <Picker.Item value={"Antonio (seg)"} label={"Antonio (seg)"} />
        <Picker.Item value={"Antonio (ter)"} label={"Antonio (ter)"} />
        <Picker.Item value={"Antonio (qua)"} label={"Antonio (qua)"} />
        <Picker.Item value={"Antonio (qui)"} label={"Antonio (qui)"} />
        <Picker.Item value={"Antonio (sex)"} label={"Antonio (sex)"} />

        <Picker.Item value={"A. Lindoia (sab)"} label={"A. Lindoia (sab)"} />

        <Picker.Item value={"A. Lindoia (dom)"} label={"A. Lindoia (dom)"} />
        <Picker.Item value={"Criselidia"} label={"Criselidia"} />
        <Picker.Item value={"Laranjeiras I"} label={"Laranjeiras I"} />
        <Picker.Item value={"Laranjeiras II"} label={"Laranjeiras II"} />
        <Picker.Item value={"Tijucas"} label={"Tijucas"} />

        <Picker.Item value={"Todos os Grupos"} label={"Todos os Grupos"} />
      </Picker>

      {/* <TextInput {...prps1} /> */}
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
