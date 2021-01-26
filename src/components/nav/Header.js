import React, { useState } from "react";
import { Menu } from "antd";
import { AppstoreOutlined,  SettingOutlined, UserAddOutlined, UserOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

const Header = () => {

  const [current, setCurrent] = useState('home');
  const { SubMenu, Item } = Menu;

  const handleClick = (e) => {
    setCurrent(e.key)
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      
      <Item key="home" icon={<AppstoreOutlined />}>
            <Link to="/">  Home </Link>
      </Item>
      
      <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Username">
        <Item key="setting:3">Option 3</Item>
        <Item key="setting:4">Option 4</Item>
      </SubMenu>

      <Item key="register" icon={<UserAddOutlined />} className="float-right">
            <Link to="/register">  Register </Link>
      </Item>
      
      <Item key="login" icon={<UserOutlined />} className="float-right">
            <Link to="/login">  Login </Link>
      </Item>

    </Menu>
  );
};

export default Header;
