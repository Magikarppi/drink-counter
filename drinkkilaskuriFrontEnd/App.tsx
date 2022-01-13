/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import AddDrink from './src/AddDrink';
import Drinks from './src/Drinks';
import Goals from './src/Goals';
import HeaderMain from './src/HeaderMain';
import SettingsModal from './src/Settings/SettingsModal';
import { colors } from './src/themes';
import { DrinkType } from './src/types';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundDark,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // flexGrow: 4
    height: '100%'
  },
  section: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '25%',
    width: '100%',
    marginVertical: 10,
    borderBottomColor: colors.violet,
    borderBottomWidth: 2
  },
});

// const Section: React.FC<{
//   title?: string;
// }> = ({ children, title }) => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//         {children}
//     </View>
//   );
// };

const App = () => {
  const [drinklist, setDrinkList] = useState<DrinkType[]>();
  const [showSettings, setShowSettings] = useState<boolean>(false);
  // const [darkMode, setDarkMode] = useState<boolean>(false);
  const isDarkMode = useColorScheme() === 'dark';

//   useEffect(() => {
//     setDarkMode(colorScheme === "dark");
// }, [colorScheme]);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const handleAddDrink = (drink: DrinkType) => {
    if (drinklist) {
      const newDrinkList = [...drinklist, drink];
      return setDrinkList(newDrinkList);
    } else {
      return setDrinkList([drink]);
    }
  };

  const openSettings = () => {
    setShowSettings(true);
  }

  const closeSettings = () => {
    setShowSettings(false);
  }

  const saveSettings = () => {
    console.log('save settings')
  }

  return (
    <View style={backgroundStyle}>
        {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      <HeaderMain openModal={openSettings}  />
        <View style={styles.container}>
          <SettingsModal showModal={showSettings} closeModal={closeSettings} saveSettings={saveSettings} />
            <View style={styles.section}>
              <AddDrink addDrink={handleAddDrink} />
            </View>
            <View style={{...styles.section, height: 30}}>
              <Goals drinkList={drinklist} />
            </View>
            <View style={styles.section}>
              <Drinks drinkList={drinklist} />
            </View>
        </View>
    </View>
  );
};

export default App;
