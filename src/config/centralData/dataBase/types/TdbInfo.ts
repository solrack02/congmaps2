import { Timestamp } from 'firebase/firestore';

export type TcreatedAt = Timestamp;

export type TdbInfo = {
  docId: string;
  createdAt: TcreatedAt;
};
