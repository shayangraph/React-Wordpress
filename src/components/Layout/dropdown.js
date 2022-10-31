import React from "react";
import { Dropdown, Avatar, Menu } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { check_login } from "../../redux/actions";

const randomColor = Math.floor(Math.random() * 1000000);

const AvatarDropdown = () => {
  const role = useSelector((state) => state.role);
  const dispatch = useDispatch()
  const menu = (
    <Menu className="text-right">
      <Menu.Item key="0">
        <a href="http://www.alipay.com/">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="http://www.taobao.com/">2nd menu item</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item className="text-right" key="3" style={{color:"red"}}
      onClick={()=>{
         dispatch(check_login(false))
         window.localStorage.clear()
      }}
      >خروج</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <Avatar
        className="login-avatar"
        size={46}
        style={{
          backgroundColor: `#${randomColor}`,
          color: randomColor === "#000000" ? "black" : "white",
        }}
      >
        {role}
      </Avatar>
    </Dropdown>
  );
};

export default AvatarDropdown;
