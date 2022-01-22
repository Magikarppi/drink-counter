export type RType = 0.68 | 0.55;

export type AddDrinkFunc = (alcPercent: number, amount: number, name?: string) => void;

export interface AddDrinkProps {
  addDrink: AddDrinkFunc;
  openFavorites: () => void;
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
export interface DrinkProps {
  drink: DrinkType
  addToFavorites: (drink: DrinkType) => void;
}

export type DrinkList = DrinkType[] | undefined;

export interface DrinksProps {
  drinkList: DrinkList;
  addToFavorites: (drink: DrinkType) => void;
}

export interface GoalsProps {
  drinkList: DrinkList;
}

export interface SettingsModalProps {
  showModal: boolean;
  closeModal: () => void;
  saveSettings: () => void;
  changeSleepTime: (time: Date) => void;
  sleepTime: Date;
  selectedRemindInterval: RemindInterval;
  selectRemindInterval: SelectRemindInterval;
  handleSetMaxDrinkCount: HandleSetMaxDrinkCount,
  maxDrinkCount: MaxDrinkCount;
};

export interface SettingsProps {
  changeSleepTime: (time: Date) => void;
  sleepTime: Date;
  selectRemindInterval: SelectRemindInterval;
  selectedRemindInterval: RemindInterval;
  handleSetMaxDrinkCount: HandleSetMaxDrinkCount,
  maxDrinkCount: MaxDrinkCount;
}

export interface FavoritesModalProps {
  showModal: boolean;
  closeModal: () => void;
  addDrink: AddDrinkFunc;
  favorites: FavDrinkType[] | null;
  removeFavorite: (drink: FavDrinkType) => void;
};

export interface FavoritesProps {
  addDrink: AddDrinkFunc;
  favorites: FavDrinkType[] | null;
  removeFavorite: (drink: FavDrinkType) => void;
}

export interface SleepTimeProps {
  toggleTimePicker: () => void;
  showClock: boolean;
  changeSleepTime: (time: Date) => void;
  sleepTime: Date;
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
export interface ReminderProps {
  selectRemindInterval: SelectRemindInterval
  selectedRemindInterval: RemindInterval;
}

export type HandleSetMaxDrinkCount = (count: MaxDrinkCount) => void;
export type MaxDrinkCount = string | undefined;
export interface MaxDrinkCountProps {
  maxDrinkCount: MaxDrinkCount;
  handleSetMaxDrinkCount: HandleSetMaxDrinkCount
}