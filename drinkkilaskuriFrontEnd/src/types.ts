export type RType = 0.68 | 0.55;

export interface AddDrinkProps {
  addDrink: (drink: DrinkType) => void;
}

export interface DrinkType {
  alcPercent: number;
  amount: number;
  timeConsumed: Date;
}

export type DrinkList = DrinkType[] | undefined;

export interface DrinksProps {
  drinkList: DrinkList;
}

export interface GoalsProps {
  drinkList: DrinkList;
}
