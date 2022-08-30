import React from 'react'
import {Menu,Layout} from "antd"
import "./Sidebar.css"
import { Link } from 'react-router-dom'

function Sidebar() {
  return (

    <Layout.Sider className='side-bar'>

        <Menu theme='dark' mode='inline' defaultSelectedKeys={["/"]} >

            <Menu.Item key="/">
                {/* <Link to="/"> Anasayfa  </Link> */}
                Anasayfa
            </Menu.Item>
            <Menu.Item key="/post/create-post">
                {/* <Link to="/post/create-post"> Create Post </Link> */}
                Create Post

            </Menu.Item>
        </Menu>


    </Layout.Sider>


  )
}
  
export default Sidebar