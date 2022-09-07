import React from 'react'
import {Menu,Layout} from "antd"
import "./Sidebar.css"
import { Link, useLocation } from 'react-router-dom'

function Sidebar() {
  
  const location =useLocation()
  return (
    <Layout.Sider className='side-bar'>

        <Menu theme='dark' mode='inline' defaultSelectedKeys={[location.pathname]} >

            <Menu.Item key="/">
                <Link to="/"> Anasayfa  </Link>
            </Menu.Item>
            <Menu.Item key="/post/create-post">
                <Link to="/post/create-post"> Create Post </Link>

            </Menu.Item>
        </Menu>


    </Layout.Sider>


  )
}
  
export default Sidebar