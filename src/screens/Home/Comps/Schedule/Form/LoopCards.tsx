// import React from 'react';
// import { Image, View, ViewStyle } from 'react-native';
// import { stlIpt1 } from '../../Assigns/List/stlCards';
// import { useData } from '../../../../../config/centralData';
// import { Picker } from '@react-native-picker/picker';
// import { arrGroupDays, getAllStorage, setStorage } from './index';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export const LoopCards = (props: any) => {
//   const { weekday } = props;
//   const pathVar = `${weekday}`;
//   const [sttPick, setPick]: any = React.useState();
//   const [sttVals, setVals]: any = React.useState();
//   const imgDefault =
//     'https://thumbs.gfycat.com/BriefUnhappyChimneyswift-size_restricted.gif';

//   const getAllStorage2 = async () => {
//     try {
//       const keys = await AsyncStorage.getAllKeys();
//       const value = await AsyncStorage.multiGet(keys);

//       if (value !== null) {
//         setVals(value);
//       }
//     } catch (error) {
//       console.log({ error });
//       // error reading value
//     }
//   };

//   React.useEffect(() => {
//     getAllStorage2();
//   }, [sttPick]);

//   const arrCards = useData(ct => {
//     const cardList = ct.projectData.cards.list;
//     return Object.values(cardList);
//   });

//   const getTxt = (txt: string) => {
//     if (weekday === arrGroupDays[0]) condGroup = 'Antonio';
//     if (weekday === arrGroupDays[1]) condGroup = 'Águas de Lindoia';
//     if (weekday === arrGroupDays[2]) condGroup = 'Antônio';
//     if (weekday === arrGroupDays[3]) condGroup = 'Antônio';
//     if (weekday === arrGroupDays[4]) condGroup = 'Antônio';
//     if (weekday === arrGroupDays[5]) condGroup = 'Zoom';
//     if (weekday === arrGroupDays[6]) condGroup = 'Águas de Lindoia';
//     if (weekday === arrGroupDays[7]) condGroup = 'Laranjeiras I';
//     if (weekday === arrGroupDays[8]) condGroup = 'Laranjeiras II';
//     if (weekday === arrGroupDays[9]) condGroup = 'Tijucas';
//     if (weekday === arrGroupDays[10])
//       condGroup = 'Águas de Lindoia / Ilhas Gregas';
//     if (weekday === arrGroupDays[11]) condGroup = 'Criselídia';
//     setPick(txt);
//     setStorage(pathVar, condGroup + '_' + txt);
//   };

//   let condGroup: any;

//   // ------ Selects
//   let currCard = '';
//   sttVals &&
//     sttVals.forEach((i: any) => {
//       const condCatch = i[0] === weekday;

//       if (condCatch) {
//         const cardNum1 = i[1].split('_')[1];
//         currCard = cardNum1;
//       }
//     });

//   const objCard: any = arrCards.find((i: any) => i.cardNumber === currCard);

//   const pckr1b = {
//     onValueChange: (txt: string) => getTxt(txt),
//     selectedValue: sttPick ?? currCard,
//     placeholder: '...Selecione',
//     style: [stlIpt1, { width: '100%' }],
//   };

//   return (
//     <View>
//       <Picker {...pckr1b}>
//         {arrCards.map((card: any) => {
//           return (
//             <Picker.Item
//               value={card.cardNumber}
//               label={'Cartão' + ' ' + card.cardNumber}
//             />
//           );
//         })}
//       </Picker>

//       {objCard && (
//         <Image
//           defaultSource={{ uri: imgDefault }}
//           source={{ uri: objCard.imgUrl }}
//           style={{ width: 200, height: 100, backgroundColor: '#ccc' }}
//         />
//       )}
//     </View>
//   );
// };

// const stlWrap: ViewStyle = {
//   // flexWrap: 'wrap',
//   minHeight: 200,
// };
