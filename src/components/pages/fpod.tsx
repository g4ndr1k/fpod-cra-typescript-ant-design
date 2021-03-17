import { useState } from "@hookstate/core";
import {
  Table,
  Row,
  Col,
  Button,
  Typography,
  Descriptions,
  Tabs,
  Card,
} from "antd";
import { useHistory } from "react-router";
import { format } from "date-fns";
import {
  fpodBaseCalculation,
  fpodMainYear,
  fpodBranchYear,
  fpodStemYear,
  fpodHiddenStem,
  fpodLuckPillarBase,
  fpodBranchStemofDayHour,
  fpodTenYearPillar,
  fpodTenYearPillarStem,
  fpodTenYearPillarBranchAndHiddenStem,
  fpodFlowerOfRomance,
  fpodTravellingStar,
  fpodStemTableSama,
  fpodStemTableCombi,
  fpodStemTableClash,
  fpodStemTablePolarity,
  fpodBranchTableCombi2,
  fpodBranchTableCombi3,
  fpodBranchTableChiong,
  fpodBranchTablePenalty,
  fpodBranchTableEarthPenalty,
  fpodBranchTableSelfClash,
  fpodBranchTableIngratitudeClash,
  fpodBranchTableConflict,
  fpodAgeRange,
  fpodSolarYearRange,
  fpodElementAndAnimalSignSixtyYearsCycle,
} from '../process/Calculations';
import {
  createMainTableData,
  createTYPData,
  createLuckAndFinanceHundredYearsData,
} from '../process/DataCreation';
import {
  financeAndLuckCardInterface,
  userNameState,
  userGenderState,
  userDateOfBirthState,
  userMonthOfBirthState,
  userYearOfBirthState,
  userHourOfBirthState,
  userMinuteOfBirthState,
} from '../configs/InterfaceAndState';
const { Title, Text } = Typography;
const { TabPane } = Tabs;

const FPoD = () => {
  const history = useHistory();
  const name = useState(userNameState).get();
  const gender = useState(userGenderState).get();
  const dateOfBirth = useState(userDateOfBirthState).get();
  const monthOfBirth = useState(userMonthOfBirthState).get();
  const yearOfBirth = useState(userYearOfBirthState).get();
  const hourOfBirth = useState(userHourOfBirthState).get();
  const minuteOfBirth = useState(userMinuteOfBirthState).get();
  const timeZone = 7;
  function callback(key: string) {
    console.log(key);
  }
  console.log("result name ", name);
  console.log("result gender ", gender);
  console.log("result date", dateOfBirth);
  console.log("result month", monthOfBirth);
  console.log("result year ", yearOfBirth);
  console.log("result hour", hourOfBirth);
  console.log("result minute ", minuteOfBirth);
  let financeAndLuckCardValues: any = {};
  let birthData: string = "";
  const data = [{}];
  const dataSourceMainTable = [{}];
  const dataSourceTYPTable = [{}];
  const dataSourceLuckAndFinanceHundredYearsTable = [{}];
  data.shift();
  dataSourceMainTable.shift();
  dataSourceTYPTable.shift();
  dataSourceLuckAndFinanceHundredYearsTable.shift();

  birthData = format(
    new Date(
      yearOfBirth,
      monthOfBirth - 1,
      dateOfBirth,
      hourOfBirth,
      minuteOfBirth
    ),
    "PPPPppp"
  ).replace(":00", "");

  const baseCalculation = fpodBaseCalculation(
    dateOfBirth,
    monthOfBirth,
    yearOfBirth,
    hourOfBirth,
    minuteOfBirth,
    timeZone
  );
  const mainYear = fpodMainYear(
    baseCalculation.lunarBase,
    monthOfBirth,
    yearOfBirth
  );
  const branchYear = fpodBranchYear(mainYear);
  const stemYear = fpodStemYear(mainYear, gender);
  const hiddenStemYear = fpodHiddenStem(branchYear.yobBranch);
  const luckPillarBase = fpodLuckPillarBase(
    baseCalculation.lunarBase,
    stemYear.stemYear,
    stemYear.genderBender
  );
  const hiddenStemMonth = fpodHiddenStem(luckPillarBase.mobBranch);
  const branchStemofDayHour = fpodBranchStemofDayHour(
    baseCalculation.fpodBCVarFive,
    hourOfBirth,
    minuteOfBirth
  );
  const hiddenStemDay = fpodHiddenStem(branchStemofDayHour.dobBranch);
  const hiddenStemHour = fpodHiddenStem(branchStemofDayHour.hobBranch);
  const tenYearPillar = fpodTenYearPillar(luckPillarBase.luckPillarBaseYear);
  const tenYearPillarStem = fpodTenYearPillarStem(
    luckPillarBase.stemMonth,
    stemYear.genderBender
  );
  const tenYearPillarBranchAndHiddenStem = fpodTenYearPillarBranchAndHiddenStem(
    luckPillarBase.luckPillarBase,
    stemYear.genderBender
  );
  const tenYearPillarBranch =
    tenYearPillarBranchAndHiddenStem.tenYearPillarBranch;
  const tenYearPillarHiddenStem =
    tenYearPillarBranchAndHiddenStem.tenYearPillarHiddenStem;
  const flowerOfRomance = fpodFlowerOfRomance(
    branchStemofDayHour.dobBranch,
    branchYear.yobBranch
  );
  const travellingStar = fpodTravellingStar(
    branchStemofDayHour.dobBranch,
    branchYear.yobBranch
  );
  const stemTableSama = fpodStemTableSama(stemYear.yobStem);
  const stemTableCombi = fpodStemTableCombi(stemYear.yobStem);
  const stemTableClash = fpodStemTableClash(stemYear.yobStem);
  const stemTablePolarity = fpodStemTablePolarity(stemYear.yobStem);
  const branchTableCombi2 = fpodBranchTableCombi2(branchYear.yobBranch);
  const branchTableCombi3 = fpodBranchTableCombi3(branchYear.yobBranch);
  const branchTableChiong = fpodBranchTableChiong(branchYear.yobBranch);
  const branchTablePenalty = fpodBranchTablePenalty(branchYear.yobBranch);
  const branchTableEarthPenalty = fpodBranchTableEarthPenalty(
    branchYear.yobBranch
  );
  const branchTableSelfClash = fpodBranchTableSelfClash(branchYear.yobBranch);
  const branchTableIngratitudeClash = fpodBranchTableIngratitudeClash(
    branchYear.yobBranch
  );
  const branchTableConflict = fpodBranchTableConflict(branchYear.yobBranch);
  const hiddenStemTableSama = fpodStemTableSama(
    fpodHiddenStem(branchYear.yobBranch)
  );
  const hiddenStemTableCombi = fpodStemTableCombi(
    fpodHiddenStem(branchYear.yobBranch)
  );
  const hiddenStemTableClash = fpodStemTableClash(
    fpodHiddenStem(branchYear.yobBranch)
  );
  const hiddenStemTablePolarity = fpodStemTablePolarity(
    fpodHiddenStem(branchYear.yobBranch)
  );
  let ageRange: string[][] = [];
  let ageRangeArray: string[] = [];
  let solarYearRange: string[][] = [];
  let solarYearRangeArray: string[] = [];
  let j: number = 0;

  let i = 0;
  while (i < 10) {
    ageRange.push(fpodAgeRange(tenYearPillar[i]));
    solarYearRange.push(fpodSolarYearRange(tenYearPillar[i], yearOfBirth));
    i += 1;
  }

  i = 0;
  while (i < 10) {
    j = 0;
    while (j < 10) {
      ageRangeArray.push(ageRange[i][j]);
      j += 1;
    }
    i += 1;
  }

  i = 0;
  while (i < 10) {
    j = 0;
    while (j < 10) {
      solarYearRangeArray.push(solarYearRange[i][j]);
      j += 1;
    }
    i += 1;
  }

  let elementAndAnimalSignSixtyYearsCycle: string[][] = [];
  j = 0;
  i = 0;
  while (j < 10) {
    while (i < 10) {
      elementAndAnimalSignSixtyYearsCycle.push(
        fpodElementAndAnimalSignSixtyYearsCycle(Number(solarYearRange[j][i]))
      );
      i += 1;
    }
    i = 0;
    j += 1;
  }
  dataSourceMainTable.push(
    createMainTableData(
      "1",
      "Stem",
      branchStemofDayHour.hobStem,
      branchStemofDayHour.dobStem,
      luckPillarBase.mobStem,
      stemYear.yobStem
    )
  );
  dataSourceMainTable.push(
    createMainTableData(
      "2",
      "Branch",
      branchStemofDayHour.hobBranch,
      branchStemofDayHour.dobBranch,
      luckPillarBase.mobBranch,
      branchYear.yobBranch
    )
  );
  dataSourceMainTable.push(
    createMainTableData(
      "3",
      "HiddenStem",
      hiddenStemHour,
      hiddenStemDay,
      hiddenStemMonth,
      hiddenStemYear
    )
  );
  i = 0;
  while (i < 10) {
    dataSourceTYPTable.push(
      createTYPData(
        i.toString(),
        tenYearPillar[i],
        tenYearPillarStem[i],
        tenYearPillarBranch[i],
        tenYearPillarHiddenStem[i]
      )
    );
    i += 1;
  }
  let flowerOfRomanceAndTravellingStar: string[] = [];
  i = 0;
  while (i < 100) {
    flowerOfRomanceAndTravellingStar.push("-");
    if (
      elementAndAnimalSignSixtyYearsCycle[i][1].includes(
        flowerOfRomance.flowerOfRomanceDoB
      ) ||
      elementAndAnimalSignSixtyYearsCycle[i][1].includes(
        flowerOfRomance.flowerOfRomanceYoB
      )
    ) {
      flowerOfRomanceAndTravellingStar.pop();
      flowerOfRomanceAndTravellingStar.push("FoR");
    }
    if (
      elementAndAnimalSignSixtyYearsCycle[i][1].includes(
        travellingStar.travellingStarDoB
      ) ||
      elementAndAnimalSignSixtyYearsCycle[i][1].includes(
        travellingStar.travellingStarYoB
      )
    ) {
      flowerOfRomanceAndTravellingStar.pop();
      flowerOfRomanceAndTravellingStar.push("TS");
    }
    i += 1;
  }

  let luckAndCalamityTableArray: string[][] = [];
  i = 0;
  while (i < 100) {
    let luckAndCalamityTable: string[] = [];

    if (stemTableSama.includes(elementAndAnimalSignSixtyYearsCycle[i][0])) {
      luckAndCalamityTable.push("Sama");
    }
    if (stemTableCombi.includes(elementAndAnimalSignSixtyYearsCycle[i][0])) {
      luckAndCalamityTable.push("Combi");
    }
    if (stemTableClash.includes(elementAndAnimalSignSixtyYearsCycle[i][0])) {
      luckAndCalamityTable.push("Clash");
    }
    if (stemTablePolarity.includes(elementAndAnimalSignSixtyYearsCycle[i][0])) {
      luckAndCalamityTable.push("Polarity");
    }
    if (branchTableCombi2.includes(elementAndAnimalSignSixtyYearsCycle[i][1])) {
      luckAndCalamityTable.push("Combi2");
    }
    if (branchTableCombi3.includes(elementAndAnimalSignSixtyYearsCycle[i][1])) {
      luckAndCalamityTable.push("Combi3");
    }
    if (branchTableChiong.includes(elementAndAnimalSignSixtyYearsCycle[i][1])) {
      luckAndCalamityTable.push("Chiong");
    }
    if (
      branchTablePenalty.includes(elementAndAnimalSignSixtyYearsCycle[i][1])
    ) {
      luckAndCalamityTable.push("Penalty");
    }
    if (
      branchTableEarthPenalty.includes(
        elementAndAnimalSignSixtyYearsCycle[i][1]
      )
    ) {
      luckAndCalamityTable.push("Earth Penalty");
    }
    if (
      branchTableSelfClash.includes(elementAndAnimalSignSixtyYearsCycle[i][1])
    ) {
      luckAndCalamityTable.push("Self Clash");
    }
    if (
      branchTableIngratitudeClash.includes(
        elementAndAnimalSignSixtyYearsCycle[i][1]
      )
    ) {
      luckAndCalamityTable.push("Ingratitude Clash");
    }
    if (
      branchTableConflict.includes(elementAndAnimalSignSixtyYearsCycle[i][1])
    ) {
      luckAndCalamityTable.push("Conflict");
    }
    if (
      hiddenStemTableSama.includes(elementAndAnimalSignSixtyYearsCycle[i][0])
    ) {
      luckAndCalamityTable.push("Sama");
    }
    if (
      hiddenStemTableCombi.includes(elementAndAnimalSignSixtyYearsCycle[i][0])
    ) {
      luckAndCalamityTable.push("Combi");
    }
    if (
      hiddenStemTableClash.includes(elementAndAnimalSignSixtyYearsCycle[i][0])
    ) {
      luckAndCalamityTable.push("Clash");
    }
    if (
      hiddenStemTablePolarity.includes(
        elementAndAnimalSignSixtyYearsCycle[i][0]
      )
    ) {
      luckAndCalamityTable.push("Polarity");
    }

    if (luckAndCalamityTable.length === 0) {
      luckAndCalamityTable.push("-");
      luckAndCalamityTable.push("-");
    }
    if (luckAndCalamityTable.length === 1) {
      luckAndCalamityTable.push("-");
    }
    if (luckAndCalamityTable.length === 3) {
      luckAndCalamityTable.push("nooooo");
    }

    luckAndCalamityTableArray.push(luckAndCalamityTable);
    i += 1;
  }
  i = 0;
  while (i < 100) {
    dataSourceLuckAndFinanceHundredYearsTable.push(
      createLuckAndFinanceHundredYearsData(
        i.toString(),
        ageRangeArray[i],
        solarYearRangeArray[i],
        elementAndAnimalSignSixtyYearsCycle[i][0],
        elementAndAnimalSignSixtyYearsCycle[i][1],
        flowerOfRomanceAndTravellingStar[i],
        luckAndCalamityTableArray[i][0],
        luckAndCalamityTableArray[i][1]
      )
    );
    i += 1;
  }
  financeAndLuckCardValues = {
    attCardStem: stemYear.yobStem,
    attCardBranch: branchYear.yobBranch,
    attCardHiddenStem: hiddenStemYear,
    attCardFlowerOfRomance:
      flowerOfRomance.flowerOfRomanceDoB +
      " & " +
      flowerOfRomance.flowerOfRomanceYoB,
    attCardTravellingStar:
      travellingStar.travellingStarDoB +
      " & " +
      travellingStar.travellingStarYoB,
    stemFLCardSama: stemTableSama,
    stemFLCardCombi: stemTableCombi,
    stemFLCardClash: stemTableClash,
    stemFLCardPolarity: stemTablePolarity,
    branchFLCardCombi2: branchTableCombi2,
    branchFLCardCombi3: branchTableCombi3,
    branchFLCardChiong: branchTableChiong,
    branchFLCardPenalty: branchTablePenalty,
    branchFLCardEarthPenalty: branchTableEarthPenalty,
    branchFLCardSelfClash: branchTableSelfClash,
    branchFLCardIngClash: branchTableIngratitudeClash,
    branchFLCardConflict: branchTableConflict,
    hiddenStemFLCardSama: hiddenStemTableSama,
    hiddenStemFLCardCombi: hiddenStemTableCombi,
    hiddenStemFLCardClash: hiddenStemTableClash,
    hiddenStemFLCardPolarity: hiddenStemTablePolarity,
  };
  const columnsMainTable = [
    {
      title: "FPoD",
      dataIndex: "fpod",
      key: "fpod",
      ellipsis: true,
    },
    {
      title: "Hour",
      dataIndex: "hour",
      key: "hour",
      ellipsis: true,
    },
    {
      title: "Day",
      dataIndex: "day",
      key: "day",
      ellipsis: true,
    },
    {
      title: "Month",
      dataIndex: "month",
      key: "month",
      ellipsis: true,
    },
    {
      title: "Year",
      dataIndex: "year",
      key: "year",
      ellipsis: true,
    },
  ];
  const columnsTYPTable = [
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      ellipsis: true,
    },
    {
      title: "Stem",
      dataIndex: "stem",
      key: "stem",
      ellipsis: true,
    },
    {
      title: "Branch",
      dataIndex: "branch",
      key: "branch",
      ellipsis: true,
    },
    {
      title: "Hidden Stem",
      dataIndex: "hiddenStem",
      key: "hiddenStem",
      ellipsis: true,
    },
  ];
  const columnsLuckAndFinanceHundredYearsTable = [
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Year",
      dataIndex: "year",
      key: "year",
    },
    {
      title: "Element",
      dataIndex: "element",
      key: "element",
    },
    {
      title: "Sign",
      dataIndex: "sign",
      key: "sign",
    },
    {
      title: "FoR/TS",
      dataIndex: "forts",
      key: "forts",
    },
    {
      title: "Luck Calamity One",
      dataIndex: "luckCalamityOne",
      key: "luckCalamityOne",
    },
    {
      title: "Luck Calamity Two",
      dataIndex: "luckCalamityTwo",
      key: "luckCalamityTwo",
    },
  ];
  const {
    attFLCardStem,
    attFLCardBranch,
    attFLCardHiddenStem,
    attFLCardFlowerOfRomance,
    attFLCardTravellingStar,
    stemFLCardSama,
    stemFLCardCombi,
    stemFLCardClash,
    stemFLCardPolarity,
    branchFLCardCombi2,
    branchFLCardCombi3,
    branchFLCardChiong,
    branchFLCardPenalty,
    branchFLCardEarthPenalty,
    branchFLCardSelfClash,
    branchFLCardIngClash,
    branchFLCardConflict,
    hiddenStemFLCardSama,
    hiddenStemFLCardCombi,
    hiddenStemFLCardClash,
    hiddenStemFLCardPolarity,
  }: financeAndLuckCardInterface = financeAndLuckCardValues;
  const handleClick = () => {
    history.push("/form");
  };

  return (
    <div>
      <Row gutter={[40, 0]}>
        <Col span={18}>
          <Title level={2}>Four Pillars of Destiny</Title>
        </Col>
        <Col span={6}>
          <Button onClick={handleClick} block>
            Update Data
          </Button>
        </Col>
      </Row>
      <Row>
        <Descriptions title="">
          <Descriptions.Item label="">
            {name}, born on {birthData}
          </Descriptions.Item>
        </Descriptions>
      </Row>

      <Row gutter={[12, 0]}>
        <Col span={12}>
          <Table
            columns={columnsMainTable}
            dataSource={dataSourceMainTable}
            pagination={false}
          />
        </Col>
      </Row>
      <Row gutter={[12, 0]}>
        <Col span={12}>
          <Table
            columns={columnsTYPTable}
            dataSource={dataSourceTYPTable}
            pagination={false}
          />
        </Col>
      </Row>
      <Row gutter={[12, 0]}>
        <Tabs onChange={callback} type="card">
          <TabPane tab="Finance & Luck" key="1">
            <div className="site-card-wrapper">
              <Row gutter={6}>
                <Col span={12}>
                  <Card
                    title={<Text type="secondary">Attributes</Text>}
                    bordered={false}
                  >
                    <p>Stem: {attFLCardStem}</p>
                    <p>Branch: {attFLCardBranch}</p>
                    <p>Hidden Stem: {attFLCardHiddenStem}</p>
                    <p>Flower of Romance: {attFLCardFlowerOfRomance}</p>
                    <p>Travelling Star: {attFLCardTravellingStar}</p>
                  </Card>
                </Col>
                <Col span={12}>
                  <Card
                    title={<Text type="secondary">Stem</Text>}
                    bordered={false}
                  >
                    <p>Sama: {stemFLCardSama}</p>
                    <p>Combi: {stemFLCardCombi}</p>
                    <p>Clash: {stemFLCardClash}</p>
                    <p>Polarity: {stemFLCardPolarity}</p>
                  </Card>
                </Col>
                <Col span={12}>
                  <Card
                    title={<Text type="secondary">Branch</Text>}
                    bordered={false}
                  >
                    <p>Combi2: {branchFLCardCombi2}</p>
                    <p>Combi3: {branchFLCardCombi3}</p>
                    <p>Chiong: {branchFLCardChiong}</p>
                    <p>Penalty: {branchFLCardPenalty}</p>
                    <p>Earth Penalty: {branchFLCardEarthPenalty}</p>
                    <p>Self Clash: {branchFLCardSelfClash}</p>
                    <p>Ingratitude Clash: {branchFLCardIngClash}</p>
                    <p>Conflict: {branchFLCardConflict}</p>
                  </Card>
                </Col>
                <Col span={12}>
                  <Card
                    title={<Text type="secondary">Hidden Stem</Text>}
                    bordered={false}
                  >
                    <p>Sama: {hiddenStemFLCardSama}</p>
                    <p>Combi: {hiddenStemFLCardCombi}</p>
                    <p>Clash: {hiddenStemFLCardClash}</p>
                    <p>Polarity: {hiddenStemFLCardPolarity}</p>
                  </Card>
                </Col>
              </Row>
            </div>
          </TabPane>
          <TabPane tab="TBD" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="In progress" key="3">
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab="I need help" key="4">
            Content of Tab Pane 4
          </TabPane>
        </Tabs>
      </Row>
      <Row gutter={[12, 0]}>
        <Col span={12}>
          <Table
            columns={columnsLuckAndFinanceHundredYearsTable}
            dataSource={dataSourceLuckAndFinanceHundredYearsTable}
          />
        </Col>
      </Row>
    </div>
  );
};

export default FPoD;