import { DrinkType, RType } from './types';

export const calculateBAC = (drink: DrinkType, r: RType) => {
  const { alcPercent, amount } = drink;
  const personsWeight = 80
  const b = 0.017
  const time = 2

  // Every drink has it's own state for how much it contributes to the total BAC
  // Add all drinks BAC for the total BAC?
  // Compare how many millis have passed since the drinks consumption and current time
  const amountInCl = amount * 100;
  const alcInGrams = ((amountInCl * alcPercent) / 100 / 1.5) * 12;
  const eBAC = alcInGrams / (0.68 * personsWeight) - (b  * time);

  console.log('eBAC', eBAC);
};

export const randomId = () => {
  const r = Math.floor(Math.random() * 100000);
  return r
}