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

type AddFavoriteDrinkFunc = (drink: FavDrinkType) => void;

type RemoveFavoriteFunc = (drink: FavDrinkType) => void;

type RemoveDrinkFunc = (drink: DrinkType) => void;

type ChangeSleepTimeFunc = (time: Date) => void;

type CloseModalFunc = () => void;

type SleepTime = Date | undefined;

type ReminderMessage = string | undefined;

type SetReminderMessageFunc = Dispatch<SetStateAction<string | undefined>>;

export type Sex = 'male' | 'female';

export type SelectSexFunc = (sex: Sex) => void;

export type SelectRemindInterval = (interval: RemindInterval) => void;

export type RemindInterval = 'always' | 'afterMax';

export type SetDrinkCountLimit = (count: DrinkCountLimit) => void;

export type DrinkCountLimit = string | undefined;

export type BACLimit = string | undefined;

export type SetBACLimit = (count: BACLimit) => void;

export type Bodyweight = string | undefined;

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
  favorited: boolean;
  svgMultiplier: number;
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
  removeFavorite: RemoveFavoriteFunc;
}

export type DrinkList = DrinkType[] | undefined;

export interface DrinksProps {
  drinkList: DrinkList;
  addToFavorites: AddToFavoritesFunc;
  removeDrink: RemoveDrinkFunc;
  removeFavorite: RemoveFavoriteFunc;
}

export interface StatusProps {
  drinkList: DrinkList;
  drinkCountLimit: string | undefined;
  totalBAC: number;
  bacLimit: string | undefined;
  drinkCountLimitReached: boolean;
  bacLimitReached: boolean;
}

export interface SettingsModalProps extends BACLimitProps {
  showModal: boolean;
  closeModal: CloseModalFunc;
  changeSleepTime: ChangeSleepTimeFunc;
  sleepTime: SleepTime;
  selectedRemindInterval: RemindInterval;
  selectRemindInterval: SelectRemindInterval;
  setDrinkCountLimit: SetDrinkCountLimit;
  drinkCountLimit: DrinkCountLimit;
  reminderMessage: ReminderMessage;
  setReminderMessage: SetReminderMessageFunc;
  useSleepTime: boolean;
  toggleUseSleepTime: () => void;
}

export interface SettingsProps extends BACLimitProps {
  changeSleepTime: ChangeSleepTimeFunc;
  sleepTime: SleepTime;
  selectRemindInterval: SelectRemindInterval;
  selectedRemindInterval: RemindInterval;
  setDrinkCountLimit: SetDrinkCountLimit;
  drinkCountLimit: DrinkCountLimit;
  reminderMessage: ReminderMessage;
  setReminderMessage: SetReminderMessageFunc;
  useSleepTime: boolean;
  toggleUseSleepTime: () => void;
}

export interface FavoritesModalProps {
  showModal: boolean;
  closeModal: CloseModalFunc;
  addDrink: AddFavoriteDrinkFunc;
  favorites: FavDrinkType[] | null;
  removeFavorite: RemoveFavoriteFunc;
}

export interface FavoritesProps {
  addDrink: AddFavoriteDrinkFunc;
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

export interface DrinkCountLimitProps {
  drinkCountLimit: DrinkCountLimit;
  setDrinkCountLimit: SetDrinkCountLimit;
}

export interface BACLimitProps {
  bacLimit: BACLimit;
  setBACLimit: SetBACLimit;
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
  drinkCountLimitReached: boolean;
  bacLimitReached: boolean;
}

export interface WelcomeModalProps {
  showModal: boolean;
  closeModal: CloseModalFunc;
  selectSex: SelectSexFunc;
  selectedSex: Sex;
}

export interface ExpandMinimizeBtnProps {
  statusIsExpanded: boolean;
  setStatusIsExpanded: (expanded: boolean) => void;
}

export interface MessageModalProps {
  message: string | null;
  showModal: boolean;
}

export interface StatusMoreInfoProps {
  totalBac: number;
}

export interface BACInfoModalProps {
  showModal: boolean;
  closeModal: () => void;
}

export interface SelectSexModalProps {
  handleSelectSex: (sex: Sex) => void;
  showModal: boolean;
  bodyweight: Bodyweight;
  setBodyweight: SetBodyweight;
}

export interface SelectBodyweightModalProps {
  showModal: boolean;
  setBodyweight: SetBodyweight;
}
