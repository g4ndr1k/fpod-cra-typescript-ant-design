export function createMainTableData(
  key: string,
  fpod: string,
  hour: string,
  day: string,
  month: string,
  year: string
) {
  return { key, fpod, hour, day, month, year };
}

export function createTYPData(
  key: string,
  age: number,
  stem: string,
  branch: string,
  hiddenStem: string
) {
  return { key, age, stem, branch, hiddenStem };
}

export function createAttributesData(type: string, attribute: string) {
  return { type, attribute };
}

export function createLuckAndFinanceAttributesData(
  type: string,
  result: string
) {
  return { type, result };
}

export function createLuckAndFinanceHundredYearsData(
  key: string,
  age: string,
  year: string,
  element: string,
  sign: string,
  forts: string,
  luckCalamityOne: string,
  luckCalamityTwo: string
) {
  return { key, age, year, element, sign, forts, luckCalamityOne, luckCalamityTwo };
}
