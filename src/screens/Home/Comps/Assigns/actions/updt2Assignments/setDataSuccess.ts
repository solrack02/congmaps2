import { goTo } from '@morfos/routes';
import { getCtData, setData } from '../../../../../../config/centralData';

export const setDataSuccess = () => {
  // const domainInfo = getCtData(ct => ct.projectData.selectedDomain.domainInfo);
  // const meetingsTime = getCtData(
  //   ct => ct.projectData.selectedDomain.domainInfo?.meetingsTime,
  // );
  // ----------- change Data
  // setData({
  //   path: 'projectData.selectedDomain.domainInfo',
  //   val: { ...domainInfo, meetingsTime: { ...meetingsTime, ...dataSucess } },
  // });
  // ----------- No Return
  setData({ path: 'A2.list.condList', val: true });
  goTo('home');
};
