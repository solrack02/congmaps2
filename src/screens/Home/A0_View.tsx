// ----------- import Packs
import { goTo } from "@morfos/routes";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useData } from "../../config/centralData";
import { Assignments_Form_Set } from "./Comps/Assigns/Form_Set";
import { stlCardForm, stlIpt1, stlRow } from "./Comps/Assigns/List/stlCards";

import {
  Btn1,
  stlNav,
  stlTabs,
  stlTabsBar,
  stlTools,
} from "./Comps/Cards/List/stlCards";
import { Cycles_Form } from "./Comps/Cycles/Form";
import { OldCards } from "./Comps/Schedule/Form";
import { SimpleLineIcons } from "@expo/vector-icons";
import { ByGroups } from "./Comps/Schedule/ByGroups";

// import img01 from '../../../assets/cards/01.jpg';
// import img02 from '../../../assets/cards/02.jpg';
// import img03 from '../../../assets/cards/03.jpg';
// import img04 from '../../../assets/cards/04.jpg';
// import img05 from '../../../assets/cards/05.jpg';
// import img06 from '../../../assets/cards/06.jpg';
// import img07 from '../../../assets/cards/07.jpg';
// import img08 from '../../../assets/cards/08.jpg';
// import img09 from '../../../assets/cards/09.jpg';
// import img10 from '../../../assets/cards/10.jpg';
// import img11 from '../../../assets/cards/11.jpg';
// import img12 from '../../../assets/cards/12.jpg';
// import img13 from '../../../assets/cards/13.jpg';
// import img14 from '../../../assets/cards/14.jpg';
// import img15 from '../../../assets/cards/15.jpg';
// import img16 from '../../../assets/cards/16.jpg';
// import img17 from '../../../assets/cards/17.jpg';
// import img18 from '../../../assets/cards/18.jpg';
// import img19 from '../../../assets/cards/19.jpg';
// import img20 from '../../../assets/cards/20.jpg';
import { InitFunction } from "@morfos/renders";
import { getCards } from "./Comps/Cards/actions/getCards";

// ----------- import Internals
// const objAllImgs = {
//   '01': img01,
//   '02': img02,
//   '03': img03,
//   '04': img04,
//   '05': img05,
//   '06': img06,
//   '07': img07,
//   '08': img08,
//   '09': img09,
//   '10': img10,
//   '11': img11,
//   '12': img12,
//   '13': img13,
//   '14': img14,
//   '15': img15,
//   '16': img16,
//   '17': img17,
//   '18': img18,
//   '19': img19,
//   '20': img20,
// };

// ----------- import Internals

// ----------- export Component
export const A0_View = () => {
  const [sttTab, setTab] = React.useState("des");
  const condActiveTab = sttTab === "des";

  const storageCycle = window.localStorage.getItem("currCycle");
  console.log({ storageCycle });

  React.useEffect(() => {
    // document.body.style.zoom = '80%';
    // document.querySelector("[name='viewport']").remove();

    const viewport = document.querySelector("[name='viewport']");
    const content = `width=device-width, initial-scale=1.0`;
    viewport && viewport.setAttribute("content", content);
  }, []);
  // ----------- set Data
  // const loader = useData(ct => ct.scInfo.A1.msg.loading);

  // ----------- set Actions
  // const gotoB2 = () => goTo('info-board')

  // ----------- set Return
  return (
    <InitFunction setFunction={getCards}>
      <View style={{ flex: 1, padding: 20 }}>
        <View style={stlNav}>
          <View style={stlTabsBar}>
            <TouchableOpacity
              style={[
                stlIpt1,
                stlTabs,
                { borderBottomColor: condActiveTab ? "white" : "black" },
              ]}
              onPress={() => {
                setTab("des");
              }}
            >
              <Text style={{ fontWeight: "bold" }}>Designar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                stlIpt1,
                stlTabs,
                { borderBottomColor: condActiveTab ? "black" : "white" },
              ]}
              onPress={() => {
                setTab("rel");
              }}
            >
              <Text style={{ fontWeight: "bold" }}>Relatórios</Text>
            </TouchableOpacity>
          </View>

          <View style={stlTools}>
            <TouchableOpacity style={[Btn1]} onPress={() => goTo("maps")}>
              <SimpleLineIcons name="map" size={24} color="white" />
            </TouchableOpacity>

            <TouchableOpacity style={[Btn1]} onPress={() => goTo("print")}>
              <SimpleLineIcons name="printer" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {condActiveTab ? (
          <>
            {/* // */}
            <Assignments_Form_Set />

            {/* // */}
            <ByGroups />
          </>
        ) : (
          <View style={{ padding: 20 }}>
            {/* // */}
            <OldCards />

            {/* // */}
            <MostUseds />

            {/* // */}
            <Cycles_Form />
          </View>
        )}
      </View>
    </InitFunction>
  );
};

const MostUseds = () => {
  const arrUsed = useData((ct) => ct.projectData.mostUsed.list);
  const usedCards = arrUsed.map((i) => {
    const numUsed = i[1];

    const colors: any = {
      1: { c1: "#c3eb99", c2: "#89ae70" },
      2: { c1: "#c3eb99", c2: "#89ae70" },

      3: { c1: "#f5e273", c2: "#9e7e56" },
      4: { c1: "#f5e273", c2: "#9e7e56" },

      5: { c1: "#f88a6f", c2: "#d83f3f" },

      6: { c1: "#962727", c2: "#320f0f", c3: "#ffc989" },
    };
    const currPalette = colors[numUsed];

    return (
      <View
        style={{
          marginRight: 10,
          marginBottom: 10,
          width: 34,
          height: 34,
          borderWidth: 2,
          borderColor: currPalette ? currPalette?.c2 : "#333",
          backgroundColor: currPalette ? currPalette?.c1 : "#fff",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 11,
            position: "absolute",
            top: -1,
            left: 2,
            color: currPalette ? currPalette?.c3 : "#333",
          }}
        >
          {i[0]}
        </Text>
        <Text
          style={{
            fontWeight: 600,
            fontSize: 14,
            position: "absolute",
            bottom: -1,
            right: 2,
            color: currPalette ? currPalette?.c3 : "#333",
          }}
        >
          {i[1]}
        </Text>
      </View>
    );
  });

  return (
    <View style={stlCardForm}>
      <Text>Mais Usados</Text>
      <View style={[stlRow, { flexWrap: "wrap" }]}>{usedCards}</View>
    </View>
  );
};
