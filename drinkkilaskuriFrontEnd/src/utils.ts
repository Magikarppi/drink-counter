import { DrinkType, RType } from './types';

export const calculateBAC = (drink: DrinkType, r: RType) => {
  const { alcPercent, amount } = drink;

  // Every drink has it's own state for how much it contributes to the total BAC
  // Add all drinks BAC for the total BAC?
  // Compare how many millis have passed since the drinks consumption and current time
  const amountInCl = amount * 100;
  const alcInGrams = ((amountInCl * alcPercent) / 100 / 1.5) * 12;
  const eBAC = alcInGrams / (0.68 * 80) - 0.017 * 2;

  console.log('eBAC', eBAC);
};
