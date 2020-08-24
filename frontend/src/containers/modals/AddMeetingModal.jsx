import React, { useState } from 'react'
import { Button, Modal } from 'antd'
import AddMeeting from '../forms/AddMeeting'
import meetings from "../../mock/meetings.json"
const AddMeetingModal = () => {
    const [visible, setVisible] = useState(false)
    const showModal = () => setVisible(true)
    const handleCancel = () => {
        setVisible(false)
    }
    return (
      <>
          <Button type="primary" onClick={showModal}>
              Добавить митинг
          </Button>
          <Modal
            title="Добавить митинг"
            visible={visible}
            width={1200}
            footer={null}
            onCancel={handleCancel}
          >
              <AddMeeting onClose={handleCancel} meetings={meetings}/>
          </Modal>
      </>
    )
}

export default AddMeetingModal