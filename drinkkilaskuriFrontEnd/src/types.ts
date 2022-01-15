export type RType = 0.68 | 0.55;

type AddDrinkFunc = (drink: DrinkType) => void;

export interface AddDrinkProps {
  addDrink: AddDrinkFunc;
  openFavorites: () => void;
}

export interface DrinkType {
  name?: string;
  alcPercent: number;
  amount: number;
  timeConsumed: Date;
}

export interface DrinkProps {
  drink: DrinkType
  addToFavorites: (drink: DrinkType) => void;
}

export type DrinkList = DrinkType[] | undefined;

export interface DrinksProps {
  drinkList: DrinkList;
}

export interface GoalsProps {
  drinkList: DrinkList;
}

export interface SettingsModalProps {
  showModal: boolean;
  closeModal: () => void;
  saveSettings: () => void;
};

export interface FavoritesModalProps {
  showModal: boolean;
  closeModal: () => void;
  addDrink: AddDrinkFunc;
};

export interface FavoritesProps {
  favoriteDrinks: DrinkType[];
  addDrink: AddDrinkFunc;
}