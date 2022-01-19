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
  changeSleepTime: (time: string) => void;
};

export interface SettingsProps {
  changeSleepTime: (time: string) => void;
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
  changeSleepTime: (time: string) => void;
}