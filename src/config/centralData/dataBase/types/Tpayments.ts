import { Timestamp } from 'firebase/firestore';
import { TdbInfo } from './TdbInfo';

export type Tpayments = TdbInfo & {
  imgUrl: string;
  whoAdded: string;

  client: string;
  contact: string;
  newClient: 'Sim' | 'Não';
  detachedClient: 'Sim' | 'Não';
  service: string;

  bank: string;
  paymentType: string;
  paymentValueNum: number;
  paymentTime: string;
  paymentDate: Timestamp | string;
  legalType: string;
  payData: string;

  docUrl: string;
  status: '1' | '2' | '3' | '4';

  pack: string;
};
