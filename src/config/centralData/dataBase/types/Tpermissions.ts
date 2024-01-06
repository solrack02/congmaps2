import { TcreatedAt, TdbInfo } from './TdbInfo';

type TpermissionType = '1' | '2' | '3' | '4' | '5' | '6' | '';

export type Tpermissions = {
  createdAt: TcreatedAt;

  userId: string;
  permissionType: TpermissionType;
}[];

type Tpermissions_new = {
  permissionDbInfo: TdbInfo;
};
