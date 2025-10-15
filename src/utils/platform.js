import {Platform} from 'react-native';

export const isIOS = Platform.OS === 'ios';

export const getCurrentPlatformColors = () => {
  if (isIOS) {
    return {
      primary: '#007AFF',
      background: '#f2f2f7',
      text: '#000000',
    };
  } else {
    return {
      primary: '#2196F3',
      background: '#ffffff',
      text: '#000000',
    };
  }
};
