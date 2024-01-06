import { setData } from '../../../../../../config/centralData';

export const setDataBeforeAsync = () => {
  // ----------- change Data
  // setData({ path: 'projectData.selectedDomain.loading', val: true });
  // ----------- No Return
  setData({ path: 'A2.list.condList', val: false });
};
