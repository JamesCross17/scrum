import React from 'react'
import './App.css'
import { Layout } from 'antd'
import AddMeetingModal from './containers/modals/AddMeetingModal'

const { Header, Footer, Sider, Content } = Layout

function App () {
    return (
      <Layout>
          <Header></Header>
          <Content>
              <AddMeetingModal/>
          </Content>
      </Layout>
    )
}

export default App
