import React from 'react';
import {ActivityIndicator, Modal, StyleSheet, View} from 'react-native';
import sizes from '@assets/styles/sizes';

interface AppLoadingProps {
  loading: boolean;
}
const AppLoading: React.FC<AppLoadingProps> = ({loading}) => {
  return (
    <Modal transparent visible={loading} animationType="fade">
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator animating size="large" color="white" />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityIndicatorWrapper: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.7)',
    width: sizes._50sdp,
    height: sizes._50sdp,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppLoading;
