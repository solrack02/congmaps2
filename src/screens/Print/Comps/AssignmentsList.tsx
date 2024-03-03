import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { stlPrintListItem, stlCardNum, stlPrintContainer } from "../styles";
import { stlAssign, stlGroup, stlDate } from "../styles";
import { setData, useData } from "../../../config/centralData";
import { allCardNumbers } from "../A2_View";
// import { getData } from '../../Home/Comps/Schedule/Form';

export const AssignmentsList = (props: any) => {
  const { setTypeForm } = props;

  const [sttValues, setvalues] = React.useState("--");
  const currCycle = window.localStorage.getItem("currCycle");

  React.useEffect(() => {
    const isEmpty = !currCycle;
    !isEmpty && setvalues(currCycle);
    console.log("Effect", { currCycle, sttValues });
  }, [sttValues]);
  // getData('currCycle').then((res: any) => {
  //   setvalues(res);
  // });

  let arrLastDate: any = [];
  const allCardsInfo = useData((ct) => ct?.projectData.cards.list);
  const allItems = useData((ct) => ct?.A2?.list.itemsInfo);

  const cardList = allCardNumbers.map((cardNum: {}, idx: number) => {
    const allAssigns = Object.values(allItems);
    arrLastDate = [];
    const foundAssign = allAssigns.filter((i: any) => {
      const toCompare = i.card;
      // i.endTime = toTime(i.end);
      i.initTime = toTime(i.init);
      const condCatch = toCompare === cardNum;
      if (condCatch) {
        !!i.end && arrLastDate.push(i.end);
      }
      return condCatch;
    });

    foundAssign.sort((a, b) => a.initTime - b.initTime);
    const assignListWithEmpty = [...foundAssign];
    const numCols = [0, 1, 2, 3];
    numCols.map((col) => {
      const checkContent = !!assignListWithEmpty[col];

      !checkContent && assignListWithEmpty.push({ [col]: "empty" });
    });

    const assignList = assignListWithEmpty.map((e: any, idx) => {
      const btnEdit = () => {
        const checkEditData = Object.values(e)[0] === "empty";

        const condType = checkEditData ? "new" : "update";
        setTypeForm(condType);
        setData({ path: "projectData.assignments.form.iptChanges", val: {} });
        setData({ path: "projectData.currForm.assignEditData", val: e });
      };

      if (assignListWithEmpty) {
        return (
          <TouchableOpacity style={stlAssign} onPress={btnEdit}>
            <View style={stlGroup}>
              <Text style={{ lineHeight: 12 }}>{e.group ?? "--"}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={stlDate}>{e.init ?? "--"}</Text>
              <Text style={[stlDate, { borderRightWidth: 0 }]}>
                {e.end ?? "--"}
              </Text>
            </View>
          </TouchableOpacity>
        );
      }
    });

    const cardFound = Object.values(allCardsInfo).find((i: any) => {
      return i.cardNumber === cardNum;
    });

    console.log({ sttValues });
    console.log({ cardFound });

    const condLast =
      cardFound && cardFound[sttValues] && cardFound[sttValues].lastDate;
    const lastDateStr = condLast ?? "--";

    return (
      <View style={stlPrintListItem} key={idx}>
        <View style={stlCardNum}>
          <Text>{cardNum}</Text>
        </View>
        <View style={[stlCardNum, { width: 82 }]}>
          <Text>{lastDateStr}</Text>
        </View>
        {assignList}
      </View>
    );
  });

  return <View style={stlPrintContainer}>{cardList}</View>;
};

export const toTime = (mystring: string) => {
  // const tempStr = '10/10/2023';
  if (mystring) {
    const slice = mystring.split("/");

    const newDate = new Date(
      Number(slice[2]),
      Number(slice[1]),
      Number(slice[0])
    );

    const toMils = newDate.getTime();

    return toMils;
  }
};
