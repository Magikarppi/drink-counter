import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  Sex,
} from './src/types';
import { calculateBAC, calculateTotalBAC, randomId } from './src/utils';
import StatusMoreInfo from './src/StatusMoreInfo';
import { UserContext } from './src/UserContext';
import SelectSexModal from './src/SelectSexModal';

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
  const [showSelectSex, setShowSelectSex] = useState<boolean>(false);
  const [sex, setSex] = useState<Sex>();
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

  const storeSex = async (aSex: Sex) => {
    try {
      await AsyncStorage.setItem('sex', JSON.stringify(aSex));
    } catch (error) {
      console.log('error storing sex to asyncStorage:');
      console.log(error);
    }
  };

  const getSexFromStorage = async () => {
    try {
      const storedSex = await AsyncStorage.getItem('sex');
      if (storedSex) {
        setSex(JSON.parse(storedSex));
      } else {
        setShowSelectSex(true);
      }
    } catch (error) {
      console.log('error with getting sex from asyncStorage:');
      console.log(error);
    }
  };

  const storeDrink = async (drink: DrinkType) => {
    try {
      await AsyncStorage.setItem(`drink-${drink.id}`, JSON.stringify(drink));
    } catch (e) {
      console.log('error storing drink to asyncStorage:');
      console.log(e);
    }
  };

  const removeDrinkFromStorage = async (drinkId: number) => {
    try {
      await AsyncStorage.removeItem(`drink-${drinkId}`);
    } catch (e) {
      console.log('error removing drink from storage:');
      console.log(e);
    }
  };

  // Set drinkList to the fetched drinks from AsyncStorage
  const getDrinksFromStorage = useCallback(async () => {
    try {
      const allKeys = await AsyncStorage.getAllKeys();
      const keys = allKeys.filter((k) => k.startsWith('drink-'));
      if (keys.length > 0) {
        keys.forEach(async (k) => {
          const storedDrinkString = await AsyncStorage.getItem(k);

          if (storedDrinkString) {
            const storedDrink = JSON.parse(storedDrinkString);
            setDrinkList((prevState) => [...prevState, storedDrink]);
            return;
          }
        });
      }
    } catch (e) {
      console.log('error with getting data from async-storage:');
      console.log(e);
    }
  }, []);

  // Remove items from storage
  const clearStorage = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();

      if (keys.length > 0) {
        try {
          await AsyncStorage.multiRemove(keys);
        } catch (error) {
          console.log('error removing from async-storage: ');
          console.log(error);
        }
      }
    } catch (error) {
      console.log('error getting keys from async-storage: ');
      console.log(error);
    }
  };

  const storeBodyweight = async (bw: string) => {
    try {
      await AsyncStorage.setItem('bodyweight', JSON.stringify(bw));
    } catch (e) {
      console.log('error storing bodyweight to asyncStorage:');
      console.log(e);
    }
  };

  const getBodyweightFromStorage = useCallback(async () => {
    try {
      const bw = await AsyncStorage.getItem('bodyweight');
      if (bw) {
        setBodyweight(JSON.parse(bw));
      }
    } catch (e) {
      console.log('error with getting bodyweight from async-storage:');
      console.log(e);
    }
  }, []);

  const storeDrinkCountLimit = async (aDrinkCount: string | undefined) => {
    try {
      await AsyncStorage.setItem(
        'drinkCountLimit',
        JSON.stringify(aDrinkCount)
      );
    } catch (error) {
      console.log('error with storing drinkCountLimit to asyncStorage');
      console.log(error);
    }
  };

  const getDrinkCountLimitFromStorage = useCallback(async () => {
    try {
      const dcl = await AsyncStorage.getItem('drinkCountLimit');
      if (dcl !== null) {
        setDrinkCountLimit(JSON.parse(dcl));
      }
    } catch (e) {
      console.log('error with getting drinkCountLimit from async-storage:');
      console.log(e);
    }
  }, []);

  const storeBACLimit = async (limit: string | undefined) => {
    try {
      await AsyncStorage.setItem('bacLimit', JSON.stringify(limit));
    } catch (error) {
      console.log('error with storing bacLimit to async-storage:');
      console.log(error);
    }
  };

  const getBACLimitFromStorage = useCallback(async () => {
    try {
      const limit = await AsyncStorage.getItem('bacLimit');
      if (limit !== null) {
        setBACLimit(JSON.parse(limit));
      }
    } catch (e) {
      console.log('error with getting bacLimit from async-storage:');
      console.log(e);
    }
  }, []);

  useEffect(() => {
    getSexFromStorage();
  }, []);

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
    // if user's sex is not set we should not go any further
    if (!sex) {
      return;
    }
    // if user removes all added drinks, reset total BAC
    if (drinkList.length < 1) {
      setTotalBloodAlc(0);
    }
    // Refresh total BAC immediately when new drink added
    if (drinkList.length > 0) {
      const totalBac = calculateTotalBAC(drinkList, bodyweight, sex);
      setTotalBloodAlc(totalBac);
    }
    // Minimize status-more-info view and hide status view if no drink's have been added
    if (drinkList.length <= 0) {
      setStatusIsExpanded(false);
    }
    // Refresh total BAC every minute
    const interval = setInterval(() => {
      if (drinkList.length > 0) {
        const totalBac = calculateTotalBAC(drinkList, bodyweight, sex);
        setTotalBloodAlc(totalBac);
      }
    }, 60000);
    return () => clearInterval(interval);
  }, [drinkList, bodyweight, sex]);

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

  // If drinkList is empty check if there are drinks in AsyncStorage and update drinkList
  useEffect(() => {
    if (drinkList.length < 1) {
      getDrinksFromStorage();
    }
  }, [drinkList, getDrinksFromStorage]);

  // // clear drinks from local state and storage when all have been consumed
  // useEffect(() => {
  //   console.log('totalBAC: ', totalBloodAlc);
  //   if (drinkList.length > 0 && totalBloodAlc <= 0) {
  //     console.log('clear useeffect()');
  //     clearStorage();
  //     setDrinkList([]);
  //   }
  // }, [drinkList, totalBloodAlc]);

  // Get and set bodyweight, drinkCountLimit and bacLimit from storage
  useEffect(() => {
    getBodyweightFromStorage();
    getDrinkCountLimitFromStorage();
    getBACLimitFromStorage();
  }, [
    getBodyweightFromStorage,
    getDrinkCountLimitFromStorage,
    getBACLimitFromStorage,
  ]);

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
    // if alcPercent or amount or user's sex is not set we should not go any further
    if (!alcPercent || !amount || !sex) {
      return;
    }

    const alcPercentTrimmed = parseFloat(alcPercent.replace(',', '.'));
    const amountTrimmed = parseFloat(amount.replace(',', '.'));

    let newDrink: DrinkType = {
      amount: amountTrimmed,
      alcPercent: alcPercentTrimmed,
      timeConsumed: new Date(),
      id: randomId(),
      name: drinkName,
      favorited: false,
      svgMultiplier: 125,
    };

    const drinkBAC = calculateBAC(newDrink, bodyweight, sex);
    const svgMultiplier = 125 / drinkBAC;

    newDrink = { ...newDrink, svgMultiplier: svgMultiplier };

    if (drinkList) {
      const newDrinkList = [...drinkList, newDrink];
      setDrinkList(newDrinkList);
      setShowFavorites(false);
      storeDrink(newDrink);
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
    // if user's sex is not set we should not go any further
    if (!sex) {
      return;
    }

    let newDrink: DrinkType = {
      amount: favDrink.amount,
      alcPercent: favDrink.alcPercent,
      timeConsumed: new Date(),
      id: randomId(),
      name: favDrink.name,
      favorited: true,
      svgMultiplier: 125,
    };

    const drinkBAC = calculateBAC(newDrink, bodyweight, sex);
    const svgMultiplier = 125 / drinkBAC;

    newDrink = { ...newDrink, svgMultiplier: svgMultiplier };

    if (drinkList) {
      const newDrinkList = [...drinkList, newDrink];
      setDrinkList(newDrinkList);
    } else {
      setDrinkList([newDrink]);
    }

    storeDrink(newDrink);
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
    removeDrinkFromStorage(drink.id);
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

  // flash favorites folder icon style to indicate addition
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

  const handleSelectSex = (aSex: Sex) => {
    setSex(aSex);
    setShowSelectSex(false);
    storeSex(aSex);
    return;
  };

  const handleContinueAddDrink = () => {
    setShowReminder(false);
    addDrink();
    return;
  };

  const handleSetDrinkCountLimit = (aDrinkCount: string | undefined) => {
    setDrinkCountLimit(aDrinkCount);
    storeDrinkCountLimit(aDrinkCount);
  };

  const handleSetBodyweight = (bw: string) => {
    setBodyweight(bw);
    storeBodyweight(bw);
  };

  const handleSetBACLimit = (limit: string | undefined) => {
    setBACLimit(limit);
    storeBACLimit(limit);
  };

  return (
    <UserContext.Provider value={{ bodyweight: bodyweight, sex: sex }}>
      <View>
        <HeaderMain openModal={openSettings} />
        <View style={styles.container}>
          <SelectSexModal
            showModal={showSelectSex}
            handleSelectSex={handleSelectSex}
          />
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
            setBodyweight={handleSetBodyweight}
            drinkCountLimit={drinkCountLimit}
            setDrinkCountLimit={handleSetDrinkCountLimit}
            bacLimit={bacLimit}
            setBACLimit={handleSetBACLimit}
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
