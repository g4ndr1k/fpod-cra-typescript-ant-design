import { Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { useHistory } from "react-router";

const SideNav = () => {
  const history = useHistory();

  const handleFPoDClick = () => {
    history.push("/fpod");
  };

  const handleOilMixClick = () => {
    history.push("/oilmix");
  };

  const handleAboutMeClick = () => {
    history.push("/aboutme");
  };

  return (
    <div>
      <div
        style={{
          height: "32px",
          background: "rgba(255, 255, 255, 0.2)",
          margin: "16px",
        }}
      ></div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" onClick={handleFPoDClick}>
          <UserOutlined />
          <span>FPoD</span>
        </Menu.Item>
        <Menu.Item key="2" onClick={handleOilMixClick}>
          <VideoCameraOutlined />
          <span>Oil Mix</span>
        </Menu.Item>
        <Menu.Item key="3" onClick={handleAboutMeClick}>
          <UploadOutlined />
          <span>About Me</span>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default SideNav;
