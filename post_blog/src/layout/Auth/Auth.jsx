import { Layout } from 'antd'
import React from 'react'
import "./Auth.css"

const Auth = (props) => {
  return (

    <Layout className='auth-layout'>
        {props.children}
    </Layout>

    )
}

export default Auth