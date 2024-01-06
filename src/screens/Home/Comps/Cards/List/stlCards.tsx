import { TextStyle, ViewStyle } from 'react-native';

export const center: ViewStyle = {
  alignItems: 'center',
  justifyContent: 'center',
};
export const stlRow: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
};
export const stlCards: ViewStyle = {
  // backgroundColor: '#8d46a1',
  backgroundColor: '#380546',
  margin: 2,
  ...center,
  width: 50,
  height: 50,
};
export const stlTxtLight: TextStyle = {
  color: 'white',
};

export const stlCardForm: ViewStyle = {
  marginVertical: 40,
  marginHorizontal: 4,
  padding: 4,
};

export const Btn1 = {
  backgroundColor: '#333',
  ...center,
  marginRight: 4,
  borderRadius: 3,
  width: 50,
  height: 40,
};

export const Btn2 = {
  backgroundColor: '#333',
  paddingHorizontal: 4,
  ...center,
  width: 60,
  height: 30,
};

export const stlIpt1: ViewStyle = {
  width: 100,
  padding: 4,
  margin: 4,
  borderColor: '#333',
  borderWidth: 2,
};

export const stlIpt2: ViewStyle = {
  width: 50,
  padding: 4,
  margin: 4,
  borderColor: '#333',
  borderWidth: 2,
};

export const stlCardView: ViewStyle = {
  flexDirection: 'row',
  flexWrap: 'wrap',
  width: 300,
};

export const stlNav: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
};

export const stlTools: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
};

export const stlTabs: ViewStyle = {
  marginBottom: -2,
  height: '100%',
  borderBottomColor: 'white',
  backgroundColor: 'white',
  zIndex: 10,
  marginRight: 3,
  marginLeft: 0,
};

export const stlTabsBar: ViewStyle = {
  ...stlRow,
  borderBottomColor: 'black',
  borderBottomWidth: 2,
  flex: 1,
};
