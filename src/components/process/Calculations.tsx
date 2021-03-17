// main list of animal sign in Bahasa
const animalSign: string[] = [
  "Babi",
  "Tikus",
  "Kerbau",
  "Macan",
  "Kelinci",
  "Naga",
  "Ular",
  "Kuda",
  "Kambing",
  "Monyet",
  "Ayam",
  "Anjing",
  "Babi",
  "Tikus",
];

// main list of elements sign
const elementSign: string[] = [
  "-Water",
  "+Wood",
  "-Wood",
  "+Fire",
  "-Fire",
  "+Earth",
  "-Earth",
  "+Metal",
  "-Metal",
  "+Water",
  "-Water",
];

//ist to map Animal Sign based on Element Sign to calculate stem and hidden stem (Table 5)
const elementToAnimalSignStem: string[][] = [
  [elementSign[0], animalSign[1]],
  [elementSign[6], animalSign[2] + " & " + animalSign[8]],
  [elementSign[1], animalSign[3]],
  [elementSign[2], animalSign[4]],
  [elementSign[5], animalSign[5] + " & " + animalSign[11]],
  [elementSign[3], animalSign[6]],
  [elementSign[4], animalSign[7]],
  [elementSign[7], animalSign[9]],
  [elementSign[8], animalSign[10]],
  [elementSign[9], animalSign[0]],
];

//list to map Element Sign based on Animal Sign to calculate stem and hidden stem (Table 5)
const animalSignToHiddenStem: string[][] = [
  [animalSign[0], elementSign[9], elementSign[1], ""],
  [animalSign[1], elementSign[0], "", ""],
  [animalSign[2], elementSign[6], elementSign[0], elementSign[8]],
  [animalSign[3], elementSign[1], elementSign[3], elementSign[5]],
  [animalSign[4], elementSign[2], "", ""],
  [animalSign[5], elementSign[5], elementSign[2], elementSign[0]],
  [animalSign[6], elementSign[3], elementSign[5], elementSign[7]],
  [animalSign[7], elementSign[4], elementSign[6], ""],
  [animalSign[8], elementSign[6], elementSign[4], elementSign[2]],
  [animalSign[9], elementSign[7], elementSign[9], elementSign[5]],
  [animalSign[10], elementSign[8], "", ""],
  [animalSign[11], elementSign[5], elementSign[8], elementSign[4]],
];

//list to determine Flower of Romance and Travelling Star
const flowerOfRomanceAndTravellingStar: string[][] = [
  [animalSign[3], animalSign[7], animalSign[11], animalSign[4], animalSign[9]],
  [animalSign[0], animalSign[4], animalSign[8], animalSign[1], animalSign[6]],
  [animalSign[9], animalSign[1], animalSign[5], animalSign[10], animalSign[3]],
  [animalSign[6], animalSign[10], animalSign[2], animalSign[7], animalSign[0]],
];

//ist to determine Animal Sign Combination 2 and Combination 3, Chiong, Penalty, Earth Penalty,
//SelfClash, Ingratitude Clash and Conflict
const animalSignCombi2: string[][] = [
  [animalSign[1], animalSign[2]],
  [animalSign[3], animalSign[0]],
  [animalSign[4], animalSign[11]],
  [animalSign[5], animalSign[10]],
  [animalSign[6], animalSign[9]],
  [animalSign[7], animalSign[8]],
];
const animalSignCombi3: string[][] = [
  [animalSign[0], animalSign[4], animalSign[8]],
  [animalSign[3], animalSign[7], animalSign[11]],
  [animalSign[9], animalSign[1], animalSign[5]],
  [animalSign[6], animalSign[10], animalSign[2]],
];
const animalSignChiong: string[][] = [
  [animalSign[1], animalSign[7]],
  [animalSign[2], animalSign[8]],
  [animalSign[3], animalSign[9]],
  [animalSign[4], animalSign[10]],
  [animalSign[5], animalSign[11]],
  [animalSign[6], animalSign[0]],
];
const animalSignPenalty: string[] = [animalSign[3], animalSign[6], animalSign[9]];
const animalSignEarthPenalty: string[] = [
  animalSign[2],
  animalSign[8],
  animalSign[11],
];
const animalSignSelfClash: string[] = [
  animalSign[5],
  animalSign[7],
  animalSign[10],
  animalSign[0],
];
const animalSignIngratitudeClash: string[] = [animalSign[1], animalSign[4]];
const animalSignConflict: string[][] = [
  [animalSign[1], animalSign[8]],
  [animalSign[2], animalSign[7]],
  [animalSign[3], animalSign[6]],
  [animalSign[4], animalSign[5]],
  [animalSign[9], animalSign[0]],
  [animalSign[10], animalSign[11]],
];

//list to determine Element Sign Combination, Clash and Polarity
const elementSignCombi: string[][] = [
  [elementSign[1], elementSign[6]],
  [elementSign[2], elementSign[7]],
  [elementSign[3], elementSign[8]],
  [elementSign[4], elementSign[9]],
  [elementSign[5], elementSign[0]],
];
const elementSignClash: string[][] = [
  [elementSign[1], elementSign[7]],
  [elementSign[2], elementSign[8]],
  [elementSign[3], elementSign[9]],
  [elementSign[4], elementSign[0]],
];
const elementSignPolarity: string[][] = [
  [elementSign[1], elementSign[2]],
  [elementSign[3], elementSign[4]],
  [elementSign[5], elementSign[6]],
  [elementSign[7], elementSign[8]],
  [elementSign[9], elementSign[10]],
];

//list of Animal Sign and Element Sign to calculate 60-year cycles
const sixtyCyclesOfAnimalSign: string[] = [
  "Tikus",
  "Kerbau",
  "Macan",
  "Kelinci",
  "Naga",
  "Ular",
  "Kuda",
  "Kambing",
  "Monyet",
  "Ayam",
  "Anjing",
  "Babi",
];

const sixtyCyclesOfElementSign: string[] = [
  "+Wood",
  "-Wood",
  "+Fire",
  "-Fire",
  "+Earth",
  "-Earth",
  "+Metal",
  "-Metal",
  "+Water",
  "-Water",
];
//create 60 year cycles list, base year is 1945, no need to calculate someone older than this sudah bau tanah hahaha, 176 iterations

let sixtyCycles: string[][] = [["","",""]]
sixtyCycles.length = 0
let baseYear: number = 1945;
let sixtyElement: number = 1;
let sixtyAnimalSign: number = 9;
while (baseYear < 2221) {
  sixtyCycles.push(
    [baseYear.toString(),
    sixtyCyclesOfElementSign[sixtyElement],
    sixtyCyclesOfAnimalSign[sixtyAnimalSign]]
  );
  baseYear += 1;
  sixtyElement += 1;
  sixtyAnimalSign += 1;
  if (sixtyElement === 10) {
    sixtyElement = 0;
  }
  if (sixtyAnimalSign === 12) {
    sixtyAnimalSign = 0;
  }
}

export function fpodBaseCalculation(
  dateofBirth: number,
  monthofBirth: number,
  yearofBirth: number,
  hourofBirth: number,
  minuteofBirth: number,
  timezone: number
) {
  let fpodBCVarOne: number; //s

  if (monthofBirth - 9 < 0) {
    fpodBCVarOne = -1;
  } else {
    fpodBCVarOne = 1;
  }

  // based on ancient wisdom calculation wkwkwkwkwk
  let fpodBCHour: number = hourofBirth + minuteofBirth / 60; //hr

  let fpodBCVarTwo: number =
    -1 *
    Math.floor((7 * (Math.floor((monthofBirth + 9) / 12) + yearofBirth)) / 4); //jd

  let fpodBCVarThree: number = Math.abs(monthofBirth - 9); //a

  let fpodBCVarFour: number = Math.floor(
    yearofBirth + fpodBCVarOne * Math.floor(fpodBCVarThree / 7)
  ); //j1

  fpodBCVarFour =
    -1 * Math.floor(((Math.floor(fpodBCVarFour / 100) + 1) * 3) / 4);

  fpodBCVarTwo =
    fpodBCVarTwo +
    Math.floor((275 * monthofBirth) / 9) +
    dateofBirth +
    1 * fpodBCVarFour;

  fpodBCVarTwo = fpodBCVarTwo + 1721027 + 2 * 1 + 367 * yearofBirth - 0.5;

  let fpodBCVarFive: number = fpodBCVarTwo + fpodBCHour / 24; //jzjd

  fpodBCVarTwo = fpodBCVarTwo + fpodBCHour / 24 - timezone / 24;

  let fpodBCVarSix: number = (fpodBCVarTwo - 2451545) / 36525; // t

  let fpodBCVarSeven: number = (2 * Math.PI) / 360; // d

  let fpodBCVarEight: number =
    357.5291 +
    35999.0503 * fpodBCVarSix -
    0.0001559 * fpodBCVarSix * fpodBCVarSix -
    0.00000048 * fpodBCVarSix * fpodBCVarSix * fpodBCVarSix; //m

  let fpodBCVarNine: number =
    280.46645 +
    36000.76983 * fpodBCVarSix +
    0.0003032 * fpodBCVarSix * fpodBCVarSix; //l0

  let fpodBCVarTen: number =
    (1.9146 -
      0.004817 * fpodBCVarSix -
      0.000014 * fpodBCVarSix * fpodBCVarSix) *
    Math.sin(fpodBCVarSeven * fpodBCVarEight); //dl

  fpodBCVarTen =
    fpodBCVarTen +
    (0.019993 - 0.000101 * fpodBCVarSix) *
      Math.sin(fpodBCVarSeven * 2 * fpodBCVarEight) +
    0.00029 * Math.sin(fpodBCVarSeven * 3 * fpodBCVarEight);

  let lunarBase: number = fpodBCVarNine + fpodBCVarTen;

  while (lunarBase > 360) {
    lunarBase -= 360;
  }

  while (lunarBase < 0) {
    lunarBase += 360;
  }

  return { lunarBase, fpodBCVarFive };
}

export function fpodMainYear(
  lunarBase: number,
  monthofBirth: number,
  yearofBirth: number
) {
  let mainYear: number;
  if (lunarBase < 315 && (monthofBirth === 1 || monthofBirth === 2)) {
    mainYear = yearofBirth - 4;
  } else {
    mainYear = yearofBirth - 3;
  }
  return mainYear;
}

export function fpodBranchYear(mainYear: number) {
  let branchYear: number = mainYear;
  while (branchYear > 12) {
    branchYear -= 12;
  }
  let yobBranch: string = animalSign[branchYear];
  return { yobBranch, branchYear };
}

export function fpodStemYear(mainYear: number, gender: string) {
  let stemYear: number = mainYear;

  while (stemYear > 10) {
    stemYear -= 10;
  }
  let yobStem: string = elementSign[stemYear];

  let genderBender: number;

  if (gender === "female") {
    genderBender = -1;
  } else {
    genderBender = 1;
  }

  if (
    stemYear === 0 ||
    stemYear === 2 ||
    stemYear === 4 ||
    stemYear === 6 ||
    stemYear === 8 ||
    stemYear === 10
  ) {
    genderBender = -1 * genderBender;
  } else {
    genderBender = 1 * genderBender;
  }

  return { yobStem, stemYear, genderBender };
}

export function fpodHiddenStem(relatedAnimalSign: string) {
  let i: number = 0;
  let tempArray: string[];
  let hiddenStem: string[] = [];
  let hiddenStemReturnValue: string = "";
  while (i < 12) {
    tempArray = animalSignToHiddenStem[i].slice(0, 2);
    if (tempArray.includes(relatedAnimalSign)) {
      hiddenStem = animalSignToHiddenStem[i].slice(1, 2);
      hiddenStemReturnValue = hiddenStem[0];
    }
    i += 1;
  }
  return hiddenStemReturnValue;
}

export function fpodLuckPillarBase(
  lunarBase: number,
  stemYear: number,
  genderBender: number
) {
  let stemMonth: number = 1;
  let luckPillarBase: number = 1;
  let luckPillarBaseYear: number = 1;
  let mobBranch: string = "";
  let mobStem: string = "";

  let i: number = 0;
  while (i < 6) {
    if (stemYear === i || stemYear === i + 5) {
      stemMonth += i * 2;
    }
    if (stemMonth > 10) {
      stemMonth -= 10;
    }
    i += 1;
  }

  if (lunarBase >= 315 && lunarBase < 345) {
    mobBranch = animalSign[3];
    luckPillarBase = 3;
    if (genderBender === 1) {
      luckPillarBaseYear = (345 - lunarBase) / 3;
    } else {
      luckPillarBaseYear = (lunarBase - 315) / 3;
    }
  }

  if (lunarBase >= 345 || lunarBase < 15) {
    stemMonth += 1;
    mobBranch = animalSign[4];
    luckPillarBase = 4;
    if (genderBender === 1) {
      luckPillarBaseYear = (375 - lunarBase) / 3;
    } else {
      luckPillarBaseYear = (lunarBase - 345) / 3;
    }
    if (luckPillarBaseYear > 11) {
      luckPillarBaseYear -= 120;
    }
    if (luckPillarBaseYear < 0) {
      luckPillarBaseYear += 120;
    }
  }

  let moreThan: number = 15;
  let lessThan: number = 45;
  i = 2;
  while (lessThan < 255) {
    if (lunarBase >= moreThan && lunarBase < lessThan) {
      stemMonth += i;
      mobBranch = animalSign[i + 3];
      luckPillarBase = i + 3;
      if (genderBender === 1) {
        luckPillarBaseYear = (lessThan - lunarBase) / 3;
      } else {
        luckPillarBaseYear = (lunarBase - moreThan) / 3;
      }
    }
    moreThan += 30;
    lessThan += 30;
    i += 1;
  }

  if (lunarBase >= 255 && lunarBase < 285) {
    stemMonth += 10;
    mobBranch = animalSign[1];
    luckPillarBase = 1;
    if (genderBender === 1) {
      luckPillarBaseYear = (285 - lunarBase) / 3;
    } else {
      luckPillarBaseYear = (lunarBase - 255) / 3;
    }
  }

  if (lunarBase >= 285 && lunarBase < 315) {
    stemMonth += 11;
    mobBranch = animalSign[2];
    luckPillarBase = 2;
    if (genderBender === 1) {
      luckPillarBaseYear = (315 - lunarBase) / 3;
    } else {
      luckPillarBaseYear = (lunarBase - 285) / 3;
    }
  }
  if (stemMonth > 10) {
    stemMonth -= 10;
  }

  mobStem = elementSign[stemMonth];
  luckPillarBaseYear = Math.floor(luckPillarBaseYear);

  return { mobBranch, mobStem, luckPillarBase, luckPillarBaseYear, stemMonth };
}

export function fpodBranchStemofDayHour(
  fpodBCVarFive: number,
  hourofBirth: number,
  minuteofBirth: number
) {
  let hour: number = hourofBirth + minuteofBirth / 60;
  let branchDay: number =
    Math.floor(
      fpodBCVarFive - 12 * Math.floor((fpodBCVarFive + 0.5) / 12) + 0.5
    ) + 2;
  let dobBranch: string = animalSign[branchDay];
  let hobBranch: string = "";
  let hobStem: string = "";
  let stemDayStr: string;
  let stemDayNbr: number;
  let stemDay: number;
  stemDayNbr = Math.floor(fpodBCVarFive + 0.5);
  stemDayStr = stemDayNbr.toString();
  stemDayStr = stemDayStr.slice(6, 7);
  stemDay = parseInt(stemDayStr);
  let dobStem: string = elementSign[stemDay];

  let branchHour: number = 1;
  let bhVarOne: number = 1; //hs0
  let bhVarTwo: number = 0; //hs1
  let i: number = 1;
  while (i < 5) {
    if (stemDay === i || stemDay === i + 5) {
      bhVarTwo = bhVarOne;
    }
    bhVarOne += 2;
    i += 1;
  }
  if (stemDay === 0 || stemDay === 5) {
    bhVarTwo = 9;
  }
  if (hour === 23 || (hour > 23 && hour < 24)) {
    bhVarTwo += 2;
  }
  if (
    hour === 23 ||
    (hour > 23 && hour < 24) ||
    hour === 0 ||
    (hour > 0 && hour < 1) ||
    hour === 24
  ) {
    hobBranch = animalSign[branchHour];
  }

  branchHour += 1;
  i = 1;
  while (i < 23) {
    if (hour === i || (hour > i && hour < i + 2)) {
      hobBranch = animalSign[branchHour];
      bhVarTwo = bhVarTwo + branchHour - 1;
    }
    i += 1;
    branchHour += 1;
    i += 1;
  }

  if (bhVarTwo > 10) {
    bhVarTwo -= 10;
  }
  hobStem = elementSign[bhVarTwo];

  return { dobBranch, dobStem, hobBranch, hobStem };
}

export function fpodTenYearPillar(luckPillarBaseYear: number) {
  let tenYearPillar: number[] = [];
  let i: number = 0;
  while (i < 10) {
    tenYearPillar.push(luckPillarBaseYear);
    luckPillarBaseYear += 10;
    i += 1;
  }
  return tenYearPillar;
}

export function fpodTenYearPillarStem(stemMonth: number, genderBender: number) {
  let tenYearPillarStem: string[] = [];
  let i: number = 0;
  while (i < 10) {
    stemMonth += genderBender;
    if (stemMonth > 10 || stemMonth < 0) {
      stemMonth = stemMonth - 10 * genderBender;
    }
    tenYearPillarStem.push(elementSign[stemMonth]);
    i += 1;
  }
  return tenYearPillarStem;
}

function HiddenStem(animalSign: string) {
  let i: number = 0;
  let tempArray: string[];
  let hiddenStemArray: string[];
  let hiddenStem: string = "";
  while (i < 12) {
    tempArray = animalSignToHiddenStem[i].slice(0, 2);
    if (tempArray.includes(animalSign)) {
      hiddenStemArray = [animalSignToHiddenStem[i][1]];
      hiddenStem = hiddenStemArray[0];
    }
    i += 1;
  }
  return hiddenStem;
}

export function fpodTenYearPillarBranchAndHiddenStem(
  luckPillarBase: number,
  genderBender: number
) {
  let tenYearPillarBranch: string[] = [];
  let tenYearPillarHiddenStem: string[] = [];
  let i: number = 0;
  while (i < 10) {
    luckPillarBase += genderBender;
    if (luckPillarBase > 12 || luckPillarBase < 0) {
      luckPillarBase = luckPillarBase - 12 * genderBender;
    }
    tenYearPillarBranch.push(animalSign[luckPillarBase]);
    tenYearPillarHiddenStem.push(HiddenStem(animalSign[luckPillarBase]));
    i += 1;
  }
  return { tenYearPillarBranch, tenYearPillarHiddenStem };
}

function FlowerOfRomanceAndTravellingStar(animalSign: string) {
  let i: number = 0;
  let tempArray: string[];
  let flowerOfRomanceAndTravellingStarReturnArray: string[] = [];
  while (i < 4) {
    tempArray = flowerOfRomanceAndTravellingStar[i].slice(0, 3);
    if (tempArray.includes(animalSign)) {
      flowerOfRomanceAndTravellingStarReturnArray = [
        flowerOfRomanceAndTravellingStar[i][3],
        flowerOfRomanceAndTravellingStar[i][4],
      ];
    }
    i += 1;
  }
  return flowerOfRomanceAndTravellingStarReturnArray;
}

export function fpodFlowerOfRomance(dobBranch: string, yobBranch: string) {
  const flowerOfRomanceDoB = FlowerOfRomanceAndTravellingStar(dobBranch)[0];
  const flowerOfRomanceYoB = FlowerOfRomanceAndTravellingStar(yobBranch)[0];
  return { flowerOfRomanceDoB, flowerOfRomanceYoB };
}

export function fpodTravellingStar(dobBranch: string, yobBranch: string) {
  const travellingStarDoB = FlowerOfRomanceAndTravellingStar(dobBranch)[1];
  const travellingStarYoB = FlowerOfRomanceAndTravellingStar(yobBranch)[1];
  return { travellingStarDoB, travellingStarYoB };
}

export function fpodStemTableSama(elementSign: string) {
  let hiddenStemTable: string = "";
  let i: number = 0;
  while (i < 10) {
    if (elementToAnimalSignStem[i].includes(elementSign)) {
      const hiddenStemTableArray = [elementToAnimalSignStem[i][1]];
      hiddenStemTable = hiddenStemTableArray[0];
    }
    i += 1;
  }
  const stemTableSama = elementSign + "/" + hiddenStemTable;
  return stemTableSama;
}

export function fpodStemTableCombi(elementSign: string) {
  let stemTableCombiArray: string[] = [];
  let stemTableCombi: string = "-";
  let i: number = 0;
  while (i < 5) {
    if (elementSignCombi[i].includes(elementSign)) {
      stemTableCombiArray = [elementSignCombi[i][0], elementSignCombi[i][1]];
      for (let j = 0; j < stemTableCombiArray.length; j++) {
        if (stemTableCombiArray[j] === elementSign) {
          stemTableCombiArray.splice(j, 1);
        }
      }
      stemTableCombi = stemTableCombiArray[0];
    }
    i += 1;
  }
  let hiddenStemTableArray: string[] = [];
  let hiddenStemTable: string = ".";
  i = 0;
  while (i < 10) {
    if (elementToAnimalSignStem[i].includes(stemTableCombi)) {
      hiddenStemTableArray = [elementToAnimalSignStem[i][1]];
      hiddenStemTable = hiddenStemTableArray[0];
    }
    i += 1;
  }
  if (hiddenStemTable !== ".") {
    stemTableCombi = stemTableCombi + "/" + hiddenStemTable;
  }
  return stemTableCombi;
}

export function fpodStemTableClash(elementSign: string) {
  let stemTableClashArray: string[] = [];
  let stemTableClash: string = "-";
  let i: number = 0;
  while (i < 4) {
    if (elementSignClash[i].includes(elementSign)) {
      stemTableClashArray = [elementSignClash[i][0], elementSignClash[i][1]];
      for (let j = 0; j < stemTableClashArray.length; j++) {
        if (stemTableClashArray[j] === elementSign) {
          stemTableClashArray.splice(j, 1);
        }
      }
      stemTableClash = stemTableClashArray[0];
    }
    i += 1;
  }
  let hiddenStemTableArray: string[] = [];
  let hiddenStemTable: string = ".";
  i = 0;
  while (i < 10) {
    if (elementToAnimalSignStem[i].includes(stemTableClash)) {
      hiddenStemTableArray = [elementToAnimalSignStem[i][1]];
      hiddenStemTable = hiddenStemTableArray[0];
    }
    i += 1;
  }
  if (hiddenStemTable !== ".") {
    stemTableClash = stemTableClash + "/" + hiddenStemTable;
  }
  return stemTableClash;
}

export function fpodStemTablePolarity(elementSign: string) {
  let stemTablePolarityArray: string[] = [];
  let stemTablePolarity: string = "-";
  let i: number = 0;
  while (i < 5) {
    if (elementSignPolarity[i].includes(elementSign)) {
      stemTablePolarityArray = [
        elementSignPolarity[i][0],
        elementSignPolarity[i][1],
      ];
      for (let j = 0; j < stemTablePolarityArray.length; j++) {
        if (stemTablePolarityArray[j] === elementSign) {
          stemTablePolarityArray.splice(j, 1);
        }
      }
      stemTablePolarity = stemTablePolarityArray[0];
    }
    i += 1;
  }
  let hiddenStemTableArray: string[] = [];
  let hiddenStemTable: string = ".";
  i = 0;
  while (i < 10) {
    if (elementToAnimalSignStem[i].includes(stemTablePolarity)) {
      hiddenStemTableArray = [elementToAnimalSignStem[i][1]];
      hiddenStemTable = hiddenStemTableArray[0];
    }
    i += 1;
  }
  if (hiddenStemTable !== ".") {
    stemTablePolarity = stemTablePolarity + "/" + hiddenStemTable;
  }
  return stemTablePolarity;
}

export function fpodBranchTableCombi2(animalSign: string) {
  let branchTableCombi2Array: string[] = [];
  let branchTableCombi2: string = "-";
  let i: number = 0;
  while (i < 6) {
    if (animalSignCombi2[i].includes(animalSign)) {
      branchTableCombi2Array = [animalSignCombi2[i][0], animalSignCombi2[i][1]];
      for (let j = 0; j < branchTableCombi2Array.length; j++) {
        if (branchTableCombi2Array[j] === animalSign) {
          branchTableCombi2Array.splice(j, 1);
        }
      }
      branchTableCombi2 = branchTableCombi2Array[0];
    }
    i += 1;
  }
  return branchTableCombi2;
}

export function fpodBranchTableCombi3(animalSign: string) {
  let branchTableCombi3Array: string[] = [];
  let branchTableCombi3: string = "-";
  let i: number = 0;
  while (i < 4) {
    if (animalSignCombi3[i].includes(animalSign)) {
      branchTableCombi3Array = [
        animalSignCombi3[i][0],
        animalSignCombi3[i][1],
        animalSignCombi3[i][2],
      ];
      for (let j = 0; j < branchTableCombi3Array.length; j++) {
        if (branchTableCombi3Array[j] === animalSign) {
          branchTableCombi3Array.splice(j, 1);
        }
      }
      branchTableCombi3 =
        branchTableCombi3Array[0] + ", " + branchTableCombi3Array[1];
    }
    i += 1;
  }
  return branchTableCombi3;
}

export function fpodBranchTableChiong(animalSign: string) {
  let branchTableChiongArray: string[] = [];
  let branchTableChiong: string = "-";
  let i: number = 0;
  while (i < 6) {
    if (animalSignChiong[i].includes(animalSign)) {
      branchTableChiongArray = [animalSignChiong[i][0], animalSignChiong[i][1]];
      for (let j = 0; j < branchTableChiongArray.length; j++) {
        if (branchTableChiongArray[j] === animalSign) {
          branchTableChiongArray.splice(j, 1);
        }
      }
      branchTableChiong = branchTableChiongArray[0];
    }
    i += 1;
  }
  return branchTableChiong;
}

export function fpodBranchTablePenalty(animalSign: string) {
  let branchTablePenaltyArray: string[] = [];
  let branchTablePenalty: string = "-";
  if (animalSignPenalty.includes(animalSign)) {
    branchTablePenaltyArray = [
      animalSignPenalty[0],
      animalSignPenalty[1],
      animalSignPenalty[2],
    ];
    for (let j = 0; j < branchTablePenaltyArray.length; j++) {
      if (branchTablePenaltyArray[j] === animalSign) {
        branchTablePenaltyArray.splice(j, 1);
      }
    }
    branchTablePenalty =
      branchTablePenaltyArray[0] + ", " + branchTablePenaltyArray[1];
  }
  return branchTablePenalty;
}

export function fpodBranchTableEarthPenalty(animalSign: string) {
  let branchTableEarthPenaltyArray: string[] = [];
  let branchTableEarthPenalty: string = "-";
  if (animalSignEarthPenalty.includes(animalSign)) {
    branchTableEarthPenaltyArray = [
      animalSignEarthPenalty[0],
      animalSignEarthPenalty[1],
      animalSignEarthPenalty[2],
    ];
    for (let j = 0; j < branchTableEarthPenaltyArray.length; j++) {
      if (branchTableEarthPenaltyArray[j] === animalSign) {
        branchTableEarthPenaltyArray.splice(j, 1);
      }
    }
    branchTableEarthPenalty =
      branchTableEarthPenaltyArray[0] + ", " + branchTableEarthPenaltyArray[1];
  }
  return branchTableEarthPenalty;
}

export function fpodBranchTableSelfClash(animalSign: string) {
  let branchTableSelfClash: string = "-";
  if (animalSignSelfClash.includes(animalSign)) {
    branchTableSelfClash = animalSign;
  }
  return branchTableSelfClash;
}

export function fpodBranchTableIngratitudeClash(animalSign: string) {
  let branchTableIngratitudeClashArray: string[] = [];
  let branchTableIngratitudeClash: string = "-";
  if (animalSignIngratitudeClash.includes(animalSign)) {
    branchTableIngratitudeClashArray = [
      animalSignIngratitudeClash[0],
      animalSignIngratitudeClash[1],
    ];
    for (let j = 0; j < branchTableIngratitudeClashArray.length; j++) {
      if (branchTableIngratitudeClashArray[j] === animalSign) {
        branchTableIngratitudeClashArray.splice(j, 1);
      }
    }
    branchTableIngratitudeClash =
      branchTableIngratitudeClashArray[0]
  }
  return branchTableIngratitudeClash;
}

export function fpodBranchTableConflict(animalSign: string) {
  let branchTableConflictArray: string[] = [];
  let branchTableConflict: string = "-";
  let i: number = 0;
  while (i < 6) {
    if (animalSignConflict[i].includes(animalSign)) {
      branchTableConflictArray = [animalSignConflict[i][0], animalSignConflict[i][1]];
      for (let j = 0; j < branchTableConflictArray.length; j++) {
        if (branchTableConflictArray[j] === animalSign) {
          branchTableConflictArray.splice(j, 1);
        }
      }
      branchTableConflict = branchTableConflictArray[0];
    }
    i += 1;
  }
  return branchTableConflict;
}

export function fpodAgeRange(
  startedAge: number
) {
  let ageRange: string[] = []
  let i: number = 0
  while (i<10)
  {
    ageRange.push(startedAge.toString())
    startedAge += 1
    i += 1
  }
  return (ageRange)
}

export function fpodSolarYearRange(
  startedAge: number, yearofBirth: number
) {
  let solarYearRange: string[] = []
  let i: number = 0
  while (i<10)
  {
    solarYearRange.push((startedAge+yearofBirth).toString())
    startedAge += 1
    i += 1
  }
  return (solarYearRange)
}

export function fpodElementAndAnimalSignSixtyYearsCycle(
  solarYear: number
) {
  let elementAndAnimalSignSixtyYearsCycle: string[] = []
  let i: number = 0
  while (i<276)
  {
    if (sixtyCycles[i][0].includes(solarYear.toString()))
    {
      elementAndAnimalSignSixtyYearsCycle = [sixtyCycles[i][1], sixtyCycles[i][2]]
    }
    i += 1
  }
  return (elementAndAnimalSignSixtyYearsCycle)
}
