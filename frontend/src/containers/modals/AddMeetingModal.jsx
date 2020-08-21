import React, { useState } from 'react'
import { Button, Modal } from 'antd'
import AddMeeting from '../forms/AddMeeting'

const AddMeetingModal = () => {
    const [visible, setVisible] = useState(true)
    const showModal = () => setVisible(true)
    const handleCancel = e => {
        console.log('---', e)
        setVisible(false)
    }
    return (
      <>
          <Button type="primary" onClick={showModal}>
              Open Modal
          </Button>
          <Modal
            title="Добавить митинг"
            visible={visible}
            width={1200}
            // onOk={this.handleOk}
            // onCancel={this.handleCancel}
            footer={null}
          >
              <AddMeeting/>
          </Modal>
      </>
    )
}

export default AddMeetingModal