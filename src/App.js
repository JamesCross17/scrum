import React from 'react'
import './App.css'
import { Layout } from 'antd'
import AddMeetingModal from './containers/modals/AddMeetingModal'
import HeaderMenu from './HeaderMenu'
import Meetings from './containers/Meetings'

const { Header, Content } = Layout

function App () {
    return (
      <Layout>
          <Header>
              <HeaderMenu/>
          </Header>
          <Content>
              <AddMeetingModal/>
              <Meetings/>
          </Content>
      </Layout>
    )
}

export default App
