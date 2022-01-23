/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import { StyleSheet, useColorScheme, View } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import AddDrink from './src/AddDrink';
import Drinks from './src/Drinks';
import FavoritesModal from './src/FavoritesModal';
import Goals from './src/Goals';
import HeaderMain from './src/HeaderMain';
import Message from './src/Message';
import SettingsModal from './src/Settings/SettingsModal';
import { colors } from './src/themes';
import {
  Bodyweight,
  DrinkType,
  FavDrinkType,
  RemindInterval,
} from './src/types';
import { randomId } from './src/utils';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundDark,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // flexGrow: 4
    height: '100%',
  },
  section: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '40%',
    width: '100%',
    marginVertical: 10,
    borderBottomColor: colors.violet,
    borderBottomWidth: 2,
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
  const [favorites, setFavorites] = useState<FavDrinkType[] | null>(null);
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [showFavorites, setShowFavorites] = useState<boolean>(false);
  const [maxDrinkCount, setMaxDrinkCount] = useState<string>();
  const [sleepTime, setSleepTime] = useState<Date>(new Date());
  const [message, setMessage] = useState<string | null>(null);
  const [remindInterval, setRemindInterval] =
    useState<RemindInterval>('afterMax');
  const [bodyweight, setBodyweight] = useState<Bodyweight>();
  // const [darkMode, setDarkMode] = useState<boolean>(false);
  const isDarkMode = useColorScheme() === 'dark';

  //   useEffect(() => {
  //     setDarkMode(colorScheme === "dark");
  // }, [colorScheme]);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const addDrink = (alcPercent: number, amount: number, _name?: string) => {
    const newDrink: DrinkType = {
      amount,
      alcPercent,
      timeConsumed: new Date(),
      id: randomId(),
    };

    if (drinklist) {
      const newDrinkList = [...drinklist, newDrink];
      setDrinkList(newDrinkList);
      setShowFavorites(false);
      return;
    } else {
      setDrinkList([newDrink]);
      return;
    }
  };

  const openSettings = () => {
    setShowSettings(true);
  };

  const closeSettings = () => {
    setShowSettings(false);
  };

  const openFavorites = () => {
    if (favorites) {
      setShowFavorites(true);
    } else {
      if (drinklist) {
        setMessage('Paina tähteä lisätäksesi suosikin');
      } else {
        setMessage('Lisää drinkki ja paina tähteä lisätäksesi suosikin');
      }
      setTimeout(() => {
        setMessage(null);
      }, 2400);
    }
  };

  const closeFavorites = () => {
    setShowFavorites(false);
  };

  const addToFavorites = (drink: DrinkType) => {
    const drinkCopy: FavDrinkType = { ...drink };
    delete drinkCopy.timeConsumed;
    if (favorites) {
      const newFavoritesList = [...favorites, drink];
      setFavorites(newFavoritesList);
    } else {
      setFavorites([drink]);
    }
  };

  const removeFavorite = (drink: FavDrinkType) => {
    if (!favorites) {
      return;
    }
    const favoritesCopy = [...favorites];
    const newFavorites = favoritesCopy.filter((f) => f.id !== drink.id);
    setFavorites(newFavorites);
    return;
  };

  const saveSettings = () => {
    console.log('save settings');
  };

  const changeSleepTime = (time: Date) => {
    if (time) {
      return setSleepTime(time);
    }
  };

  const selectRemindInterval = (interval: RemindInterval) => {
    setRemindInterval(interval);
  };

  return (
    <View style={backgroundStyle}>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      <HeaderMain openModal={openSettings} />
      <View style={styles.container}>
        <SettingsModal
          bodyweight={bodyweight}
          setBodyweight={setBodyweight}
          maxDrinkCount={maxDrinkCount}
          handleSetMaxDrinkCount={setMaxDrinkCount}
          showModal={showSettings}
          closeModal={closeSettings}
          saveSettings={saveSettings}
          sleepTime={sleepTime}
          changeSleepTime={changeSleepTime}
          selectRemindInterval={selectRemindInterval}
          selectedRemindInterval={remindInterval}
        />
        <FavoritesModal
          showModal={showFavorites}
          closeModal={closeFavorites}
          addDrink={addDrink}
          favorites={favorites}
          removeFavorite={removeFavorite}
        />
        <View style={styles.section}>
          <AddDrink addDrink={addDrink} openFavorites={openFavorites} />
        </View>
        <View style={{ ...styles.section, height: 20 }}>
          <Goals drinkList={drinklist} />
        </View>
        <View style={{ ...styles.section, height: 200 }}>
          <Message message={message} />
          <Drinks drinkList={drinklist} addToFavorites={addToFavorites} />
        </View>
      </View>
    </View>
  );
};

export default App;
