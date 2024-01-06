import { TextStyle, ViewStyle } from 'react-native';

const stlBorder: ViewStyle = {
  borderTopWidth: 2,
  borderTopColor: 'black',

  borderLeftWidth: 2,
  borderLeftColor: 'black',
};

export const stlPrintContainer: ViewStyle = {
  // width: 700,
  width: '100%',
  ...stlBorder,
};

export const stlCardNum: ViewStyle = {
  width: 34,
  alignItems: 'center',
  justifyContent: 'center',
  borderRightWidth: 2,
  borderRightColor: 'black',
};
export const stlAssign: ViewStyle = {
  flex: 1,
  // width: 150,

  borderRightWidth: 2,
  borderRightColor: 'black',
};
export const stlDate: ViewStyle | TextStyle = {
  flex: 1,
  textAlign: 'center',
  padding: 2,
  borderRightWidth: 2,
  borderRightColor: 'black',
  fontSize: 12,
};
export const stlGroup: ViewStyle | TextStyle = {
  // textAlign: 'center',
  flex: 1,

  borderBottomWidth: 2,
  borderBottomColor: 'black',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: 2,
  fontSize: 12,
};
export const stlPrintListItem: ViewStyle = {
  width: '100%',
  // height: 42,
  height: 52,
  flexDirection: 'row',
  borderBottomWidth: 2,
  borderBottomColor: 'black',
};
