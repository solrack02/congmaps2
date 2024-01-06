import { setData } from '../../../../../../config/centralData';

export const setDataBeforeAsync = () => {
  // ----------- change Data
  setData({ path: 'projectData.cards.loading', val: true });
  // ----------- No Return
};
