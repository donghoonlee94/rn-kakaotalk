import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { myProfile } from './src/data';
import Header from './src/Header';
import MyProfile from './src/MyProfile';

const statusBarHeight = getStatusBarHeight(true);
const bottomSpace = getBottomSpace();

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <MyProfile 
        uri={myProfile.uri}
        name={myProfile.name}
        introduction={myProfile.introduction}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: statusBarHeight,
    paddingBottom: bottomSpace,
  },
});
