import React, { useState } from 'react';
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
  const [favorites, setFavorites] = useState<FavDrinkType[] | null>(null);
  const [showReminder, setShowReminder] = useState<boolean>(false);
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [showFavorites, setShowFavorites] = useState<boolean>(false);
  const [favFolderIconStyle, setFavFolderIconStyle] =
    useState<FavFolderIconStyle>(defaultFavFolderStyle);
  const [maxDrinkCount, setMaxDrinkCount] = useState<string>();
  const [sleepTime, setSleepTime] = useState<Date | undefined>(new Date());
  const [message, setMessage] = useState<string | null>(null);
  const [reminderMessage, setReminderMessage] = useState<string>();
  const [remindInterval, setRemindInterval] =
    useState<RemindInterval>('afterMax');
  const [bodyweight, setBodyweight] = useState<Bodyweight>('70');
  // const [darkMode, setDarkMode] = useState<boolean>(false);
  const isDarkMode = useColorScheme() === 'dark';

  //   useEffect(() => {
  //     setDarkMode(colorScheme === "dark");
  // }, [colorScheme]);

  console.log('favs', favorites);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const addDrink = async (
    alcPercent: number,
    amount: number,
    name?: string
  ) => {
    console.log('sleeptme', sleepTime);
    if (sleepTime) {
      const sleepTimeHMValue =
        sleepTime.getHours() * 100 + sleepTime.getMinutes();
      const currTimeHMValue =
        new Date().getHours() * 100 + new Date().getMinutes();
      const sleepTimeExceeded = sleepTimeHMValue - currTimeHMValue <= 0;

      // Tee sleeptimelle oma sleepTimeReminderMessage
      if (sleepTimeExceeded) {
        setReminderMessage(
          'Viimeaikainen nukkumaanmenoaika ylitetty. Ei suositella juomaan lisää.'
        );
      }
    }

    if (maxDrinkCount && drinklist) {
      if (drinklist?.length >= parseInt(maxDrinkCount, 10)) {
        openReminder();
      }
    }

    // if (!continueAddDrink) {
    //   return;
    // }

    const newDrink: DrinkType = {
      amount,
      alcPercent,
      timeConsumed: new Date(),
      id: randomId(),
      name,
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
      color: colors.white,
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

  const handleSetReminder = (reminder: string) => {
    setReminderMessage(reminder);
  };

  console.log('rm', reminderMessage?.length);

  const selectRemindInterval = (interval: RemindInterval) => {
    setRemindInterval(interval);
  };

  const openReminder = () => {
    setShowReminder(true);
  };

  const closeReminder = () => {
    console.log('close');
    setShowReminder(false);
  };

  const handleCancelAddDrink = () => {
    // setContinueAddDrink(false);
    // closeReminder();
  };

  const handleContinueAddDrink = () => {
    // setContinueAddDrink(true);
    // closeReminder();
  };

  const handleAction = (action: string) => {
    console.log('handleAction', action);
    // setActionCalled(action);
    closeReminder();
  };

  return (
    <View style={backgroundStyle}>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      <HeaderMain openModal={openSettings} />
      <View style={styles.container}>
        <ReminderModal
          showModal={showReminder}
          closeModal={closeReminder}
          cancelAdd={handleCancelAddDrink}
          continueAdd={handleContinueAddDrink}
          actionHappened={handleAction}
          reminderMessage={reminderMessage}
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
            addDrink={addDrink}
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
