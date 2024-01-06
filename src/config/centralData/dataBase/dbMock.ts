import { TdataBase } from './types';

const timeStampRef = {
  seconds: 100000000,
  nanoseconds: 100000000,

  isEqual: () => false,
  toDate: () => new Date(),
  toJSON: () => ({
    seconds: 100000000,
    nanoseconds: 100000000,
  }),
  toMillis: () => 0,
  toString: () => '0001-01-01T00:00:00Z',
  valueOf: () => '0001-01-01T00:00:00Z',
};

const dbRef: TdataBase = {
  users: {
    // __type__: 'collection',

    xxx1: {
      docId: 'xxx1',
      createdAt: timeStampRef,

      userName: 'Thiago Silva',
      userImg:
        'https://lh3.googleusercontent.com/a/AATXAJyvcx_rZSmq-DaijwdZ_KUL7KfNYi2On1uFOPDh=s96-c',
      userEmail: 'tsilva@gmail.com',
    },
  },

  products: {
    yyy1: {
      docId: 'xxx1',
      createdAt: timeStampRef,

      prodName: 'Banana',
      prodPrice: '6,72',

      prodImg:
        'https://lh3.googleusercontent.com/a/AATXAJyvcx_rZSmq-DaijwdZ_KUL7KfNYi2On1uFOPDh=s96-c',
    },
  },

  shops: {
    zzz1: {
      docId: 'xxx1',
      createdAt: timeStampRef,

      shopName: 'Supermercado da Família',

      shopImg:
        'https://lh3.googleusercontent.com/a/AATXAJyvcx_rZSmq-DaijwdZ_KUL7KfNYi2On1uFOPDh=s96-c',

      shopPermissions: [
        { createdAt: timeStampRef, permissionType: '', userId: 'xxx1' },
      ],
    },
  },
};
