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
  backgroundColor: '#8d46a1',
  margin: 2,
  ...center,
  width: 50,
  height: 50,
};
export const stlTxtLight: TextStyle = {
  color: 'white',
};

export const stlCardForm: ViewStyle = {
  minHeight: 200,
  borderColor: '#444',
  borderWidth: 2,
  marginVertical: 20,
  padding: 6,
};

export const Btn1 = {
  backgroundColor: '#333',
  ...center,
  width: 100,
  height: 40,
};

export const Btn2 = {
  backgroundColor: '#333',
  ...center,
  width: 60,
  height: 30,
};

export const stlIpt1: ViewStyle = {
  // minWidth: 150,
  padding: 4,
  margin: 4,
  borderColor: '#333',
  borderWidth: 2,
};

export const stlIpt2: ViewStyle = {
  width: 90,
  padding: 4,
  margin: 4,
  borderColor: '#333',
  borderWidth: 2,
};
