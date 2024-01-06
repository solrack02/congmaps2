import { setData, TctData } from '#ctData';

export const setDataBeforeAsync = () => {
  // ----------- change Data
  setData({ path: 'scInfo.A1.msg.loading', val: true });

  // ----------- No Return
};
