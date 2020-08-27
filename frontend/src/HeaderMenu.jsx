import React from 'react'
import { Menu } from 'antd'
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";
const HeaderMenu = () => {
    // const [current, setCurrent] = useState('scrum')
    // const handleClick = e => {
    //     console.log('click ', e)
    //     setCurrent(e.key)
    // }
    return (
      <Menu
        // onClick={handleClick}
        //  selectedKeys={[current]}
        defaultSelectedKeys={['scrum']}
        theme={'dark'}
        mode="horizontal

            ">
          <Menu.Item key="scrum">Скрам-рамка</Menu.Item>
          <Menu.Item key="termometrs">Командные
              термометры</Menu.Item>
      </Menu>
    )
}

export default HeaderMenu