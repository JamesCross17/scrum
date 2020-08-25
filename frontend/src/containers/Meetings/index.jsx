import React from 'react'
import { Button, Layout, Table } from 'antd'
import { data } from '../../mock/meetings.json'
import { EditOutlined } from '@ant-design/icons'

const Meetings = (props) => {
    const columns = [
        {
            title: 'Команда',
            dataIndex: 'team',
            key: 'team',
        },
        {
            title: 'Митинг',
            dataIndex: 'meeting',
            key: 'meeting',
        },
        {
            title: 'Спринт',
            dataIndex: 'sprint',
            key: 'sprint',
        },
        {
            title: 'Дата',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Комментарий',
            dataIndex: 'comment',
            key: 'comment',
        },
        {
            title: '',
            dataIndex: 'action',
            key: 'action',
            render: () => (<Button type="primary" icon={<EditOutlined/>}>
                Редактировать
            </Button>),
        },
    ]
    return (
      <Layout>
          {/*  <List
           itemLayout="horizontal"
           bordered
           dataSource={data}
           renderItem={({ team, meeting, sprint, date, comment }) => (
           <List.Item>
           <Row gutter={[16, 16]}>
           <Col>{team}</Col>
           <Col>{meeting}</Col>
           <Col>№{sprint}</Col>
           <Col>{date}</Col>
           <Col>{comment}</Col>
           <Col><Button><EditOutlined/></Button></Col>
           </Row>
           </List.Item>
           )}
           />*/}
          <Table
            dataSource={data}
            columns={columns}
            onRow={(record, rowIndex) => {
                return {
                    onClick: event => {console.log('onRow', record)}, //
                }
            }
            }
          />
      </Layout>
    )
}

export default Meetings