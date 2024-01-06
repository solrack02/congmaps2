import { getCtData, setData } from '../../../../../../config/centralData';

export const setDataSuccess = (props: any) => {
  const { dataSucess1, dataSucess3, dataSucess4 } = props;
  // const domainInfo = getCtData(ct => ct.projectData.selectedDomain.domainInfo);

  const objCards: any = {};
  const objMostUsed: any = {};

  dataSucess1.forEach((doc: any) => {
    objCards[doc.id] = doc.data();
  });

  console.log({ objCards });

  // --------------
  // --------------
  // const objCycles: any = {};
  // dataSucess2.forEach((doc: any) => {
  //   objCycles[doc.id] = doc.data();
  // });

  // --------------
  // --------------
  // const nowTime = new Date().getTime();
  const arrAssignsWTime: any = [];
  dataSucess3.forEach((doc: any) => {
    const objData = doc.data();
    const condStr = objData?.end ?? '';
    const cutStr = condStr.split('/');
    // !cutStr && console.log({ objData });
    const newDateEnd = new Date(cutStr[2], Number(cutStr[1]) - 1, cutStr[0]);
    const newTime = newDateEnd.getTime();

    // objAssigns[doc.id] = { ...objData, endTime: newTime };
    arrAssignsWTime.push({ ...objData, endTime: newDateEnd });
  });

  const elementCounts: any = {};
  dataSucess4.forEach((doc: any) => {
    const currDoc = doc.data();
    elementCounts[currDoc.card] = (elementCounts[currDoc.card] || 0) + 1;
  });

  const arrCardCount = Object.entries(elementCounts);
  arrAssignsWTime.sort((a, b) => a.endTime.getTime() - b.endTime.getTime());
  arrCardCount.sort((a, b) => a[1] - b[1]);
  arrCardCount.push(['10', 0]);
  arrCardCount.push(['20', 0]);

  // console.log({ arrAssignsWTime });

  // ----------- change Data
  setData([
    {
      path: 'projectData.cards.loading',
      val: false,
    },
    {
      path: 'projectData.cards.list',
      val: objCards,
    },
    // {
    //   path: 'projectData.cycles.list',
    //   val: objCycles,
    // },
    {
      path: 'projectData.assignments.list',
      val: arrAssignsWTime,
    },
    {
      path: 'projectData.mostUsed.list',
      val: arrCardCount,
    },
  ]);
  // ----------- No Return
};
