import React from "react";
import AntDesign from "./AntDesign.svg";
import {
  UnorderedListOutlined,
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const icons = [
  UnorderedListOutlined,
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
];

export class BigLogo extends React.Component {
  constructor() {
    super();
    this.hover = () => {
      this.xx = setInterval(() => {
        if (!this.state) this.setState({ current: 1 });
        else
          this.setState({ current: (this.state.current + 1) % icons.length });
      }, 100);
    };
    this.leavel = () => {
      clearInterval(this.xx);
    };
  }
  render() {
    let Icon = this.state ? icons[this.state.current] : AppstoreOutlined;
    return (
      <div
        className="home-card-logo"
        onMouseEnter={this.hover}
        onMouseLeave={this.leavel}
      >
        <img src={AntDesign} alt="" />
        <Icon className="home-card-logo-icon"></Icon>
      </div>
    );
  }
}
