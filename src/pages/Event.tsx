import { FC, useEffect, useState } from "react";
import EventCalendar from "../components/EventCalendar";
import { Button, Modal, Row } from "antd";
import EventForm from "../components/EventForm";
import { useAppSelector } from "../hooks/redux";
import { useActions } from "../hooks/useActions";
import { IEvent } from "../models/IEvent";

const Event: FC = () => {

    const [modalVisible, setModalVisible] = useState<boolean>(false)
    const { fetchGuests, createEvent, fetchEvents } = useActions()
    const { guests, events } = useAppSelector(state => state.event)
    const {user} = useAppSelector(state => state.auth)

    useEffect(() => {
        fetchGuests()
        fetchEvents(user.username)
    }, [])

    const addNewEvent = (event: IEvent) => {
        setModalVisible(false)
        createEvent(event)
    }

    return (
        <div>
            <EventCalendar events={events} />
            <Row justify='center'>
                <Button onClick={() => setModalVisible(true)}>
                    Добавить событие
                </Button>
            </Row>
            <Modal
                title='Добавить событие'
                open={modalVisible}
                footer={null}
                onCancel={() => setModalVisible(false)}
            >
                <EventForm guests={guests} submit={addNewEvent} />
            </Modal>
        </div>
    )
}

export default Event