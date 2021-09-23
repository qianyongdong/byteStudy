/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import logo from "./logo.svg";
import "./App.css";
import { Input, Menu, Button } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { UnorderedListOutlined } from "@ant-design/icons";
import { BigLogo } from "./BigLogo";

function App() {
  const SubMenu = Menu.SubMenu;
  return (
    <div className="App">
      <header>
        <div className="ant-col">
          <h1>
            <a id="logo" href="#">
              <img src={logo} alt="" />
              Ant Design
            </a>
          </h1>
        </div>
        <div className="ant-col menu-row">
          <Input placeholder="搜索" />
          <Menu mode="horizontal" style={{ border: "none" }}>
            <Menu.Item>设计</Menu.Item>
            <Menu.Item>文档</Menu.Item>
            <Menu.Item>组件</Menu.Item>
            <Menu.Item>资源</Menu.Item>
            <Menu.Item>国内资源</Menu.Item>
            <SubMenu
              icon={<UnorderedListOutlined />}
              popupOffset="[1000px,200px]"
            >
              <Menu.Item>子菜单项</Menu.Item>
              <Menu.Item>子菜单项</Menu.Item>
              <Menu.Item>子菜单项</Menu.Item>
              <Menu.Item>子菜单项</Menu.Item>
            </SubMenu>
          </Menu>
        </div>
      </header>
      <div className="content">
        <BigLogo />
        <div className="but">
          <Button type="primary" shape="round">
            开始使用
          </Button>
          <Button shape="round">设计语言</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
