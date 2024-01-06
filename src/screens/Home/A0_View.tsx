// ----------- import Packs
import { goTo } from '@morfos/routes';
import React from 'react';
import { Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { useData } from '../../config/centralData';
import { Assignments_Form_Set } from './Comps/Assigns/Form_Set';
import {
  Btn2,
  stlCardForm,
  stlIpt1,
  stlRow,
} from './Comps/Assigns/List/stlCards';
import { Card_Form } from './Comps/Cards/Form';
import { Card_List } from './Comps/Cards/List';
import {
  Btn1,
  stlNav,
  stlTabs,
  stlTabsBar,
  stlTools,
  stlTxtLight,
} from './Comps/Cards/List/stlCards';
import { Cycles_Form } from './Comps/Cycles/Form';
import { OldCards } from './Comps/Schedule/Form';
import { SimpleLineIcons } from '@expo/vector-icons';
import { ByGroups } from './Comps/Schedule/ByGroups';
import { Assignments_Form_Updt } from './Comps/Assigns/Form_Updt';

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
import { InitFunction } from '@morfos/renders';
import { getCards } from './Comps/Cards/actions/getCards';

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
  const [sttTab, setTab] = React.useState('des');
  const condActiveTab = sttTab === 'des';

  React.useEffect(() => {
    // document.body.style.zoom = '80%';
    // document.querySelector("[name='viewport']").remove();

    const viewport = document.querySelector("[name='viewport']");
    const content = `width=device-width, initial-scale=1.0`;
    viewport && viewport.setAttribute('content', content);
  }, []);
  // ----------- set Data
  // const loader = useData(ct => ct.scInfo.A1.msg.loading);

  // ----------- set Actions
  // const gotoB2 = () => goTo('info-board')

  // ----------- set Return
  return (
    <InitFunction setFunction={getCards}>
      <View style={{ padding: 20 }}>
        <View style={stlNav}>
          <View style={stlTabsBar}>
            <TouchableOpacity
              style={[
                stlIpt1,
                stlTabs,
                { borderBottomColor: condActiveTab ? 'white' : 'black' },
              ]}
              onPress={() => {
                setTab('des');
              }}
            >
              <Text style={{ fontWeight: 'bold' }}>Designar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                stlIpt1,
                stlTabs,
                { borderBottomColor: condActiveTab ? 'black' : 'white' },
              ]}
              onPress={() => {
                setTab('rel');
              }}
            >
              <Text style={{ fontWeight: 'bold' }}>Relatórios</Text>
            </TouchableOpacity>
          </View>

          <View style={stlTools}>
            <TouchableOpacity style={[Btn1]} onPress={() => goTo('maps')}>
              <SimpleLineIcons name="map" size={24} color="white" />
            </TouchableOpacity>

            <TouchableOpacity style={[Btn1]} onPress={() => goTo('print')}>
              <SimpleLineIcons name="printer" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {condActiveTab ? (
          <>
            {/* // */}
            {/* <Assignments_Form_Updt /> */}
            <Assignments_Form_Set />

            {/* // */}
            <ByGroups />
          </>
        ) : (
          <View style={{ padding: 20 }}>
            {/* // */}
            {/* <Schedule_Form /> */}

            {/* // */}
            <OldCards />

            {/* // */}
            <MostUseds />

            {/* // */}
            {/* <Card_List /> */}

            {/* // */}
            {/* <Card_Form /> */}

            {/* // */}
            <Cycles_Form />
          </View>
        )}
      </View>
    </InitFunction>
  );
};

const MostUseds = () => {
  const arrUsed = useData(ct => ct.projectData.mostUsed.list);
  const usedCards = arrUsed.map(i => {
    const numUsed = i[1];

    const colors: any = {
      1: { c1: '#c3eb99', c2: '#89ae70' },
      2: { c1: '#c3eb99', c2: '#89ae70' },

      3: { c1: '#f5e273', c2: '#9e7e56' },
      4: { c1: '#f5e273', c2: '#9e7e56' },

      5: { c1: '#f88a6f', c2: '#d83f3f' },

      6: { c1: '#962727', c2: '#320f0f', c3: '#ffc989' },
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
          borderColor: currPalette ? currPalette?.c2 : '#333',
          backgroundColor: currPalette ? currPalette?.c1 : '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 11,
            position: 'absolute',
            top: -1,
            left: 2,
            color: currPalette ? currPalette?.c3 : '#333',
          }}
        >
          {i[0]}
        </Text>
        <Text
          style={{
            fontWeight: 600,
            fontSize: 14,
            position: 'absolute',
            bottom: -1,
            right: 2,
            color: currPalette ? currPalette?.c3 : '#333',
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
      <View style={[stlRow, { flexWrap: 'wrap' }]}>{usedCards}</View>
    </View>
  );
};

// const arrCards: any = [];
// const oldCards = [
//   {
//     state: 'closed',
//     cardNumber: '01',
//     '5gs1BrC3WMCh0Ekonv08': {
//       updateAt: {
//         seconds: 1678549553,
//         nanoseconds: 432000000,
//       },
//       lastDate: '28/10/2022',
//     },
//     JUzJw35eYp94bdk6herx: {
//       lastDate: '26/03/2023',
//       updateAt: {
//         seconds: 1680046546,
//         nanoseconds: 114000000,
//       },
//     },
//     c3n6LIP9mIGsLL3YLJLa: {
//       updateAt: {
//         seconds: 1690133290,
//         nanoseconds: 872000000,
//       },
//       lastDate: '22/07/2023',
//     },
//     jMugQgEiCtnS8uWveteQ: {
//       updateAt: {
//         seconds: 1696895620,
//         nanoseconds: 236000000,
//       },
//       lastDate: '07/10/2023',
//     },
//     imgUrl:
//       'https://firebasestorage.googleapis.com/v0/b/cong-maps.appspot.com/o/images%2FWhatsApp%20Image%202022-10-31%20at%2011.25.54.jpeg-04%2F12%2F2022-15%3A32%3A45-Xxx1?alt=media&token=b6db204f-7248-45be-b266-30f26603eec0',
//     docId: 'Y9Jie6mDoaqPBfMetZfa',
//     createdAt: {
//       seconds: 1670178768,
//       nanoseconds: 324000000,
//     },
//   },
//   {
//     imgUrl:
//       'https://firebasestorage.googleapis.com/v0/b/cong-maps.appspot.com/o/images%2FWhatsApp%20Image%202022-10-31%20at%2011.25.54%20(1).jpeg-04%2F12%2F2022-15%3A33%3A06-Xxx1?alt=media&token=a56af2d7-07eb-413a-8aee-c8f33f96696c',
//     c3n6LIP9mIGsLL3YLJLa: {
//       updateAt: {
//         seconds: 1690133318,
//         nanoseconds: 456000000,
//       },
//       lastDate: '22/07/2023',
//     },
//     createdAt: {
//       seconds: 1670178787,
//       nanoseconds: 601000000,
//     },
//     '5gs1BrC3WMCh0Ekonv08': {
//       lastDate: '10/10/2022',
//       updateAt: {
//         seconds: 1676832204,
//         nanoseconds: 388000000,
//       },
//     },
//     docId: 'ufEfS9iZ4jpiM7oUrXuN',
//     JUzJw35eYp94bdk6herx: {
//       lastDate: '26/03/2023',
//       updateAt: {
//         seconds: 1680046742,
//         nanoseconds: 234000000,
//       },
//     },
//     cardNumber: '02',
//     jMugQgEiCtnS8uWveteQ: {
//       updateAt: {
//         seconds: 1696895641,
//         nanoseconds: 735000000,
//       },
//       lastDate: '07/10/2023',
//     },
//     state: 'closed',
//   },
//   {
//     JUzJw35eYp94bdk6herx: {
//       lastDate: '21/04/2023',
//       updateAt: {
//         seconds: 1682203246,
//         nanoseconds: 198000000,
//       },
//     },
//     jMugQgEiCtnS8uWveteQ: {
//       updateAt: {
//         seconds: 1700523896,
//         nanoseconds: 387000000,
//       },
//       lastDate: '13/11/2023',
//     },
//     imgUrl:
//       'https://firebasestorage.googleapis.com/v0/b/cong-maps.appspot.com/o/images%2FWhatsApp%20Image%202022-10-31%20at%2011.25.55.jpeg-04%2F12%2F2022-15%3A33%3A22-Xxx1?alt=media&token=ddfcd835-608d-461f-8bc6-76100e4d8829',
//     docId: 'ZLvCi3Om0zdCdsRzyfM2',
//     '5gs1BrC3WMCh0Ekonv08': {
//       lastDate: '29/12/2022',
//       updateAt: {
//         seconds: 1676832219,
//         nanoseconds: 506000000,
//       },
//     },
//     createdAt: {
//       seconds: 1670178805,
//       nanoseconds: 286000000,
//     },
//     c3n6LIP9mIGsLL3YLJLa: {
//       lastDate: '15/08/2023',
//       updateAt: {
//         seconds: 1692661681,
//         nanoseconds: 519000000,
//       },
//     },
//     cardNumber: '03',
//     kmlUrl:
//       'https://firebasestorage.googleapis.com/v0/b/cong-maps.appspot.com/o/files%2Fm3.kml?alt=media&token=2c939fb9-8cee-4ad9-b363-d102b3926b33',
//     state: 'closed',
//   },
//   {
//     '5gs1BrC3WMCh0Ekonv08': {
//       updateAt: {
//         seconds: 1676832314,
//         nanoseconds: 234000000,
//       },
//       lastDate: '17/11/2022',
//     },
//     imgUrl:
//       'https://firebasestorage.googleapis.com/v0/b/cong-maps.appspot.com/o/images%2FWhatsApp%20Image%202022-10-31%20at%2011.25.55%20(1).jpeg-04%2F12%2F2022-15%3A33%3A37-Xxx1?alt=media&token=e4339ef3-55d7-4f86-ac0d-3b0b718ccd8e',
//     cardNumber: '04',
//     jMugQgEiCtnS8uWveteQ: {
//       updateAt: {
//         seconds: 1696895795,
//         nanoseconds: 827000000,
//       },
//       lastDate: '06/10/2023',
//     },
//     oNOPj5ymqQ5HDtpfcvKe: {
//       updateAt: {
//         seconds: 1699489260,
//         nanoseconds: 504000000,
//       },
//       lastDate: '07/11/2023',
//     },
//     JUzJw35eYp94bdk6herx: {
//       lastDate: '17/04/2023',
//       updateAt: {
//         seconds: 1681749747,
//         nanoseconds: 14000000,
//       },
//     },
//     c3n6LIP9mIGsLL3YLJLa: {
//       updateAt: {
//         seconds: 1689806072,
//         nanoseconds: 163000000,
//       },
//       lastDate: '15/07/2023',
//     },
//     kmlUrl:
//       'https://firebasestorage.googleapis.com/v0/b/cong-maps.appspot.com/o/files%2Fm4.kml?alt=media&token=0c2f1970-2a35-441c-865b-27afe2993a50',
//     state: 'closed',
//     createdAt: {
//       seconds: 1670178819,
//       nanoseconds: 645000000,
//     },
//     docId: 'aCu9i2JJq2TmW8w5Luw8',
//   },
//   {
//     oNOPj5ymqQ5HDtpfcvKe: {
//       lastDate: '30/10/2023',
//       updateAt: {
//         seconds: 1698886389,
//         nanoseconds: 870000000,
//       },
//     },
//     createdAt: {
//       seconds: 1670178867,
//       nanoseconds: 979000000,
//     },
//     docId: 'MZkhbXmgzbHgAnpjRXBZ',
//     imgUrl:
//       'https://firebasestorage.googleapis.com/v0/b/cong-maps.appspot.com/o/images%2FWhatsApp%20Image%202022-10-31%20at%2011.25.56.jpeg-04%2F12%2F2022-15%3A34%3A25-Xxx1?alt=media&token=7fbea7e4-0dc2-4e54-94bf-90a0fe08e988',
//     c3n6LIP9mIGsLL3YLJLa: {
//       updateAt: {
//         seconds: 1689806112,
//         nanoseconds: 255000000,
//       },
//       lastDate: '15/07/2023',
//     },
//     jMugQgEiCtnS8uWveteQ: {
//       lastDate: '06/10/2023',
//       updateAt: {
//         seconds: 1696895813,
//         nanoseconds: 775000000,
//       },
//     },
//     JUzJw35eYp94bdk6herx: {
//       lastDate: '12/03/2023',
//       updateAt: {
//         seconds: 1678744428,
//         nanoseconds: 635000000,
//       },
//     },
//     '5gs1BrC3WMCh0Ekonv08': {
//       updateAt: {
//         seconds: 1676832366,
//         nanoseconds: 202000000,
//       },
//       lastDate: '04/12/2022',
//     },
//     state: 'closed',
//     kmlUrl:
//       'https://firebasestorage.googleapis.com/v0/b/cong-maps.appspot.com/o/files%2F05.kml?alt=media&token=3f943c6e-7ab8-4f29-b9b8-8defc9279406',
//     cardNumber: '05',
//   },
//   {
//     '5gs1BrC3WMCh0Ekonv08': {
//       updateAt: {
//         seconds: 1676834515,
//         nanoseconds: 405000000,
//       },
//       lastDate: '26/12/2022',
//     },
//     JUzJw35eYp94bdk6herx: {
//       updateAt: {
//         seconds: 1682273888,
//         nanoseconds: 592000000,
//       },
//       lastDate: '23/04/2023',
//     },
//     imgUrl:
//       'https://firebasestorage.googleapis.com/v0/b/cong-maps.appspot.com/o/images%2FWhatsApp%20Image%202022-10-31%20at%2011.25.57.jpeg-04%2F12%2F2022-15%3A35%3A32-Xxx1?alt=media&token=767d558d-e148-4671-93cf-d74858a3e731',
//     createdAt: {
//       seconds: 1670178934,
//       nanoseconds: 976000000,
//     },
//     c3n6LIP9mIGsLL3YLJLa: {
//       lastDate: '20/07/2023',
//       updateAt: {
//         seconds: 1690133375,
//         nanoseconds: 722000000,
//       },
//     },
//     jMugQgEiCtnS8uWveteQ: {
//       lastDate: '19/11/2023',
//       updateAt: {
//         seconds: 1700523585,
//         nanoseconds: 696000000,
//       },
//     },
//     state: 'closed',
//     kmlUrl:
//       'https://firebasestorage.googleapis.com/v0/b/cong-maps.appspot.com/o/files%2Fm6.kml?alt=media&token=5771914e-f747-4383-b7ea-0a2ffa315acc',
//     cardNumber: '06',
//     docId: 'lY67Ocodfwl5Ajt0MAv0',
//   },
//   {
//     createdAt: {
//       seconds: 1670178945,
//       nanoseconds: 869000000,
//     },
//     state: 'closed',
//     cardNumber: '07',
//     c3n6LIP9mIGsLL3YLJLa: {
//       updateAt: {
//         seconds: 1692061063,
//         nanoseconds: 162000000,
//       },
//       lastDate: '13/08/2023',
//     },
//     docId: 'p2o52nLgwhQf8ZunLEYq',
//     imgUrl:
//       'https://firebasestorage.googleapis.com/v0/b/cong-maps.appspot.com/o/images%2FWhatsApp%20Image%202022-10-31%20at%2011.25.57%20(1).jpeg-04%2F12%2F2022-15%3A35%3A43-Xxx1?alt=media&token=93a02311-2d6c-44bd-b4c8-dc30ab4298ae',
//     '5gs1BrC3WMCh0Ekonv08': {
//       lastDate: '19/11/2022',
//       updateAt: {
//         seconds: 1676835009,
//         nanoseconds: 717000000,
//       },
//     },
//     jMugQgEiCtnS8uWveteQ: {
//       lastDate: '28/11/2023',
//       updateAt: {
//         seconds: 1701472797,
//         nanoseconds: 984000000,
//       },
//     },
//     JUzJw35eYp94bdk6herx: {
//       updateAt: {
//         seconds: 1680824499,
//         nanoseconds: 965000000,
//       },
//       lastDate: '06/04/2023',
//     },
//   },
//   {
//     imgUrl:
//       'https://firebasestorage.googleapis.com/v0/b/cong-maps.appspot.com/o/images%2FWhatsApp%20Image%202022-10-31%20at%2011.25.58.jpeg-04%2F12%2F2022-15%3A37%3A15-Xxx1?alt=media&token=1c8865a5-6939-4569-9d84-e7523cf5a6dc',
//     docId: 'cTMtnJ71WmJIzdWpz35u',
//     jMugQgEiCtnS8uWveteQ: {
//       lastDate: '29/10/2023',
//       updateAt: {
//         seconds: 1698715042,
//         nanoseconds: 919000000,
//       },
//     },
//     c3n6LIP9mIGsLL3YLJLa: {
//       updateAt: {
//         seconds: 1685403553,
//         nanoseconds: 766000000,
//       },
//       lastDate: '28/05/2023',
//     },
//     '5gs1BrC3WMCh0Ekonv08': {
//       updateAt: {
//         seconds: 1676832910,
//         nanoseconds: 206000000,
//       },
//       lastDate: '23/10/2022',
//     },
//     createdAt: {
//       seconds: 1670179037,
//       nanoseconds: 482000000,
//     },
//     state: 'closed',
//     cardNumber: '08',
//     JUzJw35eYp94bdk6herx: {
//       updateAt: {
//         seconds: 1680570995,
//         nanoseconds: 714000000,
//       },
//       lastDate: '02/04/2023',
//     },
//   },
//   {
//     cardNumber: '09',
//     c3n6LIP9mIGsLL3YLJLa: {
//       lastDate: '23/07/2023',
//       updateAt: {
//         seconds: 1690767999,
//         nanoseconds: 572000000,
//       },
//     },
//     jMugQgEiCtnS8uWveteQ: {
//       lastDate: '19/11/2023',
//       updateAt: {
//         seconds: 1700523743,
//         nanoseconds: 5000000,
//       },
//     },
//     docId: 'y7PeHgvScfGQNPdkdw9Q',
//     state: 'closed',
//     JUzJw35eYp94bdk6herx: {
//       lastDate: '19/04/2023',
//       updateAt: {
//         seconds: 1681949272,
//         nanoseconds: 706000000,
//       },
//     },
//     imgUrl:
//       'https://firebasestorage.googleapis.com/v0/b/cong-maps.appspot.com/o/images%2FWhatsApp%20Image%202022-10-31%20at%2011.25.58%20(1).jpeg-04%2F12%2F2022-15%3A37%3A30-Xxx1?alt=media&token=e7a96a55-c5f2-4265-b697-a2a5d8402d0e',
//     createdAt: {
//       seconds: 1670179052,
//       nanoseconds: 702000000,
//     },
//     ' 5gs1BrC3WMCh0Ekonv08': {
//       lastDate: '28/12/2022',
//       updateAt: {
//         seconds: 1676835377,
//         nanoseconds: 904000000,
//       },
//     },
//   },
//   {
//     imgUrl:
//       'https://firebasestorage.googleapis.com/v0/b/cong-maps.appspot.com/o/images%2FWhatsApp%20Image%202022-10-31%20at%2011.25.59.jpeg-04%2F12%2F2022-15%3A37%3A41-Xxx1?alt=media&token=75c51ef5-bc31-42f8-be53-a7418340e45b',
//     state: 'closed',
//     docId: 'wPQ7iJ99Ez06jpFN4wWx',
//     createdAt: {
//       seconds: 1670179063,
//       nanoseconds: 82000000,
//     },
//     cardNumber: '10',
//   },
//   {
//     c3n6LIP9mIGsLL3YLJLa: {
//       lastDate: '28/05/2023',
//       updateAt: {
//         seconds: 1685403611,
//         nanoseconds: 794000000,
//       },
//     },
//     JUzJw35eYp94bdk6herx: {
//       updateAt: {
//         seconds: 1680571019,
//         nanoseconds: 834000000,
//       },
//       lastDate: '02/04/2023',
//     },
//     state: 'closed',
//     jMugQgEiCtnS8uWveteQ: {
//       updateAt: {
//         seconds: 1698885857,
//         nanoseconds: 666000000,
//       },
//       lastDate: '29/10/2023',
//     },
//     docId: 'T2FKpibkhSuwdDjEFQPz',
//     createdAt: {
//       seconds: 1670179113,
//       nanoseconds: 93000000,
//     },
//     cardNumber: '11',
//     '5gs1BrC3WMCh0Ekonv08': {
//       lastDate: '22/10/2022',
//       updateAt: {
//         seconds: 1676833061,
//         nanoseconds: 103000000,
//       },
//     },
//     imgUrl:
//       'https://firebasestorage.googleapis.com/v0/b/cong-maps.appspot.com/o/images%2FWhatsApp%20Image%202022-10-31%20at%2011.25.59%20(1).jpeg-04%2F12%2F2022-15%3A38%3A31-Xxx1?alt=media&token=abf5ff30-cb40-496f-8c29-4274ce2fdd17',
//   },
//   {
//     '5gs1BrC3WMCh0Ekonv08': {
//       lastDate: '18/12/2022',
//       updateAt: {
//         seconds: 1676835703,
//         nanoseconds: 987000000,
//       },
//     },
//     JUzJw35eYp94bdk6herx: {
//       updateAt: {
//         seconds: 1681000257,
//         nanoseconds: 843000000,
//       },
//       lastDate: '07/12/2023',
//     },
//     docId: 'esIjINRepdCXts0UdQiM',
//     oNOPj5ymqQ5HDtpfcvKe: {
//       updateAt: {
//         seconds: 1702218315,
//         nanoseconds: 992000000,
//       },
//       lastDate: '05/12/2023',
//     },
//     state: 'closed',
//     createdAt: {
//       seconds: 1670179125,
//       nanoseconds: 453000000,
//     },
//     jMugQgEiCtnS8uWveteQ: {
//       lastDate: '04/11/2023',
//       updateAt: {
//         seconds: 1699320562,
//         nanoseconds: 597000000,
//       },
//     },
//     kmlUrl:
//       'https://firebasestorage.googleapis.com/v0/b/cong-maps.appspot.com/o/files%2F12.kml?alt=media&token=083ecf65-c594-44be-b20e-35be35c70075',
//     cardNumber: '12',
//     c3n6LIP9mIGsLL3YLJLa: {
//       lastDate: '13/07/2023',
//       updateAt: {
//         seconds: 1689805539,
//         nanoseconds: 67000000,
//       },
//     },
//     imgUrl:
//       'https://firebasestorage.googleapis.com/v0/b/cong-maps.appspot.com/o/images%2FWhatsApp%20Image%202022-10-31%20at%2011.26.00.jpeg-04%2F12%2F2022-15%3A38%3A42-Xxx1?alt=media&token=542f45d0-1243-4afb-9916-b89d4babadb3',
//   },
//   {
//     jMugQgEiCtnS8uWveteQ: {
//       lastDate: '03/12/2023',
//       updateAt: {
//         seconds: 1702218905,
//         nanoseconds: 442000000,
//       },
//     },
//     state: 'closed',
//     JUzJw35eYp94bdk6herx: {
//       updateAt: {
//         seconds: 1679447418,
//         nanoseconds: 516000000,
//       },
//       lastDate: '21/03/2023',
//     },
//     docId: 'S1Wd7EeDcCO4IGkvTG7y',
//     '5gs1BrC3WMCh0Ekonv08': {
//       updateAt: {
//         seconds: 1676836245,
//         nanoseconds: 347000000,
//       },
//       lastDate: '04/12/2022',
//     },
//     imgUrl:
//       'https://firebasestorage.googleapis.com/v0/b/cong-maps.appspot.com/o/images%2FWhatsApp%20Image%202022-10-31%20at%2011.26.00%20(1).jpeg-04%2F12%2F2022-15%3A38%3A56-Xxx1?alt=media&token=f5540cb3-88b5-4011-bddc-bb9537dece89',
//     createdAt: {
//       seconds: 1670179138,
//       nanoseconds: 910000000,
//     },
//     cardNumber: '13',
//     c3n6LIP9mIGsLL3YLJLa: {
//       lastDate: '20/08/2023',
//       updateAt: {
//         seconds: 1692662072,
//         nanoseconds: 973000000,
//       },
//     },
//   },
//   {
//     JUzJw35eYp94bdk6herx: {
//       lastDate: '22/03/2023',
//       updateAt: {
//         seconds: 1680046193,
//         nanoseconds: 449000000,
//       },
//     },
//     createdAt: {
//       seconds: 1670179151,
//       nanoseconds: 718000000,
//     },
//     ' 5gs1BrC3WMCh0Ekonv08': {
//       updateAt: {
//         seconds: 1676833176,
//         nanoseconds: 304000000,
//       },
//       lastDate: '21/12/2022',
//     },
//     state: 'closed',
//     imgUrl:
//       'https://firebasestorage.googleapis.com/v0/b/cong-maps.appspot.com/o/images%2FWhatsApp%20Image%202022-10-31%20at%2011.26.01.jpeg-04%2F12%2F2022-15%3A39%3A09-Xxx1?alt=media&token=74b3a300-08e1-47cb-8505-51f71e7e61b2',
//     cardNumber: '14',
//     c3n6LIP9mIGsLL3YLJLa: {
//       updateAt: {
//         seconds: 1693701737,
//         nanoseconds: 262000000,
//       },
//       lastDate: '20/08/2023',
//     },
//     jMugQgEiCtnS8uWveteQ: {
//       updateAt: {
//         seconds: 1702942958,
//         nanoseconds: 306000000,
//       },
//       lastDate: '14/12/2023',
//     },
//     docId: 'TRHggOP53AOF9lLlF0n3',
//   },
//   {
//     createdAt: {
//       seconds: 1670179164,
//       nanoseconds: 764000000,
//     },
//     jMugQgEiCtnS8uWveteQ: {
//       lastDate: '18/12/2023',
//       updateAt: {
//         seconds: 1703371060,
//         nanoseconds: 186000000,
//       },
//     },
//     docId: 'IwEheoUrcnNL510bVvcb',
//     '5gs1BrC3WMCh0Ekonv08': {
//       lastDate: '21/12/2022',
//       updateAt: {
//         seconds: 1676833213,
//         nanoseconds: 688000000,
//       },
//     },
//     c3n6LIP9mIGsLL3YLJLa: {
//       lastDate: '24/08/2023',
//       updateAt: {
//         seconds: 1693008752,
//         nanoseconds: 987000000,
//       },
//     },
//     JUzJw35eYp94bdk6herx: {
//       updateAt: {
//         seconds: 1682469227,
//         nanoseconds: 393000000,
//       },
//       lastDate: '25/04/2023',
//     },
//     state: 'closed',
//     imgUrl:
//       'https://firebasestorage.googleapis.com/v0/b/cong-maps.appspot.com/o/images%2FWhatsApp%20Image%202022-10-31%20at%2011.26.01%20(1).jpeg-04%2F12%2F2022-15%3A39%3A22-Xxx1?alt=media&token=1e7322af-5d45-4875-9731-f378809da9bf',
//     cardNumber: '15',
//   },
//   {
//     JUzJw35eYp94bdk6herx: {
//       updateAt: {
//         seconds: 1680570103,
//         nanoseconds: 690000000,
//       },
//       lastDate: '30/03/2023',
//     },
//     cardNumber: '16',
//     c3n6LIP9mIGsLL3YLJLa: {
//       updateAt: {
//         seconds: 1693701757,
//         nanoseconds: 48000000,
//       },
//       lastDate: '20/08/2023',
//     },
//     imgUrl:
//       'https://firebasestorage.googleapis.com/v0/b/cong-maps.appspot.com/o/images%2FWhatsApp%20Image%202022-10-31%20at%2011.26.02.jpeg-04%2F12%2F2022-15%3A39%3A35-Xxx1?alt=media&token=fc669ce4-ba58-4626-bca7-23b3693fbb0d',
//     '5gs1BrC3WMCh0Ekonv08': {
//       updateAt: {
//         seconds: 1676833400,
//         nanoseconds: 955000000,
//       },
//       lastDate: '19/12/2022',
//     },
//     createdAt: {
//       seconds: 1670179177,
//       nanoseconds: 962000000,
//     },
//     state: 'closed',
//     jMugQgEiCtnS8uWveteQ: {
//       updateAt: {
//         seconds: 1702943955,
//         nanoseconds: 23000000,
//       },
//       lastDate: '18/12/2023',
//     },
//     docId: 'liZ6yKwvSJUIkOiTIQb5',
//   },
//   {
//     imgUrl:
//       'https://firebasestorage.googleapis.com/v0/b/cong-maps.appspot.com/o/images%2FWhatsApp%20Image%202022-10-31%20at%2011.26.02%20(1).jpeg-04%2F12%2F2022-15%3A39%3A59-Xxx1?alt=media&token=1b8e2a34-9756-47ec-97d7-8ae0c802c6fb',
//     JUzJw35eYp94bdk6herx: {
//       updateAt: {
//         seconds: 1682273983,
//         nanoseconds: 330000000,
//       },
//       lastDate: '23/04/2023',
//     },
//     '5gs1BrC3WMCh0Ekonv08': {
//       lastDate: '18/12/2022',
//       updateAt: {
//         seconds: 1676833422,
//         nanoseconds: 126000000,
//       },
//     },
//     createdAt: {
//       seconds: 1670179202,
//       nanoseconds: 14000000,
//     },
//     state: 'closed',
//     c3n6LIP9mIGsLL3YLJLa: {
//       updateAt: {
//         seconds: 1693701798,
//         nanoseconds: 812000000,
//       },
//       lastDate: '20/08/2023',
//     },
//     docId: 'qNeUTXaHhXaT2xkJQXvw',
//     jMugQgEiCtnS8uWveteQ: {
//       updateAt: {
//         seconds: 1703551227,
//         nanoseconds: 631000000,
//       },
//       lastDate: '24/12/2023',
//     },
//     cardNumber: '17',
//   },
//   {
//     cardNumber: '18',
//     c3n6LIP9mIGsLL3YLJLa: {
//       updateAt: {
//         seconds: 1690768640,
//         nanoseconds: 353000000,
//       },
//       lastDate: '29/07/2023',
//     },
//     docId: 'aDytr7yrbEFw1pvHLJ51',
//     createdAt: {
//       seconds: 1670179214,
//       nanoseconds: 352000000,
//     },
//     JUzJw35eYp94bdk6herx: {
//       updateAt: {
//         seconds: 1680570639,
//         nanoseconds: 134000000,
//       },
//       lastDate: '01/04/2023',
//     },
//     state: 'closed',
//     '5gs1BrC3WMCh0Ekonv08': {
//       updateAt: {
//         seconds: 1676833504,
//         nanoseconds: 880000000,
//       },
//       lastDate: '16/10/2022',
//     },
//     imgUrl:
//       'https://firebasestorage.googleapis.com/v0/b/cong-maps.appspot.com/o/images%2FWhatsApp%20Image%202022-10-31%20at%2011.26.03.jpeg-04%2F12%2F2022-15%3A40%3A11-Xxx1?alt=media&token=7b83b1fa-e421-4bc5-97e9-61d7dc2b96b4',
//   },
//   {
//     createdAt: {
//       seconds: 1670179234,
//       nanoseconds: 366000000,
//     },
//     '5gs1BrC3WMCh0Ekonv08': {
//       lastDate: '16/10/2022',
//       updateAt: {
//         seconds: 1676833571,
//         nanoseconds: 804000000,
//       },
//     },
//     docId: 'yGhqTgcAoZHXyzBUK4ex',
//     cardNumber: '19',
//     imgUrl:
//       'https://firebasestorage.googleapis.com/v0/b/cong-maps.appspot.com/o/images%2FWhatsApp%20Image%202022-10-31%20at%2011.26.03%20(1).jpeg-04%2F12%2F2022-15%3A40%3A32-Xxx1?alt=media&token=9aea92a4-d34d-4f91-b932-e6c8f24894ef',
//     JUzJw35eYp94bdk6herx: {
//       lastDate: '01/04/2023',
//       updateAt: {
//         seconds: 1680570680,
//         nanoseconds: 309000000,
//       },
//     },
//     state: 'closed',
//     c3n6LIP9mIGsLL3YLJLa: {
//       updateAt: {
//         seconds: 1690768706,
//         nanoseconds: 946000000,
//       },
//       lastDate: '29/07/2023',
//     },
//   },
//   {
//     docId: 'k7EZblONmGRPl4fCHBiK',
//     imgUrl:
//       'https://firebasestorage.googleapis.com/v0/b/cong-maps.appspot.com/o/images%2FWhatsApp%20Image%202022-10-31%20at%2011.26.03%20(2).jpeg-04%2F12%2F2022-15%3A40%3A46-Xxx1?alt=media&token=40656a76-e199-4b16-b902-21b3a3f8bc46',
//     state: 'closed',
//     cardNumber: '20',
//     createdAt: {
//       seconds: 1670179248,
//       nanoseconds: 450000000,
//     },
//   },
//   {
//     imgUrl:
//       'https://firebasestorage.googleapis.com/v0/b/cong-maps.appspot.com/o/images%2FWhatsApp%20Image%202022-10-31%20at%2011.26.04.jpeg-04%2F12%2F2022-15%3A40%3A58-Xxx1?alt=media&token=fa241c24-a567-4f31-9117-91f480852798',
//     c3n6LIP9mIGsLL3YLJLa: {
//       updateAt: {
//         seconds: 1693530700,
//         nanoseconds: 220000000,
//       },
//       lastDate: '30/08/2023',
//     },
//     '5gs1BrC3WMCh0Ekonv08': {
//       lastDate: '14/12/2022',
//       updateAt: {
//         seconds: 1676833813,
//         nanoseconds: 99000000,
//       },
//     },
//     jMugQgEiCtnS8uWveteQ: {
//       updateAt: {
//         seconds: 1702943098,
//         nanoseconds: 531000000,
//       },
//       lastDate: '10/12/2023',
//     },
//     state: 'closed',
//     createdAt: {
//       seconds: 1670179260,
//       nanoseconds: 160000000,
//     },
//     cardNumber: '21',
//     docId: 'd0MyAVQlguQ554UwmH8B',
//     JUzJw35eYp94bdk6herx: {
//       lastDate: '23/04/2023',
//       updateAt: {
//         seconds: 1682557095,
//         nanoseconds: 237000000,
//       },
//     },
//   },
//   {
//     jMugQgEiCtnS8uWveteQ: {
//       lastDate: '17/12/2023',
//       updateAt: {
//         seconds: 1702943196,
//         nanoseconds: 704000000,
//       },
//     },
//     '5gs1BrC3WMCh0Ekonv08': {
//       lastDate: '03/12/2022',
//       updateAt: {
//         seconds: 1676833837,
//         nanoseconds: 504000000,
//       },
//     },
//     imgUrl:
//       'https://firebasestorage.googleapis.com/v0/b/cong-maps.appspot.com/o/images%2FWhatsApp%20Image%202022-10-31%20at%2011.26.04%20(1).jpeg-04%2F12%2F2022-15%3A41%3A13-Xxx1?alt=media&token=0da64b7d-2ac4-4907-a9ac-1d0fe2829cd8',
//     docId: 'sO2dpHcW6NEgLrRmCB8R',
//     JUzJw35eYp94bdk6herx: {
//       lastDate: '03/04/2023',
//       updateAt: {
//         seconds: 1681348371,
//         nanoseconds: 965000000,
//       },
//     },
//     createdAt: {
//       seconds: 1670179274,
//       nanoseconds: 736000000,
//     },
//     state: 'closed',
//     c3n6LIP9mIGsLL3YLJLa: {
//       updateAt: {
//         seconds: 1692661870,
//         nanoseconds: 482000000,
//       },
//       lastDate: '19/08/2023',
//     },
//     cardNumber: '22',
//   },
//   {
//     docId: 'NXwUZjUpqaAkHQVsDzKz',
//     cardNumber: '23',
//     '5gs1BrC3WMCh0Ekonv08': {
//       lastDate: '10/01/2023',
//       updateAt: {
//         seconds: 1676833939,
//         nanoseconds: 199000000,
//       },
//     },
//     state: 'closed',
//     c3n6LIP9mIGsLL3YLJLa: {
//       updateAt: {
//         seconds: 1693530677,
//         nanoseconds: 900000000,
//       },
//       lastDate: '28/08/2023',
//     },
//     JUzJw35eYp94bdk6herx: {
//       updateAt: {
//         seconds: 1682644499,
//         nanoseconds: 449000000,
//       },
//       lastDate: '26/04/2023',
//     },
//     imgUrl:
//       'https://firebasestorage.googleapis.com/v0/b/cong-maps.appspot.com/o/images%2FWhatsApp%20Image%202022-10-31%20at%2011.26.04%20(2).jpeg-04%2F12%2F2022-15%3A41%3A23-Xxx1?alt=media&token=c292a214-d3a1-4898-903f-84668d5150ad',
//     createdAt: {
//       seconds: 1670179284,
//       nanoseconds: 672000000,
//     },
//     jMugQgEiCtnS8uWveteQ: {
//       updateAt: {
//         seconds: 1702943127,
//         nanoseconds: 638000000,
//       },
//       lastDate: '10/12/2023',
//     },
//   },
//   {
//     imgUrl:
//       'https://firebasestorage.googleapis.com/v0/b/cong-maps.appspot.com/o/images%2FWhatsApp%20Image%202022-10-31%20at%2011.26.05.jpeg-04%2F12%2F2022-15%3A41%3A58-Xxx1?alt=media&token=a75035ad-d50e-409a-ba0c-3a5948927a50',
//     state: 'closed',
//     '5gs1BrC3WMCh0Ekonv08': {
//       lastDate: '31/12/2022',
//       updateAt: {
//         seconds: 1676833953,
//         nanoseconds: 578000000,
//       },
//     },
//     cardNumber: '24',
//     c3n6LIP9mIGsLL3YLJLa: {
//       lastDate: '10/08/2023',
//       updateAt: {
//         seconds: 1691801514,
//         nanoseconds: 699000000,
//       },
//     },
//     jMugQgEiCtnS8uWveteQ: {
//       updateAt: {
//         seconds: 1702943163,
//         nanoseconds: 261000000,
//       },
//       lastDate: '17/12/2023',
//     },
//     createdAt: {
//       seconds: 1670179319,
//       nanoseconds: 398000000,
//     },
//     JUzJw35eYp94bdk6herx: {
//       lastDate: '01/05/2023',
//       updateAt: {
//         seconds: 1683416700,
//         nanoseconds: 686000000,
//       },
//     },
//     docId: 'Cap3V1A0gxzulKvWekAv',
//   },
// ];

// oldCards.map(old => {
//   arrCards.push({
//     cardNumber: old.cardNumber,
//     imgUrl: objAllImgs[old.cardNumber],
//     state: 'closed',
//   });
// });
// console.log({ oldCards });
