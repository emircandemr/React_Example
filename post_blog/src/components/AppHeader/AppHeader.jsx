import React from 'react'
import { Avatar, Dropdown, Layout, Menu } from 'antd'
import "./AppHeader.css"
import { useDispatch,useSelector } from "react-redux";
import { setUser } from '../../store/authSlice/AuthSlice';
import { useNavigate } from 'react-router-dom';

const AppHeader = () => {

    const {user} = useSelector( (state) => state.auth )
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const menu = () => {
        return (
            <Menu theme='dark'>
                <Menu.Item key="exit" onClick={() => {
                    dispatch(setUser(null))
                    navigate("/auth/sign-in")
                }} >
                    Logout
                </Menu.Item>
            </Menu>
        )
    }


    return (

    <Layout.Header className='app-header'>

        <Dropdown overlay={menu} placement="bottomLeft" >

            <Avatar style={{background:"#87d068"}} >
                {user && user.user.full_name[0]}
            </Avatar>

        </Dropdown>


    </Layout.Header>

  )
}

export default AppHeader