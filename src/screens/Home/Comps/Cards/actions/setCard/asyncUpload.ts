import { getUrl } from '../../../../../../common/getUrl';
import { getCtData } from '../../../../../../config/centralData';

export const asyncUpload = async (paths: any) => {
  const { functionForm } = paths;
  // ----------- set Data
  const filesTemp = getCtData(
    ct => ct.projectData.cards.form.iptChanges.imgCard,
  );
  const condImg = typeof filesTemp == 'object';

  // ----------- set Return
  if (condImg) return getUrl(filesTemp[0], 'images');
  else return false;
};
