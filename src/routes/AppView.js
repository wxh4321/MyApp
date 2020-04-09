import { compose, lifecycle } from 'recompose';
import { Platform, UIManager } from 'react-native';
import SwitchNavigator from './switchNavigator';

export default compose(
  lifecycle({
    UNSAFE_componentWillMount() {
      if (Platform.OS === 'android') {
        // eslint-disable-next-line no-unused-expressions
        UIManager.setLayoutAnimationEnabledExperimental &&
          UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    },
  }),
)(SwitchNavigator);
