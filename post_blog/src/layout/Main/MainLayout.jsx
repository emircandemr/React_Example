import React from 'react'
import {Layout} from 'antd'
import Sidebar from '../../components/Sidebar/Sidebar'
import AppHeader from '../../components/AppHeader/AppHeader'
import AppContent from '../../components/AppContent/AppContent'

function MainLayout(props) {
  return (
    <Layout>
        <Sidebar/>
        <Layout style={{marginLeft:"200px"}}>
            <AppHeader/>
            <AppContent>
              
            </AppContent>
            {props.children}
        </Layout>
    </Layout>
  )
}

export default MainLayout