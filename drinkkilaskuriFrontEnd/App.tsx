import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Keyboard } from 'react-native';

import AddDrink from './src/AddDrink';
import ExpandMinimizeButton from './src/Buttons/ExpandMinimizeButton';
import Drinks from './src/Drinks';
import FavoritesModal from './src/FavoritesModal';
import Status from './src/Status';
import HeaderMain from './src/HeaderMain';
import MessageModal from './src/MessageModal';
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
import { calculateTotalBAC, randomId } from './src/utils';
import StatusMoreInfo from './src/StatusMoreInfo';
import { UserContext } from './src/UserContext';

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
  statusGhostEl: { width: '10%', backgroundColor: 'white' },
});

const defaultFavFolderStyle = {
  color: colors.beige,
  size: 50,
};

const statusMinimizedStyle = {
  width: '100%',
};

const statusExpandedStyle = {
  height: 170,
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  borderBottomColor: colors.violet,
  borderBottomWidth: 1,
};

const App = () => {
  const [drinkList, setDrinkList] = useState<DrinkType[]>([]);
  const [alcPercent, setAlcPercent] = useState<string>();
  const [amount, setAmount] = useState<string>();
  const [drinkName, setDrinkName] = useState<string>();
  const [favorites, setFavorites] = useState<FavDrinkType[] | null>(null);
  const [showReminder, setShowReminder] = useState<boolean>(false);
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [showFavorites, setShowFavorites] = useState<boolean>(false);
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [favFolderIconStyle, setFavFolderIconStyle] =
    useState<FavFolderIconStyle>(defaultFavFolderStyle);
  const [drinkCountLimit, setDrinkCountLimit] = useState<string>();
  const [drinkCountLimitReached, setDrinkCountLimitReached] =
    useState<boolean>(false);
  const [bacLimit, setBACLimit] = useState<string>();
  const [bacLimitReached, setBACLimitReached] = useState<boolean>(false);
  const [sleepTime, setSleepTime] = useState<Date | undefined>(new Date());
  const [useSleepTime, setUseSleepTime] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);
  const [reminderMessage, setReminderMessage] = useState<string>();
  const [sleepTimeReminderMsg, setSleepTimeReminderMsg] = useState<string>();
  const [remindInterval, setRemindInterval] =
    useState<RemindInterval>('afterMax');
  const [bodyweight, setBodyweight] = useState<Bodyweight>('70');
  const [totalBloodAlc, setTotalBloodAlc] = useState<number>(0);
  const [statusIsExpanded, setStatusIsExpanded] = useState<boolean>(false);
  const [statusContainerStyle, setStatusContainerStyle] =
    useState<any>(statusMinimizedStyle);

  // Check and set the right exp/min button and style for Status
  useEffect(() => {
    statusIsExpanded
      ? setStatusContainerStyle(statusExpandedStyle)
      : setStatusContainerStyle(statusMinimizedStyle);
  }, [statusIsExpanded]);

  // Check and format input values
  useEffect(() => {
    // Drink limit of 0 is not allowed (aina voi yhen ottaa...)
    if (drinkCountLimit === '0' || drinkCountLimit === '') {
      setDrinkCountLimit(undefined);
    }

    if (bacLimit) {
      // Remove whitepaces
      setBACLimit(bacLimit.trim());
      // if bacLimit is an empty string set it to undefined
      if (/^\s*$/.test(bacLimit)) {
        setBACLimit(undefined);
      }
    }
  }, [drinkCountLimit, bacLimit]);

  // Calculate and update total blood alcohol content (total BAC) every minute and when a new drink gets added
  useEffect(() => {
    // if user removes all added drinks, reset total BAC
    if (drinkList.length < 1) {
      setTotalBloodAlc(0);
    }

    // Refresh total BAC immediately when new drink added
    if (drinkList.length > 0) {
      const totalBac = calculateTotalBAC(drinkList, bodyweight);
      setTotalBloodAlc(totalBac);
    }

    // Minimize status-more-info view and hide status view if no drink's have been added
    if (drinkList.length <= 0) {
      setStatusIsExpanded(false);
    }

    // Refresh total BAC every minute
    const interval = setInterval(() => {
      if (drinkList.length > 0) {
        const totalBac = calculateTotalBAC(drinkList, bodyweight);
        setTotalBloodAlc(totalBac);
      }
    }, 60000);
    return () => clearInterval(interval);
  }, [drinkList, bodyweight]);

  // Check if drinkCountLimit has been reached and set state accordingly
  useEffect(() => {
    if (drinkCountLimit && drinkList) {
      const drinkLimitExceeded =
        drinkList?.length >= parseInt(drinkCountLimit, 10);
      const drinkLimitNumber = parseInt(drinkCountLimit, 10);
      if (drinkLimitNumber > 0 && drinkLimitExceeded) {
        setDrinkCountLimitReached(true);
      } else {
        setDrinkCountLimitReached(false);
      }
    }

    // if drinkCountLimit has been removed reset to false
    if (!drinkCountLimit) {
      setDrinkCountLimitReached(false);
    }
  }, [drinkCountLimit, drinkList]);

  // Check if bacLimit has been reached and set state accordingly
  useEffect(() => {
    if (bacLimit && totalBloodAlc) {
      const status = parseFloat(bacLimit) - totalBloodAlc * 10;
      if (status <= 0) {
        return setBACLimitReached(true);
      } else {
        return setBACLimitReached(false);
      }
    }

    // if bacLimit has been removed reset to false
    if (!bacLimit) {
      setBACLimitReached(false);
    }
  }, [bacLimit, totalBloodAlc]);

  const validateDrinkAddition = (favDrink?: FavDrinkType) => {
    if (!favDrink?.alcPercent) {
      if (!alcPercent || !amount) {
        return;
      }
    }

    if (drinkCountLimitReached) {
      setShowReminder(true);
      return;
    }

    if (bacLimitReached) {
      setShowReminder(true);
      return;
    }

    if (remindInterval === 'always') {
      setShowReminder(true);
      return;
    }

    if (useSleepTime) {
      let sleepTimeExceeded = false;
      if (sleepTime) {
        const sleepTimeHMValue =
          sleepTime.getHours() * 100 + sleepTime.getMinutes();
        const currTimeHMValue =
          new Date().getHours() * 100 + new Date().getMinutes();
        sleepTimeExceeded = sleepTimeHMValue - currTimeHMValue <= 0;
      }

      if (sleepTimeExceeded) {
        const sleepReminderMsg =
          'Viimeaikainen nukkumaanmenoaika ylitetty. Ei suositella juomaan lisää.';
        setSleepTimeReminderMsg(sleepReminderMsg);
        setShowReminder(true);
        return;
      }
    }

    if (favDrink?.alcPercent) {
      addDrinkFromFavorites(favDrink);
    } else {
      addDrink();
    }
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
      favorited: false,
    };

    // calculateBAC(newDrink, 'male');

    if (drinkList) {
      const newDrinkList = [...drinkList, newDrink];
      setDrinkList(newDrinkList);
      setShowFavorites(false);
    } else {
      setDrinkList([newDrink]);
    }
    setAlcPercent(undefined);
    setAmount(undefined);
    setDrinkName(undefined);
    Keyboard.dismiss();
    return;
  };

  const addDrinkFromFavorites = (favDrink: FavDrinkType) => {
    const newDrink: DrinkType = {
      amount: favDrink.amount,
      alcPercent: favDrink.alcPercent,
      timeConsumed: new Date(),
      id: randomId(),
      name: favDrink.name,
      favorited: true,
    };

    if (drinkList) {
      const newDrinkList = [...drinkList, newDrink];
      setDrinkList(newDrinkList);
    } else {
      setDrinkList([newDrink]);
    }
    setShowFavorites(false);
    return;
  };

  const removeDrink = (drink: DrinkType): void => {
    if (!drinkList) {
      return;
    }
    const drinkListCopy = [...drinkList];
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
      if (drinkList.length > 0) {
        setMessage('Paina tähteä lisätäksesi suosikin');
      } else {
        setMessage('Lisää drinkki ja paina tähteä lisätäksesi suosikin');
      }
      setShowMessage(true);
      setTimeout(() => {
        setMessage(null);
        setShowMessage(false);
        return;
      }, 2500);
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
    const favoritedDrink = {
      ...drink,
      favorited: true,
    };

    if (!drinkList) {
      return;
    }

    // update/add drink to drinkList
    const drinkListCopy = [...drinkList];
    const newDrinkList = drinkListCopy.map((d) => {
      if (d.id !== favoritedDrink.id) {
        return d;
      } else {
        return favoritedDrink;
      }
    });
    setDrinkList(newDrinkList);

    // update/add drink to favorites
    if (favorites) {
      const favoritesCopy = [...favorites];
      setFavorites([...favoritesCopy, favoritedDrink]);
    } else {
      setFavorites([favoritedDrink]);
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

    // remove drink from favorites
    const favoritesCopy = [...favorites];
    const newFavorites = favoritesCopy.filter((f) => f.id !== drink.id);
    setFavorites(newFavorites);

    // update drink in drinkList
    const drinkListCopy = [...drinkList];
    const newDrinkList = drinkListCopy.map((d) => {
      if (d.id === drink.id) {
        return { ...d, favorited: false };
      } else {
        return d;
      }
    });
    setDrinkList(newDrinkList);

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
    <UserContext.Provider value={{ bodyweight: bodyweight }}>
      <View>
        <HeaderMain openModal={openSettings} />
        <View style={styles.container}>
          <ReminderModal
            showModal={showReminder}
            closeModal={closeReminder}
            continueAdd={handleContinueAddDrink}
            reminderMessage={reminderMessage}
            sleepTimeReminderMsg={sleepTimeReminderMsg}
            drinkCountLimitReached={drinkCountLimitReached}
            bacLimitReached={bacLimitReached}
          />
          <SettingsModal
            bodyweight={bodyweight}
            setBodyweight={setBodyweight}
            drinkCountLimit={drinkCountLimit}
            setDrinkCountLimit={setDrinkCountLimit}
            bacLimit={bacLimit}
            setBACLimit={setBACLimit}
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
            addDrink={validateDrinkAddition}
            favorites={favorites}
            removeFavorite={removeFavorite}
          />
          <MessageModal message={message} showModal={showMessage} />
          <View style={styles.section}>
            <AddDrink
              alcPercent={alcPercent}
              setAlcPercent={setAlcPercent}
              amount={amount}
              setAmount={setAmount}
              drinkName={drinkName}
              setDrinkName={setDrinkName}
              addDrink={validateDrinkAddition}
              openFavorites={openFavorites}
              favFolderIconStyle={favFolderIconStyle}
            />
          </View>
          <View style={statusContainerStyle}>
            <View
              style={{
                ...styles.section,
                flexDirection: 'row',
                height: 35,
                borderBottomColor: statusIsExpanded
                  ? colors.backgroundDark
                  : colors.violet,
                // width: '100%',
              }}
            >
              {drinkList.length > 0 ? (
                <ExpandMinimizeButton
                  statusIsExpanded={statusIsExpanded}
                  setStatusIsExpanded={setStatusIsExpanded}
                />
              ) : (
                <View style={styles.statusGhostEl} />
              )}
              <Status
                drinkList={drinkList}
                drinkCountLimit={drinkCountLimit}
                totalBAC={totalBloodAlc}
                bacLimit={bacLimit}
                drinkCountLimitReached={drinkCountLimitReached}
                bacLimitReached={bacLimitReached}
              />
              <View style={styles.statusGhostEl} />
            </View>
            {statusIsExpanded ? (
              <StatusMoreInfo totalBac={totalBloodAlc} />
            ) : null}
          </View>
          <View style={{ ...styles.section, borderBottomWidth: 0 }}>
            <Drinks
              drinkList={drinkList}
              addToFavorites={addToFavorites}
              removeDrink={removeDrink}
              removeFavorite={removeFavorite}
            />
            <View style={{ height: 70 }} />
          </View>
        </View>
      </View>
    </UserContext.Provider>
  );
};

export default App;
