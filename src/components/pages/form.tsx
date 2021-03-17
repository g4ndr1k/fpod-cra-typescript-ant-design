import { useState } from "@hookstate/core";
import { Row, Col, Typography, Input, Form, Button, Radio } from "antd";

import { DatePicker, TimePicker } from "../date-fns";

import {
  formatISO,
  getDate,
  getHours,
  getMinutes,
  getMonth,
  getYear,
  parseISO,
} from "date-fns";

import { useHistory } from "react-router";

import {
  userDataInterface,
  userNameState,
  userGenderState,
  userDateOfBirthState,
  userMonthOfBirthState,
  userYearOfBirthState,
  userHourOfBirthState,
  userMinuteOfBirthState,
} from '../configs/InterfaceAndState'

const { Title } = Typography;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const UserForm = () => {
  const history = useHistory();

  const userName = useState(userNameState);
  const userGender = useState(userGenderState);
  const userDateOfBirth = useState(userDateOfBirthState);
  const userMonthOfBirth = useState(userMonthOfBirthState);
  const userYearOfBirth = useState(userYearOfBirthState);
  const userHourOfBirth = useState(userHourOfBirthState);
  const userMinuteOfBirth = useState(userMinuteOfBirthState);

  const handleSubmit = (values: userDataInterface) => {
    userName.set(values.username);
    userGender.set(values.gender);
    userDateOfBirth.set(getDate(parseISO(formatISO(values.dateOfBirth))));
    userMonthOfBirth.set(getMonth(parseISO(formatISO(values.dateOfBirth))) + 1);
    userYearOfBirth.set(getYear(parseISO(formatISO(values.dateOfBirth))));
    userHourOfBirth.set(getHours(parseISO(formatISO(values.timeOfBirth))));
    userMinuteOfBirth.set(getMinutes(parseISO(formatISO(values.timeOfBirth))));
    console.log(
      "form user date of birth",
      parseISO(formatISO(values.dateOfBirth))
    );
    console.log(
      "form user month",
      getMonth(parseISO(formatISO(values.dateOfBirth)))+1
    );
    history.push("/fpod");
  };

  return (
    <div>
      <Row gutter={[40, 0]}>
        <Col span={23}>
          <Title style={{ textAlign: "center" }} level={2}>
            User Profile
          </Title>
        </Col>
      </Row>
      <Row gutter={[40, 0]}>
        <Col span={18}>
          <Form {...layout} onFinish={handleSubmit}>
            <Form.Item
              label="Full Name"
              name="username"
              initialValue="Helen"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="gender"
              label="Gender"
              initialValue="female"
              rules={[
                {
                  required: true,
                  message: "Please select your gender",
                },
              ]}
            >
              <Radio.Group>
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              label="Date of Birth"
              name="dateOfBirth"
              initialValue={new Date("1976-05-31T10:10")}
              rules={[
                {
                  required: true,
                  message: "Please input your date of birth!",
                },
              ]}
            >
              <DatePicker />
            </Form.Item>

            <Form.Item
              label="Time of Birth"
              name="timeOfBirth"
              initialValue={new Date("1976-05-31T10:10")}
              rules={[
                {
                  required: true,
                  message: "Please input your time of birth!",
                },
              ]}
            >
              <TimePicker />
            </Form.Item>
            <div style={{ textAlign: "right" }}>
              <Button type="primary" htmlType="submit">
                Calculate
              </Button>{" "}
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default UserForm;