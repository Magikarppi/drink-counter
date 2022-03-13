import { DrinkType, FavDrinkType, RType } from './types';

export const calculateBAC = (drink: DrinkType, gender?: 'male' | 'female') => {
  const rType: RType = gender === 'male' ? 0.68 : 0.55;
  const { alcPercent, amount } = drink;
  const personsWeight = 80;
  const b = 0.017;
  const nowInMinutes = new Date().getTime() / 1000 / 60;
  const timeConsumedMinutes = drink.timeConsumed.getTime() / 1000 / 60;
  const timeElapsedInH = (nowInMinutes - timeConsumedMinutes) / 60;

  // Every drink has it's own state for how much it contributes to the total BAC
  // Add all drinks BAC for the total BAC?
  // Compare how many millis have passed since the drinks consumption and current time
  const amountInCl = amount * 100;
  const alcInGrams = ((amountInCl * alcPercent) / 100 / 1.5) * 12;
  const eBAC = alcInGrams / (rType * personsWeight) - b * timeElapsedInH;
  const alcInGrams2 = 0.079 * amountInCl * alcPercent;
  const eBAC2 = alcInGrams2 / (rType * personsWeight) - b * timeElapsedInH;

  return eBAC;
};

export const calcTotalBAC = (drinkList: DrinkType[]) => {
  let total = 0;
  drinkList.forEach((drink) => {
    total += calculateBAC(drink);
  });
  return total;
};

// Your burnoff rate is measured by how fast your body can decrease your BAC percentage.
// The rate for everyone is about 0.16% per hour https://www.losangelesduiattorney.com/glossary/alcohol-burnoff-rate/
export const calculateWhenSober = (totalBAC: number) => {
  const burntimeInH = totalBAC / 0.16;
  return burntimeInH;
};

export const randomId = () => {
  const r = Math.floor(Math.random() * 100000);
  return r;
};

export const favDrinksDummy: FavDrinkType[] = new Array(10).fill({
  id: randomId(),
  name: 'IPA',
  alcPercent: 4.7,
  amount: 0.33,
});
