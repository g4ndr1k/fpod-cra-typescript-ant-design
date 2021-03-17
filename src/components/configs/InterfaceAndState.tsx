import { createState } from "@hookstate/core";

export interface userDataInterface {
  username: string;
  gender: string;
  dateOfBirth: number;
  timeOfBirth: number;
}

export const userNameState = createState("");
export const userGenderState = createState("");
export const userDateOfBirthState = createState(0);
export const userMonthOfBirthState = createState(0);
export const userYearOfBirthState = createState(0);
export const userHourOfBirthState = createState(0);
export const userMinuteOfBirthState = createState(0);

export interface financeAndLuckCardInterface {
  attFLCardStem: string;
  attFLCardBranch: string;
  attFLCardHiddenStem: string;
  attFLCardFlowerOfRomance: string;
  attFLCardTravellingStar: string;
  stemFLCardSama: string;
  stemFLCardCombi: string;
  stemFLCardClash: string;
  stemFLCardPolarity: string;
  branchFLCardCombi2: string;
  branchFLCardCombi3: string;
  branchFLCardChiong: string;
  branchFLCardPenalty: string;
  branchFLCardEarthPenalty: string;
  branchFLCardSelfClash: string;
  branchFLCardIngClash: string;
  branchFLCardConflict: string;
  hiddenStemFLCardSama: string;
  hiddenStemFLCardCombi: string;
  hiddenStemFLCardClash: string;
  hiddenStemFLCardPolarity: string;
}
