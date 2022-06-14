import { DrinkType, RType, Sex } from './types';

// How much alcohol human body metabolizes in an hour (%)
// Your burnoff rate is measured by how fast your body can decrease your BAC percentage.
// The rate for everyone is about 0.016% per hour https://www.losangelesduiattorney.com/glossary/alcohol-burnoff-rate/
const metabolizationRate = 0.016;

const getTimeConsumedMinutes = (aTimeConsumed: string | Date) => {
  let timeConsumed: Date;
  if (typeof aTimeConsumed === 'string') {
    timeConsumed = new Date(aTimeConsumed);
  } else {
    timeConsumed = aTimeConsumed;
  }
  return timeConsumed.getTime() / 1000 / 60;
};

// calculate one drink's BloodAlcoholContent
export const calculateBAC = (
  drink: DrinkType,
  bodyweight: string,
  sex: Sex
) => {
  const rType: RType = sex === 'male' ? 0.68 : 0.55;
  const { alcPercent, amount } = drink;
  const personsWeightNum = parseInt(bodyweight, 10);

  // Compare how much time in hours have passed since the drinks consumption
  const nowInMinutes = new Date().getTime() / 1000 / 60;

  const timeConsumedMinutes = getTimeConsumedMinutes(drink.timeConsumed);
  const timeElapsedInH = (nowInMinutes - timeConsumedMinutes) / 60;

  // How much alcohol the drink has in grams
  const amountInCl = amount * 100;
  const alcInGrams = 0.079 * amountInCl * alcPercent;

  // Calculate the drink's initial BAC
  const weightAndGenderFactor = personsWeightNum * 1000 * rType;
  const eBAC = (alcInGrams / weightAndGenderFactor) * 100;

  // How much alcohol has the human body metabolized since the drink's consumption
  const alcAmountBurned = timeElapsedInH * metabolizationRate;

  // How much BAC left for that drink
  const trueBAC = eBAC - alcAmountBurned;

  if (trueBAC < 0) {
    // Negative blood alcohol content doesn't make sense so return 0
    return 0;
  } else {
    return trueBAC;
  }
};

export const calculateTotalBAC = (
  drinkList: DrinkType[],
  bodyweight: string,
  sex: Sex
) => {
  const bacValues = drinkList.map((d) => calculateBAC(d, bodyweight, sex));
  const total = bacValues.reduce((acc, curr) => acc + curr);
  return total;
};

export const calculateWhenSober = (totalBAC: number) => {
  const burntimeInH = totalBAC / metabolizationRate;
  return burntimeInH;
};

export const randomId = () => {
  const r = Math.floor(Math.random() * 100000);
  return r;
};
