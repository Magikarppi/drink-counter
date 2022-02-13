import React, { useEffect, useState } from 'react';
import { StyleSheet, useColorScheme, View, Keyboard } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import AddDrink from './src/AddDrink';
import Drinks from './src/Drinks';
import FavoritesModal from './src/FavoritesModal';
import Goals from './src/Goals';
import HeaderMain from './src/HeaderMain';
import Message from './src/Message';
import ReminderModal from './src/ReminderModal';
import SettingsModal from './src/Settings/SettingsModal';
import { colors } from './src/themes';
import {
  Bodyweight,
  DrinkType,
  FavDrinkType,
  FavFolderIconStyle,
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
    // marginVertical: 5,
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

const defaultFavFolderStyle = {
  color: colors.beige,
  size: 50,
};

const App = () => {
  const [drinklist, setDrinkList] = useState<DrinkType[]>();
  const [alcPercent, setAlcPercent] = useState<string>();
  const [amount, setAmount] = useState<string>();
  const [drinkName, setDrinkName] = useState<string>();
  const [favorites, setFavorites] = useState<FavDrinkType[] | null>(null);
  const [showReminder, setShowReminder] = useState<boolean>(false);
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [showFavorites, setShowFavorites] = useState<boolean>(false);
  const [favFolderIconStyle, setFavFolderIconStyle] =
    useState<FavFolderIconStyle>(defaultFavFolderStyle);
  const [maxDrinkCount, setMaxDrinkCount] = useState<string>();
  const [drinkLimitReached, setDrinkLimitReached] = useState<boolean>(false);
  const [sleepTime, setSleepTime] = useState<Date | undefined>(new Date());
  const [useSleepTime, setUseSleepTime] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);
  const [reminderMessage, setReminderMessage] = useState<string>();
  const [sleepTimeReminderMsg, setSleepTimeReminderMsg] = useState<string>();
  const [remindInterval, setRemindInterval] =
    useState<RemindInterval>('afterMax');
  const [bodyweight, setBodyweight] = useState<Bodyweight>('70');
  // const [darkMode, setDarkMode] = useState<boolean>(false);
  const isDarkMode = useColorScheme() === 'dark';

  //   useEffect(() => {
  //     setDarkMode(colorScheme === "dark");
  // }, [colorScheme]);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    if (maxDrinkCount && drinklist) {
      const drinkLimitExceeded =
        drinklist?.length >= parseInt(maxDrinkCount, 10);
      if (drinkLimitExceeded) {
        setDrinkLimitReached(true);
      } else {
        setDrinkLimitReached(false);
      }
    }
  }, [maxDrinkCount, drinklist]);

  const checkAndAddDrink = () => {
    if (drinkLimitReached) {
      setShowReminder(true);
      return;
    }

    let sleepTimeExceeded = false;
    if (sleepTime) {
      const sleepTimeHMValue =
        sleepTime.getHours() * 100 + sleepTime.getMinutes();
      const currTimeHMValue =
        new Date().getHours() * 100 + new Date().getMinutes();
      sleepTimeExceeded = sleepTimeHMValue - currTimeHMValue <= 0;
    }
    console.log('sleepTimeExc', sleepTimeExceeded);

    if (sleepTimeExceeded) {
      const sleepReminderMsg =
        'Viimeaikainen nukkumaanmenoaika ylitetty. Ei suositella juomaan lisää.';
      setSleepTimeReminderMsg(sleepReminderMsg);
      setShowReminder(true);
      return;
    }

    addDrink();
    return;
  };

  const addDrink = () => {
    if (!alcPercent || !amount) {
      return;
    }

    const alcPercentTrimmed = parseFloat(alcPercent.replace(',', '.'));
    const amountTrimmed = parseFloat(amount.replace(',', '.'));

    const newDrink: DrinkType = {
      amount: amountTrimmed,
      alcPercent: alcPercentTrimmed,
      timeConsumed: new Date(),
      id: randomId(),
      name: drinkName,
    };

    if (drinklist) {
      const newDrinkList = [...drinklist, newDrink];
      setDrinkList(newDrinkList);
      setShowFavorites(false);
    } else {
      setDrinkList([newDrink]);
    }
    Keyboard.dismiss();
    return;
  };

  const removeDrink = (drink: DrinkType): void => {
    if (!drinklist) {
      return;
    }
    const drinkListCopy = [...drinklist];
    const newDrinkList = drinkListCopy.filter((f) => f.id !== drink.id);
    setDrinkList(newDrinkList);
    return;
  };

  const openSettings = () => {
    setShowSettings(true);
  };

  const closeSettings = () => {
    setShowSettings(false);
  };

  const openFavorites = () => {
    if (favorites && favorites.length > 0) {
      setShowFavorites(true);
    } else {
      if (drinklist) {
        setMessage('Paina tähteä lisätäksesi suosikin');
      } else {
        setMessage('Lisää drinkki ja paina tähteä lisätäksesi suosikin');
      }
      setTimeout(() => {
        setMessage(null);
        return;
      }, 2400);
    }
  };

  const closeFavorites = () => {
    setShowFavorites(false);
    return;
  };

  const flashFavFolderStyle = () => {
    const tempStyle: FavFolderIconStyle = {
      color: colors.violet,
      size: 55,
    };
    setFavFolderIconStyle(tempStyle);
    setTimeout(() => {
      setFavFolderIconStyle(defaultFavFolderStyle);
    }, 200);
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
    setTimeout(() => {
      flashFavFolderStyle();
    }, 100);
    return;
  };

  const removeFavorite = (drink: FavDrinkType) => {
    if (!favorites) {
      return;
    }
    const favoritesCopy = [...favorites];
    const newFavorites = favoritesCopy.filter((f) => f.id !== drink.id);
    setFavorites(newFavorites);
    if (newFavorites.length < 1) {
      closeFavorites();
    }
    return;
  };

  const changeSleepTime = (time: Date) => {
    if (time) {
      return setSleepTime(time);
    }
  };

  const toggleUseSleepTime = () => {
    setUseSleepTime((prev) => !prev);
    return;
  };

  const selectRemindInterval = (interval: RemindInterval) => {
    setRemindInterval(interval);
    return;
  };

  const closeReminder = () => {
    setShowReminder(false);
    return;
  };

  const handleContinueAddDrink = () => {
    setShowReminder(false);
    addDrink();
    return;
  };

  return (
    <View style={backgroundStyle}>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      <HeaderMain openModal={openSettings} />
      <View style={styles.container}>
        <ReminderModal
          showModal={showReminder}
          closeModal={closeReminder}
          continueAdd={handleContinueAddDrink}
          reminderMessage={reminderMessage}
          sleepTimeReminderMsg={sleepTimeReminderMsg}
          drinkLimitReached={drinkLimitReached}
        />
        <SettingsModal
          bodyweight={bodyweight}
          setBodyweight={setBodyweight}
          maxDrinkCount={maxDrinkCount}
          handleSetMaxDrinkCount={setMaxDrinkCount}
          showModal={showSettings}
          closeModal={closeSettings}
          sleepTime={sleepTime}
          changeSleepTime={changeSleepTime}
          selectRemindInterval={selectRemindInterval}
          selectedRemindInterval={remindInterval}
          reminderMessage={reminderMessage}
          setReminderMessage={setReminderMessage}
          useSleepTime={useSleepTime}
          toggleUseSleepTime={toggleUseSleepTime}
        />
        <FavoritesModal
          showModal={showFavorites}
          closeModal={closeFavorites}
          addDrink={addDrink}
          favorites={favorites}
          removeFavorite={removeFavorite}
        />
        <View style={styles.section}>
          <AddDrink
            alcPercent={alcPercent}
            setAlcPercent={setAlcPercent}
            amount={amount}
            setAmount={setAmount}
            drinkName={drinkName}
            setDrinkName={setDrinkName}
            addDrink={checkAndAddDrink}
            openFavorites={openFavorites}
            favFolderIconStyle={favFolderIconStyle}
          />
        </View>
        <View style={{ ...styles.section, borderBottomWidth: 0, height: 30 }}>
          <Goals drinkList={drinklist} drinkLimit={maxDrinkCount} />
        </View>
        <View style={{ ...styles.section, borderBottomWidth: 0, height: 300 }}>
          <Message message={message} />
          <Drinks
            drinkList={drinklist}
            addToFavorites={addToFavorites}
            removeDrink={removeDrink}
          />
        </View>
      </View>
    </View>
  );
};

export default App;
