import React from 'react'
import { Menu } from 'antd'
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";
const HeaderMenu = (props) => {
    return (
      <Menu theme={'dark'} mode="horizontal">
          <Menu.Item>Скрам-рамка</Menu.Item>
          <Menu.Item>Командные термометры</Menu.Item>
      </Menu>
    )
}

export default HeaderMenu