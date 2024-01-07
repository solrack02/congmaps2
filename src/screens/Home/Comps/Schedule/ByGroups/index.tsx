import React from "react";
import { stlCardForm, stlIpt1 } from "../../Assigns/List/stlCards";
import { Text, TouchableOpacity, View, ViewStyle } from "react-native";
import { LoopCards } from "./LoopCards";
import { stlBtnBack } from "../../../../Print/A2_View";
import { Picker } from "@react-native-picker/picker";
import { useData } from "../../../../../config/centralData";
import { toTime } from "../../../../Print/Comps/AssignmentsList";
import { InitFunction } from "@morfos/renders";
import { getCards } from "../../Cards/actions/getCards";

export const ByGroups = () => {
  // const btnSave = () => setAssignments();
  // const dateNow = new Date();

  const [sttPick, setPick]: any = React.useState();
  const [sttValues, setValues]: any = React.useState();
  const [sttCyle, setCycle] = React.useState("--");
  // ----------- set Data
  // getData('currCycle').then((res: any) => {
  //   setCycle(res);
  // });

  const objOpenedCards: any = {};

  const arrGroups = useData((ct) => {
    const objDates: any = {};
    const arrAllAssigns = ct.projectData.assignments?.list ?? [];

    const filterByCycle = arrAllAssigns.filter((currCard: any) => {
      // console.log({ sttCyle });
      // console.log(currCard.cycleID);

      return currCard.cycleID === sttCyle;
    });

    filterByCycle.sort((a: any, b: any) => Number(a.card) - Number(b.card));
    // console.log({ filterByCycle });

    function groupBy(list, keyGetter) {
      const map = new Map();
      list.forEach((item) => {
        const key = keyGetter(item);
        const collection = map.get(key);
        if (!collection) {
          map.set(key, [item]);
        } else {
          collection.push(item);
        }
      });
      return map;
    }

    const groupByGroup = groupBy(filterByCycle, (curr) => curr.card);

    // console.log({ groupByGroup });

    // objDates[currCard.cardNumber] = 0;
    return groupByGroup ?? [];
  });

  // arrDates.sort((a: any, b: any) => a[1] - b[1]);

  // const getTxt = (txt: string) => {
  //   setPick(txt);
  //   setStorage('currCycle', txt);
  // };

  // const getData2 = async (path: string) => {
  //   try {
  //     const value = await AsyncStorage.getItem(path);
  //     if (value !== null) {
  //       setValues(value);
  //     }
  //   } catch (error) {}
  // };

  // getData2("currCycle");

  // const condValuePicker = sttPick ?? sttValues;

  // const pckr1b = {
  //   onValueChange: (txt: string) => getTxt(txt),
  //   selectedValue: condValuePicker,
  //   placeholder: '...Selecione',
  //   style: [stlIpt1, { width: 220, marginBottom: 60 }],
  // };

  // const nextCards = arrGroups.map(i => (
  //   <View
  //     style={{
  //       marginRight: 10,
  //       marginBottom: 10,
  //       width: 34,
  //       height: 34,
  //       borderWidth: 2,
  //       borderColor: '#333',
  //       alignItems: 'center',
  //       justifyContent: 'center',
  //     }}
  //   >
  //     <Text>{i[0]}</Text>
  //   </View>
  // ));

  const newArr: [] = [];
  arrGroups.forEach((i, e) => {
    // console.log({ i, e });
    i.sort((a: any, b: any) => b.endTime - a.endTime);
    newArr.push({ label: e, list: i });
  });

  const styleSquare: ViewStyle = {
    marginRight: 10,
    marginBottom: 10,
    width: "100%",
    maxHeight: 124,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#333",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 4,
  };
  // console.log({ newArr });
  const toRenderList = newArr.map((i, idx) => {
    return (
      <View key={idx} style={styleSquare}>
        <View style={{ flexDirection: "row", marginBottom: 5 }}>
          <Text
            lineBreakMode="tail"
            numberOfLines={1}
            style={{ marginRight: 3, maxWidth: 110, fontSize: 12 }}
          >
            Cartão
          </Text>
          <Text style={{ fontSize: 12, fontWeight: "bold" }}>
            {/* {i.list.length} */}
            {i.label}
          </Text>
        </View>
        <View>
          {i.list.map((e, id) => {
            // console.log({ e });
            return (
              <View key={id} style={stlRow}>
                <Text
                  lineBreakMode="tail"
                  numberOfLines={1}
                  style={{ fontSize: 11, maxWidth: 100 }}
                >
                  {e.group} -
                </Text>
                <Text
                  lineBreakMode="tail"
                  numberOfLines={1}
                  style={{ fontSize: 11, maxWidth: 160 }}
                >
                  {e.end}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
    );
  });

  return (
    <>
      <View style={stlCardForm}>
        <View>
          {/* <Picker {...pckr1b}>
          {arrCycles.map(i => {
            return <Picker.Item value={i.docId} label={i.cycle} />;
          })}
        </Picker> */}
        </View>

        <Text>Por Grupo (Apenas do Ciclo Selecionado)</Text>
        <View style={stlRow}>{toRenderList}</View>
      </View>
    </>
  );
};

export const arrGroupDays = [
  "Segunda (Manhã)",
  "Segunda (Tarde)",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
  "Domingo (saída 1)",
  "Domingo (saída 2)",
  "Domingo (saída 3)",
  "Domingo (saída 4)",
  "Domingo (saída 5)",
];

// export const getAllStorage = async () => {
//   try {
//     const keys = await AsyncStorage.getAllKeys();
//     const value = await AsyncStorage.multiGet(keys);

//     if (value !== null) {
//       // value previously stored
//       // console.log({ value });
//     }
//   } catch (error) {
//     console.log({ error });
//     // error reading value
//   }
// };

// export const getData = async (path: string) => {
//   try {
//     const value = await AsyncStorage.getItem(path);
//     if (value !== null) {
//       // value previously stored
//       // console.log({ value: value[0][0] });
//       return value;
//     }
//   } catch (error) {
//     console.log({ error });
//     // error reading value
//   }
// };

// export const setStorage = async (propName: string, dataStorage: any) => {
//   await AsyncStorage.setItem(propName, dataStorage);
// };

// export const clearData = async () => {
//   try {
//     const value = await AsyncStorage.clear();
//     if (value !== null) {
//       // value previously stored
//       // console.log({ value });
//     }
//   } catch (error) {
//     console.log({ error });
//     // error reading value
//   }
// };

// const btnClear = () => clearData();

const stlRow: ViewStyle = {
  flexDirection: "row",
  flexWrap: "wrap",
  width: "100%",
};
const stlContainer = {
  backgroundColor: "white",
  marginBottom: 60,
  paddingHorizontal: 10,
  width: 200,
};
