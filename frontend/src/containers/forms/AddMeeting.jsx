import React, { useState } from 'react'
import {
    Button,
    Col,
    DatePicker,
    Form,
    InputNumber,
    Row,
    Select,
    Slider,
} from 'antd'
import TextArea from 'antd/es/input/TextArea'
import AssessmentMethodology from './AssessmentMethodology'
import 'moment/locale/ru'
import locale from 'antd/es/date-picker/locale/ru_RU'

const { Option } = Select
const layout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 16,
    },
}
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
}

const AddMeeting = () => {
    const [form] = Form.useForm()

    const onFinish = values => {
        console.log(values)
    }

    const onReset = () => {
        form.resetFields()
    }
    const [estimationValue, setEstimationValue] = useState(0)
    const estimationChange = value => {
        setEstimationValue(value)
    }
    return (

      <Form {...layout} form={form} name="control-hooks"
            onFinish={onFinish}>
          <Row gutter={[16, 16]}>
              <Col span={9}>
                  <Form.Item
                    name="meeting"
                    label="Митинг"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                  >
                      <Select
                        placeholder="Выберите митинг"
                        // onChange={onMeetingChange}
                        allowClear
                      >
                          <Option value="daily">Ежедневный скрам</Option>
                          <Option value="demo">Обзор спринта</Option>
                          <Option value="grooming">Груминг</Option>
                          <Option value="planning">Планирование</Option>
                          <Option value="retro">Ретроспектива</Option>
                      </Select>
                  </Form.Item>
                  <Form.Item
                    name="team"
                    label="Команда"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                  >
                      <Select
                        placeholder="Выберите команду"
                        allowClear
                      >
                          <Option value="MTP">MTP</Option>
                          <Option value="CPA">CPA</Option>
                          <Option value="CPT">CPT</Option>
                          <Option value="JP">JP</Option>
                          <Option value="JPNew">JPNew</Option>
                          <Option value="JAN Change">JAN
                              Change</Option>
                          <Option value="JAN Run">JAN
                              Run</Option>
                          <Option value="MRO">MRO</Option>
                          <Option value="RMO All">RMO
                              All</Option>
                          <Option value="RMO dev">RMO
                              dev</Option>
                          <Option value="RMO An">RMO An</Option>
                          <Option value="BAP">BAP</Option>
                          <Option value="SSD">ССД</Option>
                          <Option value="JPM">JPM</Option>
                          <Option value="CDA">CDA</Option>
                      </Select>
                  </Form.Item>
                  <Form.Item
                    name="sprint"
                    label="Спринт"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                  >
                      <InputNumber/>
                  </Form.Item>
                  <Form.Item
                    name="date"
                    label="Дата"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                  >
                      <DatePicker locale={locale} format={'DD.MM.YYYY'}/>
                  </Form.Item>
                  <Form.Item
                    name="comment"
                    label="Комментарий"
                  >
                      <TextArea/>
                  </Form.Item>
              </Col>
              <Col span={15}>
                  <Form.Item
                    noStyle
                    shouldUpdate={(
                      prevValues, currentValues) => prevValues.meeting !==
                      currentValues.meeting}
                  >
                      {({ getFieldValue }) => <AssessmentMethodology
                        meeting={getFieldValue('meeting')}
                      />
                      }
                  </Form.Item>
              </Col>
          </Row>
          <Row gutter={[16, 16]}>
              <Col span={9}>
                  <Form.Item
                    name="estimation"
                    label="Оценка"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                  >
                      {/*  <Radio.Group>
                       <Radio value="e">E</Radio>
                       <Radio value="d">D</Radio>
                       <Radio value="c">C</Radio>
                       <Radio value="b">B</Radio>
                       <Radio value="a">A</Radio>
                       </Radio.Group>*/}
                      <Slider
                        step={25}
                        value={estimationValue}
                        marks={{
                            0: 'E',
                            25: 'D',
                            50: 'C',
                            75: 'B',
                            100: 'A',
                        }}
                      />
                  </Form.Item>
              </Col>
              <Col span={12}>
                  <Form.Item {...tailLayout}>
                      <Row>
                          <Col span={12}>
                              <Button type="primary" htmlType="submit">
                                  Отправить
                              </Button>
                          </Col>
                          <Col span={12}>
                              <Button htmlType="button" onClick={onReset}>
                                  Сбросить
                              </Button>
                          </Col>
                      </Row>
                  </Form.Item>
              </Col>
          </Row>
      </Form>
    )
}

export default AddMeeting