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
import FavoritesModal from './src/FavoritesModal';
import Goals from './src/Goals';
import HeaderMain from './src/HeaderMain';
import SettingsModal from './src/Settings/SettingsModal';
import { colors } from './src/themes';
import { DrinkType, FavDrinkType } from './src/types';
import { randomId } from './src/utils';

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
    height: '40%',
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

const drinkList: FavDrinkType[] = new Array(10).fill({id: randomId(),name: "IPA", alcPercent: 4.7, amount: 0.33});

const App = () => {
  const [drinklist, setDrinkList] = useState<DrinkType[]>();
  const [favorites, setFavorites] = useState<FavDrinkType[]>(drinkList);
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [showFavorites, setShowFavorites] = useState<boolean>(false);
  // const [darkMode, setDarkMode] = useState<boolean>(false);
  const isDarkMode = useColorScheme() === 'dark';

//   useEffect(() => {
//     setDarkMode(colorScheme === "dark");
// }, [colorScheme]);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const addDrink = (drink: DrinkType) => {
    if (drinklist) {
      const newDrinkList = [...drinklist, drink];
      setDrinkList(newDrinkList);
      setShowFavorites(false);
      return
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

  const openFavorites = () => {
    setShowFavorites(true);
  }

  const closeFavorites = () => {
    setShowFavorites(false);
  }

  const removeFavorite = (drink: FavDrinkType) => {
    const favoritesCopy = [...favorites];
    const newFavorites = favoritesCopy.filter((f) => f.id !== drink.id);
    setFavorites(newFavorites);
    return;
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
          <FavoritesModal showModal={showFavorites} closeModal={closeFavorites} addDrink={addDrink} favorites={favorites} removeFavorite={removeFavorite} />
            <View style={styles.section}>
              <AddDrink addDrink={addDrink} openFavorites={openFavorites}/>
            </View>
            <View style={{...styles.section, height: 20}}>
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
