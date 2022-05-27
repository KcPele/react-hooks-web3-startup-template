import React from 'react'
import { Menu } from 'antd'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item>
        <Link to='test'>Test App</Link>
      </Menu.Item>
    </Menu>
  )
}

export default Navbar