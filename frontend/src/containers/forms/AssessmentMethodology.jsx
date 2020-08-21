import React from 'react'
import { Checkbox, Col, Form, Row } from 'antd'

const AssessmentMethodology = ({ meeting }) => {
    const Agenda = () => {
        switch (meeting) {
            case 'daily':
                return <Row>
                    <Col span={8}>
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
                    <Col span={16}>
                        <Form.Item name="checklist" labelCol={{ span: 4 }}
                                   label="Адженда" wrapperCol={{ span: 20 }}>
                            <Checkbox.Group>
                                <Checkbox style={{ marginLeft: 8 }} value="a">Команда
                                    Разработки инспектирует прогресс
                                    к Цели
                                    Спринта (формат согласован заранее:
                                    смотрим
                                    доску скрам/канбан, берндаун/кумулятив
                                    флоу)
                                </Checkbox>
                                <Checkbox value="b">Команда Разработки отвечает
                                    на 3
                                    стандартных
                                    вопроса
                                </Checkbox>
                                <Checkbox value="c">Команда Разработки
                                    составляет список
                                    вопросов,
                                    требующих дальнейших обсуждений после
                                    скрама и
                                    намечает митинги на день
                                </Checkbox>
                            </Checkbox.Group>
                        </Form.Item>
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
                        <Form.Item name="checklist" labelCol={{ span: 4 }}
                                   label="Адженда" wrapperCol={{ span: 20 }}>
                            <Checkbox.Group>
                                <Checkbox style={{ marginLeft: 8 }} value="a">+Заинтересованным
                                    лицам
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
                return <Row>
                    <Col span={12}>
                        <h3>Методика оценки</h3>
                        <p>А: подготовлены Ready элементы бэклога на 2+ спринта,
                            продакт готов ко встрече (должны успевать
                            проработать задач на 2 спринта), сформиован роадмэп
                            до конца (обновляется раз в месяц)
                        </p>
                        <p>B: подготовлены Ready элементы бэклога на 1.5
                            спринта, сформирован роадмэп до конца года
                            (обновляется раз в месяц)
                        </p>
                        <p>С: подготовлены Ready элементы бэклога на 1 спринт,
                            ближайшие эпики
                        </p>
                        <p>D: меньше С
                        </p>
                        <p>E: не проводится
                        </p>
                    </Col>
                    <Col span={12}>
                        <h3>Неформальное обсуждение элементов Бэклога Продукта,
                            которое включает в себя:
                        </h3>
                        <Form.Item name="checklist" labelCol={{ span: 4 }}
                                   label="Адженда" wrapperCol={{ span: 20 }}>
                            <Checkbox.Group>
                                <Checkbox style={{ marginLeft: 8 }} value="a">+
                                    Прояснение деталей
                                </Checkbox>
                                <Checkbox value="b">+ Разбивку на более мелкие
                                    элементы
                                </Checkbox>
                                <Checkbox value="c">+ Оценку и переоценку
                                    элементов
                                </Checkbox>
                                <Checkbox value="d">+ Объединение элементов
                                </Checkbox>
                                <Checkbox value="e">+ Изменение порядка
                                    элементов
                                </Checkbox>
                                <Checkbox value="f">+ Роадмэп раз q недель
                                </Checkbox>
                            </Checkbox.Group>
                        </Form.Item>
                    </Col>
                </Row>
            case 'planning':
                return <Row>
                    <Col span={6}>
                        <h3>Методика оценки</h3>
                        <p>А: меньше 10%</p>
                        <p>B: 20 -10%</p>
                        <p>С: 20-30%</p>
                        <p>D: 30-50%</p>
                        <p>E: Более 50%</p>
                    </Col>
                    <Col span={18}>
                        <Form.Item name="checklist" labelCol={{ span: 4 }}
                                   label="Адженда" wrapperCol={{ span: 20 }}>
                            <Checkbox.Group>
                                <Checkbox style={{ marginLeft: 8 }} value="a">+
                                    Владелец Продукта объясняет приоритеты и
                                    отвечает на вопросы
                                </Checkbox>
                                <Checkbox value="b">Команда Разработки
                                    прогнозирует работу на Спринт
                                </Checkbox>
                                <Checkbox value="c">Скрам-команда формулирует
                                    Цель Спринта
                                </Checkbox>
                                <Checkbox value="d">Команда Разработки создает
                                    Бэклог Спринта
                                </Checkbox>
                            </Checkbox.Group>
                        </Form.Item>
                    </Col>
                </Row>
            case 'retro':
                return <Row>
                    <Col span={6}>
                        <h3>Методика оценки</h3>
                        <p>А: каждый член команды участвует в решении главной
                            проблемы в спринте +B
                        </p>
                        <p>B: каждый член команды может назвать топ 3 проблемы
                            команды разработки (основываясь на ретро-бэклоге) +
                            C
                        </p>
                        <p>С: у команды есть актуальный приоритезированный
                            бэклог того, что нужно сделать по-другому, составлен
                            детальный план минимум 1 улучшения + D </p>
                        <p>D: фиксируются факты по ценностям, план улучшений
                            составляется не каждый спринт</p>
                        <p>E: Меньше D</p>
                    </Col>
                    <Col span={18}>
                        <Form.Item name="checklist" labelCol={{ span: 4 }}
                                   label="Адженда" wrapperCol={{ span: 20 }}>
                            <Checkbox.Group>
                                <Checkbox style={{ marginLeft: 8 }}
                                          value="a"> Скрам-команда инспектирует
                                    Спринт в разрезе людей, инструментов и
                                    процессов
                                </Checkbox>
                                <Checkbox value="b">Скрам-команда находит
                                    области для улучшения
                                </Checkbox>
                                <Checkbox value="c">Скрам-команда создает
                                    детальный план улучшений (каждый член
                                    команды берет на себя задачу/ или пытается
                                    чем-то помочь)
                                </Checkbox>
                            </Checkbox.Group>
                        </Form.Item>
                    </Col>
                </Row>
        }
    }
    return (
      <div>
          {Agenda()}
      </div>
    )
}

export default AssessmentMethodology