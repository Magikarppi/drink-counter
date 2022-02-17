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

type SetAlcPercentFunc = (alcPercent: string | undefined) => void;

type SetAmountFunc = (amount: string | undefined) => void;

type SetDrinkNameFunc = (name: string | undefined) => void;

type AddToFavoritesFunc = (drink: DrinkType) => void;

type RemoveFavoriteFunc = (drink: FavDrinkType) => void;

type RemoveDrinkFunc = (drink: DrinkType) => void;

type ChangeSleepTimeFunc = (time: Date) => void;

type CloseModalFunc = () => void;

type SleepTime = Date | undefined;

type ReminderMessage = string | undefined;

type SetReminderMessageFunc = Dispatch<SetStateAction<string | undefined>>;

export type SelectRemindInterval = (intervall: RemindInterval) => void;

export type RemindInterval = 'afterEvery' | 'afterMax';

export type HandleSetMaxDrinkCount = (count: MaxDrinkCount) => void;

export type MaxDrinkCount = string | undefined;

export type Bodyweight = string;

export type SetBodyweight = (bw: Bodyweight) => void;
export interface AddDrinkProps {
  alcPercent: string | undefined;
  setAlcPercent: SetAlcPercentFunc;
  amount: string | undefined;
  setAmount: SetAmountFunc;
  drinkName: string | undefined;
  setDrinkName: SetDrinkNameFunc;
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
  addToFavorites: AddToFavoritesFunc;
  removeDrink: RemoveDrinkFunc;
}

export type DrinkList = DrinkType[] | undefined;

export interface DrinksProps {
  drinkList: DrinkList;
  addToFavorites: AddToFavoritesFunc;
  removeDrink: RemoveDrinkFunc;
}

export interface GoalsProps {
  drinkList: DrinkList;
  drinkLimit: string | undefined;
  totalBloodAlc: number;
}

export interface SettingsModalProps {
  showModal: boolean;
  closeModal: CloseModalFunc;
  changeSleepTime: ChangeSleepTimeFunc;
  sleepTime: SleepTime;
  selectedRemindInterval: RemindInterval;
  selectRemindInterval: SelectRemindInterval;
  handleSetMaxDrinkCount: HandleSetMaxDrinkCount;
  maxDrinkCount: MaxDrinkCount;
  bodyweight: Bodyweight;
  setBodyweight: SetBodyweight;
  reminderMessage: ReminderMessage;
  setReminderMessage: SetReminderMessageFunc;
  useSleepTime: boolean;
  toggleUseSleepTime: () => void;
}

export interface SettingsProps {
  changeSleepTime: ChangeSleepTimeFunc;
  sleepTime: SleepTime;
  selectRemindInterval: SelectRemindInterval;
  selectedRemindInterval: RemindInterval;
  handleSetMaxDrinkCount: HandleSetMaxDrinkCount;
  maxDrinkCount: MaxDrinkCount;
  bodyweight: Bodyweight;
  setBodyweight: SetBodyweight;
  reminderMessage: ReminderMessage;
  setReminderMessage: SetReminderMessageFunc;
  useSleepTime: boolean;
  toggleUseSleepTime: () => void;
}

export interface FavoritesModalProps {
  showModal: boolean;
  closeModal: CloseModalFunc;
  addDrink: AddDrinkFunc;
  favorites: FavDrinkType[] | null;
  removeFavorite: RemoveFavoriteFunc;
}

export interface FavoritesProps {
  addDrink: AddDrinkFunc;
  favorites: FavDrinkType[] | null;
  removeFavorite: RemoveFavoriteFunc;
}

export interface SleepTimeProps {
  sleepTime: SleepTime;
  changeSleepTime: ChangeSleepTimeFunc;
  useSleepTime: boolean;
  toggleUseSleepTime: () => void;
}

export interface ClockProps {
  showClock: boolean;
  changeSleepTime: ChangeSleepTimeFunc;
  sleepTime: SleepTime;
}

export interface MessageProps {
  message: string | null;
}

export interface CheckBoxProps {
  selected: boolean;
  handlePress: () => void;
}
export interface ReminderSettingProps {
  selectRemindInterval: SelectRemindInterval;
  selectedRemindInterval: RemindInterval;
  reminderMessage: ReminderMessage;
  setReminderMessage: SetReminderMessageFunc;
}

export interface MaxDrinkCountProps {
  maxDrinkCount: MaxDrinkCount;
  handleSetMaxDrinkCount: HandleSetMaxDrinkCount;
}

export interface BodySizeProps {
  bodyweight: Bodyweight;
  setBodyweight: SetBodyweight;
}

export interface ReminderModalProps {
  showModal: boolean;
  closeModal: CloseModalFunc;
  continueAdd: () => void;
  reminderMessage: ReminderMessage;
  sleepTimeReminderMsg: string | undefined;
  drinkLimitReached: boolean;
}
