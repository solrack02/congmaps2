import { TuserInfo } from './TuserInfo';

type TdocId = string;

export type TdataBase = {
  users: { [key: TdocId]: TuserInfo };
};
