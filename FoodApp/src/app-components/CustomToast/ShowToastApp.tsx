import sizes from '@assets/styles/sizes';
import {Alert} from 'react-native';

const showToastApp = ({
  type,
  title,
  text,
  position = 'top',
}: {
  type?: 'success' | 'error' | 'info' | 'tomatoToast';
  title?: string;
  text?: string;
  position?: 'top' | 'bottom';
}) => {
  void position;
  void type;
  void sizes;
  Alert.alert(title || 'Thông báo', text || '');
};

export default showToastApp;
