import { Dispatch, SetStateAction } from 'react';

export type RType = 0.68 | 0.55;

export interface CloseButtonProps {
  closeModal: () => void;
}

export type AddDrinkFunc = (
  alcPercent: number,
  amount: number,
  name?: string
) => void;

export interface AddDrinkProps {
  alcPercent: string | undefined;
  setAlcPercent: (alcPercent: string | undefined) => void;
  amount: string | undefined;
  setAmount: (amount: string | undefined) => void;
  drinkName: string | undefined;
  setDrinkName: (name: string | undefined) => void;
  addDrink: () => void;
  openFavorites: () => void;
  favFolderIconStyle: FavFolderIconStyle;
}

export interface DrinkType {
  name?: string;
  alcPercent: number;
  amount: number;
  timeConsumed: Date;
  id: number;
}

export interface FavDrinkType {
  name?: string;
  alcPercent: number;
  amount: number;
  id: number;
  timeConsumed?: Date;
}

export interface FavFolderIconStyle {
  color: string;
  size: number;
}
export interface DrinkProps {
  drink: DrinkType;
  addToFavorites: (drink: DrinkType) => void;
  removeDrink: (drink: DrinkType) => void;
}

export type DrinkList = DrinkType[] | undefined;

export interface DrinksProps {
  drinkList: DrinkList;
  addToFavorites: (drink: DrinkType) => void;
  removeDrink: (drink: DrinkType) => void;
}

export interface GoalsProps {
  drinkList: DrinkList;
  drinkLimit: string | undefined;
}

export interface SettingsModalProps {
  showModal: boolean;
  closeModal: () => void;
  changeSleepTime: (time: Date) => void;
  sleepTime: Date | undefined;
  selectedRemindInterval: RemindInterval;
  selectRemindInterval: SelectRemindInterval;
  handleSetMaxDrinkCount: HandleSetMaxDrinkCount;
  maxDrinkCount: MaxDrinkCount;
  bodyweight: Bodyweight;
  setBodyweight: SetBodyweight;
  reminderMessage: string | undefined;
  setReminderMessage: Dispatch<SetStateAction<string | undefined>>;
  useSleepTime: boolean;
  toggleUseSleepTime: () => void;
}

export interface SettingsProps {
  changeSleepTime: (time: Date) => void;
  sleepTime: Date | undefined;
  selectRemindInterval: SelectRemindInterval;
  selectedRemindInterval: RemindInterval;
  handleSetMaxDrinkCount: HandleSetMaxDrinkCount;
  maxDrinkCount: MaxDrinkCount;
  bodyweight: Bodyweight;
  setBodyweight: SetBodyweight;
  reminderMessage: string | undefined;
  setReminderMessage: Dispatch<SetStateAction<string | undefined>>;
  useSleepTime: boolean;
  toggleUseSleepTime: () => void;
}

export interface FavoritesModalProps {
  showModal: boolean;
  closeModal: () => void;
  addDrink: AddDrinkFunc;
  favorites: FavDrinkType[] | null;
  removeFavorite: (drink: FavDrinkType) => void;
}

export interface FavoritesProps {
  addDrink: AddDrinkFunc;
  favorites: FavDrinkType[] | null;
  removeFavorite: (drink: FavDrinkType) => void;
}

export interface SleepTimeProps {
  sleepTime: Date | undefined;
  changeSleepTime: (time: Date) => void;
  useSleepTime: boolean;
  toggleUseSleepTime: () => void;
}

export interface ClockProps {
  showClock: boolean;
  changeSleepTime: (time: Date) => void;
  sleepTime: Date | undefined;
}

export interface MessageProps {
  message: string | null;
}

export interface CheckBoxProps {
  selected: boolean;
  handlePress: () => void;
}

export type RemindInterval = 'afterEvery' | 'afterMax';

export type SelectRemindInterval = (intervall: RemindInterval) => void;
export interface ReminderSettingProps {
  selectRemindInterval: SelectRemindInterval;
  selectedRemindInterval: RemindInterval;
  reminderMessage: string | undefined;
  setReminderMessage: Dispatch<SetStateAction<string | undefined>>;
}

export type HandleSetMaxDrinkCount = (count: MaxDrinkCount) => void;

export type MaxDrinkCount = string | undefined;
export interface MaxDrinkCountProps {
  maxDrinkCount: MaxDrinkCount;
  handleSetMaxDrinkCount: HandleSetMaxDrinkCount;
}

export type Bodyweight = string;

export type SetBodyweight = (bw: Bodyweight) => void;
export interface BodySizeProps {
  bodyweight: Bodyweight;
  setBodyweight: SetBodyweight;
}

export interface ReminderModalProps {
  showModal: boolean;
  closeModal: () => void;
  continueAdd: () => void;
  reminderMessage: string | undefined;
  sleepTimeReminderMsg: string | undefined;
  drinkLimitReached: boolean;
}
