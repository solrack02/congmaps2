import { TcreatedAt, TdbInfo } from './TdbInfo';

export type TuserInfo = {
  docId?: string;
  createdAt?: TcreatedAt;

  userName: string | null;
  userImg: string | null;
  userEmail: string | null;
  typeAccount: string | null;
  gender: string | null;

  workInfo: {
    role: string | null;
    contract: string | null;
    opLocation: string | null;
  };
};

type TuserInfo_new = {
  userDbInfo: TdbInfo;

  userData: TuserData;

  userAuthData: TuserAuthData;
};

type TuserAuthData = {
  userName: string;
  userImage: string;
  userEmail: string;
};

type TuserData = {
  typeAccount: string | null;

  address?: {
    geolocation: {};
    geohash: string;
    country: string;
    street_number: string;
    neighborhood: string;
    zip_code: string;
    state: string;
    city: string;
    street: string;
  };
};
