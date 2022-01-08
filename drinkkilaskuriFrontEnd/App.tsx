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
import { DrinkType } from './src/types';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dbc8a7',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexGrow: 1
  },
  highlight: {
    fontWeight: '700',
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

  return (
    // <SafeAreaView style={backgroundStyle}>
      <View style={styles.container}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
            <HeaderMain openModal={openSettings}  />
            <SettingsModal showModal={showSettings} closeModal={closeSettings} />
            <AddDrink addDrink={handleAddDrink} />
            <Goals drinkList={drinklist} />
            <Drinks drinkList={drinklist} />
        </View>
      </View>
    // </SafeAreaView>
  );
};

export default App;
