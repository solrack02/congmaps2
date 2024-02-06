// ----------- import Packs
import React from "react";
import { goTo } from "@morfos/routes";
import { InitFunction } from "@morfos/renders";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";

// ----------- import Internals
import { useData } from "../../config/centralData";
import { getAssigns } from "./actions/getAssigns";
import { Btn1, stlIpt1 } from "../Home/Comps/Assigns/List/stlCards";
import { AssignmentsList } from "./Comps/AssignmentsList";
import { Assignments_Form_Updt } from "../Home/Comps/Assigns/Form_Updt";
import { Assignments_Form_Set } from "../Home/Comps/Assigns/Form_Set";
import { Picker } from "@react-native-picker/picker";

const css = require("./styles.css");
console.log({ css });

// ----------- export Component
export const A2_View = () => {
  const [sttValues, setvalues] = React.useState("--");
  const [sttPick, setPick]: any = React.useState("Wk86fCmDozTgrA5uTw53");
  const [sttTypeForm, setTypeForm] = React.useState();

  // ----------- set Data
  // getData("currCycle").then((res: any) => {
  //   setvalues(res);
  // });

  const condList = useData((ct) => ct?.A2?.list.condList);

  const yearString = useData((ct) => {
    const ctDataList = ct.projectData.cycles.list;

    const arrList = Object.values(ctDataList);
    const cycleInfo =
      arrList.find((i: any) => {
        return i.docId === sttPick;
      }) ?? [];
    console.log({ cycleInfo });
    const currYear = cycleInfo.year;
    return currYear;
  });

  React.useEffect(() => {
    // document.body.style.zoom = '80%';
    // document.querySelector("[name='viewport']").remove();

    const viewport = document.querySelector("[name='viewport']");
    const content = `width=100, initial-scale=0.4, user-scalable=yes`;
    viewport && viewport.setAttribute("content", content);
  }, []);

  const getTxt = (txt: string) => {
    setPick(txt);
    // setStorage("currCycle", txt);
    window.localStorage.setItem("currCycle", txt);
  };

  const condValuePicker = sttPick ?? sttValues;
  const arrCycles = useData((ct) => {
    const objCycles = ct.projectData.cycles.list;
    const newArr = Object.values(objCycles);
    newArr.unshift({ docId: "", cycle: "Selecione..." });
    return newArr;
  });

  const pckr1b = {
    onValueChange: (txt: string) => {
      getTxt(txt);
      getAssigns();
    },
    selectedValue: condValuePicker,
    placeholder: "...Selecione",
    style: [stlIpt1, { width: 220 }],
  };

  // ----------- set Actions
  const btnGoBack = () => goTo("home");

  // ----------- set Return
  return (
    // <InitFunction setFunction={getAssigns}>
    <View style={{ flex: 1, margin: 20 }}>
      <div className="no-print">
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            borderColor: 2,
            borderWidth: 2,
            padding: 10,
          }}
        >
          <TouchableOpacity style={stlBtnBack} onPress={btnGoBack}>
            <Text style={{ color: "white" }}>Voltar</Text>
          </TouchableOpacity>

          <Picker {...pckr1b}>
            {arrCycles.map((i) => {
              return <Picker.Item value={i.docId} label={i.cycle} />;
            })}
          </Picker>
        </View>
      </div>
      {!condList && <ActivityIndicator size={"small"} color={"red"} />}
      {condList && (
        <>
          {/* <Schedule_Form /> */}
          {sttTypeForm === "new" && <Assignments_Form_Set />}
          {sttTypeForm === "update" && <Assignments_Form_Updt />}

          <div className={"top-print"}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 30,
                textAlign: "center",
                marginVertical: 20,
              }}
            >
              REGISTRO DE DESIGNAÇÃO DE TERRITÓRIO
            </Text>

            <View style={{ textAlign: "left", marginTop: 20 }}>
              <Text
                style={{
                  textAlign: "left",
                  fontWeight: "bold",
                  fontSize: 16,
                  marginBottom: 20,
                }}
              >
                Ano de Serviço: {yearString}
              </Text>
            </View>
          </div>
        </>
      )}
      {condList && (
        <AssignmentsList sttTypeForm={sttTypeForm} setTypeForm={setTypeForm} />
      )}
    </View>
    // </InitFunction>
  );
};

export const allCardNumbers = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
];

export const stlBtnBack = [Btn1, { width: 150, marginTop: 4 }];
