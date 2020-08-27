import React from 'react'
import { Button, Layout, Table, Tag } from 'antd'
import { data, meetings, teams } from '../../mock/meetings.json'
import { EditOutlined } from '@ant-design/icons'

const Meetings = () => {
    const filterTeams = teams.map(({ key, text }) => ({ text, value: key }))
    const filterMeetings = meetings.map(
      ({ key, text }) => ({ text, value: key }))
    const columns = [
        {
            title: 'Команда',
            dataIndex: 'team',
            key: 'team',
            filters: filterTeams,
            onFilter: (value, record) => record.team.indexOf(value) === 0,
        },
        {
            title: 'Митинг',
            dataIndex: 'meeting',
            key: 'meeting',
            filters: filterMeetings,
            onFilter: (value, record) => {
                const isFinded = meetings.find(
                  ({ text }) => text === record.meeting)
                return isFinded.key === value
            },
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
            sorter: true,
        },
        {
            title: 'Комментарий',
            dataIndex: 'comment',
            key: 'comment',
        },
        {
            title: 'Оценка',
            dataIndex: 'estimation',
            key: 'estimation',
            render: estimation => {
                let color = 'black'
                let estimationText = ''
                if (estimation === '0') {
                    color = 'red'
                    estimationText = 'E'
                } else if (estimation === '25') {
                    color = 'volcano'
                    estimationText = 'D'
                } else if (estimation === '50') {
                    color = 'orange'
                    estimationText = 'C'
                } else if (estimation === '75') {
                    color = 'lime'
                    estimationText = 'B'
                } else if (estimation === '100') {
                    color = 'green'
                    estimationText = 'A'
                }
                return (
                  <Tag color={color} key={estimation}>
                      {estimationText.toUpperCase()}
                  </Tag>
                )
            },
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
          <Table
            dataSource={data}
            columns={columns}
            onRow={(record, rowIndex) => {
                return {
                    onClick: () => {console.log('onRow', record)}, //
                }
            }
            }
          />
      </Layout>
    )
}

export default Meetings