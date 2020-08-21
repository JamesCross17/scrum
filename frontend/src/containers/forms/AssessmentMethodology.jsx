import React from 'react'
import { Checkbox, Col, Form, Row } from 'antd'

const AssessmentMethodology = ({ meeting }) => {
    const Agenda = () => {
        switch (meeting) {
            case 'daily':
                return <Row>
                    <Col span={12}>
                        <h3>Методика оценки</h3>
                        <p>
                            A: почти все встречи без продакта
                        </p>
                        <p>
                            B: отдельные встречи без продакта
                        </p>
                        <p>C: проводится с продактом</p>
                        <p>D: выходит за пределы 15 мин</p>
                        <p>E: не проводится или проводится формально</p>
                    </Col>
                    <Col span={12}>
                        <h3>Адженда </h3>
                        <ul>
                            <li>Команда Разработки инспектирует прогресс к Цели
                                Спринта (формат согласовать заранее: смотрим
                                доску скрам/канбан, берндаун/кумулятив флоу)
                            </li>
                            <li>Команда Разработки отвечает на 3 стандартных
                                вопроса
                            </li>
                            <li>Команда Разработки составляет список вопросов,
                                требующих дальнейших обсуждений после скрама и
                                намечает митинги на день
                            </li>
                        </ul>
                    </Col>
                </Row>
            case 'demo':
                return <Row>
                    <Col span={8}>
                        <h3>Методика оценки</h3>
                        <p>Сумма выполняемых (+) из адженды:</p>
                        <p>A: 7+ налажена коммуникация пользователями</p>
                        <p>B: 6+ налажена коммуникация пользователями</p>
                        <p>C: 5+ налажена коммуникация пользователями</p>
                        <p>D: 4 +</p>
                        <p>E: менее 3+</p>
                    </Col>
                    <Col span={16}>
                        <Form.Item name="demo_checklist" labelCol={{ span: 4 }} label="Адженда" wrapperCol={{span:20}}>
                            <Checkbox.Group>
                                <Checkbox  style={{marginLeft:8}} value="a">+Заинтересованным лицам
                                    заранее высылается
                                    адженда митинга</Checkbox>
                                <Checkbox value="b">+Владелец Продукта
                                    обозначает статус по целям
                                    спринта</Checkbox>
                                <Checkbox value="c">+Команды демонстрируют
                                    инкремент</Checkbox>
                                <Checkbox value="d">+Заинтересованные лица
                                    дают обратную связь</Checkbox>
                                <Checkbox value="e">+Инспекция прогресса по
                                    роадмэпу</Checkbox>
                                <Checkbox value="f">+Обсуждают дальнейшие
                                    шаги</Checkbox>
                                <Checkbox value="g">+Вносятся корректировки
                                    в бэклог</Checkbox>
                                <Checkbox value="h">+Обозначается цель
                                    ближайшего спринта</Checkbox>
                            </Checkbox.Group>
                        </Form.Item>
                    </Col>
                </Row>
            case 'grooming':
                return <div></div>
            case 'planning':
                return <div></div>
            case 'retro':
                return <div></div>
        }
    }
    return (
      <div>
          {Agenda()}
      </div>
    )
}

export default AssessmentMethodology