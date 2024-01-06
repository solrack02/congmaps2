import { TuserInfo } from './dataBase/types/TuserInfo';

// ----------- set Project Data Object
export const projectData: TprjDt = {
  sideRight: {
    open: false,
  },
  authUser: { loading: false },
  cards: {
    selected: {},
    list: {},
    form: {
      iptChanges: {},
    },
  },
  cycles: {
    selected: {},
    list: {},
    form: {
      iptChanges: {},
    },
  },
  mostUsed: {
    list: [],
  },
  assignments: {
    form: {
      iptChanges: {},
    },
  },
  currForm: {
    assignEditData: {},
  },
};

type TprjDt = {
  sideRight: {
    open: boolean;
    component?: any;
  };
  authUser: {
    userInfo?: TuserInfo;
    userId?: string;
    loading: boolean;
  };
  cards: {
    selected: {};
    list: {
      [cardID: string]: {};
    };
    form: {
      iptChanges?: {};
    };
  };
  cycles: {
    selected: {};
    list: {
      [cardID: string]: {};
    };
    form: {
      iptChanges?: {};
    };
  };
  mostUsed: {
    list: [];
  };
  assignments: {
    form: {
      iptChanges: {
        cycleID?: string;
        group?: string;
        init?: string;
        end?: string;
      };
    };
  };
  currForm: {
    assignEditData: {
      year?: string;
      group?: string;
      init?: string;
      end?: string;
      card?: string;
      docId?: string;
      cycleID?: string;
      endTime?: number;
    };
  };
};

// {
//   "pathVar": "projectData.assignments.form.iptChanges.SegM.Antonio.card"
// }
